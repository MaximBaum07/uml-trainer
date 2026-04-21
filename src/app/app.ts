import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

const STORAGE_KEY = 'ap2-trainer-dark';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly istDark = signal(this.initialDark());

  constructor() {
    this.applyClass(this.istDark());
  }

  toggleDark(): void {
    const next = !this.istDark();
    this.istDark.set(next);
    this.applyClass(next);
    localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
  }

  private initialDark(): boolean {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === '1') return true;
    if (stored === '0') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private applyClass(dark: boolean): void {
    document.documentElement.classList.toggle('app-dark', dark);
  }
}
