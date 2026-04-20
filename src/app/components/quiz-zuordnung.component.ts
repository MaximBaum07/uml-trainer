import { Component, input, output } from '@angular/core';
import { Button } from 'primeng/button';
import { ZuordnungUebung, ZuordnungPaar } from '../models/app.models';

@Component({
  selector: 'app-quiz-zuordnung',
  standalone: true,
  imports: [Button],
  template: `
    <div class="space-y-4">
      <p class="text-lg font-medium text-slate-800">{{ uebung().frage }}</p>
      <p class="text-sm text-slate-500">Klicke zuerst auf einen Begriff (links), dann auf die passende Definition (rechts).</p>

      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Begriffe</p>
          @for (paar of gemischteBegriffe; track paar.begriff) {
            <button
              class="w-full text-left p-3 rounded-lg border-2 text-sm transition-all"
              [class]="getBegriffClass(paar)"
              [disabled]="beantwortet || zugeordnet.has(paar.begriff)"
              (click)="begriffWaehlen(paar)">
              {{ paar.begriff }}
            </button>
          }
        </div>
        <div class="space-y-2">
          <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Definitionen</p>
          @for (paar of gemischteDefinitionen; track paar.definition) {
            <button
              class="w-full text-left p-3 rounded-lg border-2 text-sm transition-all"
              [class]="getDefinitionClass(paar)"
              [disabled]="beantwortet || definitionVerwendet.has(paar.definition)"
              (click)="definitionWaehlen(paar)">
              {{ paar.definition }}
            </button>
          }
        </div>
      </div>

      @if (zuordnungen.length > 0 && !beantwortet) {
        <div class="bg-slate-50 rounded-lg p-3 border border-slate-200">
          <p class="text-xs font-semibold text-slate-500 mb-2">Deine Zuordnungen:</p>
          @for (z of zuordnungen; track z.begriff) {
            <div class="flex items-center gap-2 text-sm py-1">
              <span class="font-medium text-slate-700">{{ z.begriff }}</span>
              <i class="pi pi-arrow-right text-slate-400 text-xs"></i>
              <span class="text-slate-600">{{ z.definition }}</span>
            </div>
          }
        </div>
      }

      @if (zuordnungen.length === uebung().paare.length && !beantwortet) {
        <p-button label="Antworten prüfen"
                icon="pi pi-check"
                (click)="pruefen()" />
      }

      @if (beantwortet) {
        <div class="p-4 rounded-lg"
             [class]="alleRichtig ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'">
          <p class="font-semibold mb-2" [class]="alleRichtig ? 'text-green-800' : 'text-red-800'">
            {{ alleRichtig ? 'Alle richtig!' : richtigeAnzahl + ' von ' + uebung().paare.length + ' richtig.' }}
          </p>
          @if (!alleRichtig) {
            <div class="space-y-1 mb-2">
              @for (paar of uebung().paare; track paar.begriff) {
                <div class="flex items-center gap-2 text-sm">
                  <i [class]="getZuordnungIcon(paar)" class="text-xs"></i>
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
  uebung = input.required<ZuordnungUebung>();
  beantwortetEvent = output<boolean>();

  gemischteBegriffe: ZuordnungPaar[] = [];
  gemischteDefinitionen: ZuordnungPaar[] = [];
  gewaehlterBegriff?: ZuordnungPaar;
  zuordnungen: { begriff: string; definition: string }[] = [];
  zugeordnet = new Set<string>();
  definitionVerwendet = new Set<string>();
  beantwortet = false;
  alleRichtig = false;
  richtigeAnzahl = 0;

  ngOnInit(): void {
    this.gemischteBegriffe = [...this.uebung().paare];
    this.gemischteDefinitionen = this.mischen([...this.uebung().paare]);
  }

  begriffWaehlen(paar: ZuordnungPaar): void {
    this.gewaehlterBegriff = paar;
  }

  definitionWaehlen(paar: ZuordnungPaar): void {
    if (!this.gewaehlterBegriff) return;
    this.zuordnungen.push({
      begriff: this.gewaehlterBegriff.begriff,
      definition: paar.definition
    });
    this.zugeordnet.add(this.gewaehlterBegriff.begriff);
    this.definitionVerwendet.add(paar.definition);
    this.gewaehlterBegriff = undefined;
  }

  pruefen(): void {
    this.richtigeAnzahl = 0;
    const originalMap = new Map(this.uebung().paare.map(p => [p.begriff, p.definition]));
    for (const z of this.zuordnungen) {
      if (originalMap.get(z.begriff) === z.definition) {
        this.richtigeAnzahl++;
      }
    }
    this.alleRichtig = this.richtigeAnzahl === this.uebung().paare.length;
    this.beantwortet = true;
    this.beantwortetEvent.emit(this.alleRichtig);
  }

  getBegriffClass(paar: ZuordnungPaar): string {
    if (this.zugeordnet.has(paar.begriff)) return 'border-slate-200 bg-slate-100 text-slate-400';
    if (this.gewaehlterBegriff === paar) return 'border-blue-500 bg-blue-50 text-blue-800';
    return 'border-slate-200 hover:border-blue-400 cursor-pointer text-slate-700';
  }

  getDefinitionClass(paar: ZuordnungPaar): string {
    if (this.definitionVerwendet.has(paar.definition)) return 'border-slate-200 bg-slate-100 text-slate-400';
    if (!this.gewaehlterBegriff) return 'border-slate-200 text-slate-500 cursor-not-allowed';
    return 'border-slate-200 hover:border-blue-400 cursor-pointer text-slate-700';
  }

  getZuordnungIcon(paar: ZuordnungPaar): string {
    const zuordnung = this.zuordnungen.find(z => z.begriff === paar.begriff);
    if (zuordnung && zuordnung.definition === paar.definition) {
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
