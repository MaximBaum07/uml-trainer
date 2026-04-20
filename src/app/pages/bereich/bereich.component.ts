import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProgressBar } from 'primeng/progressbar';
import { getBereich } from '../../data/themenbereiche';
import { getThemenFuerBereich } from '../../data/themen';
import { ProgressService } from '../../services/progress.service';
import { Themenbereich, ThemaInfo } from '../../models/app.models';

@Component({
  selector: 'app-bereich',
  standalone: true,
  imports: [RouterLink, ProgressBar],
  template: `
    @if (bereich) {
      <div class="mb-6">
        <a routerLink="/" class="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 no-underline mb-4">
          <i class="pi pi-arrow-left"></i> Zur Übersicht
        </a>
        <div class="flex items-start gap-4">
          <div class="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
               [style.background-color]="bereich.farbe + '20'">
            <i [class]="bereich.icon + ' text-2xl'" [style.color]="bereich.farbe"></i>
          </div>
          <div class="flex-1">
            <h1 class="text-3xl font-bold text-slate-800">{{ bereich.name }}</h1>
            <p class="text-slate-600 mt-1">{{ bereich.beschreibung }}</p>
          </div>
          <div class="text-right">
            <div class="text-3xl font-bold" [style.color]="bereich.farbe">
              {{ progress.getBereichFortschrittProzent(bereich.id) }}%
            </div>
            <p class="text-xs text-slate-500">Fortschritt</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        @for (thema of themen; track thema.id) {
          <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div class="p-5">
              <div class="flex items-start gap-3 mb-3">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                     [style.background-color]="thema.farbe + '20'">
                  <i [class]="thema.icon" [style.color]="thema.farbe"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-slate-800">{{ thema.name }}</h3>
                  <p class="text-xs text-slate-500 mt-0.5">{{ thema.beschreibung }}</p>
                </div>
                <span class="text-sm font-medium shrink-0" [style.color]="thema.farbe">
                  {{ progress.getThemaFortschrittProzent(thema.id) }}%
                </span>
              </div>
              <p-progressBar
                [value]="progress.getThemaFortschrittProzent(thema.id)"
                [showValue]="false"
                styleClass="h-1.5 mb-4" />
              <div class="flex flex-wrap gap-2">
                @if (thema.hatTheorie) {
                  <a [routerLink]="['/lernen', thema.id]"
                     class="flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium no-underline transition-colors"
                     [style.background-color]="thema.farbe + '15'"
                     [style.color]="thema.farbe">
                    <i class="pi pi-book"></i> Lernen
                  </a>
                }
                @if (thema.hatQuiz) {
                  <a [routerLink]="['/ueben', thema.id]"
                     class="flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium no-underline transition-colors bg-slate-100 text-slate-700 hover:bg-slate-200">
                    <i class="pi pi-pencil"></i> Üben
                  </a>
                }
                @if (thema.hatKarteikarten) {
                  <a [routerLink]="['/karteikarten', thema.id]"
                     class="flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium no-underline transition-colors bg-amber-50 text-amber-700 hover:bg-amber-100">
                    <i class="pi pi-clone"></i> Karten
                  </a>
                }
              </div>
            </div>
          </div>
        }
      </div>
    } @else {
      <p class="text-slate-500">Themenbereich nicht gefunden.</p>
    }
  `
})
export class BereichComponent implements OnInit {
  private route = inject(ActivatedRoute);
  protected readonly progress = inject(ProgressService);

  bereich?: Themenbereich;
  themen: ThemaInfo[] = [];

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('bereichId') ?? '';
    this.bereich = getBereich(id);
    this.themen = this.bereich ? getThemenFuerBereich(this.bereich.id) : [];
  }
}
