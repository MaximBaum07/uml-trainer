import { Component, input, output, effect, untracked, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { WahrFalschUebung, ExamAntwortDetail } from '../models/app.models';

@Component({
  selector: 'app-quiz-wahr-falsch',
  standalone: true,
  template: `
    <div class="space-y-4">
      <p class="text-lg font-medium text-slate-800">Ist diese Aussage richtig oder falsch?</p>

      @if (uebung().svgDiagramm) {
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200 flex justify-center overflow-x-auto">
          <div [innerHTML]="sanitize(uebung().svgDiagramm!)"></div>
        </div>
      }

      <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p class="text-blue-900 font-medium text-lg italic"><span [innerHTML]="sanitize(uebung().aussage)"></span></p>
      </div>

      <div class="flex gap-4">
        <button type="button"
          class="flex-1 p-4 rounded-lg border-2 font-semibold text-lg transition-all"
          [class]="getButtonClass(true)"
          [disabled]="beantwortet && !examModus()"
          (click)="antworten(true)">
          <i class="pi pi-check mr-2"></i> Wahr
        </button>
        <button type="button"
          class="flex-1 p-4 rounded-lg border-2 font-semibold text-lg transition-all"
          [class]="getButtonClass(false)"
          [disabled]="beantwortet && !examModus()"
          (click)="antworten(false)">
          <i class="pi pi-times mr-2"></i> Falsch
        </button>
      </div>

      @if (beantwortet && !examModus()) {
        <div class="p-4 rounded-lg"
             [class]="istRichtig ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <p class="font-semibold mb-1" [class]="istRichtig ? 'text-green-800' : 'text-red-800'">
            {{ istRichtig ? 'Richtig!' : 'Leider falsch!' }}
          </p>
          <p class="text-slate-700 text-sm">{{ uebung().erklaerung }}</p>
        </div>
      }

      @if (beantwortet && examModus()) {
        <div class="p-3 rounded-lg bg-blue-50 border border-blue-200">
          <p class="text-blue-800 text-sm">
            <i class="pi pi-check-circle mr-1"></i>
            Antwort gespeichert – du kannst bis zur Abgabe noch wechseln.
          </p>
        </div>
      }
    </div>
  `
})
export class QuizWahrFalschComponent {
  private sanitizer = inject(DomSanitizer);

  uebung = input.required<WahrFalschUebung>();
  examModus = input(false);
  vorherigeAntwort = input<ExamAntwortDetail | undefined>(undefined);
  beantwortetEvent = output<boolean>();
  examAntwortEvent = output<ExamAntwortDetail>();

  beantwortet = false;
  gewaehlteAntwort?: boolean;
  istRichtig = false;

  constructor() {
    effect(() => {
      // Re-seed on question change
      this.uebung();
      const prev = untracked(() => this.vorherigeAntwort());
      if (prev?.typ === 'wahr-falsch' && prev.wfGewaehlterWert !== undefined) {
        this.gewaehlteAntwort = prev.wfGewaehlterWert;
        this.beantwortet = true;
        this.istRichtig = prev.wfGewaehlterWert === untracked(() => this.uebung()).korrekt;
      } else {
        this.beantwortet = false;
        this.gewaehlteAntwort = undefined;
        this.istRichtig = false;
      }
    });
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  antworten(antwort: boolean): void {
    if (this.beantwortet && !this.examModus()) return;
    this.gewaehlteAntwort = antwort;
    this.istRichtig = antwort === this.uebung().korrekt;
    this.beantwortet = true;
    this.examAntwortEvent.emit({ typ: 'wahr-falsch', wfGewaehlterWert: antwort });
    this.beantwortetEvent.emit(this.istRichtig);
  }

  getButtonClass(wert: boolean): string {
    if (this.examModus()) {
      if (wert === this.gewaehlteAntwort) {
        return 'border-blue-500 bg-blue-50 text-blue-800 cursor-pointer';
      }
      return 'border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer text-slate-700';
    }
    if (!this.beantwortet) {
      return 'border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer text-slate-700';
    }
    if (wert === this.uebung().korrekt) return 'border-green-500 bg-green-50 text-green-800';
    if (wert === this.gewaehlteAntwort) return 'border-red-500 bg-red-50 text-red-800';
    return 'border-slate-200 opacity-50 text-slate-400';
  }
}
