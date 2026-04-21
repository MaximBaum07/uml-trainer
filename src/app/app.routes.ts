import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'bereich/:bereichId',
    loadComponent: () => import('./pages/bereich/bereich.component').then(m => m.BereichComponent)
  },
  {
    path: 'lernen/:typ',
    loadComponent: () => import('./pages/lernen/lernen.component').then(m => m.LernenComponent)
  },
  {
    path: 'ueben/:typ',
    loadComponent: () => import('./pages/ueben/ueben.component').then(m => m.UebenComponent)
  },
  {
    path: 'karteikarten/:typ',
    loadComponent: () => import('./pages/karteikarten/karteikarten.component').then(m => m.KarteikartenComponent)
  },
  {
    path: 'wiederholen/:bereichId',
    data: { modus: 'falsch' },
    loadComponent: () => import('./pages/wiederholen/wiederholen.component').then(m => m.WiederholenComponent)
  },
  {
    path: 'gemerkt/:bereichId',
    data: { modus: 'gemerkt' },
    loadComponent: () => import('./pages/wiederholen/wiederholen.component').then(m => m.WiederholenComponent)
  },
  {
    path: 'ergebnis/:typ',
    loadComponent: () => import('./pages/ueben/ergebnis.component').then(m => m.ErgebnisComponent)
  },
  {
    path: 'pruefung/:id',
    loadComponent: () => import('./pages/pruefung/pruefung.component').then(m => m.PruefungComponent)
  },
  {
    path: 'pruefung-ergebnis',
    loadComponent: () => import('./pages/pruefung/pruefung-ergebnis.component').then(m => m.PruefungErgebnisComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
