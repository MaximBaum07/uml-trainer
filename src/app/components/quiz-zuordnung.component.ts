import { Component, input, output, inject, effect, untracked } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Button } from 'primeng/button';
import { ZuordnungUebung, ZuordnungPaar, ExamAntwortDetail } from '../models/app.models';

interface Paarung {
  begriff: string;
  definition: string;
  farbIndex: number;
}

const FARBEN = [
  { bg: 'bg-blue-100',    border: 'border-blue-400',    text: 'text-blue-800',    chip: 'bg-blue-500' },
  { bg: 'bg-emerald-100', border: 'border-emerald-400', text: 'text-emerald-800', chip: 'bg-emerald-500' },
  { bg: 'bg-amber-100',   border: 'border-amber-400',   text: 'text-amber-800',   chip: 'bg-amber-500' },
  { bg: 'bg-purple-100',  border: 'border-purple-400',  text: 'text-purple-800',  chip: 'bg-purple-500' },
  { bg: 'bg-pink-100',    border: 'border-pink-400',    text: 'text-pink-800',    chip: 'bg-pink-500' },
  { bg: 'bg-cyan-100',    border: 'border-cyan-400',    text: 'text-cyan-800',    chip: 'bg-cyan-500' },
  { bg: 'bg-orange-100',  border: 'border-orange-400',  text: 'text-orange-800',  chip: 'bg-orange-500' },
  { bg: 'bg-indigo-100',  border: 'border-indigo-400',  text: 'text-indigo-800',  chip: 'bg-indigo-500' }
];

