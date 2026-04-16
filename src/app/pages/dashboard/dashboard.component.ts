import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressBar } from 'primeng/progressbar';
import { DIAGRAM_INFOS } from '../../data/diagram-info';
import { ProgressService } from '../../services/progress.service';
import { DiagramInfo } from '../../models/uml.models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, ProgressBar],
  template: `
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-slate-800 mb-2">UML Diagramme lernen</h1>
      <p class="text-slate-600 text-lg">Bereite dich auf die AP2 Prüfung vor – Schritt für Schritt.</p>
    </div>

    <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
      <div class="flex items-center justify-between mb-3">
        <h2 class="text-lg font-semibold text-slate-700">Gesamtfortschritt</h2>
        <span class="text-2xl font-bold text-blue-600">{{ progress.gesamtFortschritt() }}%</span>
      </div>
      <p-progressBar [value]="progress.gesamtFortschritt()" [showValue]="false" styleClass="h-3" />
      <p class="text-sm text-slate-500 mt-2">Lies die Theorie und löse die Quizze, um Fortschritt zu machen.</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      @for (diagram of diagrams; track diagram.id) {
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
          <div class="p-1.5" [style.background-color]="diagram.farbe + '15'">
            <div class="flex items-center gap-3 p-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center" [style.background-color]="diagram.farbe + '20'">
                <i [class]="diagram.icon + ' text-xl'" [style.color]="diagram.farbe"></i>
              </div>
              <div class="flex-1">
                <h3 class="font-semibold text-slate-800">{{ diagram.name }}</h3>
                <p class="text-sm text-slate-500 mt-0.5">{{ diagram.beschreibung }}</p>
              </div>
            </div>
          </div>
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs text-slate-500">Fortschritt</span>
              <span class="text-xs font-medium" [style.color]="diagram.farbe">
                {{ progress.getDiagrammFortschrittProzent(diagram.id) }}%
              </span>
            </div>
            <p-progressBar
              [value]="progress.getDiagrammFortschrittProzent(diagram.id)"
              [showValue]="false"
              styleClass="h-2 mb-4" />
            <div class="flex gap-2">
              <a [routerLink]="['/lernen', diagram.id]"
                 class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium no-underline transition-colors"
                 [style.background-color]="diagram.farbe + '15'"
                 [style.color]="diagram.farbe">
                <i class="pi pi-book"></i> Lernen
              </a>
              <a [routerLink]="['/ueben', diagram.id]"
                 class="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium no-underline transition-colors bg-slate-100 text-slate-700 hover:bg-slate-200">
                <i class="pi pi-pencil"></i> Üben
              </a>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
export class DashboardComponent {
  protected readonly progress = inject(ProgressService);
  protected readonly diagrams: DiagramInfo[] = DIAGRAM_INFOS;
}
