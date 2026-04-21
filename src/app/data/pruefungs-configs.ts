import { PruefungsConfig, PruefungsFrage } from '../models/app.models';
import { THEMENBEREICHE } from './themenbereiche';
import { THEMEN } from './themen';
import { ALLE_UEBUNGS_SETS } from './alle-uebungen';

export const PRUEFUNGS_CONFIGS: PruefungsConfig[] = [
  {
    id: 'ap2-fachlich',
    name: 'AP2 Fachlicher Teil – Simulation',
    beschreibung: '90 Minuten, 40 Fragen aus allen fachlichen Themen – wie die echte Prüfung.',
    fragenAnzahl: 40,
    zeitlimitMinuten: 90,
    icon: 'pi pi-graduation-cap',
    farbe: '#3B82F6',
    kategorie: 'fachlich'
  },
  {
    id: 'ap2-wiso',
    name: 'WiSo – Simulation',
    beschreibung: '60 Minuten, 30 Fragen aus allen WiSo-Themen – wie die echte Prüfung.',
    fragenAnzahl: 30,
    zeitlimitMinuten: 60,
    icon: 'pi pi-building',
    farbe: '#64748B',
    kategorie: 'wiso'
  },
  {
    id: 'schnelltest',
    name: 'Schnelltest',
    beschreibung: '20 Minuten, 15 Fragen quer durch alle Themen – ideal zur schnellen Selbstüberprüfung.',
    fragenAnzahl: 15,
    zeitlimitMinuten: 20,
    icon: 'pi pi-bolt',
    farbe: '#F59E0B'
  }
];

function mischen<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function buildPruefungsFragen(config: PruefungsConfig): PruefungsFrage[] {
  const bereiche = config.kategorie
    ? THEMENBEREICHE.filter(b => b.kategorie === config.kategorie)
    : THEMENBEREICHE;

  const fragen: PruefungsFrage[] = [];
  for (const bereich of bereiche) {
    for (const themaId of bereich.themenIds) {
      const thema = THEMEN.find(t => t.id === themaId);
      const set = ALLE_UEBUNGS_SETS.find(s => s.themaId === themaId);
      if (!thema || !set) continue;
      for (const uebung of set.uebungen) {
        fragen.push({ uebung, themaId, themaName: thema.name, bereichName: bereich.name });
      }
    }
  }

  return mischen(fragen).slice(0, config.fragenAnzahl);
}
