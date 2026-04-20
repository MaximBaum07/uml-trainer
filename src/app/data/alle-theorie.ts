import { TheorieInhalt } from '../models/app.models';
import { THEORIE_INHALTE as UML_THEORIE } from './uml-content';
import { SQL_THEORIE } from './sql-content';
import { NETZWERK_THEORIE } from './netzwerk-content';
import { SICHERHEIT_THEORIE } from './sicherheit-content';
import { ALGO_THEORIE } from './algorithmen-content';
import { PM_THEORIE } from './projektmanagement-content';
import { QS_THEORIE } from './qualitaet-content';
import { WISO_THEORIE } from './wiso-content';

export const ALLE_THEORIE_INHALTE: TheorieInhalt[] = [
  ...UML_THEORIE,
  ...SQL_THEORIE,
  ...NETZWERK_THEORIE,
  ...SICHERHEIT_THEORIE,
  ...ALGO_THEORIE,
  ...PM_THEORIE,
  ...QS_THEORIE,
  ...WISO_THEORIE
];
