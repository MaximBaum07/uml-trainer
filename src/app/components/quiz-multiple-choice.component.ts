import { Component, input, output, effect, untracked, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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
          <button type="button"
            class="w-full text-left p-4 rounded-lg border-2 transition-all"
            [class]="getOptionClass(i)"
            [disabled]="beantwortet && !examModus()"
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
        <div class="p-3 rounded-lg bg-blue-50 border border-blue-200">
          <p class="text-blue-800 text-sm">
            <i class="pi pi-check-circle mr-1"></i>
            Antwort gespeichert – du kannst bis zur Abgabe noch eine andere Option wählen.
          </p>
        </div>
      }
    </div>
  `
})
export class QuizMultipleChoiceComponent {
  private sanitizer = inject(DomSanitizer);

  uebung = input.required<MultipleChoiceUebung>();
  examModus = input(false);
  vorherigeAntwort = input<ExamAntwortDetail | undefined>(undefined);
  beantwortetEvent = output<boolean>();
  examAntwortEvent = output<ExamAntwortDetail>();

  gemischteOptionen: string[] = [];
  neueKorrekteAntwort = 0;
  beantwortet = false;
  gewaehlteAntwort = -1;

  constructor() {
    effect(() => {
      const u = this.uebung();
      const prev = untracked(() => this.vorherigeAntwort());
      this.mischen(u);
      if (prev?.typ === 'multiple-choice' && prev.mcGewaehlterText) {
        const idx = this.gemischteOptionen.indexOf(prev.mcGewaehlterText);
        if (idx >= 0) {
          this.gewaehlteAntwort = idx;
          this.beantwortet = true;
          return;
        }
      }
      this.beantwortet = false;
      this.gewaehlteAntwort = -1;
    });
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  antworten(index: number): void {
    if (this.beantwortet && !this.examModus()) return;
    this.gewaehlteAntwort = index;
    this.beantwortet = true;
    const richtig = index === this.neueKorrekteAntwort;
    this.examAntwortEvent.emit({ typ: 'multiple-choice', mcGewaehlterText: this.gemischteOptionen[index] });
    this.beantwortetEvent.emit(richtig);
  }

  getOptionClass(i: number): string {
    if (this.examModus()) {
      if (i === this.gewaehlteAntwort) {
        return 'border-blue-500 bg-blue-50 cursor-pointer';
      }
      return 'border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
    }
    if (!this.beantwortet) {
      return 'border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
    }
    if (i === this.neueKorrekteAntwort) return 'border-green-500 bg-green-50';
    if (i === this.gewaehlteAntwort) return 'border-red-500 bg-red-50';
    return 'border-slate-200 opacity-50';
  }

  getBadgeClass(i: number): string {
    if (this.examModus()) {
      return i === this.gewaehlteAntwort ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-600';
    }
    if (!this.beantwortet) return 'bg-slate-200 text-slate-600';
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
