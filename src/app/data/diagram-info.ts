import { DiagramInfo } from '../models/uml.models';

export const DIAGRAM_INFOS: DiagramInfo[] = [
  {
    id: 'klassendiagramm',
    name: 'Klassendiagramm',
    beschreibung: 'Klassen, Attribute, Methoden und Beziehungen zwischen Objekten modellieren',
    icon: 'pi pi-th-large',
    farbe: '#3B82F6'
  },
  {
    id: 'anwendungsfall',
    name: 'Anwendungsfalldiagramm',
    beschreibung: 'Akteure und ihre Interaktionen mit dem System (Use Cases) darstellen',
    icon: 'pi pi-users',
    farbe: '#10B981'
  },
  {
    id: 'sequenzdiagramm',
    name: 'Sequenzdiagramm',
    beschreibung: 'Zeitliche Abfolge von Nachrichten zwischen Objekten visualisieren',
    icon: 'pi pi-arrows-v',
    farbe: '#F59E0B'
  },
  {
    id: 'aktivitaetsdiagramm',
    name: 'Aktivitätsdiagramm',
    beschreibung: 'Abläufe, Entscheidungen und parallele Prozesse modellieren',
    icon: 'pi pi-sitemap',
    farbe: '#EF4444'
  },
  {
    id: 'zustandsdiagramm',
    name: 'Zustandsdiagramm',
    beschreibung: 'Zustände eines Objekts und die Übergänge zwischen ihnen darstellen',
    icon: 'pi pi-circle',
    farbe: '#8B5CF6'
  }
];
