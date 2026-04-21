import { Component, OnInit, ChangeDetectorRef, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { QuizMultipleChoiceComponent } from '../../components/quiz-multiple-choice.component';
import { QuizWahrFalschComponent } from '../../components/quiz-wahr-falsch.component';
import { QuizLueckentextComponent } from '../../components/quiz-lueckentext.component';
import { QuizZuordnungComponent } from '../../components/quiz-zuordnung.component';
import { QuizFreitextComponent } from '../../components/quiz-freitext.component';
import { ALLE_UEBUNGS_SETS } from '../../data/alle-uebungen';
import { getBereich } from '../../data/themenbereiche';
import { ProgressService } from '../../services/progress.service';
import {
  Themenbereich, Uebung, ThemaId,
  MultipleChoiceUebung, WahrFalschUebung, LueckentextUebung,
  ZuordnungUebung, FreitextUebung
} from '../../models/app.models';

interface Frage {
  themaId: ThemaId;
  uebungIndex: number;
  uebung: Uebung;
}

/**
 * Sammelt alle zuletzt falsch beantworteten Fragen eines Themenbereichs
 * und stellt sie in einem Quiz erneut. Richtige Antworten räumen den
 * "falsch"-Marker automatisch aus dem Fortschritt.
 */
@Component({
  selector: 'app-wiederholen',
  standalone: true,
  imports: [RouterLink, Button, ProgressBar,
    QuizMultipleChoiceComponent, QuizWahrFalschComponent,
    QuizLueckentextComponent, QuizZuordnungComponent, QuizFreitextComponent],
  template: `
    @if (bereich && fragen.length === 0) {
      <div class="bg-white rounded-xl border border-slate-200 p-10 text-center">
        <i [class]="modus === 'gemerkt' ? 'pi pi-bookmark text-4xl text-slate-300 mb-3 block' : 'pi pi-check-circle text-4xl text-green-500 mb-3 block'"></i>
        <h2 class="text-xl font-semibold text-slate-700 mb-2">
          {{ modus === 'gemerkt' ? 'Keine gemerkten Fragen' : 'Keine falschen Fragen mehr!' }}
        </h2>
        <p class="text-slate-500 mb-4">
          @if (modus === 'gemerkt') {
            In "{{ bereich.name }}" hast du aktuell noch keine Frage gemerkt. Öffne eine Übung und klicke dort auf das Lesezeichen-Symbol.
          } @else {
            In "{{ bereich.name }}" hast du aktuell alle Fragen richtig beantwortet – oder noch keine falsch.
          }
        </p>
        <a [routerLink]="['/bereich', bereich.id]" class="text-blue-600 no-underline">
          <i class="pi pi-arrow-left mr-1"></i>Zurück zum Bereich
        </a>
      </div>
    }

    @if (bereich && fragen.length > 0) {
      <div class="mb-6">
        <a [routerLink]="['/bereich', bereich.id]" class="text-sm text-slate-500 hover:text-slate-700 no-underline">
          <i class="pi pi-arrow-left mr-1"></i> Zurück zum Bereich
        </a>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center"
                 [style.background-color]="bereich.farbe + '20'">
              <i [class]="(modus === 'gemerkt' ? 'pi pi-bookmark-fill' : 'pi pi-refresh') + ' text-xl'" [style.color]="bereich.farbe"></i>
            </div>
            <div>
              <h1 class="text-xl font-bold text-slate-800">
                {{ modus === 'gemerkt' ? 'Gemerkt' : 'Wiederholen' }}: {{ bereich.name }}
              </h1>
              <p class="text-xs text-slate-500">
                {{ modus === 'gemerkt' ? 'Deine gemerkten Fragen' : 'Deine zuletzt falsch beantworteten Fragen' }}
              </p>
            </div>
          </div>
          <div class="text-right">
            <p class="text-lg font-bold text-slate-800">Frage {{ index + 1 }}/{{ fragen.length }}</p>
            <p class="text-sm text-green-600">
              <i class="pi pi-check-circle mr-1"></i>{{ richtigeAntworten }} wieder richtig
            </p>
          </div>
        </div>
        <p-progressBar
          [value]="((index + 1) / fragen.length) * 100"
          [showValue]="false"
          styleClass="h-2" />
      </div>

      @if (quizSichtbar && aktuelle) {
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          <div class="mb-2">
            <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-amber-100 text-amber-800">
              {{ getTypLabel(aktuelle.uebung.typ) }}
            </span>
          </div>

          @switch (aktuelle.uebung.typ) {
            @case ('multiple-choice') {
              <app-quiz-multiple-choice [uebung]="asMc(aktuelle.uebung)"
                (beantwortetEvent)="onBeantwortet($event)" />
            }
            @case ('wahr-falsch') {
              <app-quiz-wahr-falsch [uebung]="asWf(aktuelle.uebung)"
                (beantwortetEvent)="onBeantwortet($event)" />
            }
            @case ('lueckentext') {
              <app-quiz-lueckentext [uebung]="asLt(aktuelle.uebung)"
                (beantwortetEvent)="onBeantwortet($event)" />
            }
            @case ('zuordnung') {
              <app-quiz-zuordnung [uebung]="asZo(aktuelle.uebung)"
                (beantwortetEvent)="onBeantwortet($event)" />
            }
            @case ('freitext') {
              <app-quiz-freitext [uebung]="asFt(aktuelle.uebung)"
                (beantwortetEvent)="onBeantwortet($event)" />
            }
          }
        </div>
      }

      @if (beantwortet) {
        <div class="flex justify-end">
          @if (index < fragen.length - 1) {
            <p-button label="Nächste Frage" icon="pi pi-arrow-right" iconPos="right"
                    (click)="naechste()" />
          } @else {
            <p-button label="Fertig" icon="pi pi-flag" severity="success"
                    (click)="fertig()" />
          }
        </div>
      }
    }
  `
})
export class WiederholenComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private progress = inject(ProgressService);
  private cdr = inject(ChangeDetectorRef);

  bereich?: Themenbereich;
  fragen: Frage[] = [];
  index = 0;
  beantwortet = false;
  richtigeAntworten = 0;
  quizSichtbar = true;
  modus: 'falsch' | 'gemerkt' = 'falsch';

  get aktuelle(): Frage | undefined {
    return this.fragen[this.index];
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('bereichId') ?? '';
    this.bereich = getBereich(id);
    this.modus = (this.route.snapshot.data['modus'] as 'falsch' | 'gemerkt') ?? 'falsch';
    if (!this.bereich) return;

    const quelle = this.modus === 'gemerkt'
      ? this.progress.getGemerkteFragenProBereich(this.bereich.id)
      : this.progress.getFalscheFragenProBereich(this.bereich.id);
    const alle: Frage[] = [];
    for (const { themaId, indices } of quelle) {
      const set = ALLE_UEBUNGS_SETS.find(s => s.themaId === themaId);
      if (!set) continue;
      for (const i of indices) {
        if (set.uebungen[i]) {
          alle.push({ themaId, uebungIndex: i, uebung: set.uebungen[i] });
        }
      }
    }
    // Zufällige Reihenfolge
    for (let i = alle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [alle[i], alle[j]] = [alle[j], alle[i]];
    }
    this.fragen = alle;
  }

  onBeantwortet(richtig: boolean): void {
    this.beantwortet = true;
    if (richtig) this.richtigeAntworten++;
    if (this.aktuelle) {
      this.progress.markiereFrage(this.aktuelle.themaId, this.aktuelle.uebungIndex, richtig);
    }
  }

  naechste(): void {
    this.quizSichtbar = false;
    this.cdr.detectChanges();
    this.index++;
    this.beantwortet = false;
    this.quizSichtbar = true;
  }

  fertig(): void {
    if (this.bereich) {
      this.router.navigate(['/bereich', this.bereich.id]);
    }
  }

  asMc(u: Uebung): MultipleChoiceUebung { return u as MultipleChoiceUebung; }
  asWf(u: Uebung): WahrFalschUebung     { return u as WahrFalschUebung; }
  asLt(u: Uebung): LueckentextUebung    { return u as LueckentextUebung; }
  asZo(u: Uebung): ZuordnungUebung      { return u as ZuordnungUebung; }
  asFt(u: Uebung): FreitextUebung       { return u as FreitextUebung; }

  getTypLabel(typ: string): string {
    return ({
      'multiple-choice': 'Multiple Choice',
      'wahr-falsch': 'Wahr oder Falsch',
      'lueckentext': 'Lückentext',
      'zuordnung': 'Zuordnung',
      'freitext': 'Freitext'
    } as Record<string, string>)[typ] ?? typ;
  }
}
