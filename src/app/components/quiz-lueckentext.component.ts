import { Component, input, output, effect, untracked, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { InputText } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { LueckentextUebung, ExamAntwortDetail } from '../models/app.models';

@Component({
  selector: 'app-quiz-lueckentext',
  standalone: true,
  imports: [FormsModule, InputText, Button],
  template: `
    <div class="space-y-4">
      <p class="text-lg font-medium text-slate-800"><span [innerHTML]="sanitize(uebung().frage)"></span></p>

      @if (uebung().svgDiagramm) {
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200 flex justify-center overflow-x-auto">
          <div [innerHTML]="sanitize(uebung().svgDiagramm!)"></div>
        </div>
      }

      <div class="flex items-center gap-3">
        <input pInputText
               [(ngModel)]="eingabe"
               [disabled]="beantwortet && !examModus()"
               placeholder="Deine Antwort..."
               class="flex-1"
               (keydown.enter)="pruefen()" />
        <p-button [label]="examModus() ? 'Speichern' : 'Prüfen'"
                icon="pi pi-check"
                [disabled]="(beantwortet && !examModus()) || !eingabe.trim()"
                (click)="pruefen()" />
      </div>

      @if (beantwortet && !examModus()) {
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

      @if (beantwortet && examModus()) {
        <div class="p-3 rounded-lg bg-blue-50 border border-blue-200">
          <p class="text-blue-800 text-sm">
            <i class="pi pi-check-circle mr-1"></i>
            Antwort gespeichert – du kannst sie bis zur Abgabe noch ändern.
          </p>
        </div>
      }
    </div>
  `
})
export class QuizLueckentextComponent {
  private sanitizer = inject(DomSanitizer);

  uebung = input.required<LueckentextUebung>();
  examModus = input(false);
  vorherigeAntwort = input<ExamAntwortDetail | undefined>(undefined);
  beantwortetEvent = output<boolean>();
  examAntwortEvent = output<ExamAntwortDetail>();

  eingabe = '';
  beantwortet = false;
  istRichtig = false;

  constructor() {
    effect(() => {
      this.uebung();
      const prev = untracked(() => this.vorherigeAntwort());
      if (prev?.typ === 'lueckentext' && prev.lueckentextEingabe) {
        this.eingabe = prev.lueckentextEingabe;
        this.beantwortet = true;
        this.istRichtig = this.eingabe.trim().toLowerCase() === untracked(() => this.uebung()).antwort.toLowerCase();
      } else {
        this.eingabe = '';
        this.beantwortet = false;
        this.istRichtig = false;
      }
    });
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  pruefen(): void {
    if (!this.eingabe.trim()) return;
    if (this.beantwortet && !this.examModus()) return;
    this.istRichtig = this.eingabe.trim().toLowerCase() === this.uebung().antwort.toLowerCase();
    this.beantwortet = true;
    this.examAntwortEvent.emit({ typ: 'lueckentext', lueckentextEingabe: this.eingabe.trim() });
    this.beantwortetEvent.emit(this.istRichtig);
  }
}
