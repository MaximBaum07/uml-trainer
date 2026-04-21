# CLAUDE.md

## Commands

```bash
npm start        # ng serve on http://localhost:4200 (dev config, sourcemaps, no optimization)
npm run build    # Production build to dist/ with --base-href /ap2-trainer/
npm run watch    # ng build --watch in development config
```

`npm test` is defined in `package.json` but there is **no `test` architect target in `angular.json`** and every schematic sets `skipTests: true` — the project has no test harness. Don't assume tests exist; don't run `ng test` to validate changes. Type-check via `ng build` or the TS server instead.

Production build budgets are tight: initial bundle warns at 500 kB / errors at 1 MB; any single component style warns at 4 kB / errors at 8 kB. Keep per-component `styles` minimal and prefer Tailwind utilities in templates.

## Language

**UI, data, and code identifiers are German.** Model fields (`frage`, `antwort`, `erklaerung`, `uebung`, `themaId`, `fortschritt`, `lueckentext`, `zuordnung`, `wahrFalsch`), route segments (`lernen`, `ueben`, `bereich`, `wiederholen`, `gemerkt`, `pruefung`), and component/variable names all use German. Do not rename to English — it will cascade across ~40 topic IDs, stored localStorage keys, route params, and user-facing strings.

## Architecture

### Topic hierarchy (three-level, cross-file)

Understanding this takes reading four files together:

1. **`data/themenbereiche.ts`** — top-level areas (UML, SQL, Netzwerk, IT-Sicherheit, Algorithmen, PM, QS, WiSo), each tagged `kategorie: 'fachlich' | 'wiso'`. The dashboard splits sections by this flag.
2. **`data/themen.ts`** — individual topics, each with a `bereichId` backref and three capability flags: `hatTheorie`, `hatQuiz`, `hatKarteikarten`. These flags drive which buttons render on the `bereich` page.
3. **Per-subject content files** — `{uml,sql,netzwerk,sicherheit,algorithmen,projektmanagement,qualitaet,wiso}-{content,exercises}.ts` plus `wiso-karteikarten.ts`.
4. **Aggregators** — `alle-theorie.ts`, `alle-uebungen.ts`, `karteikarten-data.ts` spread all per-subject arrays into one flat list. **Pages and services always import the aggregator, never a subject file directly.** When adding a new subject, update the aggregator.

IDs are the glue: `ThemaId` (e.g. `'uml-klassendiagramm'`, `'wiso-arbeitsrecht'`) is the primary key used across `THEMEN`, content, exercises, karteikarten, progress storage, and route params.

### Quiz component contract

Five quiz types: `multiple-choice`, `wahr-falsch`, `lueckentext`, `zuordnung`, `freitext`. Each has a discriminated-union interface in `models/app.models.ts` (`typ` field) and a matching `components/quiz-<typ>.component.ts`. All five follow the same signature:

```ts
uebung            = input.required<TUebung>()
examModus         = input(false)
beantwortetEvent  = output<boolean>()       // was the answer correct
examAntwortEvent  = output<ExamAntwortDetail>()  // raw user input for exam review
```

`examModus=true` hides inline feedback/explanations so exams stay blind until submission. The `ExamAntwortDetail` is a tagged union that captures the raw input (chosen option text, pairing choices, typed string) so `pruefung-ergebnis` can render "your answer vs. correct answer" after submission.

### Three quiz orchestrators, different lifecycles

- **`pages/ueben/ueben.component.ts`** — single topic, immediate feedback per question. Persists a `laufenderVersuch` (in-progress attempt) to localStorage on every answer and on "Nächste Frage", so leaving mid-quiz and returning resumes where you left off. On finish, records a `QuizErgebnis` and navigates to `ergebnis` via `router.navigate(..., { state })`.
- **`pages/pruefung/pruefung.component.ts`** — cross-topic timed exam. Builds fragen via `buildPruefungsFragen` (shuffles all exercises across matching bereiche, slices to `config.fragenAnzahl`). Runs a `setInterval` countdown; on expiry or manual submit, navigates to `pruefung-ergebnis` with the full `PruefungsErgebnisState` via `history.state`. **Freitext answers are self-scored on the results page** and update `gesamtProzent` live.
- **`pages/wiederholen/wiederholen.component.ts`** — replays either `falscheIndices` (wrong-recently) or `gemerkteIndices` (bookmarked) for one bereich. Correct answers automatically clear from `falscheIndices` via `markiereFrage`.

Router state (`history.state`) is the channel for results — there is no state management library. If you navigate away and back to `/ergebnis/:typ` directly (F5 etc.), the component redirects home because the state is lost. That's intentional.

### `ProgressService` is the single source of truth

`services/progress.service.ts` owns all persisted user state as a signal-backed `Map<ThemaId, Fortschritt>`, serialized to a single localStorage key `ap2-trainer-fortschritt`. It exposes:

- per-topic: `theorieGelesen`, `quizErgebnisSpeichern`, `markiereFrage` (auto-removes on correct retry), `toggleMerken`, `versuchSpeichern/getVersuch/versuchLoeschen`, `karteStatusSetzen`.
- aggregates: `gesamtFortschritt` (computed signal over all THEMEN), `getBereichFortschrittProzent`, `getFalscheAnzahlBereich`, `getGemerkteAnzahlBereich`.

The progress formula is deliberately simple: per topic, `theorieGelesen` = 50%, `besteNote * 50` adds the rest. Don't overthink scoring.

### Routing

`app.config.ts` uses `withHashLocation()` — URLs are `/#/bereich/sql`, `/#/ueben/uml-klassendiagramm`, etc. This makes the production build deployable as a static site at any subpath without server-side routing config. The `--base-href /ap2-trainer/` in the build script matches a GitHub-Pages-style path.

### Theming

Dark mode is toggled by adding `.app-dark` to `<html>`. The `App` component (`app.ts`) owns the state (`localStorage` key `ap2-trainer-dark`, default = system preference). PrimeNG's Aura preset is configured with `darkModeSelector: '.app-dark'` in `app.config.ts` so its components flip automatically. Tailwind overrides for raw `bg-*`/`text-*`/`border-*` utilities live in `src/styles.css` under `html.app-dark ...` — **add new dark overrides there, not in component styles**, because the budget warns hard on per-component CSS.

### HTML rendering in quiz content

Questions, explanations, and theory sections can contain HTML (including inline SVG diagrams). They are rendered via `DomSanitizer.bypassSecurityTrustHtml` + `[innerHTML]`. Content comes from in-repo TS files only, so this is safe by construction — but if you ever wire in user-provided content, do not extend this pattern.

## Conventions worth preserving

- **Strict TS**: `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noFallthroughCasesInSwitch`, plus Angular `strictTemplates` and `strictInputAccessModifiers`. Index-signature access requires `obj['key']` not `obj.key`.
- **Standalone components only** — no NgModules. New components should be `standalone: true` with their own `imports: [...]` (see existing pages for PrimeNG import patterns like `Button`, `ProgressBar`, `Accordion*`).
- **Signals + `inject()`** — the codebase uses `input()`, `output()`, `signal()`, `computed()`, and `inject(Service)` throughout. Match this style; don't fall back to `@Input()`/`@Output()` decorators or constructor DI.
- **Single quotes**, 100-col print width (`.prettierrc`), 2-space indent (`.editorconfig`).
- **Routes lazy-load components** via `loadComponent: () => import(...).then(m => m.Foo)`. Follow this when adding pages.
