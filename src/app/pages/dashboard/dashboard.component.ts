import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBar } from 'primeng/progressbar';
import { THEMENBEREICHE } from '../../data/themenbereiche';
import { PRUEFUNGS_CONFIGS } from '../../data/pruefungs-configs';
import { ProgressService } from '../../services/progress.service';
import { Themenbereich, PruefungsConfig } from '../../models/app.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, ProgressBar],
  template: `
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-slate-800 mb-2">AP2 Trainer</h1>
      <p class="text-slate-600 text-lg">Lerne alle Themen der Abschlussprüfung Teil 2 – fachlich und WiSo.</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-lg font-semibold text-slate-700">Gesamtfortschritt</h2>
        <span class="text-2xl font-bold text-blue-600">{{ progress.gesamtFortschritt() }}%</span>
      </div>
      <p-progressBar [value]="progress.gesamtFortschritt()" [showValue]="false" styleClass="h-3" />
      <p class="text-sm text-slate-500 mt-2">Lies die Theorie und löse die Quizze, um Fortschritt zu machen.</p>
    </div>

    <!-- Testprüfung -->
    <section class="mb-10">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
          <i class="pi pi-graduation-cap text-red-600 text-lg"></i>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-slate-800">Testprüfung</h2>
          <p class="text-sm text-slate-500">Prüfungssimulation mit Zeitlimit · keine sofortige Auswertung · vollständige Lösung danach</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        @for (config of pruefungsConfigs; track config.id) {
          <a [routerLink]="['/pruefung', config.id]"
             class="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all no-underline">
            <div class="h-1.5" [style.background-color]="config.farbe"></div>
            <div class="p-5">
              <div class="flex items-start gap-3 mb-3">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                     [style.background-color]="config.farbe + '20'">
                  <i [class]="config.icon + ' text-xl'" [style.color]="config.farbe"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-slate-800 group-hover:text-slate-900">{{ config.name }}</h3>
                  <p class="text-xs text-slate-500 mt-0.5">
                    {{ config.fragenAnzahl }} Fragen · {{ config.zeitlimitMinuten }} Min.
                  </p>
                </div>
              </div>
              <p class="text-sm text-slate-600 mb-3">{{ config.beschreibung }}</p>
              <div class="flex items-center gap-2 text-xs text-slate-500">
                <i class="pi pi-clock"></i>
                <span>Zeitlimit: {{ config.zeitlimitMinuten }} Minuten</span>
              </div>
            </div>
          </a>
        }
      </div>
    </section>

    <section class="mb-10">
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
          <i class="pi pi-code text-blue-600 text-lg"></i>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-slate-800">Fachlicher Teil</h2>
          <p class="text-sm text-slate-500">Teil 1 &amp; Teil 2 der AP2 – Planen, Entwickeln, Testen</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        @for (bereich of fachlich; track bereich.id) {
          <a [routerLink]="['/bereich', bereich.id]"
             class="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all no-underline">
            <div class="h-1.5" [style.background-color]="bereich.farbe"></div>
            <div class="p-5">
              <div class="flex items-start gap-3 mb-3">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                     [style.background-color]="bereich.farbe + '20'">
                  <i [class]="bereich.icon + ' text-xl'" [style.color]="bereich.farbe"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-slate-800 group-hover:text-slate-900">{{ bereich.name }}</h3>
                  <p class="text-xs text-slate-500 mt-0.5">{{ bereich.themenIds.length }} Themen</p>
                </div>
              </div>
              <p class="text-sm text-slate-600 mb-4">{{ bereich.beschreibung }}</p>
              <div class="flex items-center gap-2">
                <p-progressBar
                  [value]="progress.getBereichFortschrittProzent(bereich.id)"
                  [showValue]="false"
                  styleClass="h-1.5 flex-1" />
                <span class="text-xs font-medium" [style.color]="bereich.farbe">
                  {{ progress.getBereichFortschrittProzent(bereich.id) }}%
                </span>
              </div>
            </div>
          </a>
        }
      </div>
    </section>

    <section>
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
          <i class="pi pi-building text-slate-600 text-lg"></i>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-slate-800">WiSo</h2>
          <p class="text-sm text-slate-500">Wirtschafts- und Sozialkunde (Teil 3, 60 Min., 30 Aufgaben)</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        @for (bereich of wiso; track bereich.id) {
          <a [routerLink]="['/bereich', bereich.id]"
             class="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all no-underline">
            <div class="h-1.5" [style.background-color]="bereich.farbe"></div>
            <div class="p-5">
              <div class="flex items-start gap-3 mb-3">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                     [style.background-color]="bereich.farbe + '20'">
                  <i [class]="bereich.icon + ' text-xl'" [style.color]="bereich.farbe"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-slate-800 group-hover:text-slate-900">{{ bereich.name }}</h3>
                  <p class="text-xs text-slate-500 mt-0.5">{{ bereich.themenIds.length }} Themen · Karteikarten</p>
                </div>
              </div>
              <p class="text-sm text-slate-600 mb-4">{{ bereich.beschreibung }}</p>
              <div class="flex items-center gap-2">
                <p-progressBar
                  [value]="progress.getBereichFortschrittProzent(bereich.id)"
                  [showValue]="false"
                  styleClass="h-1.5 flex-1" />
                <span class="text-xs font-medium" [style.color]="bereich.farbe">
                  {{ progress.getBereichFortschrittProzent(bereich.id) }}%
                </span>
              </div>
            </div>
          </a>
        }
      </div>
    </section>

    <section>
      <div class="flex items-center gap-3 mb-4">
        <div class="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
          <i class="pi pi-globe text-red-600 text-lg"></i>
        </div>
        <div>
          <h2 class="text-2xl font-bold text-slate-800">Englisch</h2>
          <p class="text-sm text-slate-500">IT Vocabulary · Reading Comprehension · AP2 Exam Tasks</p>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        @for (bereich of englisch; track bereich.id) {
          <a [routerLink]="['/bereich', bereich.id]"
             class="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all no-underline">
            <div class="h-1.5" [style.background-color]="bereich.farbe"></div>
            <div class="p-5">
              <div class="flex items-start gap-3 mb-3">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                     [style.background-color]="bereich.farbe + '20'">
                  <i [class]="bereich.icon + ' text-xl'" [style.color]="bereich.farbe"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="font-semibold text-slate-800 group-hover:text-slate-900">{{ bereich.name }}</h3>
                  <p class="text-xs text-slate-500 mt-0.5">{{ bereich.themenIds.length }} Topics</p>
                </div>
              </div>
              <p class="text-sm text-slate-600 mb-4">{{ bereich.beschreibung }}</p>
              <div class="flex items-center gap-2">
                <p-progressBar
                  [value]="progress.getBereichFortschrittProzent(bereich.id)"
                  [showValue]="false"
                  styleClass="h-1.5 flex-1" />
                <span class="text-xs font-medium" [style.color]="bereich.farbe">
                  {{ progress.getBereichFortschrittProzent(bereich.id) }}%
                </span>
              </div>
            </div>
          </a>
        }
      </div>
    </section>
  `
})
export class DashboardComponent {
  protected readonly progress = inject(ProgressService);
  protected readonly fachlich: Themenbereich[] = THEMENBEREICHE.filter(b => b.kategorie === 'fachlich');
  protected readonly wiso: Themenbereich[] = THEMENBEREICHE.filter(b => b.kategorie === 'wiso');
  protected readonly englisch: Themenbereich[] = THEMENBEREICHE.filter(b => b.kategorie === 'englisch');
  protected readonly pruefungsConfigs: PruefungsConfig[] = PRUEFUNGS_CONFIGS;
}
