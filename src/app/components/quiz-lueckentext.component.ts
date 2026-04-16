import { Component, input, output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { LueckentextUebung } from '../models/uml.models';

@Component({
  selector: 'app-quiz-lueckentext',
  standalone: true,
  imports: [FormsModule, InputText, Button],
  template: `
    <div class="space-y-4">
      <p class="text-lg font-medium text-slate-800">{{ uebung().frage }}</p>

      @if (uebung().svgDiagramm) {
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200 flex justify-center overflow-x-auto">
          <div [innerHTML]="sanitize(uebung().svgDiagramm!)"></div>
        </div>
      }

      <div class="flex items-center gap-3">
        <input pInputText
               [(ngModel)]="eingabe"
               [disabled]="beantwortet"
               placeholder="Deine Antwort..."
               class="flex-1"
               (keydown.enter)="pruefen()" />
        <p-button label="Prüfen"
                icon="pi pi-check"
                [disabled]="beantwortet || !eingabe.trim()"
                (click)="pruefen()" />
      </div>

      @if (beantwortet) {
        <div class="p-4 rounded-lg"
             [class]="istRichtig ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <p class="font-semibold mb-1" [class]="istRichtig ? 'text-green-800' : 'text-red-800'">
            @if (istRichtig) {
              Richtig!
            } @else {
              Leider falsch! Die richtige Antwort ist: <strong>{{ uebung().antwort }}</strong>
            }
          </p>
          <p class="text-slate-700 text-sm">{{ uebung().erklaerung }}</p>
        </div>
      }
    </div>
  `
})
export class QuizLueckentextComponent {
  private sanitizer = inject(DomSanitizer);

  uebung = input.required<LueckentextUebung>();
  beantwortetEvent = output<boolean>();

  eingabe = '';
  beantwortet = false;
  istRichtig = false;

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  pruefen(): void {
    if (this.beantwortet || !this.eingabe.trim()) return;
    this.istRichtig = this.eingabe.trim().toLowerCase() === this.uebung().antwort.toLowerCase();
    this.beantwortet = true;
    this.beantwortetEvent.emit(this.istRichtig);
  }
}
