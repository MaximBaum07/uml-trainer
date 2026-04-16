import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { QuizMultipleChoiceComponent } from '../../components/quiz-multiple-choice.component';
import { QuizWahrFalschComponent } from '../../components/quiz-wahr-falsch.component';
import { QuizLueckentextComponent } from '../../components/quiz-lueckentext.component';
import { QuizZuordnungComponent } from '../../components/quiz-zuordnung.component';
import { UEBUNGS_SETS } from '../../data/uml-exercises';
import { DIAGRAM_INFOS } from '../../data/diagram-info';
import { ProgressService } from '../../services/progress.service';
import { DiagramType, Uebung, DiagramInfo, QuizErgebnis,
  MultipleChoiceUebung, WahrFalschUebung, LueckentextUebung, ZuordnungUebung } from '../../models/uml.models';

@Component({
  selector: 'app-ueben',
  standalone: true,
  imports: [RouterLink, Button, ProgressBar,
    QuizMultipleChoiceComponent, QuizWahrFalschComponent,
    QuizLueckentextComponent, QuizZuordnungComponent],
  template: `
    @if (diagramm && uebungen.length > 0) {
      <div class="mb-6">
        <a routerLink="/" class="text-sm text-slate-500 hover:text-slate-700 no-underline">
          <i class="pi pi-arrow-left mr-1"></i> Zurück zum Dashboard
        </a>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center" [style.background-color]="diagramm.farbe + '20'">
              <i [class]="diagramm.icon" [style.color]="diagramm.farbe"></i>
            </div>
            <div>
              <h1 class="text-xl font-bold text-slate-800">{{ diagramm.name }} - Quiz</h1>
            </div>
          </div>
          <div class="text-right">
            <p class="text-lg font-bold text-slate-800">Frage {{ aktuelleFrageIndex + 1 }}/{{ uebungen.length }}</p>
            <p class="text-sm text-green-600"><i class="pi pi-check-circle mr-1"></i>{{ richtigeAntworten }} richtig</p>
          </div>
        </div>
        <p-progressBar
          [value]="((aktuelleFrageIndex + 1) / uebungen.length) * 100"
          [showValue]="false"
          styleClass="h-2" />
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
  private progressService = inject(ProgressService);
  private cdr = inject(ChangeDetectorRef);

  typ!: DiagramType;
  diagramm?: DiagramInfo;
  uebungen: Uebung[] = [];
  aktuelleFrageIndex = 0;
  aktuelleFrageBeantwortet = false;
  richtigeAntworten = 0;
  beantworteteFragen = 0;
  antworten: boolean[] = [];
  quizSichtbar = true;

  get aktuelleUebung(): Uebung {
    return this.uebungen[this.aktuelleFrageIndex];
  }

  ngOnInit(): void {
    this.typ = this.route.snapshot.paramMap.get('typ') as DiagramType;
    this.diagramm = DIAGRAM_INFOS.find(d => d.id === this.typ);
    const set = UEBUNGS_SETS.find(s => s.diagrammTyp === this.typ);
    this.uebungen = set ? [...set.uebungen] : [];
  }

  onBeantwortet(richtig: boolean): void {
    this.aktuelleFrageBeantwortet = true;
    this.beantworteteFragen++;
    this.antworten.push(richtig);
    if (richtig) this.richtigeAntworten++;
  }

  naechsteFrage(): void {
    this.quizSichtbar = false;
    this.cdr.detectChanges();
    this.aktuelleFrageIndex++;
    this.aktuelleFrageBeantwortet = false;
    this.quizSichtbar = true;
  }

  private gespeichert = false;

  ngOnDestroy(): void {
    this.zwischenspeichern();
  }

  private zwischenspeichern(): void {
    if (this.gespeichert || this.beantworteteFragen === 0) return;
    this.gespeichert = true;
    const ergebnis: QuizErgebnis = {
      richtig: this.richtigeAntworten,
      gesamt: this.beantworteteFragen,
      antworten: this.antworten
    };
    this.progressService.quizErgebnisSpeichern(this.typ, ergebnis);
  }

  quizBeenden(): void {
    const ergebnis: QuizErgebnis = {
      richtig: this.richtigeAntworten,
      gesamt: this.uebungen.length,
      antworten: this.antworten
    };
    this.gespeichert = true;
    this.progressService.quizErgebnisSpeichern(this.typ, ergebnis);
    this.router.navigate(['/ergebnis', this.typ], {
      state: { ergebnis }
    });
  }

  asMultipleChoice(u: Uebung): MultipleChoiceUebung { return u as MultipleChoiceUebung; }
  asWahrFalsch(u: Uebung): WahrFalschUebung { return u as WahrFalschUebung; }
  asLueckentext(u: Uebung): LueckentextUebung { return u as LueckentextUebung; }
  asZuordnung(u: Uebung): ZuordnungUebung { return u as ZuordnungUebung; }

  getTypLabel(typ: string): string {
    const labels: Record<string, string> = {
      'multiple-choice': 'Multiple Choice',
      'wahr-falsch': 'Wahr oder Falsch',
      'lueckentext': 'Lückentext',
      'zuordnung': 'Zuordnung'
    };
    return labels[typ] ?? typ;
  }

  getTypBadgeClass(typ: string): string {
    const classes: Record<string, string> = {
      'multiple-choice': 'bg-blue-100 text-blue-800',
      'wahr-falsch': 'bg-purple-100 text-purple-800',
      'lueckentext': 'bg-amber-100 text-amber-800',
      'zuordnung': 'bg-green-100 text-green-800'
    };
    return classes[typ] ?? 'bg-slate-100 text-slate-800';
  }
}
