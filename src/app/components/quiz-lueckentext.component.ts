import { Component, input, output, effect, untracked, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Button } from 'primeng/button';
import { LueckentextUebung, ExamAntwortDetail } from '../models/app.models';

interface FrageTeil {
  typ: 'text' | 'blank';
  inhalt?: string;
  index?: number;
}

@Component({
  selector: 'app-quiz-lueckentext',
  standalone: true,
  imports: [FormsModule, Button],
  template: `
    <div class="space-y-4">
      @if (uebung().svgDiagramm) {
        <div class="p-4 bg-slate-50 rounded-lg border border-slate-200 flex justify-center overflow-x-auto">
          <div [innerHTML]="sanitize(uebung().svgDiagramm!)"></div>
        </div>
      }

      <!-- Inline question with inputs replacing the blanks -->
      <p class="text-lg font-medium text-slate-800 leading-loose">
        @for (teil of teile; track $index) {
          @if (teil.typ === 'text') {
            <span>{{ teil.inhalt }}</span>
          } @else {
            <input
              type="text"
              [(ngModel)]="eingaben[teil.index!]"
              [disabled]="beantwortet && !examModus()"
              [class]="getBlankClass(teil.index!)"
              [style.width]="inputBreite(teil.index!)"
              (keydown.enter)="pruefen()" />
          }
        }
      </p>

      <div>
        <p-button [label]="examModus() ? 'Speichern' : 'Prüfen'"
                  icon="pi pi-check"
                  [disabled]="(beantwortet && !examModus()) || alleeLeer()"
                  (click)="pruefen()" />
      </div>

      @if (beantwortet && !examModus()) {
        <div class="p-4 rounded-lg"
             [class]="istRichtig ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <p class="font-semibold mb-1" [class]="istRichtig ? 'text-green-800' : 'text-red-800'">
            @if (istRichtig) {
              Richtig!
            } @else {
              Leider falsch! {{ anzahlLuecken > 1 ? 'Die richtigen Antworten sind' : 'Die richtige Antwort ist' }}:
              <strong>{{ korrekteLueckenAntworten }}</strong>
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

  teile: FrageTeil[] = [];
  eingaben: string[] = [];
  anzahlLuecken = 0;
  beantwortet = false;
  istRichtig = false;

  constructor() {
    effect(() => {
      const u = this.uebung();
      const rawParts = u.frage.split(/_{3,}/);
      this.anzahlLuecken = rawParts.length - 1;
      this.teile = [];
      rawParts.forEach((text, i) => {
        if (text) this.teile.push({ typ: 'text', inhalt: text });
        if (i < rawParts.length - 1) this.teile.push({ typ: 'blank', index: i });
      });

      const prev = untracked(() => this.vorherigeAntwort());
      if (prev?.typ === 'lueckentext') {
        if (prev.lueckentextEingaben?.length === this.anzahlLuecken) {
          this.eingaben = [...prev.lueckentextEingaben];
        } else if (prev.lueckentextEingabe) {
          this.eingaben = new Array(this.anzahlLuecken).fill('');
          this.eingaben[0] = prev.lueckentextEingabe;
        } else {
          this.eingaben = new Array(this.anzahlLuecken).fill('');
        }
        this.beantwortet = true;
        const antworten = u.antworten ?? [u.antwort];
        this.istRichtig = this.eingaben.every((e, i) =>
          e.trim().toLowerCase() === (antworten[i] ?? '').toLowerCase()
        );
      } else {
        this.eingaben = new Array(this.anzahlLuecken).fill('');
        this.beantwortet = false;
        this.istRichtig = false;
      }
    });
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  alleeLeer(): boolean {
    return this.eingaben.some(e => !e.trim());
  }

  get korrekteLueckenAntworten(): string {
    const antworten = this.uebung().antworten ?? [this.uebung().antwort];
    return antworten.join(' / ');
  }

  getBlankClass(index: number): string {
    const base = 'border-b-2 bg-transparent focus:outline-none px-1 mx-1 font-semibold text-center';
    if (this.examModus()) {
      return `${base} border-blue-400 text-slate-800`;
    }
    if (!this.beantwortet) {
      return `${base} border-blue-400 text-slate-800 focus:border-blue-600`;
    }
    const antworten = this.uebung().antworten ?? [this.uebung().antwort];
    const richtig = this.eingaben[index]?.trim().toLowerCase() === (antworten[index] ?? '').toLowerCase();
    return richtig
      ? `${base} border-green-500 text-green-800`
      : `${base} border-red-500 text-red-800`;
  }

  inputBreite(index: number): string {
    const antworten = this.uebung().antworten ?? [this.uebung().antwort];
    return Math.max((antworten[index] ?? '').length + 2, 6) + 'ch';
  }

  pruefen(): void {
    const trimmed = this.eingaben.map(e => e.trim());
    if (trimmed.some(e => !e)) return;
    if (this.beantwortet && !this.examModus()) return;
    const antworten = this.uebung().antworten ?? [this.uebung().antwort];
    this.istRichtig = trimmed.every((e, i) =>
      e.toLowerCase() === (antworten[i] ?? '').toLowerCase()
    );
    this.beantwortet = true;
    this.examAntwortEvent.emit({
      typ: 'lueckentext',
      lueckentextEingabe: trimmed.join(' / '),
      lueckentextEingaben: trimmed
    });
    this.beantwortetEvent.emit(this.istRichtig);
  }
}
