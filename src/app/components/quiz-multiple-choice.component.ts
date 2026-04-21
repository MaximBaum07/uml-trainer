import { Component, input, output, OnInit, effect } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { inject } from '@angular/core';
import { MultipleChoiceUebung, ExamAntwortDetail } from '../models/app.models';

@Component({
  selector: 'app-quiz-multiple-choice',
  standalone: true,
  template: `
    <div class="space-y-4">
      <p class="text-lg font-medium text-slate-800"><span [innerHTML]="sanitize(uebung().frage)"></span></p>

      @if (uebung().svgDiagramm) {
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200 flex justify-center overflow-x-auto">
          <div [innerHTML]="sanitize(uebung().svgDiagramm!)"></div>
        </div>
      }

      <div class="space-y-2">
        @for (option of gemischteOptionen; track option; let i = $index) {
          <button
            class="w-full text-left p-4 rounded-lg border-2 transition-all"
            [class]="getOptionClass(i)"
            [disabled]="beantwortet"
            (click)="antworten(i)">
            <span class="inline-flex items-center gap-3">
              <span class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    [class]="getBadgeClass(i)">
                {{ ['A','B','C','D','E','F'][i] }}
              </span>
              <span>{{ option }}</span>
            </span>
          </button>
        }
      </div>

      @if (beantwortet && !examModus()) {
        <div class="p-4 rounded-lg mt-2"
             [class]="gewaehlteAntwort === neueKorrekteAntwort ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <p class="font-semibold mb-1"
             [class]="gewaehlteAntwort === neueKorrekteAntwort ? 'text-green-800' : 'text-red-800'">
            {{ gewaehlteAntwort === neueKorrekteAntwort ? 'Richtig!' : 'Leider falsch!' }}
          </p>
          <p class="text-slate-700 text-sm">{{ uebung().erklaerung }}</p>
        </div>
      }

      @if (beantwortet && examModus()) {
        <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
          <p class="text-slate-500 text-sm"><i class="pi pi-lock mr-1"></i>Antwort gespeichert – Auswertung nach der Prüfung.</p>
        </div>
      }
    </div>
  `
})
export class QuizMultipleChoiceComponent {
  private sanitizer = inject(DomSanitizer);

  uebung = input.required<MultipleChoiceUebung>();
  examModus = input(false);
  beantwortetEvent = output<boolean>();
  examAntwortEvent = output<ExamAntwortDetail>();

  gemischteOptionen: string[] = [];
  neueKorrekteAntwort = 0;
  beantwortet = false;
  gewaehlteAntwort = -1;

  constructor() {
    effect(() => {
      const u = this.uebung();
      this.mischen(u);
      this.beantwortet = false;
      this.gewaehlteAntwort = -1;
    });
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  antworten(index: number): void {
    if (this.beantwortet) return;
    this.gewaehlteAntwort = index;
    this.beantwortet = true;
    const richtig = index === this.neueKorrekteAntwort;
    this.examAntwortEvent.emit({ typ: 'multiple-choice', mcGewaehlterText: this.gemischteOptionen[index] });
    this.beantwortetEvent.emit(richtig);
  }

  getOptionClass(i: number): string {
    if (!this.beantwortet) {
      return 'border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
    }
    if (this.examModus()) {
      return i === this.gewaehlteAntwort
        ? 'border-blue-400 bg-blue-50'
        : 'border-slate-200 opacity-50';
    }
    if (i === this.neueKorrekteAntwort) return 'border-green-500 bg-green-50';
    if (i === this.gewaehlteAntwort) return 'border-red-500 bg-red-50';
    return 'border-slate-200 opacity-50';
  }

  getBadgeClass(i: number): string {
    if (!this.beantwortet) return 'bg-slate-200 text-slate-600';
    if (this.examModus()) {
      return i === this.gewaehlteAntwort ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-400';
    }
    if (i === this.neueKorrekteAntwort) return 'bg-green-500 text-white';
    if (i === this.gewaehlteAntwort) return 'bg-red-500 text-white';
    return 'bg-slate-200 text-slate-400';
  }

  private mischen(u: MultipleChoiceUebung): void {
    const paare = u.optionen.map((text, idx) => ({ text, istKorrekt: idx === u.korrekteAntwort }));
    for (let i = paare.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [paare[i], paare[j]] = [paare[j], paare[i]];
    }
    this.gemischteOptionen = paare.map(p => p.text);
    this.neueKorrekteAntwort = paare.findIndex(p => p.istKorrekt);
  }
}
