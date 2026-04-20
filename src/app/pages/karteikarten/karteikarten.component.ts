import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { KARTEIKARTEN_SETS } from '../../data/karteikarten-data';
import { getThema } from '../../data/themen';
import { ProgressService } from '../../services/progress.service';
import { Karteikarte, ThemaInfo } from '../../models/app.models';

type Rating = 'gewusst' | 'unsicher' | 'nichtgewusst';

@Component({
  selector: 'app-karteikarten',
  standalone: true,
  imports: [RouterLink, ButtonModule, ProgressBar],
  template: `
    @if (thema && karten.length > 0) {
      <div class="mb-4 flex items-center justify-between">
        <a [routerLink]="['/bereich', thema.bereichId]"
           class="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 no-underline">
          <i class="pi pi-arrow-left"></i> Zurück
        </a>
        <div class="text-right">
          <p class="text-lg font-bold text-slate-800">Karte {{ index + 1 }}/{{ karten.length }}</p>
          <p class="text-sm text-green-600">
            <i class="pi pi-check-circle mr-1"></i>{{ gewusstCount }} gewusst
          </p>
        </div>
      </div>

      <p-progressBar
        [value]="(index / karten.length) * 100"
        [showValue]="false"
        styleClass="h-2 mb-6" />

      <div class="mb-8">
        <div class="relative h-[420px] cursor-pointer select-none" (click)="toggle()">
          <div class="absolute inset-0 transition-transform duration-500 preserve-3d"
               [class.rotate-y-180]="gedreht">
            <!-- Vorderseite -->
            <div class="absolute inset-0 backface-hidden bg-white rounded-2xl shadow-md border border-slate-200 p-10 flex flex-col items-center justify-center text-center">
              <span class="uppercase text-xs tracking-widest text-slate-400 mb-4">Frage</span>
              <p class="text-2xl font-semibold text-slate-800 leading-relaxed">
                {{ aktuell.frage }}
              </p>
              <p class="absolute bottom-4 text-xs text-slate-400">
                <i class="pi pi-refresh mr-1"></i>Klicken zum Umdrehen
              </p>
            </div>
            <!-- Rückseite -->
            <div class="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl shadow-md border p-10 flex flex-col justify-center overflow-y-auto"
                 [style.background-color]="thema.farbe + '10'"
                 [style.border-color]="thema.farbe + '30'">
              <span class="uppercase text-xs tracking-widest mb-3" [style.color]="thema.farbe">Antwort</span>
              <p class="text-lg font-semibold text-slate-800 leading-relaxed mb-4">
                {{ aktuell.antwort }}
              </p>
              @if (aktuell.erklaerung) {
                <div class="pt-4 border-t" [style.border-color]="thema.farbe + '30'">
                  <p class="text-xs uppercase tracking-widest text-slate-500 mb-2">Erklärung</p>
                  <p class="text-sm text-slate-700 leading-relaxed" [innerHTML]="erklaerungSafe"></p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>

      @if (gedreht) {
        <div class="grid grid-cols-3 gap-3">
          <p-button
            label="Nicht gewusst"
            icon="pi pi-times"
            severity="danger"
            styleClass="w-full"
            (onClick)="bewerten('nichtgewusst')" />
          <p-button
            label="Unsicher"
            icon="pi pi-question"
            severity="warn"
            styleClass="w-full"
            (onClick)="bewerten('unsicher')" />
          <p-button
            label="Gewusst"
            icon="pi pi-check"
            severity="success"
            styleClass="w-full"
            (onClick)="bewerten('gewusst')" />
        </div>
      } @else {
        <div class="text-center">
          <p-button
            label="Antwort anzeigen"
            icon="pi pi-eye"
            styleClass="w-full max-w-xs"
            (onClick)="toggle()" />
        </div>
      }
    } @else if (thema) {
      <div class="bg-white rounded-xl p-8 text-center">
        <p class="text-slate-500 mb-4">Für dieses Thema gibt es noch keine Karteikarten.</p>
        <a [routerLink]="['/bereich', thema.bereichId]" class="text-blue-600 no-underline">Zurück zum Bereich</a>
      </div>
    } @else {
      <p class="text-slate-500">Thema nicht gefunden.</p>
    }
  `,
  styles: [`
    .preserve-3d { transform-style: preserve-3d; }
    .backface-hidden { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
    .rotate-y-180 { transform: rotateY(180deg); }
  `]
})
export class KarteikartenComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private progress = inject(ProgressService);
  private sanitizer = inject(DomSanitizer);

  typ = '';
  thema?: ThemaInfo;
  karten: Karteikarte[] = [];
  index = 0;
  gedreht = false;
  gewusstCount = 0;
  erklaerungSafe: SafeHtml = '';

  get aktuell(): Karteikarte {
    return this.karten[this.index];
  }

  ngOnInit(): void {
    this.typ = this.route.snapshot.paramMap.get('typ') ?? '';
    this.thema = getThema(this.typ);
    const set = KARTEIKARTEN_SETS.find(s => s.themaId === this.typ);
    this.karten = set ? [...set.karten] : [];
    this.updateErklaerung();
  }

  ngOnDestroy(): void {
    // Fortschritt wird bereits pro Karte gespeichert.
  }

  toggle(): void {
    this.gedreht = !this.gedreht;
  }

  bewerten(rating: Rating): void {
    this.progress.karteStatusSetzen(this.typ, this.aktuell.id, rating);
    if (rating === 'gewusst') this.gewusstCount++;

    if (this.index < this.karten.length - 1) {
      this.index++;
      this.gedreht = false;
      this.updateErklaerung();
    } else {
      // Am Ende: als Quiz-Ergebnis speichern (für Fortschrittsanzeige).
      this.progress.quizErgebnisSpeichern(this.typ, {
        richtig: this.gewusstCount,
        gesamt: this.karten.length,
        antworten: []
      });
      alert(`Fertig! ${this.gewusstCount} von ${this.karten.length} gewusst.`);
    }
  }

  private updateErklaerung(): void {
    this.erklaerungSafe = this.aktuell?.erklaerung
      ? this.sanitizer.bypassSecurityTrustHtml(this.aktuell.erklaerung)
      : '';
  }
}
