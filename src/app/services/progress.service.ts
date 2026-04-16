import { Injectable, signal, computed } from '@angular/core';
import { DiagramType, Fortschritt, QuizErgebnis } from '../models/uml.models';
import { DIAGRAM_INFOS } from '../data/diagram-info';

const STORAGE_KEY = 'uml-trainer-fortschritt';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private fortschrittMap = signal<Map<DiagramType, Fortschritt>>(this.laden());

  gesamtFortschritt = computed(() => {
    const map = this.fortschrittMap();
    const total = DIAGRAM_INFOS.length * 2;
    let punkte = 0;
    for (const info of DIAGRAM_INFOS) {
      const f = map.get(info.id);
      if (f?.theorieGelesen) punkte++;
      if (f && f.besteNote > 0) punkte++;
    }
    return Math.round((punkte / total) * 100);
  });

  getFortschritt(typ: DiagramType): Fortschritt {
    return this.fortschrittMap().get(typ) ?? {
      diagrammTyp: typ,
      theorieGelesen: false,
      quizErgebnisse: [],
      besteNote: 0
    };
  }

  getDiagrammFortschrittProzent(typ: DiagramType): number {
    const f = this.getFortschritt(typ);
    let punkte = 0;
    if (f.theorieGelesen) punkte += 50;
    if (f.besteNote > 0) punkte += Math.round(f.besteNote * 50);
    return punkte;
  }

  theorieGelesen(typ: DiagramType): void {
    const map = new Map(this.fortschrittMap());
    const f = this.getFortschritt(typ);
    map.set(typ, { ...f, theorieGelesen: true });
    this.fortschrittMap.set(map);
    this.speichern();
  }

  quizErgebnisSpeichern(typ: DiagramType, ergebnis: QuizErgebnis): void {
    const map = new Map(this.fortschrittMap());
    const f = this.getFortschritt(typ);
    const note = ergebnis.gesamt > 0 ? ergebnis.richtig / ergebnis.gesamt : 0;
    map.set(typ, {
      ...f,
      quizErgebnisse: [...f.quizErgebnisse, ergebnis],
      besteNote: Math.max(f.besteNote, note)
    });
    this.fortschrittMap.set(map);
    this.speichern();
  }

  zuruecksetzen(): void {
    this.fortschrittMap.set(new Map());
    this.speichern();
  }

  private laden(): Map<DiagramType, Fortschritt> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return new Map();
      const arr: Fortschritt[] = JSON.parse(raw);
      return new Map(arr.map(f => [f.diagrammTyp, f]));
    } catch {
      return new Map();
    }
  }

  private speichern(): void {
    const arr = Array.from(this.fortschrittMap().values());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  }
}
