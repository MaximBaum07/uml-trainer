import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import {
  PruefungsErgebnisState, PruefungsFrage, ExamAntwortDetail,
  MultipleChoiceUebung, WahrFalschUebung, LueckentextUebung,
  ZuordnungUebung, FreitextUebung, Uebung
} from '../../models/app.models';

@Component({
  selector: 'app-pruefung-ergebnis',
  standalone: true,
  imports: [RouterLink, Button],
  template: `
    @if (state) {
      <!-- Score-Header -->
      <div class="max-w-3xl mx-auto">
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6 text-center">
          <div class="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4"
               [class]="scoreBgClass">
            <i [class]="scoreIcon + ' text-4xl'"></i>
          </div>
          <h1 class="text-2xl font-bold text-slate-800 mb-1">Prüfung abgegeben!</h1>
          <p class="text-slate-500 mb-5">{{ state.configName }}</p>

          <div class="grid grid-cols-3 gap-4 mb-6">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="text-3xl font-bold" [class]="scoreTextClass">{{ autoRichtig }}/{{ autoGesamt }}</p>
              <p class="text-xs text-slate-500 mt-1">Automatisch bewertet</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="text-3xl font-bold text-slate-700">{{ prozent }}%</p>
              <p class="text-xs text-slate-500 mt-1">Ergebnis (ohne Freitext)</p>
            </div>
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <p class="text-3xl font-bold text-slate-700">{{ zeitFormatiert }}</p>
              <p class="text-xs text-slate-500 mt-1">Benötigte Zeit</p>
            </div>
          </div>

          @if (freitextAnzahl > 0) {
            <div class="p-3 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-800 mb-4">
              <i class="pi pi-info-circle mr-1"></i>
              {{ freitextAnzahl }} Freitext-Aufgabe(n) unten selbst bewerten – danach aktualisiert sich die Punktzahl.
            </div>
          }

          <div class="p-4 rounded-lg mb-4" [class]="scoreBannerClass">
            <p class="font-semibold" [class]="scoreTextClass">{{ scoreMessage }}</p>
          </div>

          @if (freitextAnzahl > 0) {
            <div class="p-3 rounded-lg bg-blue-50 border border-blue-200 text-sm text-blue-800 mb-2">
              <strong>Gesamtpunktzahl (inkl. Selbstbewertung):</strong>
              {{ gesamtRichtig }}/{{ state.fragen.length }} ({{ gesamtProzent }}%)
            </div>
          }
        </div>

        <!-- Detailauswertung -->
        <h2 class="text-xl font-bold text-slate-800 mb-4">
          <i class="pi pi-list mr-2 text-slate-500"></i>Detailauswertung mit Lösungen
        </h2>

        <div class="space-y-4 mb-8">
          @for (frage of state.fragen; track frage.themaId + $index; let i = $index) {
            <div class="bg-white rounded-xl shadow-sm border overflow-hidden"
                 [class]="getBorderClass(i)">
              <!-- Frage-Header -->
              <div class="flex items-center gap-3 px-5 py-3 border-b"
                   [class]="getHeaderBgClass(i)">
                <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                     [class]="getBadgeBgClass(i)">
                  @if (getErgebnis(i) === true) {
                    <i class="pi pi-check text-white text-xs"></i>
                  } @else if (getErgebnis(i) === false && !isFreitext(i)) {
                    <i class="pi pi-times text-white text-xs"></i>
                  } @else {
                    <i class="pi pi-pencil text-white text-xs"></i>
                  }
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-xs font-bold text-slate-600">Frage {{ i + 1 }}</span>
                    <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-violet-100 text-violet-700">
                      {{ frage.bereichName }} · {{ frage.themaName }}
                    </span>
                    <span class="inline-flex px-2 py-0.5 rounded-full text-xs font-semibold"
                          [class]="getTypBadgeClass(frage.uebung.typ)">
                      {{ getTypLabel(frage.uebung.typ) }}
                    </span>
                  </div>
                </div>
                @if (!isFreitext(i)) {
                  <span class="text-xs font-semibold flex-shrink-0" [class]="getErgebnis(i) ? 'text-green-700' : 'text-red-700'">
                    {{ getErgebnis(i) ? 'Richtig' : 'Falsch' }}
                  </span>
                } @else {
                  <span class="text-xs font-semibold text-amber-700 flex-shrink-0">Selbst bewerten</span>
                }
              </div>

              <!-- Frage-Inhalt -->
              <div class="p-5 space-y-4">
                <!-- Fragetext -->
                <div>
                  <p class="text-xs uppercase tracking-widest text-slate-400 mb-1 font-semibold">Aufgabe</p>
                  <p class="text-slate-800 font-medium">{{ getFrageText(frage) }}</p>
                </div>

                <!-- Deine Antwort -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div class="p-3 rounded-lg border"
                       [class]="getAntwortBgClass(i)">
                    <p class="text-xs uppercase tracking-widest mb-1 font-semibold"
                       [class]="getAntwortLabelClass(i)">Deine Antwort</p>
                    <p class="text-sm text-slate-800 whitespace-pre-wrap">{{ getUserAntwortText(i, frage) }}</p>
                  </div>

                  @if (!isFreitext(i)) {
                    <div class="p-3 rounded-lg bg-green-50 border border-green-200">
                      <p class="text-xs uppercase tracking-widest text-green-700 mb-1 font-semibold">Korrekte Antwort</p>
                      <p class="text-sm text-slate-800 whitespace-pre-wrap">{{ getKorrekteAntwortText(frage) }}</p>
                    </div>
                  }
                </div>

                <!-- Musterlösung für Freitext -->
                @if (isFreitext(i)) {
                  <div class="p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <p class="text-xs uppercase tracking-widest text-blue-700 mb-2 font-semibold">Musterlösung</p>
                    <p class="text-sm text-slate-800 whitespace-pre-wrap">{{ asFreitext(frage.uebung).musterloesung }}</p>
                  </div>

                  <!-- Selbstbewertungs-Buttons -->
                  @if (freitextBewertung[i] === undefined) {
                    <div>
                      <p class="text-sm font-medium text-slate-700 mb-2">Wie hast du abgeschnitten?</p>
                      <div class="flex gap-2">
                        <button (click)="freitextBewerten(i, false)"
                                class="flex-1 py-2 px-3 rounded-lg border-2 border-red-200 text-red-700 font-semibold text-sm hover:bg-red-50 transition-colors">
                          <i class="pi pi-times mr-1"></i>Falsch
                        </button>
                        <button (click)="freitextBewerten(i, false)"
                                class="flex-1 py-2 px-3 rounded-lg border-2 border-amber-200 text-amber-700 font-semibold text-sm hover:bg-amber-50 transition-colors">
                          <i class="pi pi-minus mr-1"></i>Teilweise
                        </button>
                        <button (click)="freitextBewerten(i, true)"
                                class="flex-1 py-2 px-3 rounded-lg border-2 border-green-200 text-green-700 font-semibold text-sm hover:bg-green-50 transition-colors">
                          <i class="pi pi-check mr-1"></i>Richtig
                        </button>
                      </div>
                    </div>
                  } @else {
                    <div class="p-3 rounded-lg"
                         [class]="freitextBewertung[i] ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
                      <p class="text-sm font-semibold" [class]="freitextBewertung[i] ? 'text-green-700' : 'text-red-700'">
                        <i [class]="freitextBewertung[i] ? 'pi pi-check mr-1' : 'pi pi-times mr-1'"></i>
                        Selbst als {{ freitextBewertung[i] ? 'richtig' : 'falsch' }} bewertet.
                        <button (click)="freitextBewertung[i] = undefined; updateGesamtScore()"
                                class="ml-2 underline text-xs font-normal opacity-70 hover:opacity-100">Ändern</button>
                      </p>
                    </div>
                  }
                }

                <!-- Erklärung (Belegsatz) -->
                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <p class="text-xs uppercase tracking-widest text-slate-400 mb-1 font-semibold">Erklärung</p>
                  <p class="text-slate-700 text-sm">{{ getErklaerung(frage) }}</p>
                </div>
              </div>
            </div>
          }
        </div>

        <!-- Aktionen -->
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center">
          <p class="text-slate-600 mb-4">Weiter lernen und die nächste Simulation versuchen?</p>
          <div class="flex gap-3 justify-center flex-wrap">
            <a routerLink="/" class="no-underline">
              <p-button label="Zurück zum Dashboard" icon="pi pi-home" severity="secondary" [outlined]="true" />
            </a>
            <a routerLink="/pruefung/schnelltest" class="no-underline">
              <p-button label="Schnelltest wiederholen" icon="pi pi-refresh" severity="info" />
            </a>
          </div>
        </div>
      </div>
    }
  `
})
export class PruefungErgebnisComponent implements OnInit {
  private router = inject(Router);

