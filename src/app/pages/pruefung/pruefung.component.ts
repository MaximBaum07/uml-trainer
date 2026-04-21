import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { QuizMultipleChoiceComponent } from '../../components/quiz-multiple-choice.component';
import { QuizWahrFalschComponent } from '../../components/quiz-wahr-falsch.component';
import { QuizLueckentextComponent } from '../../components/quiz-lueckentext.component';
import { QuizZuordnungComponent } from '../../components/quiz-zuordnung.component';
import { QuizFreitextComponent } from '../../components/quiz-freitext.component';
import { PRUEFUNGS_CONFIGS, buildPruefungsFragen } from '../../data/pruefungs-configs';
import {
  PruefungsConfig, PruefungsFrage, PruefungsErgebnisState, ExamAntwortDetail,
  Uebung, MultipleChoiceUebung, WahrFalschUebung, LueckentextUebung,
  ZuordnungUebung, FreitextUebung
} from '../../models/app.models';

@Component({
  selector: 'app-pruefung',
  standalone: true,
  imports: [RouterLink, Button, ProgressBar,
    QuizMultipleChoiceComponent, QuizWahrFalschComponent,
    QuizLueckentextComponent, QuizZuordnungComponent, QuizFreitextComponent],
  template: `
    @if (config && fragen.length > 0) {
      <!-- Header -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-6">
        <div class="flex items-center justify-between mb-3 gap-3">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                 [style.background-color]="config.farbe + '20'">
              <i [class]="config.icon" [style.color]="config.farbe"></i>
            </div>
            <div class="min-w-0">
              <h1 class="text-lg font-bold text-slate-800 truncate">{{ config.name }}</h1>
              <p class="text-xs text-slate-500">
                Frage {{ aktuelleFrageIndex + 1 }} von {{ fragen.length }}
                · {{ beantworteteAnzahl }} beantwortet
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-xl"
               [class]="timerKritisch() ? 'bg-red-50 border border-red-200 text-red-700' : 'bg-slate-100 text-slate-700'">
            <i class="pi pi-clock text-base"
               [class]="timerKritisch() ? 'text-red-500' : 'text-slate-400'"></i>
            {{ timerFormatiert() }}
          </div>
        </div>
        <p-progressBar
          [value]="(aktuelleFrageIndex / fragen.length) * 100"
          [showValue]="false"
          styleClass="h-2" />
        @if (timerKritisch()) {
          <p class="text-xs text-red-600 mt-2 font-medium">
            <i class="pi pi-exclamation-triangle mr-1"></i>Weniger als 5 Minuten verbleibend!
          </p>
        }
      </div>

      <!-- Belegsatz -->
      <div class="flex items-center flex-wrap gap-2 mb-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-violet-100 text-violet-800">
          <i class="pi pi-tag text-xs"></i>
          {{ aktuelleFrage.bereichName }} · {{ aktuelleFrage.themaName }}
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              [class]="getTypBadgeClass(aktuelleUebung.typ)">
          {{ getTypLabel(aktuelleUebung.typ) }}
        </span>
        @if (istAktuelleVollstaendig) {
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
            <i class="pi pi-check text-xs"></i>Beantwortet
          </span>
        } @else {
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
            <i class="pi pi-circle text-xs"></i>Offen
          </span>
        }
      </div>

      <!-- Frage -->
      @if (quizSichtbar) {
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          @switch (aktuelleUebung.typ) {
            @case ('multiple-choice') {
              <app-quiz-multiple-choice
                [uebung]="asMultipleChoice(aktuelleUebung)"
                [examModus]="true"
                [vorherigeAntwort]="vorherigeAntwort"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
            @case ('wahr-falsch') {
              <app-quiz-wahr-falsch
                [uebung]="asWahrFalsch(aktuelleUebung)"
                [examModus]="true"
                [vorherigeAntwort]="vorherigeAntwort"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
            @case ('lueckentext') {
              <app-quiz-lueckentext
                [uebung]="asLueckentext(aktuelleUebung)"
                [examModus]="true"
                [vorherigeAntwort]="vorherigeAntwort"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
            @case ('zuordnung') {
              <app-quiz-zuordnung
                [uebung]="asZuordnung(aktuelleUebung)"
                [examModus]="true"
                [vorherigeAntwort]="vorherigeAntwort"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
            @case ('freitext') {
              <app-quiz-freitext
                [uebung]="asFreitext(aktuelleUebung)"
                [examModus]="true"
                [vorherigeAntwort]="vorherigeAntwort"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
          }
        </div>
      }

      <!-- Navigation -->
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <p-button label="Zurück" icon="pi pi-arrow-left"
                  severity="secondary" [outlined]="true"
                  [disabled]="aktuelleFrageIndex === 0"
                  (click)="vorherigeFrage()" />

        <p class="text-xs text-slate-500 text-center flex-1 px-3 min-w-0">
          <i class="pi pi-info-circle mr-1"></i>
          Auswertung und Lösungen erscheinen nach Abgabe.
        </p>

        @if (aktuelleFrageIndex < fragen.length - 1) {
          <p-button label="Nächste Frage" icon="pi pi-arrow-right" iconPos="right"
                    (click)="naechsteFrage()" />
        } @else {
          <p-button label="Prüfung abgeben" icon="pi pi-flag-fill" severity="success"
                    (click)="pruefungAbgeben()" />
        }
      </div>

      <!-- Abbruch-Link dezent am Ende -->
      <div class="mt-8 text-center">
        <a routerLink="/" class="text-xs text-slate-400 hover:text-slate-600 no-underline">
          <i class="pi pi-times mr-1"></i>Prüfung abbrechen (Fortschritt wird nicht gespeichert)
        </a>
      </div>
    }

    @if (!config) {
      <div class="text-center mt-20">
        <p class="text-slate-500">Prüfungskonfiguration nicht gefunden.</p>
        <a routerLink="/" class="text-blue-600 no-underline mt-3 block">Zurück zum Dashboard</a>
      </div>
    }
  `
})
export class PruefungComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);

  config?: PruefungsConfig;
  fragen: PruefungsFrage[] = [];
  aktuelleFrageIndex = 0;
  antwortDetails: (ExamAntwortDetail | null)[] = [];
  quizSichtbar = true;

  countdown = signal(0);
  private timerInterval?: ReturnType<typeof setInterval>;

  timerFormatiert = computed(() => {
    const c = this.countdown();
    const min = Math.floor(c / 60);
    const sek = c % 60;
    return `${String(min).padStart(2, '0')}:${String(sek).padStart(2, '0')}`;
  });

  timerKritisch = computed(() => {
    const c = this.countdown();
    return c > 0 && c < 300;
  });

  get aktuelleFrage(): PruefungsFrage {
    return this.fragen[this.aktuelleFrageIndex];
  }

  get aktuelleUebung(): Uebung {
    return this.fragen[this.aktuelleFrageIndex].uebung;
  }

  get vorherigeAntwort(): ExamAntwortDetail | undefined {
    return this.antwortDetails[this.aktuelleFrageIndex] ?? undefined;
  }

  get istAktuelleVollstaendig(): boolean {
    return this.istVollstaendig(this.aktuelleFrageIndex);
  }

  get beantworteteAnzahl(): number {
    let n = 0;
    for (let i = 0; i < this.fragen.length; i++) {
      if (this.istVollstaendig(i)) n++;
    }
    return n;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.config = PRUEFUNGS_CONFIGS.find(c => c.id === id);
    if (!this.config) { this.router.navigate(['/']); return; }

    this.fragen = buildPruefungsFragen(this.config);
    if (this.fragen.length === 0) { this.router.navigate(['/']); return; }

    this.antwortDetails = new Array(this.fragen.length).fill(null);
    this.countdown.set(this.config.zeitlimitMinuten * 60);

    this.timerInterval = setInterval(() => {
      const c = this.countdown();
      if (c > 0) {
        this.countdown.set(c - 1);
      } else {
        this.pruefungAbgeben();
      }
    }, 1000);
  }

  onExamAntwort(detail: ExamAntwortDetail): void {
    this.antwortDetails[this.aktuelleFrageIndex] = detail;
  }

  istVollstaendig(index: number): boolean {
    const detail = this.antwortDetails[index];
    if (!detail) return false;
    switch (detail.typ) {
      case 'multiple-choice': return !!detail.mcGewaehlterText;
      case 'wahr-falsch': return detail.wfGewaehlterWert !== undefined;
      case 'lueckentext': return !!detail.lueckentextEingabe?.trim();
      case 'zuordnung': {
        const z = this.fragen[index].uebung as ZuordnungUebung;
        return (detail.zuordnungen?.length ?? 0) === z.paare.length;
      }
      case 'freitext': return !!detail.freitextEingabe?.trim();
    }
    return false;
  }

  naechsteFrage(): void {
    if (this.aktuelleFrageIndex >= this.fragen.length - 1) return;
    this.remountQuiz(() => { this.aktuelleFrageIndex++; });
  }

  vorherigeFrage(): void {
    if (this.aktuelleFrageIndex <= 0) return;
    this.remountQuiz(() => { this.aktuelleFrageIndex--; });
  }

  private remountQuiz(apply: () => void): void {
    this.quizSichtbar = false;
    this.cdr.detectChanges();
    apply();
    this.quizSichtbar = true;
  }

  pruefungAbgeben(): void {
    clearInterval(this.timerInterval);
    const richtig = this.fragen.map((_, i) => this.berechneRichtig(i));
    const zeitGebraucht = (this.config?.zeitlimitMinuten ?? 0) * 60 - this.countdown();
    const state: PruefungsErgebnisState = {
      configName: this.config!.name,
      fragen: this.fragen,
      antwortDetails: this.antwortDetails,
      richtig,
      zeitGebrauchtSek: zeitGebraucht,
      zeitlimitSek: this.config!.zeitlimitMinuten * 60
    };
    this.router.navigate(['/pruefung-ergebnis'], { state });
  }

  private berechneRichtig(index: number): boolean {
    const detail = this.antwortDetails[index];
    if (!detail) return false;
    const uebung = this.fragen[index].uebung;
    switch (detail.typ) {
      case 'multiple-choice': {
        const mc = uebung as MultipleChoiceUebung;
        return detail.mcGewaehlterText === mc.optionen[mc.korrekteAntwort];
      }
      case 'wahr-falsch': {
        const wf = uebung as WahrFalschUebung;
        return detail.wfGewaehlterWert === wf.korrekt;
      }
      case 'lueckentext': {
        const lt = uebung as LueckentextUebung;
        return (detail.lueckentextEingabe ?? '').trim().toLowerCase() === lt.antwort.toLowerCase();
      }
      case 'zuordnung': {
        const zu = uebung as ZuordnungUebung;
        const map = new Map(zu.paare.map(p => [p.begriff, p.definition]));
        const user = detail.zuordnungen ?? [];
        if (user.length !== zu.paare.length) return false;
        return user.every(z => map.get(z.begriff) === z.definition);
      }
      case 'freitext':
        return false;
    }
    return false;
  }

  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
  }

  asMultipleChoice(u: Uebung): MultipleChoiceUebung { return u as MultipleChoiceUebung; }
  asWahrFalsch(u: Uebung): WahrFalschUebung { return u as WahrFalschUebung; }
  asLueckentext(u: Uebung): LueckentextUebung { return u as LueckentextUebung; }
  asZuordnung(u: Uebung): ZuordnungUebung { return u as ZuordnungUebung; }
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
