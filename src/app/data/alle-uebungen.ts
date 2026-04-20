import { UebungsSet } from '../models/app.models';
import { UEBUNGS_SETS as UML_UEBUNGEN } from './uml-exercises';
import { SQL_UEBUNGEN } from './sql-exercises';
import { NETZWERK_UEBUNGEN } from './netzwerk-exercises';
import { SICHERHEIT_UEBUNGEN } from './sicherheit-exercises';
import { ALGO_UEBUNGEN } from './algorithmen-exercises';
import { PM_UEBUNGEN } from './projektmanagement-exercises';
import { QS_UEBUNGEN } from './qualitaet-exercises';
import { WISO_UEBUNGEN } from './wiso-exercises';

export const ALLE_UEBUNGS_SETS: UebungsSet[] = [
  ...UML_UEBUNGEN,
  ...SQL_UEBUNGEN,
  ...NETZWERK_UEBUNGEN,
  ...SICHERHEIT_UEBUNGEN,
  ...ALGO_UEBUNGEN,
  ...PM_UEBUNGEN,
  ...QS_UEBUNGEN,
  ...WISO_UEBUNGEN
];