  state?: PruefungsErgebnisState;
  autoRichtig = 0;
  autoGesamt = 0;
  freitextAnzahl = 0;
  prozent = 0;
  gesamtRichtig = 0;
  gesamtProzent = 0;
  freitextBewertung: (boolean | undefined)[] = [];

  ngOnInit(): void {
    this.state = history.state as PruefungsErgebnisState | undefined;
    if (!this.state?.fragen?.length) {
      this.router.navigate(['/']);
      return;
    }
    this.freitextBewertung = new Array(this.state.fragen.length).fill(undefined);
    this.berechneScore();
  }

  private berechneScore(): void {
    if (!this.state) return;
    this.freitextAnzahl = this.state.fragen.filter((_, i) => this.isFreitext(i)).length;
    this.autoGesamt = this.state.fragen.length - this.freitextAnzahl;
    this.autoRichtig = this.state.richtig.filter((r, i) => r && !this.isFreitext(i)).length;
    this.prozent = this.autoGesamt > 0 ? Math.round((this.autoRichtig / this.autoGesamt) * 100) : 0;
    this.updateGesamtScore();
  }

  updateGesamtScore(): void {
    if (!this.state) return;
    const freitextRichtig = this.freitextBewertung.filter(b => b === true).length;
    this.gesamtRichtig = this.autoRichtig + freitextRichtig;
    this.gesamtProzent = Math.round((this.gesamtRichtig / this.state.fragen.length) * 100);
  }

