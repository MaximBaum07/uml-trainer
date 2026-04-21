import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { QuizMultipleChoiceComponent } from '../../components/quiz-multiple-choice.component';
import { QuizWahrFalschComponent } from '../../components/quiz-wahr-falsch.component';
import { QuizLueckentextComponent } from '../../components/quiz-lueckentext.component';
import { QuizZuordnungComponent } from '../../components/quiz-zuordnung.component';
import { QuizFreitextComponent } from '../../components/quiz-freitext.component';
import { ALLE_UEBUNGS_SETS } from '../../data/alle-uebungen';
import { THEMEN } from '../../data/themen';
import { ProgressService } from '../../services/progress.service';
import { ThemaId, Uebung, ThemaInfo, QuizErgebnis,
  MultipleChoiceUebung, WahrFalschUebung, LueckentextUebung, ZuordnungUebung,
  FreitextUebung } from '../../models/app.models';

@Component({
  selector: 'app-ueben',
  standalone: true,
  imports: [RouterLink, Button, ProgressBar,
    QuizMultipleChoiceComponent, QuizWahrFalschComponent,
    QuizLueckentextComponent, QuizZuordnungComponent, QuizFreitextComponent],
  template: `
    @if (thema && uebungen.length === 0) {
      <div class="bg-white rounded-xl border border-slate-200 p-10 text-center">
        <i class="pi pi-clock text-4xl text-slate-300 mb-3 block"></i>
        <h2 class="text-xl font-semibold text-slate-700 mb-2">Übungen kommen bald</h2>
        <p class="text-slate-500 mb-4">Für "{{ thema.name }}" sind die Übungsaufgaben noch in Vorbereitung.</p>
        @if (thema.hatTheorie) {
          <a [routerLink]="['/lernen', thema.id]" class="text-blue-600 no-underline mr-3">
            <i class="pi pi-book mr-1"></i>Theorie lesen
          </a>
        }
        <a [routerLink]="['/bereich', thema.bereichId]" class="text-slate-600 no-underline">
          <i class="pi pi-arrow-left mr-1"></i>Zurück zum Bereich
        </a>
      </div>
    }
    @if (thema && uebungen.length > 0) {
      <div class="mb-6">
        <a routerLink="/" class="text-sm text-slate-500 hover:text-slate-700 no-underline">
          <i class="pi pi-arrow-left mr-1"></i> Zurück zum Dashboard
        </a>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" [style.background-color]="thema.farbe + '20'">
              <i [class]="thema.icon" [style.color]="thema.farbe"></i>
            </div>
            <div>
              <h1 class="text-xl font-bold text-slate-800">{{ thema.name }} - Quiz</h1>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <button type="button"
                    (click)="toggleMerken()"
                    [attr.title]="progressService.istGemerkt(typ, aktuelleFrageIndex) ? 'Nicht mehr merken' : 'Frage merken'"
                    class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors">
              <i [class]="progressService.istGemerkt(typ, aktuelleFrageIndex) ? 'pi pi-bookmark-fill text-amber-500 text-xl' : 'pi pi-bookmark text-slate-400 text-xl'"></i>
            </button>
            <div class="text-right">
              <p class="text-lg font-bold text-slate-800">Frage {{ aktuelleFrageIndex + 1 }}/{{ uebungen.length }}</p>
              <p class="text-sm text-green-600"><i class="pi pi-check-circle mr-1"></i>{{ richtigeAntworten }} richtig</p>
            </div>
          </div>
        </div>
        <p-progressBar
          [value]="((aktuelleFrageIndex + 1) / uebungen.length) * 100"
          [showValue]="false"
          styleClass="h-2" />
        @if (fortgesetzt) {
          <div class="mt-3 flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-blue-50 border border-blue-200">
            <span class="text-sm text-blue-800">
              <i class="pi pi-history mr-1"></i>
              Fortgesetzt bei Frage {{ aktuelleFrageIndex + 1 }} – {{ beantworteteFragen }} bereits beantwortet.
            </span>
            <button type="button"
                    (click)="neuBeginnen()"
                    class="text-sm font-medium text-blue-700 hover:text-blue-900 whitespace-nowrap">
              <i class="pi pi-refresh mr-1"></i>Neu beginnen
            </button>
          </div>
        }
      </div>

      @if (quizSichtbar) {
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          <div class="mb-2">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  [class]="getTypBadgeClass(aktuelleUebung.typ)">
              {{ getTypLabel(aktuelleUebung.typ) }}
            </span>
          </div>

          @switch (aktuelleUebung.typ) {
            @case ('multiple-choice') {
              <app-quiz-multiple-choice
                [uebung]="asMultipleChoice(aktuelleUebung)"
                (beantwortetEvent)="onBeantwortet($event)" />
            }
            @case ('wahr-falsch') {
              <app-quiz-wahr-falsch
                [uebung]="asWahrFalsch(aktuelleUebung)"
                (beantwortetEvent)="onBeantwortet($event)" />
            }
            @case ('lueckentext') {
              <app-quiz-lueckentext
                [uebung]="asLueckentext(aktuelleUebung)"
                (beantwortetEvent)="onBeantwortet($event)" />
            }
            @case ('zuordnung') {
              <app-quiz-zuordnung
                [uebung]="asZuordnung(aktuelleUebung)"
                (beantwortetEvent)="onBeantwortet($event)" />
            }
            @case ('freitext') {
              <app-quiz-freitext
                [uebung]="asFreitext(aktuelleUebung)"
                (beantwortetEvent)="onBeantwortet($event)" />
            }
          }
        </div>
      }

      @if (aktuelleFrageBeantwortet) {
        <div class="flex justify-end">
          @if (aktuelleFrageIndex < uebungen.length - 1) {
            <p-button label="Nächste Frage" icon="pi pi-arrow-right" iconPos="right"
                    (click)="naechsteFrage()" />
          } @else {
            <p-button label="Ergebnis anzeigen" icon="pi pi-flag" severity="success"
                    (click)="quizBeenden()" />
          }
        </div>
      }
    }
  `
})
export class UebenComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  protected progressService = inject(ProgressService);
  private cdr = inject(ChangeDetectorRef);

  typ!: ThemaId;
  thema?: ThemaInfo;
  uebungen: Uebung[] = [];
  aktuelleFrageIndex = 0;
  aktuelleFrageBeantwortet = false;
  richtigeAntworten = 0;
  beantworteteFragen = 0;
  antworten: boolean[] = [];
  quizSichtbar = true;
  fortgesetzt = false;

  get aktuelleUebung(): Uebung {
    return this.uebungen[this.aktuelleFrageIndex];
  }

  ngOnInit(): void {
    this.typ = this.route.snapshot.paramMap.get('typ') as ThemaId;
    this.thema = THEMEN.find(d => d.id === this.typ);
    const set = ALLE_UEBUNGS_SETS.find(s => s.themaId === this.typ);
    this.uebungen = set ? [...set.uebungen] : [];

    // Gespeicherten Zwischenstand wiederherstellen (falls vorhanden und passend)
    const versuch = this.progressService.getVersuch(this.typ);
    if (versuch && versuch.aktuelleFrageIndex < this.uebungen.length
        && versuch.antworten.length <= this.uebungen.length) {
      this.aktuelleFrageIndex = versuch.aktuelleFrageIndex;
      this.antworten = [...versuch.antworten];
      this.beantworteteFragen = versuch.antworten.length;
      this.richtigeAntworten = versuch.richtig;
      this.fortgesetzt = true;
    }
  }

  onBeantwortet(richtig: boolean): void {
    this.aktuelleFrageBeantwortet = true;
    this.beantworteteFragen++;
    this.antworten.push(richtig);
    if (richtig) this.richtigeAntworten++;
    // Falsch-Liste pflegen (für "Falsche Fragen wiederholen")
    this.progressService.markiereFrage(this.typ, this.aktuelleFrageIndex, richtig);
    // Fortschritt im Quiz selbst speichern (für Fortsetzen)
    this.zwischenstandSpeichern();
  }

  toggleMerken(): void {
    this.progressService.toggleMerken(this.typ, this.aktuelleFrageIndex);
  }

  neuBeginnen(): void {
    this.progressService.versuchLoeschen(this.typ);
    this.aktuelleFrageIndex = 0;
    this.aktuelleFrageBeantwortet = false;
    this.richtigeAntworten = 0;
    this.beantworteteFragen = 0;
    this.antworten = [];
    this.fortgesetzt = false;
    this.quizSichtbar = false;
    this.cdr.detectChanges();
    this.quizSichtbar = true;
  }

  naechsteFrage(): void {
    this.quizSichtbar = false;
    this.cdr.detectChanges();
    this.aktuelleFrageIndex++;
    this.aktuelleFrageBeantwortet = false;
    this.quizSichtbar = true;
    this.zwischenstandSpeichern();
  }

  /** Speichert den aktuellen Stand, damit Fortsetzen möglich ist. */
  private zwischenstandSpeichern(): void {
    // Wenn wir schon am Ende sind und die letzte Frage beantwortet ist → nichts zu fortsetzen
    if (this.aktuelleFrageIndex >= this.uebungen.length) return;
    this.progressService.versuchSpeichern(this.typ, {
      aktuelleFrageIndex: this.aktuelleFrageIndex,
      antworten: this.antworten,
      richtig: this.richtigeAntworten
    });
  }

  private gespeichert = false;

  ngOnDestroy(): void {
    // Falls mitten im Quiz verlassen: der laufende Versuch wurde bei jeder
    // Antwort & jedem "Nächste Frage" bereits gespeichert. Hier nichts weiter.
    if (this.gespeichert) return;
    // Sicherheitshalber noch einmal den Zwischenstand persistieren.
    this.zwischenstandSpeichern();
  }

  quizBeenden(): void {
    const ergebnis: QuizErgebnis = {
      richtig: this.richtigeAntworten,
      gesamt: this.uebungen.length,
      antworten: this.antworten
    };
    this.gespeichert = true;
    this.progressService.quizErgebnisSpeichern(this.typ, ergebnis);
    this.progressService.versuchLoeschen(this.typ);
    this.router.navigate(['/ergebnis', this.typ], {
      state: { ergebnis }
    });
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
