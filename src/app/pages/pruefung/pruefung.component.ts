import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
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
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center"
                 [style.background-color]="config.farbe + '20'">
              <i [class]="config.icon" [style.color]="config.farbe"></i>
            </div>
            <div>
              <h1 class="text-lg font-bold text-slate-800">{{ config.name }}</h1>
              <p class="text-xs text-slate-500">Frage {{ aktuelleFrageIndex + 1 }} von {{ fragen.length }}</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <!-- Timer -->
            <div class="flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-xl"
                 [class]="timerKritisch ? 'bg-red-50 border border-red-200 text-red-700' : 'bg-slate-100 text-slate-700'">
              <i class="pi pi-clock text-base" [class]="timerKritisch ? 'text-red-500' : 'text-slate-400'"></i>
              {{ timerFormatiert }}
            </div>
          </div>
        </div>
        <p-progressBar
          [value]="((aktuelleFrageIndex) / fragen.length) * 100"
          [showValue]="false"
          styleClass="h-2" />
        @if (timerKritisch) {
          <p class="text-xs text-red-600 mt-2 font-medium">
            <i class="pi pi-exclamation-triangle mr-1"></i>Weniger als 5 Minuten verbleibend!
          </p>
        }
      </div>

      <!-- Belegsatz -->
      <div class="flex items-center gap-2 mb-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-violet-100 text-violet-800">
          <i class="pi pi-tag text-xs"></i>
          {{ aktuelleFrage.bereichName }} · {{ aktuelleFrage.themaName }}
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              [class]="getTypBadgeClass(aktuelleUebung.typ)">
          {{ getTypLabel(aktuelleUebung.typ) }}
        </span>
      </div>

      <!-- Frage -->
      @if (quizSichtbar) {
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          @switch (aktuelleUebung.typ) {
            @case ('multiple-choice') {
              <app-quiz-multiple-choice
                [uebung]="asMultipleChoice(aktuelleUebung)"
                [examModus]="true"
                (beantwortetEvent)="onBeantwortet($event)"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
            @case ('wahr-falsch') {
              <app-quiz-wahr-falsch
                [uebung]="asWahrFalsch(aktuelleUebung)"
                [examModus]="true"
                (beantwortetEvent)="onBeantwortet($event)"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
            @case ('lueckentext') {
              <app-quiz-lueckentext
                [uebung]="asLueckentext(aktuelleUebung)"
                [examModus]="true"
                (beantwortetEvent)="onBeantwortet($event)"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
            @case ('zuordnung') {
              <app-quiz-zuordnung
                [uebung]="asZuordnung(aktuelleUebung)"
                [examModus]="true"
                (beantwortetEvent)="onBeantwortet($event)"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
            @case ('freitext') {
              <app-quiz-freitext
                [uebung]="asFreitext(aktuelleUebung)"
                [examModus]="true"
                (beantwortetEvent)="onBeantwortet($event)"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
          }
        </div>
      }

      <!-- Navigation -->
      @if (aktuelleFrageBeantwortet) {
        <div class="flex items-center justify-between">
          <p class="text-sm text-slate-500">
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
      }

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
  aktuelleFrageBeantwortet = false;
  richtig: boolean[] = [];
  pendingDetail: ExamAntwortDetail | null = null;
  antwortDetails: (ExamAntwortDetail | null)[] = [];
  quizSichtbar = true;

  countdown = 0;
  private timerInterval?: ReturnType<typeof setInterval>;

  get aktuelleFrage(): PruefungsFrage {
    return this.fragen[this.aktuelleFrageIndex];
  }

  get aktuelleUebung(): Uebung {
    return this.fragen[this.aktuelleFrageIndex].uebung;
  }

  get timerFormatiert(): string {
    const min = Math.floor(this.countdown / 60);
    const sek = this.countdown % 60;
    return `${String(min).padStart(2, '0')}:${String(sek).padStart(2, '0')}`;
  }

  get timerKritisch(): boolean {
    return this.countdown > 0 && this.countdown < 300;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.config = PRUEFUNGS_CONFIGS.find(c => c.id === id);
    if (!this.config) { this.router.navigate(['/']); return; }

    this.fragen = buildPruefungsFragen(this.config);
    if (this.fragen.length === 0) { this.router.navigate(['/']); return; }

    this.countdown = this.config.zeitlimitMinuten * 60;
    this.timerInterval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.pruefungAbgeben();
      }
    }, 1000);
  }

  onExamAntwort(detail: ExamAntwortDetail): void {
    this.pendingDetail = detail;
  }

  onBeantwortet(richtig: boolean): void {
    this.aktuelleFrageBeantwortet = true;
    this.richtig.push(richtig);
    this.antwortDetails.push(this.pendingDetail);
    this.pendingDetail = null;
  }

  naechsteFrage(): void {
    this.quizSichtbar = false;
    this.cdr.detectChanges();
    this.aktuelleFrageIndex++;
    this.aktuelleFrageBeantwortet = false;
    this.quizSichtbar = true;
  }

  pruefungAbgeben(): void {
    clearInterval(this.timerInterval);
    const zeitGebraucht = (this.config?.zeitlimitMinuten ?? 0) * 60 - this.countdown;
    const state: PruefungsErgebnisState = {
      configName: this.config!.name,
      fragen: this.fragen,
      antwortDetails: this.antwortDetails,
      richtig: this.richtig,
      zeitGebrauchtSek: zeitGebraucht,
      zeitlimitSek: this.config!.zeitlimitMinuten * 60
    };
    this.router.navigate(['/pruefung-ergebnis'], { state });
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