  freitextBewerten(index: number, richtig: boolean): void {
    this.freitextBewertung[index] = richtig;
    this.updateGesamtScore();
  }

  isFreitext(i: number): boolean {
    return this.state?.fragen[i].uebung.typ === 'freitext';
  }

  getErgebnis(i: number): boolean | undefined {
    if (!this.state) return undefined;
    if (this.isFreitext(i)) return this.freitextBewertung[i];
    return this.state.richtig[i];
  }

  get scoreBgClass(): string {
    if (this.prozent >= 70) return 'bg-green-100';
    if (this.prozent >= 50) return 'bg-amber-100';
    return 'bg-red-100';
  }

  get scoreIcon(): string {
    if (this.prozent >= 70) return 'pi pi-trophy text-green-600';
    if (this.prozent >= 50) return 'pi pi-thumbs-up text-amber-600';
    return 'pi pi-book text-red-600';
  }

  get scoreTextClass(): string {
    if (this.prozent >= 70) return 'text-green-700';
    if (this.prozent >= 50) return 'text-amber-700';
    return 'text-red-700';
  }

  get scoreBannerClass(): string {
    if (this.prozent >= 70) return 'bg-green-50 border border-green-200';
    if (this.prozent >= 50) return 'bg-amber-50 border border-amber-200';
    return 'bg-red-50 border border-red-200';
  }

  get scoreMessage(): string {
    if (this.prozent >= 90) return 'Hervorragend! Du bist bestens auf die Prüfung vorbereitet!';
    if (this.prozent >= 70) return 'Gut gemacht! Noch ein bisschen üben und du bist bereit.';
    if (this.prozent >= 50) return 'Nicht schlecht – geh die Erklärungen durch und versuch es nochmal.';
    return 'Lies dir die Theorieinhalte nochmal durch und starte eine neue Simulation.';
  }

  get zeitFormatiert(): string {
    if (!this.state) return '–';
    const min = Math.floor(this.state.zeitGebrauchtSek / 60);
    const sek = this.state.zeitGebrauchtSek % 60;
    return `${String(min).padStart(2, '0')}:${String(sek).padStart(2, '0')}`;
  }

  getBorderClass(i: number): string {
    const ergebnis = this.getErgebnis(i);
    if (ergebnis === true) return 'border-green-200';
    if (ergebnis === false) return 'border-red-200';
    return 'border-amber-200';
  }

  getHeaderBgClass(i: number): string {
    const ergebnis = this.getErgebnis(i);
    if (ergebnis === true) return 'bg-green-50 border-green-200';
    if (ergebnis === false) return 'bg-red-50 border-red-200';
    return 'bg-amber-50 border-amber-200';
  }

