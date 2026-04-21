import { Injectable, signal, computed } from '@angular/core';
import { ThemaId, Fortschritt, QuizErgebnis, LaufenderVersuch } from '../models/app.models';
import { THEMEN } from '../data/themen';

const STORAGE_KEY = 'ap2-trainer-fortschritt';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private fortschrittMap = signal<Map<ThemaId, Fortschritt>>(this.laden());

  /** Gesamtfortschritt über ALLE Themen in %. */
  gesamtFortschritt = computed(() => {
    const map = this.fortschrittMap();
    const total = THEMEN.length * 2;
    let punkte = 0;
    for (const t of THEMEN) {
      const f = map.get(t.id);
      if (f?.theorieGelesen) punkte++;
      if (f && f.besteNote > 0) punkte++;
    }
    return total === 0 ? 0 : Math.round((punkte / total) * 100);
  });

  /** Fortschritt für einen Themenbereich in %. */
  getBereichFortschrittProzent(bereichId: string): number {
    const themen = THEMEN.filter(t => t.bereichId === bereichId);
    if (themen.length === 0) return 0;
    const map = this.fortschrittMap();
    let punkte = 0;
    const total = themen.length * 2;
    for (const t of themen) {
      const f = map.get(t.id);
      if (f?.theorieGelesen) punkte++;
      if (f && f.besteNote > 0) punkte++;
    }
    return Math.round((punkte / total) * 100);
  }

  getFortschritt(themaId: ThemaId): Fortschritt {
    return this.fortschrittMap().get(themaId) ?? {
      themaId,
      theorieGelesen: false,
      quizErgebnisse: [],
      besteNote: 0
    };
  }

  /** Fortschritt eines einzelnen Themas in % (Theorie gelesen = 50, Quiz-Note zählt anteilig). */
  getThemaFortschrittProzent(themaId: ThemaId): number {
    const f = this.getFortschritt(themaId);
    let punkte = 0;
    if (f.theorieGelesen) punkte += 50;
    if (f.besteNote > 0) punkte += Math.round(f.besteNote * 50);
    return punkte;
  }

  theorieGelesen(themaId: ThemaId): void {
    const map = new Map(this.fortschrittMap());
    const f = this.getFortschritt(themaId);
    map.set(themaId, { ...f, theorieGelesen: true });
    this.fortschrittMap.set(map);
    this.speichern();
  }

  quizErgebnisSpeichern(themaId: ThemaId, ergebnis: QuizErgebnis): void {
    const map = new Map(this.fortschrittMap());
    const f = this.getFortschritt(themaId);
    const note = ergebnis.gesamt > 0 ? ergebnis.richtig / ergebnis.gesamt : 0;
    map.set(themaId, {
      ...f,
      quizErgebnisse: [...f.quizErgebnisse, { ...ergebnis, zeitstempel: Date.now() }],
      besteNote: Math.max(f.besteNote, note)
    });
    this.fortschrittMap.set(map);
    this.speichern();
  }

  /**
   * Merkt sich, welche Frage (Index in uebungen[]) falsch beantwortet wurde.
   * Bei späterer richtiger Antwort wird der Eintrag wieder entfernt.
   */
  markiereFrage(themaId: ThemaId, uebungIndex: number, richtig: boolean): void {
    const map = new Map(this.fortschrittMap());
    const f = this.getFortschritt(themaId);
    const set = new Set(f.falscheIndices ?? []);
    if (richtig) set.delete(uebungIndex);
    else set.add(uebungIndex);
    map.set(themaId, { ...f, falscheIndices: Array.from(set).sort((a, b) => a - b) });
    this.fortschrittMap.set(map);
    this.speichern();
  }

  /** Indizes der zuletzt falsch beantworteten Fragen eines Themas. */
  getFalscheIndices(themaId: ThemaId): number[] {
    return this.getFortschritt(themaId).falscheIndices ?? [];
  }

  /** Gesamtzahl falsch beantworteter Fragen über alle Themen eines Bereichs. */
  getFalscheAnzahlBereich(bereichId: string): number {
    const themen = THEMEN.filter(t => t.bereichId === bereichId);
    let summe = 0;
    for (const t of themen) {
      summe += this.getFalscheIndices(t.id).length;
    }
    return summe;
  }

  /** Liste aller Themen in einem Bereich mit mindestens einer falschen Frage. */
  getFalscheFragenProBereich(bereichId: string): { themaId: ThemaId; indices: number[] }[] {
    const themen = THEMEN.filter(t => t.bereichId === bereichId);
    return themen
      .map(t => ({ themaId: t.id, indices: this.getFalscheIndices(t.id) }))
      .filter(x => x.indices.length > 0);
  }

  // ---------------- Laufender Versuch (Fortsetzen) ----------------

  versuchSpeichern(themaId: ThemaId, versuch: Omit<LaufenderVersuch, 'gespeichertAm'>): void {
    const map = new Map(this.fortschrittMap());
    const f = this.getFortschritt(themaId);
    map.set(themaId, {
      ...f,
      laufenderVersuch: { ...versuch, gespeichertAm: Date.now() }
    });
    this.fortschrittMap.set(map);
    this.speichern();
  }

  getVersuch(themaId: ThemaId): LaufenderVersuch | undefined {
    return this.getFortschritt(themaId).laufenderVersuch;
  }

  versuchLoeschen(themaId: ThemaId): void {
    const map = new Map(this.fortschrittMap());
    const f = this.getFortschritt(themaId);
    if (!f.laufenderVersuch) return;
    const { laufenderVersuch: _, ...rest } = f;
    map.set(themaId, rest as Fortschritt);
    this.fortschrittMap.set(map);
    this.speichern();
  }

  // ---------------- Gemerkte Fragen ----------------

  /** Frage merken / nicht merken. Toggle. */
  toggleMerken(themaId: ThemaId, uebungIndex: number): void {
    const map = new Map(this.fortschrittMap());
    const f = this.getFortschritt(themaId);
    const set = new Set(f.gemerkteIndices ?? []);
    if (set.has(uebungIndex)) set.delete(uebungIndex);
    else set.add(uebungIndex);
    map.set(themaId, { ...f, gemerkteIndices: Array.from(set).sort((a, b) => a - b) });
    this.fortschrittMap.set(map);
    this.speichern();
  }

  istGemerkt(themaId: ThemaId, uebungIndex: number): boolean {
    return (this.getFortschritt(themaId).gemerkteIndices ?? []).includes(uebungIndex);
  }

  getGemerkteIndices(themaId: ThemaId): number[] {
    return this.getFortschritt(themaId).gemerkteIndices ?? [];
  }

  getGemerkteAnzahlBereich(bereichId: string): number {
    const themen = THEMEN.filter(t => t.bereichId === bereichId);
    let summe = 0;
    for (const t of themen) summe += this.getGemerkteIndices(t.id).length;
    return summe;
  }

  getGemerkteFragenProBereich(bereichId: string): { themaId: ThemaId; indices: number[] }[] {
    const themen = THEMEN.filter(t => t.bereichId === bereichId);
    return themen
      .map(t => ({ themaId: t.id, indices: this.getGemerkteIndices(t.id) }))
      .filter(x => x.indices.length > 0);
  }

  /** Karteikarten-Status für eine einzelne Karte speichern. */
  karteStatusSetzen(themaId: ThemaId, karteId: string, status: 'gewusst' | 'unsicher' | 'nichtgewusst'): void {
    const map = new Map(this.fortschrittMap());
    const f = this.getFortschritt(themaId);
    const karteikarten = f.karteikarten ?? { status: {} };
    map.set(themaId, {
      ...f,
      karteikarten: {
        status: { ...karteikarten.status, [karteId]: status }
      }
    });
    this.fortschrittMap.set(map);
    this.speichern();
  }

  zuruecksetzen(): void {
    this.fortschrittMap.set(new Map());
    this.speichern();
  }

  private laden(): Map<ThemaId, Fortschritt> {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return new Map();
      const arr: Fortschritt[] = JSON.parse(raw);
      return new Map(arr.map(f => [f.themaId, f]));
    } catch {
      return new Map();
    }
  }

  private speichern(): void {
    const arr = Array.from(this.fortschrittMap().values());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  }
}
