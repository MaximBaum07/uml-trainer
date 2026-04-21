import { Component, input, output, effect, untracked, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { FreitextUebung, ExamAntwortDetail } from '../models/app.models';

@Component({
  selector: 'app-quiz-freitext',
  standalone: true,
  imports: [FormsModule, ButtonModule],
  template: `
    <div class="space-y-4">
      <p class="text-lg font-medium text-slate-800 whitespace-pre-line"><span [innerHTML]="sanitize(uebung().frage)"></span></p>

      @if (uebung().svgDiagramm) {
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200 flex justify-center overflow-x-auto">
          <div [innerHTML]="sanitize(uebung().svgDiagramm!)"></div>
        </div>
      }

      <textarea
        [(ngModel)]="eingabe"
        [disabled]="phase !== 'eingabe' && !examModus()"
        placeholder="Deine Antwort... (frei formulieren, wie in der Prüfung)"
        rows="6"
        class="w-full p-3 border border-slate-300 rounded-lg font-sans text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent disabled:bg-slate-50 disabled:text-slate-600"></textarea>

      @if (!examModus()) {
        @if (phase === 'eingabe') {
          <div class="flex gap-2">
            <p-button
              label="Musterlösung anzeigen"
              icon="pi pi-eye"
              [disabled]="!eingabe.trim()"
              (onClick)="loesungZeigen()" />
            <p-button
              label="Überspringen"
              icon="pi pi-forward"
              severity="secondary"
              [outlined]="true"
              (onClick)="loesungZeigen()" />
          </div>
        }

        @if (phase !== 'eingabe') {
          <div class="p-4 rounded-lg bg-blue-50 border border-blue-200">
            <p class="text-xs uppercase tracking-widest text-blue-700 mb-2 font-semibold">Musterlösung</p>
            <p class="text-slate-800 text-sm leading-relaxed whitespace-pre-line">{{ uebung().musterloesung }}</p>

            @if (getroffene.length > 0 || verfehlte.length > 0) {
              <div class="mt-3 pt-3 border-t border-blue-200 grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                @if (getroffene.length > 0) {
                  <div>
                    <span class="font-semibold text-green-700">✓ Erwähnt:</span>
                    <span class="text-slate-700"> {{ getroffene.join(', ') }}</span>
                  </div>
                }
                @if (verfehlte.length > 0) {
                  <div>
                    <span class="font-semibold text-amber-700">○ Fehlt evtl.:</span>
                    <span class="text-slate-700"> {{ verfehlte.join(', ') }}</span>
                  </div>
                }
              </div>
            }

            @if (uebung().erklaerung) {
              <div class="mt-3 pt-3 border-t border-blue-200">
                <p class="text-xs uppercase tracking-widest text-slate-500 mb-1 font-semibold">Erklärung</p>
                <p class="text-slate-700 text-sm leading-relaxed">{{ uebung().erklaerung }}</p>
              </div>
            }
          </div>

          @if (phase === 'loesung') {
            <div>
              <p class="text-sm font-medium text-slate-700 mb-2">Wie hast du abgeschnitten?</p>
              <div class="grid grid-cols-3 gap-2">
                <p-button
                  label="Falsch"
                  icon="pi pi-times"
                  severity="danger"
                  styleClass="w-full"
                  (onClick)="bewerten(false)" />
                <p-button
                  label="Teilweise"
                  icon="pi pi-minus-circle"
                  severity="warn"
                  styleClass="w-full"
                  (onClick)="bewerten(false)" />
                <p-button
                  label="Richtig"
                  icon="pi pi-check"
                  severity="success"
                  styleClass="w-full"
                  (onClick)="bewerten(true)" />
              </div>
            </div>
          }
        }
      }

      @if (examModus()) {
        <div class="flex items-center gap-2">
          <p-button
            [label]="gespeichert ? 'Erneut speichern' : 'Antwort speichern'"
            icon="pi pi-save"
            [disabled]="!eingabe.trim()"
            (onClick)="examSpeichern()" />
          @if (gespeichert) {
            <span class="text-xs text-blue-700">
              <i class="pi pi-check-circle mr-1"></i>
              Gespeichert – kannst du bis zur Abgabe beliebig anpassen.
            </span>
          }
        </div>
      }
    </div>
  `
})
export class QuizFreitextComponent {
  private sanitizer = inject(DomSanitizer);

  uebung = input.required<FreitextUebung>();
  examModus = input(false);
  vorherigeAntwort = input<ExamAntwortDetail | undefined>(undefined);
  beantwortetEvent = output<boolean>();
  examAntwortEvent = output<ExamAntwortDetail>();

  eingabe = '';
  phase: 'eingabe' | 'loesung' | 'bewertet' = 'eingabe';
  gespeichert = false;
  getroffene: string[] = [];
  verfehlte: string[] = [];

  constructor() {
    effect(() => {
      this.uebung();
      const prev = untracked(() => this.vorherigeAntwort());
      if (prev?.typ === 'freitext' && prev.freitextEingabe !== undefined) {
        this.eingabe = prev.freitextEingabe;
        this.gespeichert = true;
      } else {
        this.eingabe = '';
        this.gespeichert = false;
      }
      this.phase = 'eingabe';
      this.getroffene = [];
      this.verfehlte = [];
    });
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  loesungZeigen(): void {
    const stichwoerter = this.uebung().stichwoerter ?? [];
    const antwort = this.eingabe.toLowerCase();
    this.getroffene = stichwoerter.filter(w => antwort.includes(w.toLowerCase()));
    this.verfehlte = stichwoerter.filter(w => !antwort.includes(w.toLowerCase()));
    this.phase = 'loesung';
  }

  bewerten(richtig: boolean): void {
    this.phase = 'bewertet';
    this.beantwortetEvent.emit(richtig);
  }

  examSpeichern(): void {
    if (!this.eingabe.trim()) return;
    this.examAntwortEvent.emit({ typ: 'freitext', freitextEingabe: this.eingabe.trim() });
    if (!this.gespeichert) {
      this.gespeichert = true;
      this.beantwortetEvent.emit(false);
    }
  }
}
