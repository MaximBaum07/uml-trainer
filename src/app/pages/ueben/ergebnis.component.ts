import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { DIAGRAM_INFOS } from '../../data/diagram-info';
import { DiagramType, DiagramInfo, QuizErgebnis } from '../../models/uml.models';

@Component({
  selector: 'app-ergebnis',
  standalone: true,
  imports: [RouterLink, Button],
  template: `
    @if (diagramm && ergebnis) {
      <div class="max-w-lg mx-auto mt-8">
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center">
          <div class="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4"
               [class]="getResultBgClass()">
            <i [class]="getResultIcon()" class="text-4xl"></i>
          </div>

          <h1 class="text-2xl font-bold text-slate-800 mb-2">Quiz beendet!</h1>
          <p class="text-slate-500 mb-6">{{ diagramm.name }}</p>

          <div class="text-5xl font-bold mb-2" [class]="getResultTextClass()">
            {{ ergebnis.richtig }} / {{ ergebnis.gesamt }}
          </div>
          <p class="text-slate-500 mb-6">richtige Antworten ({{ prozent }}%)</p>

          <div class="p-4 rounded-lg mb-6" [class]="getResultBannerClass()">
            <p class="font-semibold" [class]="getResultTextClass()">{{ getMessage() }}</p>
          </div>

          <div class="flex gap-3 justify-center">
            <a [routerLink]="['/lernen', typ]" class="no-underline">
              <p-button label="Theorie wiederholen" icon="pi pi-book" severity="secondary" [outlined]="true" />
            </a>
            <a [routerLink]="['/ueben', typ]" class="no-underline">
              <p-button label="Nochmal versuchen" icon="pi pi-refresh" severity="info" />
            </a>
          </div>

          <div class="mt-6 pt-6 border-t border-slate-200">
            <a routerLink="/" class="text-sm text-slate-500 hover:text-slate-700 no-underline">
              <i class="pi pi-arrow-left mr-1"></i> Zurück zum Dashboard
            </a>
          </div>
        </div>
      </div>
    }
  `
})
export class ErgebnisComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  typ!: DiagramType;
  diagramm?: DiagramInfo;
  ergebnis?: QuizErgebnis;
  prozent = 0;

  ngOnInit(): void {
    this.typ = this.route.snapshot.paramMap.get('typ') as DiagramType;
    this.diagramm = DIAGRAM_INFOS.find(d => d.id === this.typ);
    const nav = this.router.getCurrentNavigation();
    this.ergebnis = history.state?.['ergebnis'] as QuizErgebnis | undefined;
    if (!this.ergebnis) {
      this.router.navigate(['/']);
    } else {
      this.prozent = Math.round((this.ergebnis.richtig / this.ergebnis.gesamt) * 100);
    }
  }

  getMessage(): string {
    if (this.prozent >= 90) return 'Hervorragend! Du bist bestens vorbereitet!';
    if (this.prozent >= 70) return 'Gut gemacht! Noch ein bisschen üben und du bist bereit.';
    if (this.prozent >= 50) return 'Nicht schlecht, aber es gibt noch Verbesserungspotential.';
    return 'Lies dir die Theorie nochmal durch und versuch es erneut.';
  }

  getResultIcon(): string {
    if (this.prozent >= 70) return 'pi pi-trophy text-green-600';
    if (this.prozent >= 50) return 'pi pi-thumbs-up text-amber-600';
    return 'pi pi-book text-red-600';
  }

  getResultBgClass(): string {
    if (this.prozent >= 70) return 'bg-green-100';
    if (this.prozent >= 50) return 'bg-amber-100';
    return 'bg-red-100';
  }

  getResultTextClass(): string {
    if (this.prozent >= 70) return 'text-green-700';
    if (this.prozent >= 50) return 'text-amber-700';
    return 'text-red-700';
  }

  getResultBannerClass(): string {
    if (this.prozent >= 70) return 'bg-green-50 border border-green-200';
    if (this.prozent >= 50) return 'bg-amber-50 border border-amber-200';
    return 'bg-red-50 border border-red-200';
  }
}
