<div align="center">

# UML Trainer

### AP2 Prüfungsvorbereitung für Fachinformatiker Anwendungsentwicklung

Lerne und übe UML-Diagramme interaktiv - mit ausführlichen Erklärungen,
SVG-Diagrammen und über 50 Übungsaufgaben.

[![Angular](https://img.shields.io/badge/Angular-21-dd0031?style=flat-square&logo=angular)](https://angular.dev/)
[![PrimeNG](https://img.shields.io/badge/PrimeNG-21-4fc08d?style=flat-square)](https://primeng.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

</div>

---

## Features

**Theorie** - Ausführliche Erklärungen zu jedem Diagrammtyp mit interaktiven SVG-Diagrammen und Prüfungstipps

**Quiz-Engine** - 4 verschiedene Aufgabentypen mit sofortigem Feedback und Erklärungen

**Fortschritt** - Dein Lernfortschritt wird automatisch im Browser gespeichert

**Kein Backend** - Läuft komplett im Browser, keine Registrierung nötig

## UML-Diagrammtypen

| Diagramm | Beschreibung | Übungen |
|----------|-------------|---------|
| Klassendiagramm | Klassen, Attribute, Methoden, Beziehungen (Assoziation, Aggregation, Komposition, Vererbung) | 10 |
| Anwendungsfalldiagramm | Akteure, Use Cases, Systemgrenzen, include/extend | 10 |
| Sequenzdiagramm | Objekte, Lebenslinien, Nachrichten, Fragmente (alt, loop, opt) | 10 |
| Aktivitätsdiagramm | Start/Ende, Aktionen, Entscheidungen, Parallelisierung, Swimlanes | 10 |
| Zustandsdiagramm | Zustände, Transitionen, Entry/Exit/Do, zusammengesetzte Zustände | 10 |

## Aufgabentypen

- **Multiple Choice** - Wähle die richtige Antwort aus 4 Optionen
- **Wahr/Falsch** - Bewerte Aussagen zu UML-Konzepten
- **Lückentext** - Setze den fehlenden Begriff ein
- **Zuordnung** - Ordne Begriffe den passenden Definitionen zu

Jede Aufgabe enthält eine ausführliche Erklärung, die nach dem Beantworten angezeigt wird.

## Schnellstart

```bash
# Repository klonen
git clone <repo-url>
cd uml-trainer

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
ng serve
```

Dann http://localhost:4200 im Browser öffnen.

## Tech Stack

| Technologie | Version | Verwendung |
|------------|---------|------------|
| [Angular](https://angular.dev/) | 21 | Frontend-Framework |
| [PrimeNG](https://primeng.org/) | 21 | UI-Komponenten (Accordion, ProgressBar, Button) |
| [PrimeIcons](https://primeng.org/icons) | - | Icon-Bibliothek |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first CSS |

## Projektstruktur

```
src/app/
├── components/          # Quiz-Komponenten (Multiple Choice, Wahr/Falsch, etc.)
├── data/                # Theorie-Inhalte, Übungen, Diagramm-Infos
├── models/              # TypeScript Interfaces
├── pages/
│   ├── dashboard/       # Startseite mit Übersicht
│   ├── lernen/          # Theorie-Seiten pro Diagrammtyp
│   └── ueben/           # Quiz-Engine & Ergebnis-Seite
└── services/            # Fortschrittsspeicherung (localStorage)
```

## Scripts

```bash
ng serve          # Entwicklungsserver (http://localhost:4200)
ng build          # Produktions-Build (dist/)
ng test           # Unit Tests
```

---

<div align="center">

Erstellt zur Vorbereitung auf die **IHK Abschlussprüfung Teil 2** (AP2)<br>
Fachinformatiker Anwendungsentwicklung

</div>
