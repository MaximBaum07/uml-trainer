import { Component, inject, computed, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Accordion, AccordionContent, AccordionHeader, AccordionPanel } from 'primeng/accordion';
import { Button } from 'primeng/button';
import { ALLE_THEORIE_INHALTE } from '../../data/alle-theorie';
import { THEMEN } from '../../data/themen';
import { ProgressService } from '../../services/progress.service';
import { ThemaId, TheorieInhalt, ThemaInfo } from '../../models/app.models';

@Component({
  selector: 'app-lernen',
  standalone: true,
  imports: [RouterLink, Accordion, AccordionContent, AccordionHeader, AccordionPanel, Button],
  template: `
    @if (!inhalt && thema) {
      <div class="bg-white rounded-xl border border-slate-200 p-10 text-center">
        <i class="pi pi-clock text-4xl text-slate-300 mb-3 block"></i>
        <h2 class="text-xl font-semibold text-slate-700 mb-2">Theorie kommt bald</h2>
        <p class="text-slate-500 mb-4">Für "{{ thema.name }}" ist die Theorie noch in Vorbereitung.</p>
        <a [routerLink]="['/bereich', thema.bereichId]" class="text-blue-600 no-underline">
          <i class="pi pi-arrow-left mr-1"></i>Zurück zum Bereich
        </a>
      </div>
    }
    @if (inhalt && thema) {
      <div class="mb-6">
        <a routerLink="/" class="text-sm text-slate-500 hover:text-slate-700 no-underline">
          <i class="pi pi-arrow-left mr-1"></i> Zurück zum Dashboard
        </a>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-14 h-14 rounded-xl flex items-center justify-center" [style.background-color]="thema.farbe + '20'">
            <i [class]="thema.icon + ' text-2xl'" [style.color]="thema.farbe"></i>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-slate-800">{{ inhalt.titel }}</h1>
            <p class="text-slate-500">{{ thema.beschreibung }}</p>
          </div>
        </div>
        <p class="text-slate-700 leading-relaxed text-lg">{{ inhalt.einleitung }}</p>
      </div>

      <p-accordion [multiple]="true" [value]="geoeffneteAbschnitte">
        @for (abschnitt of inhalt.abschnitte; track abschnitt.titel; let i = $index) {
          <p-accordion-panel [value]="'panel-' + i">
            <p-accordion-header>
              <span class="font-semibold">{{ abschnitt.titel }}</span>
            </p-accordion-header>
            <p-accordion-content>
              <div class="prose max-w-none">
                <div [innerHTML]="sanitize(abschnitt.inhalt)"></div>
                @if (abschnitt.svgDiagramm) {
                  <div class="my-4 p-4 bg-slate-50 rounded-lg border border-slate-200 flex justify-center overflow-x-auto">
                    <div [innerHTML]="sanitize(abschnitt.svgDiagramm)"></div>
                  </div>
                }
              </div>
            </p-accordion-content>
          </p-accordion-panel>
        }
      </p-accordion>

      <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
        <h3 class="text-lg font-semibold text-amber-800 mb-3">
          <i class="pi pi-lightbulb mr-2"></i>Tipps für die Prüfung
        </h3>
        <ul class="space-y-2">
          @for (tipp of inhalt.pruefungsTipps; track tipp) {
            <li class="flex items-start gap-2 text-amber-900">
              <i class="pi pi-check-circle mt-0.5 text-amber-600"></i>
              <span>{{ tipp }}</span>
            </li>
          }
        </ul>
      </div>

      <div class="flex justify-between items-center mt-8 p-4 bg-white rounded-xl border border-slate-200">
        <span class="text-slate-600">Bereit zum Üben?</span>
        <div class="flex gap-3">
          <p-button
            [label]="theorieGelesen ? 'Theorie als gelesen markiert' : 'Theorie als gelesen markieren'"
            [icon]="theorieGelesen ? 'pi pi-check' : 'pi pi-bookmark'"
            [severity]="theorieGelesen ? 'success' : 'secondary'"
            [outlined]="!theorieGelesen"
            (click)="markiereGelesen()" />
          <a [routerLink]="['/ueben', typ]" class="no-underline">
            <p-button label="Quiz starten" icon="pi pi-play" severity="info" />
          </a>
        </div>
      </div>
    }
  `,
  styles: [`
    :host ::ng-deep .prose h4 { font-size: 1.1rem; font-weight: 600; color: #1e293b; margin-top: 1rem; margin-bottom: 0.5rem; }
    :host ::ng-deep .prose p { color: #475569; line-height: 1.7; margin-bottom: 0.75rem; }
    :host ::ng-deep .prose ul { padding-left: 1.5rem; color: #475569; }
    :host ::ng-deep .prose li { margin-bottom: 0.4rem; line-height: 1.6; }
    :host ::ng-deep .prose strong { color: #1e293b; }
    :host ::ng-deep .prose code { background: #f1f5f9; padding: 0.15rem 0.4rem; border-radius: 0.25rem; font-size: 0.9em; color: #7c3aed; }
  `]
})
export class LernenComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);
  private progressService = inject(ProgressService);

  typ!: ThemaId;
  inhalt?: TheorieInhalt;
  thema?: ThemaInfo;
  theorieGelesen = false;
  geoeffneteAbschnitte: string[] = [];

  ngOnInit(): void {
    this.typ = this.route.snapshot.paramMap.get('typ') as ThemaId;
    this.inhalt = ALLE_THEORIE_INHALTE.find(t => t.themaId === this.typ);
    this.thema = THEMEN.find(d => d.id === this.typ);
    this.theorieGelesen = this.progressService.getFortschritt(this.typ).theorieGelesen;
    if (this.inhalt) {
      this.geoeffneteAbschnitte = this.inhalt.abschnitte.map((_, i) => 'panel-' + i);
    }
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  markiereGelesen(): void {
    this.progressService.theorieGelesen(this.typ);
    this.theorieGelesen = true;
  }
}
