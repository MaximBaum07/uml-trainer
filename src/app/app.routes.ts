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
    path: 'ergebnis/:typ',
    loadComponent: () => import('./pages/ueben/ergebnis.component').then(m => m.ErgebnisComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
