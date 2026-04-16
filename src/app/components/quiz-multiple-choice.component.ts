import { Component, input, output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { inject } from '@angular/core';
import { MultipleChoiceUebung } from '../models/uml.models';

@Component({
  selector: 'app-quiz-multiple-choice',
  standalone: true,
  template: `
    <div class="space-y-4">
      <p class="text-lg font-medium text-slate-800">{{ uebung().frage }}</p>

      @if (uebung().svgDiagramm) {
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200 flex justify-center overflow-x-auto">
          <div [innerHTML]="sanitize(uebung().svgDiagramm!)"></div>
        </div>
      }

      <div class="space-y-2">
        @for (option of uebung().optionen; track option; let i = $index) {
          <button
            class="w-full text-left p-4 rounded-lg border-2 transition-all"
            [class]="getOptionClass(i)"
            [disabled]="beantwortet"
            (click)="antworten(i)">
            <span class="inline-flex items-center gap-3">
              <span class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                    [class]="getBadgeClass(i)">
                {{ ['A','B','C','D'][i] }}
              </span>
              <span>{{ option }}</span>
            </span>
          </button>
        }
      </div>

      @if (beantwortet) {
        <div class="p-4 rounded-lg mt-2"
             [class]="gewaehlteAntwort === uebung().korrekteAntwort ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <p class="font-semibold mb-1"
             [class]="gewaehlteAntwort === uebung().korrekteAntwort ? 'text-green-800' : 'text-red-800'">
            {{ gewaehlteAntwort === uebung().korrekteAntwort ? 'Richtig!' : 'Leider falsch!' }}
          </p>
          <p class="text-slate-700 text-sm">{{ uebung().erklaerung }}</p>
        </div>
      }
    </div>
  `
})
export class QuizMultipleChoiceComponent {
  private sanitizer = inject(DomSanitizer);

  uebung = input.required<MultipleChoiceUebung>();
  beantwortetEvent = output<boolean>();

  beantwortet = false;
  gewaehlteAntwort = -1;

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  antworten(index: number): void {
    if (this.beantwortet) return;
    this.gewaehlteAntwort = index;
    this.beantwortet = true;
    this.beantwortetEvent.emit(index === this.uebung().korrekteAntwort);
  }

  getOptionClass(i: number): string {
    if (!this.beantwortet) {
      return 'border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
    }
    if (i === this.uebung().korrekteAntwort) {
      return 'border-green-500 bg-green-50';
    }
    if (i === this.gewaehlteAntwort) {
      return 'border-red-500 bg-red-50';
    }
    return 'border-slate-200 opacity-50';
  }

  getBadgeClass(i: number): string {
    if (!this.beantwortet) return 'bg-slate-200 text-slate-600';
    if (i === this.uebung().korrekteAntwort) return 'bg-green-500 text-white';
    if (i === this.gewaehlteAntwort) return 'bg-red-500 text-white';
    return 'bg-slate-200 text-slate-400';
  }
}