  getBadgeBgClass(i: number): string {
    const ergebnis = this.getErgebnis(i);
    if (ergebnis === true) return 'bg-green-500';
    if (ergebnis === false && !this.isFreitext(i)) return 'bg-red-500';
    return 'bg-amber-400';
  }

  getAntwortBgClass(i: number): string {
    const ergebnis = this.getErgebnis(i);
    if (ergebnis === true) return 'bg-green-50 border-green-200';
    if (ergebnis === false && !this.isFreitext(i)) return 'bg-red-50 border-red-200';
    return 'bg-slate-50 border-slate-200';
  }

  getAntwortLabelClass(i: number): string {
    const ergebnis = this.getErgebnis(i);
    if (ergebnis === true) return 'text-green-700';
    if (ergebnis === false && !this.isFreitext(i)) return 'text-red-700';
    return 'text-slate-500';
  }

  getFrageText(frage: PruefungsFrage): string {
    const u = frage.uebung;
    switch (u.typ) {
      case 'multiple-choice': return (u as MultipleChoiceUebung).frage;
      case 'wahr-falsch': return (u as WahrFalschUebung).aussage;
      case 'lueckentext': return (u as LueckentextUebung).frage;
      case 'zuordnung': return (u as ZuordnungUebung).frage;
      case 'freitext': return (u as FreitextUebung).frage;
      default: return '';
    }
  }

  getUserAntwortText(i: number, frage: PruefungsFrage): string {
    const detail = this.state?.antwortDetails[i];
    if (!detail) return '(keine Antwort)';
    switch (detail.typ) {
      case 'multiple-choice': return detail.mcGewaehlterText ?? '–';
      case 'wahr-falsch': return detail.wfGewaehlterWert ? 'Wahr' : 'Falsch';
      case 'lueckentext': return detail.lueckentextEingabe ?? '–';
      case 'zuordnung':
        return (detail.zuordnungen ?? [])
          .map(z => `${z.begriff} → ${z.definition}`)
          .join('\n') || '–';
      case 'freitext': return detail.freitextEingabe || '(keine Eingabe)';
      default: return '–';
    }
  }

  getKorrekteAntwortText(frage: PruefungsFrage): string {
    const u = frage.uebung;
    switch (u.typ) {
      case 'multiple-choice': {
        const mc = u as MultipleChoiceUebung;
        return mc.optionen[mc.korrekteAntwort];
      }
      case 'wahr-falsch': return (u as WahrFalschUebung).korrekt ? 'Wahr' : 'Falsch';
      case 'lueckentext': return (u as LueckentextUebung).antwort;
      case 'zuordnung':
        return (u as ZuordnungUebung).paare.map(p => `${p.begriff} → ${p.definition}`).join('\n');
      case 'freitext': return (u as FreitextUebung).musterloesung;
      default: return '–';
    }
  }

  getErklaerung(frage: PruefungsFrage): string {
    const u = frage.uebung;
    switch (u.typ) {
      case 'multiple-choice': return (u as MultipleChoiceUebung).erklaerung;
      case 'wahr-falsch': return (u as WahrFalschUebung).erklaerung;
      case 'lueckentext': return (u as LueckentextUebung).erklaerung;
      case 'zuordnung': return (u as ZuordnungUebung).erklaerung;
      case 'freitext': return (u as FreitextUebung).erklaerung;
      default: return '';
    }
  }

  asFreitext(u: Uebung): FreitextUebung { return u as FreitextUebung; }

  getTypLabel(typ: string): string {
    const labels: Record<string, string> = {
      'multiple-choice': 'Multiple Choice',
      'wahr-falsch': 'Wahr oder Falsch',
      'lueckentext': 'Lückentext',
      'zuordnung': 'Zuordnung',
      'freitext': 'Freitext'
    };
    return labels[typ] ?? typ;
  }

  getTypBadgeClass(typ: string): string {
    const classes: Record<string, string> = {
      'multiple-choice': 'bg-blue-100 text-blue-800',
      'wahr-falsch': 'bg-purple-100 text-purple-800',
      'lueckentext': 'bg-amber-100 text-amber-800',
      'zuordnung': 'bg-green-100 text-green-800',
      'freitext': 'bg-cyan-100 text-cyan-800'
    };
    return classes[typ] ?? 'bg-slate-100 text-slate-800';
  }
}
