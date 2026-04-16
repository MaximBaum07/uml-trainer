import { Component, input, output, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { WahrFalschUebung } from '../models/uml.models';

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
        <p class="text-blue-900 font-medium text-lg italic">"{{ uebung().aussage }}"</p>
      </div>

      <div class="flex gap-4">
        <button
          class="flex-1 p-4 rounded-lg border-2 font-semibold text-lg transition-all"
          [class]="getButtonClass(true)"
          [disabled]="beantwortet"
          (click)="antworten(true)">
          <i class="pi pi-check mr-2"></i> Wahr
        </button>
        <button
          class="flex-1 p-4 rounded-lg border-2 font-semibold text-lg transition-all"
          [class]="getButtonClass(false)"
          [disabled]="beantwortet"
          (click)="antworten(false)">
          <i class="pi pi-times mr-2"></i> Falsch
        </button>
      </div>

      @if (beantwortet) {
        <div class="p-4 rounded-lg"
             [class]="istRichtig ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <p class="font-semibold mb-1" [class]="istRichtig ? 'text-green-800' : 'text-red-800'">
            {{ istRichtig ? 'Richtig!' : 'Leider falsch!' }}
          </p>
          <p class="text-slate-700 text-sm">{{ uebung().erklaerung }}</p>
        </div>
      }
    </div>
  `
})
export class QuizWahrFalschComponent {
  private sanitizer = inject(DomSanitizer);

  uebung = input.required<WahrFalschUebung>();
  beantwortetEvent = output<boolean>();

  beantwortet = false;
  gewaehlteAntwort?: boolean;
  istRichtig = false;

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  antworten(antwort: boolean): void {
    if (this.beantwortet) return;
    this.gewaehlteAntwort = antwort;
    this.istRichtig = antwort === this.uebung().korrekt;
    this.beantwortet = true;
    this.beantwortetEvent.emit(this.istRichtig);
  }

  getButtonClass(wert: boolean): string {
    if (!this.beantwortet) {
      return 'border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer text-slate-700';
    }
    if (wert === this.uebung().korrekt) {
      return 'border-green-500 bg-green-50 text-green-800';
    }
    if (wert === this.gewaehlteAntwort) {
      return 'border-red-500 bg-red-50 text-red-800';
    }
    return 'border-slate-200 opacity-50 text-slate-400';
  }
}