@Component({
  selector: 'app-quiz-zuordnung',
  standalone: true,
  imports: [Button],
  template: `
    <div class="space-y-4">
      <p class="text-lg font-medium text-slate-800"><span [innerHTML]="sanitize(uebung().frage)"></span></p>
      <p class="text-sm text-slate-500">
        Klicke zuerst auf einen Begriff (links), dann auf die passende Definition (rechts).
        Auf ein bereits gepaartes Element klicken, um die Zuordnung wieder zu lösen.
      </p>

      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Begriffe</p>
          @for (paar of gemischteBegriffe; track paar.begriff) {
            <button type="button"
              class="w-full text-left p-3 rounded-lg border-2 text-sm transition-all flex items-center gap-2"
              [class]="getBegriffKlass(paar)"
              [disabled]="beantwortet"
              (click)="begriffKlick(paar)">
              @let bp = getBegriffPaarung(paar.begriff);
              @if (bp) {
                <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      [class]="getFarbe(bp.farbIndex).chip">
                  {{ paarungen.indexOf(bp) + 1 }}
                </span>
              }
              <span class="flex-1">{{ paar.begriff }}</span>
              @if (bp && !beantwortet) {
                <i class="pi pi-times text-xs opacity-60"></i>
              }
            </button>
          }
        </div>

        <div class="space-y-2">
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Definitionen</p>
          @for (paar of gemischteDefinitionen; track paar.definition) {
            <button type="button"
              class="w-full text-left p-3 rounded-lg border-2 text-sm transition-all flex items-center gap-2"
              [class]="getDefinitionKlass(paar)"
              [disabled]="beantwortet"
              (click)="definitionKlick(paar)">
              @let dp = getDefinitionPaarung(paar.definition);
              @if (dp) {
                <span class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      [class]="getFarbe(dp.farbIndex).chip">
                  {{ paarungen.indexOf(dp) + 1 }}
                </span>
              }
              <span class="flex-1">{{ paar.definition }}</span>
              @if (dp && !beantwortet) {
                <i class="pi pi-times text-xs opacity-60"></i>
              }
            </button>
          }
        </div>
      </div>

      @if (paarungen.length > 0 && !beantwortet) {
        <div class="bg-slate-50 rounded-lg p-3 border border-slate-200">
          <p class="text-xs font-semibold text-slate-500 mb-2">
            Deine Zuordnungen ({{ paarungen.length }}/{{ uebung().paare.length }}):
          </p>
          <div class="space-y-1">
            @for (p of paarungen; track p.begriff + '::' + p.definition; let i = $index) {
              @let f = getFarbe(p.farbIndex);
              <div class="flex items-center gap-2 text-sm py-1.5 px-2 rounded"
                   [class]="f.bg">
                <span class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      [class]="f.chip">
                  {{ i + 1 }}
                </span>
                <span class="font-medium flex-1 truncate" [class]="f.text">{{ p.begriff }}</span>
                <i class="pi pi-arrow-right text-slate-400 text-xs shrink-0"></i>
                <span class="flex-1 truncate" [class]="f.text">{{ p.definition }}</span>
                <button type="button"
                        (click)="paarungEntfernen(i)"
                        class="w-6 h-6 rounded flex items-center justify-center hover:bg-white/70 transition-colors shrink-0"
                        [attr.aria-label]="'Zuordnung ' + (i + 1) + ' entfernen'">
                  <i class="pi pi-times text-xs" [class]="f.text"></i>
                </button>
              </div>
            }
          </div>
        </div>
      }

      @if (paarungen.length === uebung().paare.length && !beantwortet && !examModus()) {
        <p-button label="Antworten prüfen"
                  icon="pi pi-check"
                  (click)="pruefen()" />
      }

      @if (examModus() && paarungen.length === uebung().paare.length) {
        <div class="p-3 rounded-lg bg-blue-50 border border-blue-200">
          <p class="text-blue-800 text-sm">
            <i class="pi pi-check-circle mr-1"></i>
            Alle {{ uebung().paare.length }} Paare zugeordnet – du kannst die Zuordnung bis zur Abgabe noch ändern.
          </p>
        </div>
      }

      @if (beantwortet && !examModus()) {
        <div class="p-4 rounded-lg"
             [class]="alleRichtig ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <p class="font-semibold mb-2" [class]="alleRichtig ? 'text-green-800' : 'text-red-800'">
            {{ alleRichtig ? 'Alle richtig!' : richtigeAnzahl + ' von ' + uebung().paare.length + ' richtig.' }}
          </p>
          @if (!alleRichtig) {
            <div class="space-y-1 mb-2">
              @for (paar of uebung().paare; track paar.begriff) {
                <div class="flex items-center gap-2 text-sm">
                  <i [class]="getErgebnisIcon(paar)" class="text-xs"></i>
                  <span class="font-medium">{{ paar.begriff }}</span>
                  <i class="pi pi-arrow-right text-slate-400 text-xs"></i>
                  <span>{{ paar.definition }}</span>
                </div>
              }
            </div>
          }
          <p class="text-slate-700 text-sm">{{ uebung().erklaerung }}</p>
        </div>
      }
    </div>
  `
})
export class QuizZuordnungComponent {
  private sanitizer = inject(DomSanitizer);

  uebung = input.required<ZuordnungUebung>();
  examModus = input(false);
  vorherigeAntwort = input<ExamAntwortDetail | undefined>(undefined);
  beantwortetEvent = output<boolean>();
  examAntwortEvent = output<ExamAntwortDetail>();

  gemischteBegriffe: ZuordnungPaar[] = [];
  gemischteDefinitionen: ZuordnungPaar[] = [];
  gewaehlterBegriff?: ZuordnungPaar;
  paarungen: Paarung[] = [];
  private naechsterFarbIndex = 0;

  beantwortet = false;
  alleRichtig = false;
  richtigeAnzahl = 0;

  readonly FARBEN = FARBEN;

  constructor() {
    effect(() => {
      const u = this.uebung();
      const prev = untracked(() => this.vorherigeAntwort());
      this.gemischteBegriffe = this.mischen([...u.paare]);
      this.gemischteDefinitionen = this.mischen([...u.paare]);
      this.paarungen = [];
      this.naechsterFarbIndex = 0;
      this.gewaehlterBegriff = undefined;
      this.beantwortet = false;
      this.alleRichtig = false;
      this.richtigeAnzahl = 0;

      if (prev?.typ === 'zuordnung' && prev.zuordnungen) {
        for (const z of prev.zuordnungen) {
          this.paarungen.push({
            begriff: z.begriff,
            definition: z.definition,
            farbIndex: this.naechsterFarbIndex++
          });
        }
      }
    });
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  getBegriffPaarung(begriff: string): Paarung | undefined {
    return this.paarungen.find(p => p.begriff === begriff);
  }

  getDefinitionPaarung(def: string): Paarung | undefined {
    return this.paarungen.find(p => p.definition === def);
  }

  begriffKlick(paar: ZuordnungPaar): void {
    if (this.beantwortet) return;

    const vorhanden = this.getBegriffPaarung(paar.begriff);
    if (vorhanden) {
      this.paarungen = this.paarungen.filter(p => p !== vorhanden);
      if (this.gewaehlterBegriff?.begriff === paar.begriff) {
        this.gewaehlterBegriff = undefined;
      }
      this.emitExam();
      return;
    }

    if (this.gewaehlterBegriff?.begriff === paar.begriff) {
      this.gewaehlterBegriff = undefined;
    } else {
      this.gewaehlterBegriff = paar;
    }
  }

  definitionKlick(paar: ZuordnungPaar): void {
    if (this.beantwortet) return;

    const vorhanden = this.getDefinitionPaarung(paar.definition);
    if (vorhanden) {
      this.paarungen = this.paarungen.filter(p => p !== vorhanden);
      this.emitExam();
      return;
    }

    if (!this.gewaehlterBegriff) return;

    this.paarungen = [
      ...this.paarungen,
      {
        begriff: this.gewaehlterBegriff.begriff,
        definition: paar.definition,
        farbIndex: this.naechsterFarbIndex % FARBEN.length
      }
    ];
    this.naechsterFarbIndex++;
    this.gewaehlterBegriff = undefined;
    this.emitExam();
  }

  paarungEntfernen(index: number): void {
    if (this.beantwortet) return;
    this.paarungen = this.paarungen.filter((_, i) => i !== index);
    this.emitExam();
  }

  pruefen(): void {
    if (this.examModus()) return;
    this.richtigeAnzahl = 0;
    const originalMap = new Map(this.uebung().paare.map(p => [p.begriff, p.definition]));
    for (const z of this.paarungen) {
      if (originalMap.get(z.begriff) === z.definition) {
        this.richtigeAnzahl++;
      }
    }
    this.alleRichtig = this.richtigeAnzahl === this.uebung().paare.length;
    this.beantwortet = true;
    this.beantwortetEvent.emit(this.alleRichtig);
  }

  private emitExam(): void {
    if (!this.examModus()) return;
    this.examAntwortEvent.emit({
      typ: 'zuordnung',
      zuordnungen: this.paarungen.map(p => ({ begriff: p.begriff, definition: p.definition }))
    });
  }

  getBegriffKlass(paar: ZuordnungPaar): string {
    const paarung = this.getBegriffPaarung(paar.begriff);
    if (paarung) {
      const f = FARBEN[paarung.farbIndex % FARBEN.length];
      return `${f.border} ${f.bg} ${f.text} cursor-pointer`;
    }
    if (this.gewaehlterBegriff === paar) {
      return 'border-blue-500 bg-blue-50 text-blue-800 ring-2 ring-blue-300';
    }
    return 'border-slate-200 hover:border-blue-400 cursor-pointer text-slate-700';
  }

  getDefinitionKlass(paar: ZuordnungPaar): string {
    const paarung = this.getDefinitionPaarung(paar.definition);
    if (paarung) {
      const f = FARBEN[paarung.farbIndex % FARBEN.length];
      return `${f.border} ${f.bg} ${f.text} cursor-pointer`;
    }
    if (!this.gewaehlterBegriff) {
      return 'border-slate-200 text-slate-500 cursor-not-allowed';
    }
    return 'border-slate-200 hover:border-blue-400 cursor-pointer text-slate-700';
  }

  getFarbe(index: number): typeof FARBEN[number] {
    return FARBEN[index % FARBEN.length];
  }

  getErgebnisIcon(paar: ZuordnungPaar): string {
    const paarung = this.paarungen.find(p => p.begriff === paar.begriff);
    if (paarung && paarung.definition === paar.definition) {
      return 'pi pi-check-circle text-green-600';
    }
    return 'pi pi-times-circle text-red-600';
  }

  private mischen<T>(arr: T[]): T[] {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
}
