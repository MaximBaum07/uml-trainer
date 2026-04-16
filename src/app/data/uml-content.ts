import { TheorieInhalt } from '../models/uml.models';

export const THEORIE_INHALTE: TheorieInhalt[] = [
  // ============================================================
  // KLASSENDIAGRAMM
  // ============================================================
  {
    diagrammTyp: 'klassendiagramm',
    titel: 'Klassendiagramm',
    einleitung: 'Das Klassendiagramm ist das wichtigste und am häufigsten verwendete UML-Diagramm. Es beschreibt die statische Struktur eines Systems, indem es Klassen, ihre Attribute, Methoden und die Beziehungen zwischen ihnen darstellt. In der AP2-Prüfung für Fachinformatiker Anwendungsentwicklung ist das Klassendiagramm ein zentrales Thema, das fast immer abgefragt wird.',
    abschnitte: [
      {
        titel: 'Was ist ein Klassendiagramm?',
        inhalt: `
          <p>Ein <strong>Klassendiagramm</strong> ist ein Strukturdiagramm der UML (Unified Modeling Language). Es zeigt die Bausteine eines objektorientierten Systems:</p>
          <ul>
            <li><strong>Klassen</strong> &ndash; die Baupla&#776;ne fu&#776;r Objekte</li>
            <li><strong>Attribute</strong> &ndash; die Eigenschaften einer Klasse (Daten)</li>
            <li><strong>Methoden</strong> &ndash; die Verhaltensweisen einer Klasse (Funktionen)</li>
            <li><strong>Beziehungen</strong> &ndash; wie Klassen miteinander verbunden sind</li>
          </ul>
          <p>Man kann sich eine Klasse wie einen Bauplan vorstellen: Sie beschreibt, welche Eigenschaften und Fähigkeiten ein Objekt haben wird, bevor es erzeugt (instanziiert) wird.</p>
          <h4>Aufbau einer Klasse</h4>
          <p>Eine Klasse wird als Rechteck mit drei Abschnitten dargestellt:</p>
          <ol>
            <li><strong>Oberer Abschnitt:</strong> Klassenname (fett, zentriert)</li>
            <li><strong>Mittlerer Abschnitt:</strong> Attribute (Eigenschaften)</li>
            <li><strong>Unterer Abschnitt:</strong> Methoden (Operationen)</li>
          </ol>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>
              text { font-family: 'Segoe UI', Arial, sans-serif; }
            </style>
          </defs>
          <rect x="100" y="20" width="200" height="260" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="100" y="20" width="200" height="50" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="200" y="50" text-anchor="middle" font-size="16" font-weight="bold">Fahrzeug</text>
          <line x1="100" y1="70" x2="300" y2="70" stroke="black" stroke-width="2"/>
          <text x="115" y="95" font-size="13">- marke: String</text>
          <text x="115" y="115" font-size="13">- modell: String</text>
          <text x="115" y="135" font-size="13">- baujahr: int</text>
          <text x="115" y="155" font-size="13"># kilometerstand: double</text>
          <line x1="100" y1="170" x2="300" y2="170" stroke="black" stroke-width="2"/>
          <text x="115" y="195" font-size="13">+ starten(): void</text>
          <text x="115" y="215" font-size="13">+ bremsen(): void</text>
          <text x="115" y="235" font-size="13">+ getMarke(): String</text>
          <text x="115" y="255" font-size="13">+ setKmStand(km: double)</text>
          <!-- Annotations -->
          <text x="15" y="50" font-size="11" fill="#666">Klassenname</text>
          <line x1="75" y1="48" x2="98" y2="48" stroke="#999" stroke-dasharray="3,3"/>
          <text x="15" y="115" font-size="11" fill="#666">Attribute</text>
          <line x1="58" y1="113" x2="98" y2="113" stroke="#999" stroke-dasharray="3,3"/>
          <text x="15" y="215" font-size="11" fill="#666">Methoden</text>
          <line x1="63" y1="213" x2="98" y2="213" stroke="#999" stroke-dasharray="3,3"/>
        </svg>`
      },
      {
        titel: 'Sichtbarkeiten (Zugriffsmodifikatoren)',
        inhalt: `
          <p>Vor jedem Attribut und jeder Methode steht ein <strong>Sichtbarkeitssymbol</strong>, das festlegt, wer darauf zugreifen darf:</p>
          <table style="width:100%; border-collapse:collapse; margin: 12px 0;">
            <tr style="background:#f0f4ff;">
              <th style="border:1px solid #ccc; padding:8px;">Symbol</th>
              <th style="border:1px solid #ccc; padding:8px;">Sichtbarkeit</th>
              <th style="border:1px solid #ccc; padding:8px;">Bedeutung</th>
              <th style="border:1px solid #ccc; padding:8px;">Java-Keyword</th>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><code>+</code></td>
              <td style="border:1px solid #ccc; padding:8px;">public</td>
              <td style="border:1px solid #ccc; padding:8px;">Für alle sichtbar</td>
              <td style="border:1px solid #ccc; padding:8px;"><code>public</code></td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><code>-</code></td>
              <td style="border:1px solid #ccc; padding:8px;">private</td>
              <td style="border:1px solid #ccc; padding:8px;">Nur innerhalb der Klasse</td>
              <td style="border:1px solid #ccc; padding:8px;"><code>private</code></td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><code>#</code></td>
              <td style="border:1px solid #ccc; padding:8px;">protected</td>
              <td style="border:1px solid #ccc; padding:8px;">Klasse + Unterklassen</td>
              <td style="border:1px solid #ccc; padding:8px;"><code>protected</code></td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><code>~</code></td>
              <td style="border:1px solid #ccc; padding:8px;">package</td>
              <td style="border:1px solid #ccc; padding:8px;">Innerhalb des Pakets</td>
              <td style="border:1px solid #ccc; padding:8px;">(default)</td>
            </tr>
          </table>
          <h4>Notation für Attribute</h4>
          <p><code>Sichtbarkeit Name: Datentyp</code></p>
          <p>Beispiel: <code>- alter: int</code> bedeutet ein privates Attribut &bdquo;alter&ldquo; vom Typ Integer.</p>
          <h4>Notation für Methoden</h4>
          <p><code>Sichtbarkeit Name(Parameter): Rückgabetyp</code></p>
          <p>Beispiel: <code>+ berechnePreis(menge: int): double</code></p>
          <h4>Wichtige Datentypen</h4>
          <ul>
            <li><code>String</code> &ndash; Text</li>
            <li><code>int</code> / <code>Integer</code> &ndash; Ganzzahlen</li>
            <li><code>double</code> / <code>float</code> &ndash; Kommazahlen</li>
            <li><code>boolean</code> &ndash; Wahrheitswert (true/false)</li>
            <li><code>void</code> &ndash; kein Rückgabewert</li>
            <li><code>Date</code> &ndash; Datum</li>
            <li><code>List&lt;Typ&gt;</code> &ndash; Liste von Objekten</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>
              text { font-family: 'Segoe UI', Arial, sans-serif; }
            </style>
          </defs>
          <text x="200" y="25" text-anchor="middle" font-size="15" font-weight="bold" fill="#333">Sichtbarkeiten im Überblick</text>
          <!-- public -->
          <rect x="30" y="45" width="160" height="50" rx="6" fill="#e8f5e9" stroke="#388e3c" stroke-width="1.5"/>
          <text x="42" y="68" font-size="22" font-weight="bold" fill="#388e3c">+</text>
          <text x="65" y="68" font-size="14" font-weight="bold">public</text>
          <text x="42" y="86" font-size="11" fill="#555">Alle können zugreifen</text>
          <!-- private -->
          <rect x="210" y="45" width="160" height="50" rx="6" fill="#ffebee" stroke="#d32f2f" stroke-width="1.5"/>
          <text x="224" y="68" font-size="22" font-weight="bold" fill="#d32f2f">-</text>
          <text x="245" y="68" font-size="14" font-weight="bold">private</text>
          <text x="222" y="86" font-size="11" fill="#555">Nur eigene Klasse</text>
          <!-- protected -->
          <rect x="30" y="110" width="160" height="50" rx="6" fill="#fff3e0" stroke="#f57c00" stroke-width="1.5"/>
          <text x="42" y="133" font-size="22" font-weight="bold" fill="#f57c00">#</text>
          <text x="65" y="133" font-size="14" font-weight="bold">protected</text>
          <text x="42" y="151" font-size="11" fill="#555">Klasse + Unterklassen</text>
          <!-- package -->
          <rect x="210" y="110" width="160" height="50" rx="6" fill="#e3f2fd" stroke="#1976d2" stroke-width="1.5"/>
          <text x="224" y="133" font-size="22" font-weight="bold" fill="#1976d2">~</text>
          <text x="245" y="133" font-size="14" font-weight="bold">package</text>
          <text x="222" y="151" font-size="11" fill="#555">Innerhalb des Pakets</text>
          <!-- Example class -->
          <rect x="100" y="185" width="200" height="105" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="100" y="185" width="200" height="30" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="200" y="205" text-anchor="middle" font-size="13" font-weight="bold">Konto</text>
          <line x1="100" y1="215" x2="300" y2="215" stroke="black" stroke-width="2"/>
          <text x="112" y="233" font-size="12">- kontoNr: String</text>
          <text x="112" y="249" font-size="12"># kontostand: double</text>
          <line x1="100" y1="258" x2="300" y2="258" stroke="black" stroke-width="2"/>
          <text x="112" y="278" font-size="12">+ einzahlen(betrag: double)</text>
        </svg>`
      },
      {
        titel: 'Beziehungen zwischen Klassen',
        inhalt: `
          <p>Klassen existieren selten isoliert. Sie stehen in verschiedenen <strong>Beziehungen</strong> zueinander. Die wichtigsten Beziehungstypen sind:</p>
          <h4>1. Assoziation (einfache Beziehung)</h4>
          <p>Eine einfache Verbindung zwischen zwei Klassen. Dargestellt als <strong>durchgezogene Linie</strong>.</p>
          <p>Beispiel: Ein Kunde <em>kennt</em> eine Adresse.</p>
          <h4>2. Gerichtete Assoziation</h4>
          <p>Eine Assoziation, bei der nur eine Klasse die andere kennt. Dargestellt als <strong>Linie mit offenem Pfeil</strong>.</p>
          <p>Beispiel: Eine Bestellung kennt den Kunden, aber der Kunde kennt nicht zwingend die Bestellung.</p>
          <h4>3. Aggregation (Teil-Ganzes: &bdquo;hat ein&ldquo;)</h4>
          <p>Eine Klasse ist Teil einer anderen, kann aber auch unabhängig existieren. Dargestellt als Linie mit <strong>leerer Raute</strong> auf der Seite des Ganzen.</p>
          <p>Beispiel: Ein Team <em>hat</em> Mitarbeiter. Ein Mitarbeiter kann auch ohne Team existieren.</p>
          <h4>4. Komposition (starke Teil-Ganzes: &bdquo;besteht aus&ldquo;)</h4>
          <p>Eine starke Aggregation: Der Teil kann <strong>nicht ohne das Ganze existieren</strong>. Dargestellt als Linie mit <strong>gefüllter Raute</strong>.</p>
          <p>Beispiel: Ein Haus <em>besteht aus</em> Räumen. Ohne Haus gibt es keine Räume.</p>
          <h4>5. Vererbung / Generalisierung (&bdquo;ist ein&ldquo;)</h4>
          <p>Eine Klasse erbt Attribute und Methoden einer anderen. Dargestellt als Linie mit <strong>geschlossenem, leerem Dreieckspfeil</strong> zur Oberklasse.</p>
          <p>Beispiel: Ein PKW <em>ist ein</em> Fahrzeug.</p>
          <h4>6. Realisierung / Implementierung</h4>
          <p>Eine Klasse implementiert ein Interface. Dargestellt als <strong>gestrichelte Linie</strong> mit geschlossenem, leerem Dreieckspfeil.</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style>
            <marker id="openArrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
              <path d="M0,0 L10,3.5 L0,7" fill="none" stroke="black" stroke-width="1.5"/>
            </marker>
            <marker id="filledDiamond" markerWidth="12" markerHeight="8" refX="0" refY="4" orient="auto">
              <polygon points="0,4 6,0 12,4 6,8" fill="black" stroke="black"/>
            </marker>
            <marker id="emptyDiamond" markerWidth="12" markerHeight="8" refX="0" refY="4" orient="auto">
              <polygon points="0,4 6,0 12,4 6,8" fill="white" stroke="black" stroke-width="1.5"/>
            </marker>
            <marker id="triangle" markerWidth="12" markerHeight="10" refX="12" refY="5" orient="auto">
              <polygon points="0,0 12,5 0,10" fill="white" stroke="black" stroke-width="1.5"/>
            </marker>
          </defs>
          <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Beziehungstypen</text>
          <!-- Assoziation -->
          <line x1="30" y1="55" x2="170" y2="55" stroke="black" stroke-width="2"/>
          <text x="200" y="59" font-size="12">Assoziation</text>
          <!-- Gerichtete Assoziation -->
          <line x1="30" y1="90" x2="170" y2="90" stroke="black" stroke-width="2" marker-end="url(#openArrow)"/>
          <text x="200" y="94" font-size="12">Gerichtete Assoziation</text>
          <!-- Aggregation -->
          <line x1="30" y1="125" x2="170" y2="125" stroke="black" stroke-width="2" marker-start="url(#emptyDiamond)"/>
          <text x="200" y="129" font-size="12">Aggregation (leere Raute)</text>
          <!-- Komposition -->
          <line x1="30" y1="160" x2="170" y2="160" stroke="black" stroke-width="2" marker-start="url(#filledDiamond)"/>
          <text x="200" y="164" font-size="12">Komposition (volle Raute)</text>
          <!-- Vererbung -->
          <line x1="30" y1="195" x2="158" y2="195" stroke="black" stroke-width="2" marker-end="url(#triangle)"/>
          <text x="200" y="199" font-size="12">Vererbung (Dreieckspfeil)</text>
          <!-- Realisierung -->
          <line x1="30" y1="230" x2="158" y2="230" stroke="black" stroke-width="2" stroke-dasharray="8,4" marker-end="url(#triangle)"/>
          <text x="200" y="234" font-size="12">Realisierung (gestrichelt)</text>
          <!-- Merkregel -->
          <rect x="30" y="258" width="340" height="32" rx="4" fill="#fff9c4" stroke="#f9a825" stroke-width="1"/>
          <text x="200" y="278" text-anchor="middle" font-size="11" fill="#555">Merke: Raute immer beim Ganzen, Dreieck bei der Oberklasse!</text>
        </svg>`
      },
      {
        titel: 'Multiplizitäten (Kardinalitäten)',
        inhalt: `
          <p><strong>Multiplizitäten</strong> geben an, wie viele Objekte einer Klasse mit Objekten einer anderen Klasse in Beziehung stehen können. Sie werden an den Enden einer Beziehungslinie notiert.</p>
          <table style="width:100%; border-collapse:collapse; margin: 12px 0;">
            <tr style="background:#f0f4ff;">
              <th style="border:1px solid #ccc; padding:8px;">Notation</th>
              <th style="border:1px solid #ccc; padding:8px;">Bedeutung</th>
              <th style="border:1px solid #ccc; padding:8px;">Beispiel</th>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><code>1</code></td>
              <td style="border:1px solid #ccc; padding:8px;">Genau eins</td>
              <td style="border:1px solid #ccc; padding:8px;">Jede Person hat genau 1 Personalausweis</td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><code>0..1</code></td>
              <td style="border:1px solid #ccc; padding:8px;">Kein oder eins</td>
              <td style="border:1px solid #ccc; padding:8px;">Ein Mitarbeiter hat 0 oder 1 Dienstwagen</td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><code>*</code> oder <code>0..*</code></td>
              <td style="border:1px solid #ccc; padding:8px;">Beliebig viele (auch null)</td>
              <td style="border:1px solid #ccc; padding:8px;">Ein Kunde kann 0 bis viele Bestellungen haben</td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><code>1..*</code></td>
              <td style="border:1px solid #ccc; padding:8px;">Mindestens eins</td>
              <td style="border:1px solid #ccc; padding:8px;">Eine Bestellung hat mindestens 1 Position</td>
            </tr>
            <tr>
              <td style="border:1px solid #ccc; padding:8px; text-align:center;"><code>0..*</code></td>
              <td style="border:1px solid #ccc; padding:8px;">Null bis beliebig viele</td>
              <td style="border:1px solid #ccc; padding:8px;">Ein Lehrer unterrichtet 0 bis viele Schüler</td>
            </tr>
          </table>
          <h4>Wo stehen die Multiplizitäten?</h4>
          <p>Die Multiplizität wird immer am <strong>gegenüberliegenden Ende</strong> der Beziehung notiert. Das heißt: Die Zahl neben Klasse B gibt an, wie viele B-Objekte zu einem A-Objekt gehören.</p>
          <h4>Leserichtung</h4>
          <p>Lese immer: &bdquo;Ein [Klasse A] hat [Multiplizität bei B] [Klasse B]&ldquo;.</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Multiplizitäten &ndash; Beispiel</text>
          <!-- Kunde -->
          <rect x="20" y="50" width="130" height="80" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="20" y="50" width="130" height="28" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="85" y="69" text-anchor="middle" font-size="13" font-weight="bold">Kunde</text>
          <line x1="20" y1="78" x2="150" y2="78" stroke="black" stroke-width="1"/>
          <text x="30" y="95" font-size="11">- name: String</text>
          <text x="30" y="110" font-size="11">- kundenNr: int</text>
          <!-- Bestellung -->
          <rect x="250" y="50" width="130" height="80" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="250" y="50" width="130" height="28" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="315" y="69" text-anchor="middle" font-size="13" font-weight="bold">Bestellung</text>
          <line x1="250" y1="78" x2="380" y2="78" stroke="black" stroke-width="1"/>
          <text x="260" y="95" font-size="11">- bestellNr: int</text>
          <text x="260" y="110" font-size="11">- datum: Date</text>
          <!-- Verbindung -->
          <line x1="150" y1="90" x2="250" y2="90" stroke="black" stroke-width="2"/>
          <text x="160" y="83" font-size="13" font-weight="bold">1</text>
          <text x="228" y="83" font-size="13" font-weight="bold">0..*</text>
          <text x="200" y="108" text-anchor="middle" font-size="11" fill="#666">gibt auf</text>
          <!-- Bestellposition -->
          <rect x="250" y="190" width="130" height="80" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="250" y="190" width="130" height="28" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="315" y="209" text-anchor="middle" font-size="13" font-weight="bold">Bestellposition</text>
          <line x1="250" y1="218" x2="380" y2="218" stroke="black" stroke-width="1"/>
          <text x="260" y="235" font-size="11">- menge: int</text>
          <text x="260" y="250" font-size="11">- einzelpreis: double</text>
          <!-- Komposition Bestellung -> Bestellposition -->
          <line x1="315" y1="130" x2="315" y2="190" stroke="black" stroke-width="2"/>
          <polygon points="315,130 309,142 321,142" fill="black" stroke="black"/>
          <text x="325" y="152" font-size="13" font-weight="bold">1</text>
          <text x="325" y="185" font-size="13" font-weight="bold">1..*</text>
          <!-- Legende -->
          <rect x="15" y="190" width="190" height="80" rx="4" fill="#f5f5f5" stroke="#ccc" stroke-width="1"/>
          <text x="25" y="210" font-size="11" font-weight="bold">Lesebeispiel:</text>
          <text x="25" y="228" font-size="11">1 Kunde gibt 0..* Bestellungen auf</text>
          <text x="25" y="246" font-size="11">1 Bestellung hat 1..* Positionen</text>
          <text x="25" y="264" font-size="11">(Komposition: volle Raute)</text>
        </svg>`
      },
      {
        titel: 'Abstrakte Klassen und Interfaces',
        inhalt: `
          <h4>Abstrakte Klassen</h4>
          <p>Eine <strong>abstrakte Klasse</strong> kann nicht direkt instanziiert werden. Sie dient als Vorlage für Unterklassen.</p>
          <ul>
            <li>Der Klassenname wird <em>kursiv</em> geschrieben: <em>Fahrzeug</em></li>
            <li>Alternativ: <code>{abstract}</code> unter dem Klassennamen</li>
            <li>Abstrakte Methoden (ohne Implementierung) werden ebenfalls kursiv geschrieben</li>
            <li>Unterklassen <strong>müssen</strong> alle abstrakten Methoden implementieren</li>
          </ul>
          <h4>Interfaces (Schnittstellen)</h4>
          <p>Ein <strong>Interface</strong> definiert nur Methodensignaturen (keine Implementierung) und keine Attribute (außer Konstanten).</p>
          <ul>
            <li>Darstellung: Über dem Namen steht <code>&laquo;interface&raquo;</code> (Guillemets)</li>
            <li>Eine Klasse, die ein Interface implementiert, wird mit einer <strong>gestrichelten Linie + Dreieckspfeil</strong> verbunden (Realisierung)</li>
            <li>Interfaces fördern lose Kopplung und Austauschbarkeit</li>
          </ul>
          <h4>Unterschied: Abstrakte Klasse vs. Interface</h4>
          <ul>
            <li>Abstrakte Klasse: kann Attribute und implementierte Methoden enthalten</li>
            <li>Interface: nur Methodensignaturen (in Java ab Version 8 auch Default-Methoden)</li>
            <li>Eine Klasse kann nur von <strong>einer</strong> abstrakten Klasse erben, aber <strong>mehrere</strong> Interfaces implementieren</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style>
            <marker id="triAbs" markerWidth="12" markerHeight="10" refX="12" refY="5" orient="auto">
              <polygon points="0,0 12,5 0,10" fill="white" stroke="black" stroke-width="1.5"/>
            </marker>
          </defs>
          <!-- Abstract class -->
          <rect x="130" y="10" width="160" height="75" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="130" y="10" width="160" height="30" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="210" y="30" text-anchor="middle" font-size="13" font-style="italic" font-weight="bold">Fahrzeug</text>
          <text x="210" y="22" text-anchor="middle" font-size="9" fill="#888">{abstract}</text>
          <line x1="130" y1="40" x2="290" y2="40" stroke="black" stroke-width="1"/>
          <text x="140" y="57" font-size="11"># geschwindigkeit: int</text>
          <line x1="130" y1="63" x2="290" y2="63" stroke="black" stroke-width="1"/>
          <text x="140" y="79" font-size="11" font-style="italic">+ fahren(): void</text>
          <!-- PKW -->
          <rect x="30" y="140" width="130" height="55" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="30" y="140" width="130" height="25" rx="3" fill="#e8f5e9" stroke="black" stroke-width="2"/>
          <text x="95" y="157" text-anchor="middle" font-size="13" font-weight="bold">PKW</text>
          <line x1="30" y1="165" x2="160" y2="165" stroke="black" stroke-width="1"/>
          <text x="40" y="182" font-size="11">+ fahren(): void</text>
          <!-- LKW -->
          <rect x="250" y="140" width="130" height="55" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="250" y="140" width="130" height="25" rx="3" fill="#e8f5e9" stroke="black" stroke-width="2"/>
          <text x="315" y="157" text-anchor="middle" font-size="13" font-weight="bold">LKW</text>
          <line x1="250" y1="165" x2="380" y2="165" stroke="black" stroke-width="1"/>
          <text x="260" y="182" font-size="11">+ fahren(): void</text>
          <!-- Vererbungslinien -->
          <line x1="95" y1="140" x2="200" y2="85" stroke="black" stroke-width="2" marker-end="url(#triAbs)"/>
          <line x1="315" y1="140" x2="220" y2="85" stroke="black" stroke-width="2" marker-end="url(#triAbs)"/>
          <!-- Interface -->
          <rect x="130" y="220" width="160" height="70" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="130" y="220" width="160" height="35" rx="3" fill="#fce4ec" stroke="black" stroke-width="2"/>
          <text x="210" y="237" text-anchor="middle" font-size="10" fill="#888">&laquo;interface&raquo;</text>
          <text x="210" y="250" text-anchor="middle" font-size="13" font-weight="bold">Fahrbar</text>
          <line x1="130" y1="255" x2="290" y2="255" stroke="black" stroke-width="1"/>
          <text x="140" y="275" font-size="11">+ fahren(): void</text>
          <text x="140" y="286" font-size="11">+ bremsen(): void</text>
        </svg>`
      },
      {
        titel: 'Beispiel: Online-Shop Klassendiagramm',
        inhalt: `
          <p>Hier ein typisches Prüfungsbeispiel &ndash; ein vereinfachtes Klassendiagramm für einen Online-Shop:</p>
          <ul>
            <li><strong>Kunde</strong> hat Attribute wie Name und E-Mail</li>
            <li><strong>Bestellung</strong> gehört zu einem Kunden (Assoziation)</li>
            <li><strong>Bestellposition</strong> ist Teil einer Bestellung (Komposition)</li>
            <li><strong>Produkt</strong> wird in Bestellpositionen referenziert</li>
          </ul>
          <p>Dieses Szenario wird häufig in AP2-Prüfungen verwendet. Achte besonders auf:</p>
          <ul>
            <li>Die korrekten Multiplizitäten</li>
            <li>Den Unterschied zwischen Aggregation und Komposition</li>
            <li>Die richtige Notation der Sichtbarkeiten</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style>
          </defs>
          <!-- Kunde -->
          <rect x="10" y="10" width="140" height="80" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="10" y="10" width="140" height="25" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="80" y="27" text-anchor="middle" font-size="12" font-weight="bold">Kunde</text>
          <text x="18" y="50" font-size="10">- name: String</text>
          <text x="18" y="63" font-size="10">- email: String</text>
          <text x="18" y="76" font-size="10">+ bestellen(): void</text>
          <!-- Bestellung -->
          <rect x="230" y="10" width="155" height="80" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="230" y="10" width="155" height="25" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="307" y="27" text-anchor="middle" font-size="12" font-weight="bold">Bestellung</text>
          <text x="238" y="50" font-size="10">- bestellNr: int</text>
          <text x="238" y="63" font-size="10">- datum: Date</text>
          <text x="238" y="76" font-size="10">+ getGesamt(): double</text>
          <!-- Kunde -> Bestellung -->
          <line x1="150" y1="50" x2="230" y2="50" stroke="black" stroke-width="2"/>
          <text x="158" y="44" font-size="11" font-weight="bold">1</text>
          <text x="210" y="44" font-size="11" font-weight="bold">*</text>
          <!-- Bestellposition -->
          <rect x="230" y="140" width="155" height="70" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="230" y="140" width="155" height="25" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="307" y="157" text-anchor="middle" font-size="12" font-weight="bold">Bestellposition</text>
          <text x="238" y="179" font-size="10">- menge: int</text>
          <text x="238" y="192" font-size="10">- einzelpreis: double</text>
          <!-- Komposition Bestellung -> Bestellposition -->
          <line x1="307" y1="90" x2="307" y2="140" stroke="black" stroke-width="2"/>
          <polygon points="307,90 301,102 313,102" fill="black" stroke="black"/>
          <text x="315" y="108" font-size="11" font-weight="bold">1</text>
          <text x="315" y="136" font-size="11" font-weight="bold">1..*</text>
          <!-- Produkt -->
          <rect x="10" y="140" width="140" height="70" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <rect x="10" y="140" width="140" height="25" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="80" y="157" text-anchor="middle" font-size="12" font-weight="bold">Produkt</text>
          <text x="18" y="179" font-size="10">- bezeichnung: String</text>
          <text x="18" y="192" font-size="10">- preis: double</text>
          <!-- Produkt -> Bestellposition -->
          <line x1="150" y1="175" x2="230" y2="175" stroke="black" stroke-width="2"/>
          <text x="158" y="169" font-size="11" font-weight="bold">1</text>
          <text x="210" y="169" font-size="11" font-weight="bold">*</text>
          <!-- Legende -->
          <rect x="10" y="240" width="375" height="50" rx="4" fill="#fffde7" stroke="#fbc02d" stroke-width="1"/>
          <text x="20" y="258" font-size="11" font-weight="bold">Lesebeispiel:</text>
          <text x="20" y="275" font-size="10">1 Kunde hat * (beliebig viele) Bestellungen. 1 Bestellung besteht aus 1..* Positionen.</text>
        </svg>`
      },
      {
        titel: 'Häufige Fehler im Klassendiagramm',
        inhalt: `
          <p>Diese Fehler treten bei der AP2-Prüfung besonders häufig auf:</p>
          <h4>1. Verwechslung von Aggregation und Komposition</h4>
          <ul>
            <li><strong>Aggregation (leere Raute):</strong> Der Teil kann auch allein existieren &rarr; Team &ndash; Mitarbeiter</li>
            <li><strong>Komposition (volle Raute):</strong> Der Teil kann NICHT ohne das Ganze existieren &rarr; Haus &ndash; Raum</li>
            <li><strong>Merke:</strong> Wenn das Ganze gelöscht wird und der Teil auch verschwinden muss = Komposition</li>
          </ul>
          <h4>2. Falsche Multiplizitäten</h4>
          <ul>
            <li>Die Multiplizität steht immer am <strong>gegenüberliegenden Ende</strong></li>
            <li><code>0..*</code> ist <strong>nicht</strong> dasselbe wie <code>1..*</code> &ndash; achte auf das Minimum!</li>
          </ul>
          <h4>3. Sichtbarkeiten vergessen</h4>
          <ul>
            <li>Jedes Attribut und jede Methode braucht ein Sichtbarkeitssymbol</li>
            <li>Attribute sind fast immer <code>-</code> (private), Getter/Setter sind <code>+</code> (public)</li>
          </ul>
          <h4>4. Datentypen fehlen</h4>
          <ul>
            <li>Jedes Attribut braucht einen Datentyp: <code>- name: String</code></li>
            <li>Jede Methode braucht einen Rückgabetyp: <code>+ getName(): String</code></li>
          </ul>
          <h4>5. Vererbungspfeil in die falsche Richtung</h4>
          <ul>
            <li>Der Dreieckspfeil zeigt IMMER zur <strong>Oberklasse</strong> (Generalisierung)</li>
            <li>Falsch: Fahrzeug &rarr; PKW | Richtig: PKW &rarr; Fahrzeug</li>
          </ul>
          <h4>6. Raute auf der falschen Seite</h4>
          <ul>
            <li>Die Raute (Aggregation/Komposition) steht immer beim <strong>Ganzen</strong>, nicht beim Teil!</li>
          </ul>
        `
      }
    ],
    pruefungsTipps: [
      'Lerne die 5 Beziehungstypen auswendig und übe sie mit eigenen Beispielen. Besonders Aggregation vs. Komposition wird oft abgefragt.',
      'Achte immer auf die korrekte Notation: Sichtbarkeit + Name + Doppelpunkt + Datentyp für Attribute, Sichtbarkeit + Name + Klammern + Doppelpunkt + Rückgabetyp für Methoden.',
      'Multiplizitäten werden in der Prüfung gerne falsch gelesen. Denke daran: Die Zahl steht am gegenüberliegenden Ende der Beziehung.',
      'Bei Vererbung immer prüfen: Gilt die "ist-ein"-Beziehung? Ein PKW IST EIN Fahrzeug. Wenn ja, ist Vererbung korrekt.',
      'Präge dir die Sichtbarkeitssymbole ein: + (public), - (private), # (protected), ~ (package). In der Prüfung wird oft gefragt, was ein bestimmtes Symbol bedeutet.'
    ]
  },

  // ============================================================
  // ANWENDUNGSFALLDIAGRAMM (USE CASE)
  // ============================================================
  {
    diagrammTyp: 'anwendungsfall',
    titel: 'Anwendungsfalldiagramm (Use-Case-Diagramm)',
    einleitung: 'Das Anwendungsfalldiagramm (englisch: Use-Case-Diagramm) beschreibt die Funktionalität eines Systems aus der Sicht der Benutzer. Es zeigt, WAS ein System tut, aber nicht WIE es das tut. Es ist eines der einfachsten UML-Diagramme und wird häufig in der Anforderungsanalyse eingesetzt.',
    abschnitte: [
      {
        titel: 'Was ist ein Anwendungsfalldiagramm?',
        inhalt: `
          <p>Ein <strong>Anwendungsfalldiagramm</strong> zeigt die Interaktionen zwischen Benutzern (Akteuren) und einem System. Es beantwortet die Frage: <em>&bdquo;Welche Funktionen bietet das System welchen Benutzern?&ldquo;</em></p>
          <p>Es besteht aus vier Grundelementen:</p>
          <ul>
            <li><strong>Akteure</strong> &ndash; Personen oder externe Systeme, die mit dem System interagieren (Strichmännchen)</li>
            <li><strong>Anwendungsfälle</strong> &ndash; Funktionen des Systems (Ellipsen mit Beschreibung)</li>
            <li><strong>Systemgrenze</strong> &ndash; ein Rechteck, das die Grenze des Systems darstellt</li>
            <li><strong>Beziehungen</strong> &ndash; Linien zwischen Akteuren und Anwendungsfällen</li>
          </ul>
          <h4>Wofür wird es verwendet?</h4>
          <ul>
            <li>Anforderungsanalyse: Welche Funktionen braucht das System?</li>
            <li>Kommunikation mit dem Kunden: Einfach verständlich, auch für Nicht-Techniker</li>
            <li>Abgrenzung: Was gehört zum System und was nicht?</li>
            <li>Testplanung: Jeder Anwendungsfall kann als Testfall dienen</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Grundelemente</text>
          <!-- Akteur -->
          <circle cx="60" cy="80" r="12" fill="none" stroke="black" stroke-width="2"/>
          <line x1="60" y1="92" x2="60" y2="130" stroke="black" stroke-width="2"/>
          <line x1="35" y1="105" x2="85" y2="105" stroke="black" stroke-width="2"/>
          <line x1="60" y1="130" x2="40" y2="160" stroke="black" stroke-width="2"/>
          <line x1="60" y1="130" x2="80" y2="160" stroke="black" stroke-width="2"/>
          <text x="60" y="178" text-anchor="middle" font-size="12">Akteur</text>
          <!-- Anwendungsfall -->
          <ellipse cx="210" cy="115" rx="80" ry="30" fill="white" stroke="black" stroke-width="2"/>
          <text x="210" y="119" text-anchor="middle" font-size="12">Anwendungsfall</text>
          <!-- Systemgrenze -->
          <rect x="150" y="210" width="200" height="70" rx="3" fill="white" stroke="black" stroke-width="2"/>
          <text x="250" y="230" text-anchor="middle" font-size="12" font-weight="bold">Systemname</text>
          <ellipse cx="250" cy="258" rx="60" ry="17" fill="#f0f4ff" stroke="black" stroke-width="1.5"/>
          <text x="250" y="262" text-anchor="middle" font-size="10">Funktion</text>
          <text x="250" y="300" text-anchor="middle" font-size="11" fill="#666">Systemgrenze (Rechteck)</text>
          <!-- Assoziation -->
          <line x1="85" y1="115" x2="130" y2="115" stroke="black" stroke-width="2"/>
          <text x="107" y="108" text-anchor="middle" font-size="10" fill="#666">Assoziation</text>
        </svg>`
      },
      {
        titel: 'Akteure',
        inhalt: `
          <p>Ein <strong>Akteur</strong> ist eine Person, Rolle oder ein externes System, das mit dem modellierten System interagiert. Akteure befinden sich <strong>außerhalb</strong> der Systemgrenze.</p>
          <h4>Arten von Akteuren</h4>
          <ul>
            <li><strong>Primäre Akteure:</strong> Lösen einen Anwendungsfall aktiv aus (z.B. Kunde, Administrator)</li>
            <li><strong>Sekundäre Akteure:</strong> Werden vom System angesprochen (z.B. E-Mail-Server, Zahlungsdienstleister)</li>
          </ul>
          <h4>Darstellung</h4>
          <ul>
            <li>Menschliche Akteure: <strong>Strichmännchen</strong> mit Rollenname darunter</li>
            <li>Systemakteure: Rechteck mit <code>&laquo;actor&raquo;</code> als Stereotyp</li>
          </ul>
          <h4>Wichtige Regeln</h4>
          <ul>
            <li>Akteure sind immer <strong>Rollen</strong>, keine konkreten Personen (nicht &bdquo;Herr Müller&ldquo;, sondern &bdquo;Kunde&ldquo;)</li>
            <li>Ein Akteur kann mit mehreren Anwendungsfällen verbunden sein</li>
            <li>Akteure können voneinander erben (Generalisierung): z.B. &bdquo;Premium-Kunde&ldquo; erbt von &bdquo;Kunde&ldquo;</li>
          </ul>
        `
      },
      {
        titel: 'Anwendungsfälle und Systemgrenze',
        inhalt: `
          <h4>Anwendungsfälle (Use Cases)</h4>
          <p>Ein Anwendungsfall beschreibt eine <strong>abgeschlossene Funktion</strong>, die das System einem Akteur bereitstellt.</p>
          <ul>
            <li>Darstellung: <strong>Ellipse</strong> mit dem Namen der Funktion</li>
            <li>Der Name sollte ein <strong>Verb + Objekt</strong> sein: &bdquo;Bestellung aufgeben&ldquo;, &bdquo;Konto anzeigen&ldquo;</li>
            <li>Anwendungsfälle befinden sich <strong>innerhalb</strong> der Systemgrenze</li>
          </ul>
          <h4>Systemgrenze</h4>
          <p>Die Systemgrenze ist ein <strong>Rechteck</strong>, das das modellierte System umschließt. Der Systemname steht oben im Rechteck.</p>
          <ul>
            <li>Alles innerhalb des Rechtecks gehört zum System</li>
            <li>Akteure stehen <strong>außerhalb</strong> des Rechtecks</li>
            <li>Die Systemgrenze hilft zu definieren, was zum System gehört und was nicht</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <!-- System boundary -->
          <rect x="100" y="10" width="250" height="280" rx="5" fill="#fafafa" stroke="black" stroke-width="2"/>
          <text x="225" y="32" text-anchor="middle" font-size="14" font-weight="bold">Online-Shop</text>
          <!-- Akteur Kunde -->
          <circle cx="45" cy="80" r="10" fill="none" stroke="black" stroke-width="2"/>
          <line x1="45" y1="90" x2="45" y2="120" stroke="black" stroke-width="2"/>
          <line x1="25" y1="100" x2="65" y2="100" stroke="black" stroke-width="2"/>
          <line x1="45" y1="120" x2="30" y2="145" stroke="black" stroke-width="2"/>
          <line x1="45" y1="120" x2="60" y2="145" stroke="black" stroke-width="2"/>
          <text x="45" y="160" text-anchor="middle" font-size="11">Kunde</text>
          <!-- Akteur Admin -->
          <circle cx="45" cy="210" r="10" fill="none" stroke="black" stroke-width="2"/>
          <line x1="45" y1="220" x2="45" y2="250" stroke="black" stroke-width="2"/>
          <line x1="25" y1="230" x2="65" y2="230" stroke="black" stroke-width="2"/>
          <line x1="45" y1="250" x2="30" y2="275" stroke="black" stroke-width="2"/>
          <line x1="45" y1="250" x2="60" y2="275" stroke="black" stroke-width="2"/>
          <text x="45" y="290" text-anchor="middle" font-size="11">Admin</text>
          <!-- Use Cases -->
          <ellipse cx="225" cy="65" rx="85" ry="22" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="225" y="69" text-anchor="middle" font-size="11">Produkt suchen</text>
          <ellipse cx="225" cy="120" rx="85" ry="22" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="225" y="124" text-anchor="middle" font-size="11">Bestellung aufgeben</text>
          <ellipse cx="225" cy="175" rx="85" ry="22" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="225" y="179" text-anchor="middle" font-size="11">Konto verwalten</text>
          <ellipse cx="225" cy="230" rx="85" ry="22" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="225" y="234" text-anchor="middle" font-size="11">Produkt verwalten</text>
          <ellipse cx="225" cy="268" rx="85" ry="22" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="225" y="272" text-anchor="middle" font-size="11">Bestellung bearbeiten</text>
          <!-- Assoziationen Kunde -->
          <line x1="65" y1="90" x2="140" y2="65" stroke="black" stroke-width="1.5"/>
          <line x1="65" y1="100" x2="140" y2="120" stroke="black" stroke-width="1.5"/>
          <line x1="65" y1="110" x2="140" y2="175" stroke="black" stroke-width="1.5"/>
          <!-- Assoziationen Admin -->
          <line x1="65" y1="230" x2="140" y2="230" stroke="black" stroke-width="1.5"/>
          <line x1="65" y1="240" x2="140" y2="268" stroke="black" stroke-width="1.5"/>
        </svg>`
      },
      {
        titel: 'Beziehungen im Anwendungsfalldiagramm',
        inhalt: `
          <p>Es gibt verschiedene Beziehungstypen im Anwendungsfalldiagramm:</p>
          <h4>1. Assoziation</h4>
          <p>Eine <strong>durchgezogene Linie</strong> zwischen Akteur und Anwendungsfall. Sie zeigt, dass der Akteur an diesem Anwendungsfall beteiligt ist.</p>
          <h4>2. Include-Beziehung (&laquo;include&raquo;)</h4>
          <p>Ein Anwendungsfall <strong>schließt immer</strong> einen anderen ein. Der eingeschlossene Teil wird <strong>immer</strong> ausgeführt.</p>
          <ul>
            <li>Darstellung: <strong>Gestrichelter Pfeil</strong> mit <code>&laquo;include&raquo;</code></li>
            <li>Der Pfeil zeigt vom Basis-Anwendungsfall zum eingeschlossenen</li>
            <li>Beispiel: &bdquo;Bestellung aufgeben&ldquo; <em>schließt immer</em> &bdquo;Zahlung durchführen&ldquo; ein</li>
          </ul>
          <h4>3. Extend-Beziehung (&laquo;extend&raquo;)</h4>
          <p>Ein Anwendungsfall <strong>kann optional</strong> einen anderen erweitern. Die Erweiterung wird <strong>nicht immer</strong> ausgeführt.</p>
          <ul>
            <li>Darstellung: <strong>Gestrichelter Pfeil</strong> mit <code>&laquo;extend&raquo;</code></li>
            <li>Der Pfeil zeigt von der Erweiterung zum Basis-Anwendungsfall</li>
            <li>Beispiel: &bdquo;Gutschein einlösen&ldquo; <em>erweitert optional</em> &bdquo;Bestellung aufgeben&ldquo;</li>
          </ul>
          <h4>4. Generalisierung (Vererbung)</h4>
          <p>Ein Akteur oder Anwendungsfall erbt von einem anderen.</p>
          <ul>
            <li>Darstellung: <strong>Durchgezogene Linie mit Dreieckspfeil</strong> zum Allgemeineren</li>
            <li>Beispiel: &bdquo;Premium-Kunde&ldquo; erbt alle Anwendungsfälle von &bdquo;Kunde&ldquo;</li>
          </ul>
          <h4>Merkhilfe: Include vs. Extend</h4>
          <p><strong>Include = IMMER</strong> (der Basis-UC braucht den anderen zwingend)</p>
          <p><strong>Extend = MANCHMAL</strong> (optionale Erweiterung unter bestimmten Bedingungen)</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style>
            <marker id="arrowUC" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <path d="M0,0 L8,3 L0,6" fill="none" stroke="black" stroke-width="1.2"/>
            </marker>
          </defs>
          <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">Include und Extend</text>
          <!-- Basis-UC -->
          <ellipse cx="200" cy="80" rx="95" ry="28" fill="white" stroke="black" stroke-width="2"/>
          <text x="200" y="84" text-anchor="middle" font-size="12">Bestellung aufgeben</text>
          <!-- Include-UC -->
          <ellipse cx="200" cy="175" rx="95" ry="28" fill="#e8f5e9" stroke="black" stroke-width="1.5"/>
          <text x="200" y="179" text-anchor="middle" font-size="12">Zahlung durchführen</text>
          <!-- Extend-UC -->
          <ellipse cx="200" cy="262" rx="95" ry="28" fill="#fff3e0" stroke="black" stroke-width="1.5"/>
          <text x="200" y="266" text-anchor="middle" font-size="12">Gutschein einlösen</text>
          <!-- Include arrow (Basis -> Included) -->
          <line x1="200" y1="108" x2="200" y2="147" stroke="black" stroke-width="1.5" stroke-dasharray="6,3" marker-end="url(#arrowUC)"/>
          <rect x="145" y="118" width="110" height="18" rx="2" fill="white" stroke="none"/>
          <text x="200" y="132" text-anchor="middle" font-size="11" fill="#333">&laquo;include&raquo;</text>
          <!-- Extend arrow (Extended -> Basis) -->
          <line x1="200" y1="234" x2="200" y2="203" stroke="black" stroke-width="1.5" stroke-dasharray="6,3" marker-end="url(#arrowUC)"/>
          <rect x="145" y="210" width="110" height="18" rx="2" fill="white" stroke="none"/>
          <text x="200" y="224" text-anchor="middle" font-size="11" fill="#333">&laquo;extend&raquo;</text>
          <!-- Labels -->
          <text x="330" y="132" font-size="10" fill="#388e3c" font-weight="bold">IMMER</text>
          <text x="330" y="224" font-size="10" fill="#f57c00" font-weight="bold">OPTIONAL</text>
          <!-- Pfeilrichtungs-Hinweis -->
          <rect x="15" y="125" width="100" height="16" rx="2" fill="#f5f5f5" stroke="#ccc" stroke-width="0.5"/>
          <text x="65" y="137" text-anchor="middle" font-size="9" fill="#666">Pfeil: Basis &rarr; Teil</text>
          <rect x="15" y="217" width="115" height="16" rx="2" fill="#f5f5f5" stroke="#ccc" stroke-width="0.5"/>
          <text x="72" y="229" text-anchor="middle" font-size="9" fill="#666">Pfeil: Erweiterung &rarr; Basis</text>
        </svg>`
      },
      {
        titel: 'Regeln und Richtlinien',
        inhalt: `
          <h4>Dos (Richtig machen)</h4>
          <ul>
            <li>Anwendungsfälle mit <strong>Verb + Objekt</strong> benennen: &bdquo;Rechnung erstellen&ldquo;</li>
            <li>Akteure als <strong>Rollen</strong> benennen, nicht als Personen</li>
            <li>Systemgrenze immer einzeichnen</li>
            <li>Assoziationen als einfache Linien (ohne Pfeilspitzen)</li>
            <li>Include und Extend sparsam einsetzen</li>
          </ul>
          <h4>Don'ts (Häufige Fehler)</h4>
          <ul>
            <li><strong>Nicht zu detailliert:</strong> Ein Anwendungsfall ist keine Einzelaktion wie &bdquo;Button klicken&ldquo;</li>
            <li><strong>Keine Ablauflogik:</strong> Das Diagramm zeigt KEINE Reihenfolge</li>
            <li><strong>Include/Extend nicht verwechseln:</strong> Die Pfeilrichtung ist unterschiedlich!</li>
            <li><strong>Keine Akteur-zu-Akteur-Verbindungen:</strong> Akteure kommunizieren nicht direkt miteinander</li>
            <li><strong>Kein Systeminternes:</strong> Nur Funktionen zeigen, die für Akteure sichtbar sind</li>
          </ul>
        `
      },
      {
        titel: 'Häufige Fehler im Anwendungsfalldiagramm',
        inhalt: `
          <h4>1. Include- und Extend-Pfeile vertauscht</h4>
          <ul>
            <li><strong>Include:</strong> Pfeil vom Basis-UC <strong>zum</strong> eingeschlossenen UC (zeigt: &bdquo;ich brauche dich immer&ldquo;)</li>
            <li><strong>Extend:</strong> Pfeil von der Erweiterung <strong>zum</strong> Basis-UC (zeigt: &bdquo;ich erweitere dich optional&ldquo;)</li>
          </ul>
          <h4>2. Zu viele Details</h4>
          <p>Ein Anwendungsfall wie &bdquo;Formular ausfüllen&ldquo; ist zu feingranular. Besser: &bdquo;Konto erstellen&ldquo;.</p>
          <h4>3. Akteure innerhalb der Systemgrenze</h4>
          <p>Akteure stehen <strong>immer außerhalb</strong> der Systemgrenze!</p>
          <h4>4. Assoziationen zwischen Anwendungsfällen</h4>
          <p>Zwischen Anwendungsfällen gibt es nur Include, Extend oder Generalisierung &ndash; <strong>keine</strong> einfachen Assoziationen!</p>
          <h4>5. Vergessene Systemgrenze</h4>
          <p>Die Systemgrenze (Rechteck) ist ein Pflichtbestandteil des Diagramms.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Merke dir die Pfeilrichtungen: Include zeigt VON der Basis ZUM eingeschlossenen UC. Extend zeigt VON der Erweiterung ZUR Basis. Das wird sehr oft abgefragt!',
      'Include = IMMER ausgeführt, Extend = OPTIONAL. Eine einfache Eselsbrücke: "Include ist wie ein Pflichtfach, Extend wie ein Wahlfach."',
      'Benenne Anwendungsfälle immer als Verb + Objekt (z.B. "Rechnung erstellen"). Substantive wie "Rechnungserstellung" sind falsch.',
      'In der Prüfung wird oft gefragt, ob ein bestimmtes Element innerhalb oder außerhalb der Systemgrenze liegt. Akteure sind IMMER außerhalb!'
    ]
  },

  // ============================================================
  // SEQUENZDIAGRAMM
  // ============================================================
  {
    diagrammTyp: 'sequenzdiagramm',
    titel: 'Sequenzdiagramm',
    einleitung: 'Das Sequenzdiagramm ist ein Verhaltensdiagramm, das den zeitlichen Ablauf von Nachrichten zwischen Objekten darstellt. Es zeigt, in welcher Reihenfolge Objekte miteinander kommunizieren, um eine bestimmte Funktion zu erfüllen. In der AP2-Prüfung wird häufig verlangt, Sequenzdiagramme zu lesen oder zu erstellen.',
    abschnitte: [
      {
        titel: 'Was ist ein Sequenzdiagramm?',
        inhalt: `
          <p>Ein <strong>Sequenzdiagramm</strong> zeigt die <strong>zeitliche Abfolge</strong> von Nachrichten (Methodenaufrufen) zwischen Objekten oder Komponenten eines Systems.</p>
          <h4>Kernkonzepte</h4>
          <ul>
            <li><strong>Objekte/Teilnehmer:</strong> Die Kommunikationspartner, dargestellt als Rechtecke oben im Diagramm</li>
            <li><strong>Lebenslinien:</strong> Gestrichelte vertikale Linien unter jedem Objekt &ndash; zeigen die Existenz über die Zeit</li>
            <li><strong>Nachrichten:</strong> Pfeile zwischen den Lebenslinien &ndash; zeigen den Informationsaustausch</li>
            <li><strong>Aktivierungsbalken:</strong> Schmale Rechtecke auf der Lebenslinie &ndash; zeigen, wann ein Objekt aktiv ist</li>
          </ul>
          <h4>Leserichtung</h4>
          <p>Das Diagramm wird von <strong>oben nach unten</strong> gelesen. Nachrichten weiter unten finden <strong>später</strong> statt.</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <text x="200" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Grundaufbau eines Sequenzdiagramms</text>
          <!-- Objekt 1 -->
          <rect x="30" y="32" width="100" height="30" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="80" y="52" text-anchor="middle" font-size="12">:Kunde</text>
          <line x1="80" y1="62" x2="80" y2="280" stroke="black" stroke-width="1" stroke-dasharray="5,3"/>
          <!-- Objekt 2 -->
          <rect x="175" y="32" width="100" height="30" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="225" y="52" text-anchor="middle" font-size="12">:Warenkorb</text>
          <line x1="225" y1="62" x2="225" y2="280" stroke="black" stroke-width="1" stroke-dasharray="5,3"/>
          <!-- Objekt 3 -->
          <rect x="320" y="32" width="70" height="30" rx="3" fill="#f0f4ff" stroke="black" stroke-width="2"/>
          <text x="355" y="52" text-anchor="middle" font-size="12">:Produkt</text>
          <line x1="355" y1="62" x2="355" y2="280" stroke="black" stroke-width="1" stroke-dasharray="5,3"/>
          <!-- Aktivierungsbalken -->
          <rect x="75" y="85" width="10" height="170" fill="white" stroke="black" stroke-width="1.5"/>
          <rect x="220" y="95" width="10" height="80" fill="white" stroke="black" stroke-width="1.5"/>
          <rect x="350" y="115" width="10" height="35" fill="white" stroke="black" stroke-width="1.5"/>
          <!-- Nachricht 1: synchron -->
          <line x1="85" y1="100" x2="220" y2="100" stroke="black" stroke-width="1.5"/>
          <polygon points="220,100 212,96 212,104" fill="black"/>
          <text x="152" y="95" text-anchor="middle" font-size="10">hinzufügen(p)</text>
          <!-- Nachricht 2: synchron -->
          <line x1="230" y1="120" x2="350" y2="120" stroke="black" stroke-width="1.5"/>
          <polygon points="350,120 342,116 342,124" fill="black"/>
          <text x="290" y="115" text-anchor="middle" font-size="10">getPreis()</text>
          <!-- Antwort -->
          <line x1="350" y1="145" x2="230" y2="145" stroke="black" stroke-width="1.5" stroke-dasharray="5,3"/>
          <polygon points="230,145 238,141 238,149" fill="black"/>
          <text x="290" y="140" text-anchor="middle" font-size="10">preis</text>
          <!-- Antwort 2 -->
          <line x1="220" y1="170" x2="85" y2="170" stroke="black" stroke-width="1.5" stroke-dasharray="5,3"/>
          <polygon points="85,170 93,166 93,174" fill="black"/>
          <text x="152" y="165" text-anchor="middle" font-size="10">bestätigung</text>
          <!-- Nachricht 3: asynchron -->
          <line x1="85" y1="210" x2="220" y2="210" stroke="black" stroke-width="1.5"/>
          <polygon points="220,210 212,206 212,214" fill="none" stroke="black" stroke-width="1.5"/>
          <text x="152" y="205" text-anchor="middle" font-size="10">benachrichtige()</text>
          <!-- Legende -->
          <rect x="5" y="260" width="390" height="35" rx="3" fill="#f5f5f5" stroke="#ccc" stroke-width="1"/>
          <line x1="15" y1="275" x2="50" y2="275" stroke="black" stroke-width="1.5"/>
          <polygon points="50,275 42,271 42,279" fill="black"/>
          <text x="55" y="279" font-size="9">synchron</text>
          <line x1="115" y1="275" x2="150" y2="275" stroke="black" stroke-width="1.5" stroke-dasharray="5,3"/>
          <polygon points="150,275 142,271 142,279" fill="black"/>
          <text x="155" y="279" font-size="9">Antwort</text>
          <line x1="215" y1="275" x2="250" y2="275" stroke="black" stroke-width="1.5"/>
          <polygon points="250,275 242,271 242,279" fill="none" stroke="black" stroke-width="1.5"/>
          <text x="255" y="279" font-size="9">asynchron</text>
          <rect x="330" y="268" width="10" height="14" fill="white" stroke="black" stroke-width="1"/>
          <text x="345" y="279" font-size="9">aktiv</text>
        </svg>`
      },
      {
        titel: 'Objekte und Lebenslinien',
        inhalt: `
          <h4>Objekte / Teilnehmer</h4>
          <p>Objekte werden oben im Diagramm als <strong>Rechtecke</strong> dargestellt. Die Benennung folgt der Notation:</p>
          <ul>
            <li><code>objektname:Klasse</code> &ndash; konkretes Objekt einer Klasse (z.B. <code>meinkonto:Konto</code>)</li>
            <li><code>:Klasse</code> &ndash; anonymes Objekt (nur die Klasse, z.B. <code>:Konto</code>)</li>
            <li><code>objektname</code> &ndash; nur der Name (selten)</li>
          </ul>
          <h4>Lebenslinien</h4>
          <p>Unter jedem Objekt verläuft eine <strong>gestrichelte vertikale Linie</strong> nach unten. Diese stellt die <strong>Existenzdauer</strong> des Objekts dar.</p>
          <ul>
            <li>Die Lebenslinie beginnt bei der Erzeugung des Objekts</li>
            <li>Ein <strong>X</strong> am Ende der Lebenslinie bedeutet, dass das Objekt zerstört wird</li>
          </ul>
          <h4>Aktivierungsbalken</h4>
          <p>Ein <strong>schmales Rechteck</strong> auf der Lebenslinie zeigt an, dass das Objekt gerade aktiv ist (eine Methode ausführt).</p>
          <ul>
            <li>Der Balken beginnt, wenn eine Nachricht empfangen wird</li>
            <li>Der Balken endet, wenn die Antwort zurückgesendet wird</li>
            <li>Verschachtelte Aufrufe erzeugen überlappende Balken</li>
          </ul>
        `
      },
      {
        titel: 'Nachrichtentypen',
        inhalt: `
          <p>Nachrichten sind die Pfeile zwischen den Lebenslinien. Es gibt verschiedene Arten:</p>
          <h4>1. Synchrone Nachricht</h4>
          <ul>
            <li>Darstellung: <strong>Durchgezogene Linie mit gefülltem Pfeil</strong></li>
            <li>Der Sender wartet auf eine Antwort, bevor er fortfährt</li>
            <li>Typisch: Methodenaufrufe</li>
            <li>Beispiel: <code>getPreis()</code></li>
          </ul>
          <h4>2. Asynchrone Nachricht</h4>
          <ul>
            <li>Darstellung: <strong>Durchgezogene Linie mit offenem Pfeil</strong></li>
            <li>Der Sender wartet NICHT auf eine Antwort</li>
            <li>Typisch: Events, Benachrichtigungen</li>
            <li>Beispiel: <code>sendeEmail()</code></li>
          </ul>
          <h4>3. Antwortnachricht</h4>
          <ul>
            <li>Darstellung: <strong>Gestrichelte Linie mit offenem oder gefülltem Pfeil</strong></li>
            <li>Der Rückgabewert einer synchronen Nachricht</li>
            <li>Beispiel: <code>preis = 29.99</code></li>
          </ul>
          <h4>4. Erzeugungsnachricht (Create)</h4>
          <ul>
            <li>Ein Pfeil, der direkt auf das Objektrechteck zeigt (das Objekt wird dabei erst erzeugt)</li>
            <li>Mit <code>&laquo;create&raquo;</code> oder <code>new</code> beschriftet</li>
          </ul>
          <h4>5. Löschnachricht (Destroy)</h4>
          <ul>
            <li>Ein <strong>X</strong> am Ende der Lebenslinie zeigt die Zerstörung an</li>
          </ul>
        `
      },
      {
        titel: 'Fragmente (Kombinierte Fragmente)',
        inhalt: `
          <p><strong>Fragmente</strong> sind Bereiche im Sequenzdiagramm, die spezielle Ablauflogik darstellen. Sie werden als Rechteck mit einem Operator in der linken oberen Ecke dargestellt.</p>
          <h4>Die wichtigsten Fragmenttypen:</h4>
          <h4>1. alt (Alternative / Verzweigung)</h4>
          <ul>
            <li>Entspricht einer <strong>if-else</strong>-Anweisung</li>
            <li>Das Rechteck wird durch eine gestrichelte Linie in Bereiche geteilt</li>
            <li>Jeder Bereich hat eine <strong>Bedingung</strong> in eckigen Klammern: <code>[Bedingung]</code></li>
            <li>Der else-Teil wird mit <code>[else]</code> gekennzeichnet</li>
          </ul>
          <h4>2. loop (Schleife)</h4>
          <ul>
            <li>Entspricht einer <strong>while</strong>- oder <strong>for</strong>-Schleife</li>
            <li>Die Bedingung steht in eckigen Klammern</li>
            <li>Optional: Mindest- und Maximalanzahl: <code>loop(1, 10)</code></li>
          </ul>
          <h4>3. opt (Optional)</h4>
          <ul>
            <li>Entspricht einem <strong>if</strong> ohne else</li>
            <li>Der Inhalt wird nur ausgeführt, wenn die Bedingung wahr ist</li>
          </ul>
          <h4>Weitere Fragmenttypen (seltener in der AP2)</h4>
          <ul>
            <li><strong>par</strong> &ndash; Parallele Ausführung</li>
            <li><strong>break</strong> &ndash; Abbruch der Sequenz</li>
            <li><strong>ref</strong> &ndash; Referenz auf ein anderes Sequenzdiagramm</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <text x="200" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Fragment: alt (Verzweigung)</text>
          <!-- Objekte -->
          <rect x="40" y="30" width="80" height="25" rx="3" fill="#f0f4ff" stroke="black" stroke-width="1.5"/>
          <text x="80" y="47" text-anchor="middle" font-size="11">:Benutzer</text>
          <line x1="80" y1="55" x2="80" y2="290" stroke="black" stroke-width="1" stroke-dasharray="4,3"/>
          <rect x="200" y="30" width="80" height="25" rx="3" fill="#f0f4ff" stroke="black" stroke-width="1.5"/>
          <text x="240" y="47" text-anchor="middle" font-size="11">:System</text>
          <line x1="240" y1="55" x2="240" y2="290" stroke="black" stroke-width="1" stroke-dasharray="4,3"/>
          <!-- Nachricht login -->
          <rect x="75" y="70" width="10" height="200" fill="white" stroke="black" stroke-width="1"/>
          <rect x="235" y="80" width="10" height="185" fill="white" stroke="black" stroke-width="1"/>
          <line x1="85" y1="85" x2="235" y2="85" stroke="black" stroke-width="1.5"/>
          <polygon points="235,85 227,81 227,89" fill="black"/>
          <text x="160" y="80" text-anchor="middle" font-size="10">login(user, pw)</text>
          <!-- Alt Fragment -->
          <rect x="55" y="100" width="220" height="155" rx="2" fill="none" stroke="black" stroke-width="2"/>
          <rect x="55" y="100" width="35" height="18" fill="#e0e0e0" stroke="black" stroke-width="1.5"/>
          <text x="72" y="113" text-anchor="middle" font-size="10" font-weight="bold">alt</text>
          <!-- Bedingung 1 -->
          <text x="100" y="130" font-size="10">[Passwort korrekt]</text>
          <line x1="245" y1="145" x2="85" y2="145" stroke="black" stroke-width="1.5" stroke-dasharray="5,3"/>
          <polygon points="85,145 93,141 93,149" fill="black"/>
          <text x="165" y="140" text-anchor="middle" font-size="10">Willkommen!</text>
          <!-- Trennlinie -->
          <line x1="55" y1="170" x2="275" y2="170" stroke="black" stroke-width="1" stroke-dasharray="8,4"/>
          <!-- Bedingung 2 -->
          <text x="100" y="192" font-size="10">[else]</text>
          <line x1="245" y1="210" x2="85" y2="210" stroke="black" stroke-width="1.5" stroke-dasharray="5,3"/>
          <polygon points="85,210 93,206 93,214" fill="black"/>
          <text x="165" y="205" text-anchor="middle" font-size="10">Fehler: Zugang verweigert</text>
          <!-- Trennlinie 2 -->
          <line x1="55" y1="230" x2="275" y2="230" stroke="black" stroke-width="1" stroke-dasharray="8,4"/>
          <text x="100" y="248" font-size="10">[3 Versuche überschritten]</text>
          <line x1="245" y1="248" x2="85" y2="248" stroke="black" stroke-width="1.5" stroke-dasharray="5,3"/>
          <polygon points="85,248 93,244 93,252" fill="black"/>
          <text x="165" y="243" text-anchor="middle" font-size="10">Konto gesperrt</text>
        </svg>`
      },
      {
        titel: 'Beispiel: Geldabheben am Automaten',
        inhalt: `
          <p>Ein klassisches Prüfungsbeispiel ist der Ablauf beim Geldabheben am Automaten:</p>
          <ol>
            <li>Der <strong>Kunde</strong> steckt die Karte ein</li>
            <li>Der <strong>Geldautomat</strong> fragt die PIN ab</li>
            <li>Der Kunde gibt die PIN ein</li>
            <li>Der Geldautomat sendet die PIN an die <strong>Bank</strong> zur Prüfung</li>
            <li><strong>alt-Fragment:</strong> PIN korrekt &rarr; Betrag wählen / PIN falsch &rarr; Fehlermeldung</li>
            <li>Bei korrekter PIN: Betrag wird ausgezahlt</li>
          </ol>
          <p>Beachte bei diesem Beispiel:</p>
          <ul>
            <li>Die zeitliche Reihenfolge (von oben nach unten)</li>
            <li>Synchrone Aufrufe (Geldautomat wartet auf Bankprüfung)</li>
            <li>Das alt-Fragment für die Verzweigung</li>
            <li>Antwortnachrichten als gestrichelte Linien</li>
          </ul>
        `
      },
      {
        titel: 'Häufige Fehler im Sequenzdiagramm',
        inhalt: `
          <h4>1. Nachrichtentypen verwechselt</h4>
          <ul>
            <li><strong>Synchron</strong> (gefüllter Pfeil): Sender wartet auf Antwort</li>
            <li><strong>Asynchron</strong> (offener Pfeil): Sender wartet NICHT</li>
            <li><strong>Antwort</strong> (gestrichelt): Rückgabewert</li>
          </ul>
          <h4>2. Antwortnachrichten vergessen</h4>
          <p>Jede synchrone Nachricht sollte eine gestrichelte Antwortnachricht haben.</p>
          <h4>3. Aktivierungsbalken falsch gezeichnet</h4>
          <ul>
            <li>Ein Balken beginnt, wenn eine Nachricht empfangen wird</li>
            <li>Er endet, wenn die Antwort gesendet wird</li>
            <li>Balken dürfen sich nicht über die gesamte Lebenslinie erstrecken</li>
          </ul>
          <h4>4. Fragmente falsch eingesetzt</h4>
          <ul>
            <li><strong>alt:</strong> Bedingungen in eckigen Klammern angeben!</li>
            <li><strong>loop:</strong> Abbruchbedingung nicht vergessen</li>
            <li>Das Fragment muss alle betroffenen Lebenslinien umschließen</li>
          </ul>
          <h4>5. Leserichtung ignoriert</h4>
          <p>Immer von oben nach unten lesen! Nachrichten können nicht &bdquo;nach oben&ldquo; springen.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Lerne die drei Nachrichtentypen (synchron, asynchron, Antwort) und ihre Pfeildarstellungen auswendig. In der Prüfung wird oft nach dem Unterschied gefragt.',
      'Fragmente (alt, loop, opt) sind ein beliebtes Prüfungsthema. Merke: alt = if-else, loop = Schleife, opt = if ohne else.',
      'Achte auf die korrekte Reihenfolge: Sequenzdiagramme werden IMMER von oben nach unten gelesen. Die zeitliche Abfolge ist das Kernkonzept.',
      'Vergiss nie die Antwortnachrichten (gestrichelte Linien). In der Prüfung wird häufig gefragt, was eine gestrichelte Linie bedeutet.',
      'Aktivierungsbalken zeigen, WANN ein Objekt aktiv ist. Sie beginnen beim Empfang einer Nachricht und enden bei der Rückgabe.'
    ]
  },

  // ============================================================
  // AKTIVITAETSDIAGRAMM
  // ============================================================
  {
    diagrammTyp: 'aktivitaetsdiagramm',
    titel: 'Aktivitätsdiagramm',
    einleitung: 'Das Aktivitätsdiagramm modelliert Abläufe und Prozesse. Es zeigt den Kontrollfluss von einer Aktivität zur nächsten, ähnlich einem Flussdiagramm, aber mit erweiterten Möglichkeiten wie Parallelisierung und Swimlanes. Es eignet sich hervorragend, um Geschäftsprozesse und Algorithmen darzustellen.',
    abschnitte: [
      {
        titel: 'Was ist ein Aktivitätsdiagramm?',
        inhalt: `
          <p>Ein <strong>Aktivitätsdiagramm</strong> ist ein Verhaltensdiagramm, das den <strong>Ablauf von Aktivitäten</strong> (Aktionen) in einem Prozess beschreibt. Es ist dem klassischen Flussdiagramm ähnlich, bietet aber mehr Ausdrucksmöglichkeiten.</p>
          <h4>Einsatzgebiete</h4>
          <ul>
            <li><strong>Geschäftsprozesse:</strong> z.B. Bestellvorgang, Reklamationsbearbeitung</li>
            <li><strong>Algorithmen:</strong> z.B. Sortierverfahren, Berechnungen</li>
            <li><strong>Workflows:</strong> z.B. Genehmigungsprozesse</li>
            <li><strong>Use-Case-Detaillierung:</strong> Den Ablauf eines Anwendungsfalls genauer beschreiben</li>
          </ul>
          <h4>Grundelemente</h4>
          <ul>
            <li><strong>Startknoten:</strong> Gefüllter schwarzer Kreis</li>
            <li><strong>Endknoten:</strong> Gefüllter schwarzer Kreis mit Ring (Bullseye)</li>
            <li><strong>Aktion:</strong> Abgerundetes Rechteck mit Beschreibung</li>
            <li><strong>Entscheidungsknoten:</strong> Raute (wie im Flussdiagramm)</li>
            <li><strong>Kontrollfluss:</strong> Pfeile zwischen den Elementen</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style>
            <marker id="arrowAkt" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0,0 8,3 0,6" fill="black"/>
            </marker>
          </defs>
          <text x="200" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Grundelemente</text>
          <!-- Startknoten -->
          <circle cx="60" cy="55" r="10" fill="black"/>
          <text x="60" y="80" text-anchor="middle" font-size="10">Startknoten</text>
          <!-- Aktion -->
          <rect x="130" y="40" width="130" height="30" rx="12" fill="white" stroke="black" stroke-width="2"/>
          <text x="195" y="59" text-anchor="middle" font-size="11">Aktion</text>
          <text x="195" y="85" text-anchor="middle" font-size="10" fill="#666">(abgerundetes Rechteck)</text>
          <!-- Entscheidung -->
          <polygon points="340,55 370,75 340,95 310,75" fill="white" stroke="black" stroke-width="2"/>
          <text x="340" y="115" text-anchor="middle" font-size="10">Entscheidung</text>
          <text x="340" y="128" text-anchor="middle" font-size="10" fill="#666">(Raute)</text>
          <!-- Endknoten -->
          <circle cx="60" cy="165" r="12" fill="none" stroke="black" stroke-width="2"/>
          <circle cx="60" cy="165" r="7" fill="black"/>
          <text x="60" y="190" text-anchor="middle" font-size="10">Endknoten</text>
          <!-- Parallelisierung -->
          <rect x="130" y="158" width="100" height="5" rx="1" fill="black"/>
          <text x="180" y="180" text-anchor="middle" font-size="10">Synchronisationsbalken</text>
          <text x="180" y="193" text-anchor="middle" font-size="10" fill="#666">(Fork / Join)</text>
          <!-- Objektknoten -->
          <rect x="280" y="150" width="100" height="30" rx="0" fill="white" stroke="black" stroke-width="2"/>
          <text x="330" y="169" text-anchor="middle" font-size="11">[Objekt]</text>
          <text x="330" y="198" text-anchor="middle" font-size="10" fill="#666">Objektknoten</text>
          <!-- Beispiel-Fluss -->
          <text x="200" y="228" text-anchor="middle" font-size="12" font-weight="bold" fill="#333">Beispiel-Ablauf:</text>
          <circle cx="40" cy="260" r="8" fill="black"/>
          <line x1="48" y1="260" x2="75" y2="260" stroke="black" stroke-width="1.5" marker-end="url(#arrowAkt)"/>
          <rect x="80" y="247" width="80" height="26" rx="10" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="120" y="264" text-anchor="middle" font-size="10">Aktion 1</text>
          <line x1="160" y1="260" x2="185" y2="260" stroke="black" stroke-width="1.5" marker-end="url(#arrowAkt)"/>
          <polygon points="200,260 215,270 200,280 185,270" fill="white" stroke="black" stroke-width="1.5"/>
          <line x1="215" y1="270" x2="240" y2="270" stroke="black" stroke-width="1.5" marker-end="url(#arrowAkt)"/>
          <rect x="245" y="257" width="80" height="26" rx="10" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="285" y="274" text-anchor="middle" font-size="10">Aktion 2</text>
          <line x1="325" y1="270" x2="350" y2="270" stroke="black" stroke-width="1.5" marker-end="url(#arrowAkt)"/>
          <circle cx="362" cy="270" r="9" fill="none" stroke="black" stroke-width="2"/>
          <circle cx="362" cy="270" r="5" fill="black"/>
        </svg>`
      },
      {
        titel: 'Start- und Endknoten',
        inhalt: `
          <h4>Startknoten (Initialknoten)</h4>
          <ul>
            <li>Darstellung: <strong>Gefüllter schwarzer Kreis</strong></li>
            <li>Es gibt genau <strong>einen</strong> Startknoten pro Diagramm</li>
            <li>Von ihm geht ein Kontrollfluss-Pfeil zur ersten Aktion</li>
            <li>Er hat keinen eingehenden Pfeil</li>
          </ul>
          <h4>Endknoten (Aktivitätsende)</h4>
          <ul>
            <li>Darstellung: <strong>Gefüllter Kreis mit äußerem Ring</strong> (Bullseye)</li>
            <li>Es kann <strong>mehrere</strong> Endknoten geben (z.B. bei verschiedenen Abbruchbedingungen)</li>
            <li>Er hat keinen ausgehenden Pfeil</li>
            <li>Wenn ein Endknoten erreicht wird, endet die <strong>gesamte</strong> Aktivität</li>
          </ul>
          <h4>Ablaufende (Flow Final)</h4>
          <ul>
            <li>Darstellung: <strong>Kreis mit X</strong></li>
            <li>Beendet nur den <strong>aktuellen Fluss</strong>, nicht die gesamte Aktivität</li>
            <li>Wichtig bei parallelen Abläufen: Andere Flüsse laufen weiter</li>
          </ul>
        `
      },
      {
        titel: 'Entscheidungen und Zusammenführungen',
        inhalt: `
          <h4>Entscheidungsknoten (Decision Node)</h4>
          <p>Darstellung: <strong>Raute</strong> mit einem eingehenden und mehreren ausgehenden Pfeilen.</p>
          <ul>
            <li>Jeder ausgehende Pfeil trägt eine <strong>Bedingung</strong> in eckigen Klammern: <code>[Bedingung]</code></li>
            <li>Die Bedingungen müssen sich <strong>gegenseitig ausschließen</strong></li>
            <li>Eine Bedingung kann <code>[else]</code> oder <code>[sonst]</code> sein</li>
            <li>Vergleichbar mit <strong>if-else</strong> in der Programmierung</li>
          </ul>
          <h4>Zusammenführungsknoten (Merge Node)</h4>
          <p>Darstellung: Ebenfalls eine <strong>Raute</strong>, aber mit mehreren eingehenden und einem ausgehenden Pfeil.</p>
          <ul>
            <li>Führt verschiedene Pfade wieder zusammen</li>
            <li>Es wird NICHT auf alle Pfade gewartet (im Gegensatz zum Join)</li>
            <li>Der Kontrollfluss geht weiter, sobald ein Pfad ankommt</li>
          </ul>
          <h4>Wichtig: Entscheidung vs. Zusammenführung</h4>
          <p>Beide sehen gleich aus (Raute)! Der Unterschied ergibt sich aus der <strong>Pfeilrichtung</strong>:</p>
          <ul>
            <li><strong>Entscheidung:</strong> 1 Pfeil rein, mehrere raus</li>
            <li><strong>Zusammenführung:</strong> Mehrere Pfeile rein, 1 raus</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style>
            <marker id="arrowDec" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0,0 8,3 0,6" fill="black"/>
            </marker>
          </defs>
          <text x="200" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Entscheidung und Zusammenführung</text>
          <!-- Start -->
          <circle cx="200" cy="45" r="8" fill="black"/>
          <line x1="200" y1="53" x2="200" y2="70" stroke="black" stroke-width="1.5" marker-end="url(#arrowDec)"/>
          <!-- Aktion -->
          <rect x="140" y="75" width="120" height="28" rx="10" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="200" y="93" text-anchor="middle" font-size="11">Betrag prüfen</text>
          <line x1="200" y1="103" x2="200" y2="120" stroke="black" stroke-width="1.5" marker-end="url(#arrowDec)"/>
          <!-- Entscheidung -->
          <polygon points="200,125 225,145 200,165 175,145" fill="white" stroke="black" stroke-width="2"/>
          <!-- Ja-Pfad -->
          <line x1="225" y1="145" x2="310" y2="145" stroke="black" stroke-width="1.5" marker-end="url(#arrowDec)"/>
          <text x="265" y="139" text-anchor="middle" font-size="10">[ausreichend]</text>
          <rect x="315" y="131" width="75" height="28" rx="10" fill="#e8f5e9" stroke="black" stroke-width="1.5"/>
          <text x="352" y="149" text-anchor="middle" font-size="10">Auszahlen</text>
          <line x1="352" y1="159" x2="352" y2="210" stroke="black" stroke-width="1.5"/>
          <line x1="352" y1="210" x2="225" y2="210" stroke="black" stroke-width="1.5" marker-end="url(#arrowDec)"/>
          <!-- Nein-Pfad -->
          <line x1="175" y1="145" x2="90" y2="145" stroke="black" stroke-width="1.5" marker-end="url(#arrowDec)"/>
          <text x="132" y="139" text-anchor="middle" font-size="10">[else]</text>
          <rect x="10" y="131" width="82" height="28" rx="10" fill="#ffebee" stroke="black" stroke-width="1.5"/>
          <text x="51" y="149" text-anchor="middle" font-size="10">Ablehnen</text>
          <line x1="51" y1="159" x2="51" y2="210" stroke="black" stroke-width="1.5"/>
          <line x1="51" y1="210" x2="175" y2="210" stroke="black" stroke-width="1.5" marker-end="url(#arrowDec)"/>
          <!-- Zusammenführung -->
          <polygon points="200,195 225,210 200,225 175,210" fill="white" stroke="black" stroke-width="2"/>
          <line x1="200" y1="225" x2="200" y2="245" stroke="black" stroke-width="1.5" marker-end="url(#arrowDec)"/>
          <!-- Ende-Aktion -->
          <rect x="130" y="250" width="140" height="28" rx="10" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="200" y="268" text-anchor="middle" font-size="11">Beleg drucken</text>
          <!-- Beschriftungen -->
          <text x="195" y="150" text-anchor="end" font-size="9" fill="#888">Entscheidung</text>
          <text x="195" y="216" text-anchor="end" font-size="9" fill="#888">Merge</text>
        </svg>`
      },
      {
        titel: 'Parallelisierung (Fork und Join)',
        inhalt: `
          <h4>Fork (Aufspaltung / Parallelisierung)</h4>
          <p>Darstellung: <strong>Dicker schwarzer Balken</strong> mit einem eingehenden und mehreren ausgehenden Pfeilen.</p>
          <ul>
            <li>Spaltet den Kontrollfluss in <strong>parallele Pfade</strong> auf</li>
            <li>Alle ausgehenden Pfade werden <strong>gleichzeitig</strong> ausgeführt</li>
            <li>Keine Bedingungen an den Pfeilen (im Gegensatz zur Entscheidung)</li>
          </ul>
          <h4>Join (Zusammenführung / Synchronisation)</h4>
          <p>Darstellung: <strong>Dicker schwarzer Balken</strong> mit mehreren eingehenden und einem ausgehenden Pfeil.</p>
          <ul>
            <li>Wartet, bis <strong>ALLE</strong> eingehenden Pfade abgeschlossen sind</li>
            <li>Erst dann geht der Kontrollfluss weiter</li>
            <li>Vergleichbar mit einem &bdquo;Warten auf alle Threads&ldquo;</li>
          </ul>
          <h4>Unterschied: Merge vs. Join</h4>
          <ul>
            <li><strong>Merge (Raute):</strong> Wartet NICHT &ndash; der erste ankommende Pfad geht weiter</li>
            <li><strong>Join (Balken):</strong> Wartet auf ALLE Pfade</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style>
            <marker id="arrowPar" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0,0 8,3 0,6" fill="black"/>
            </marker>
          </defs>
          <text x="200" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Fork und Join (Parallelisierung)</text>
          <!-- Start -->
          <circle cx="200" cy="42" r="8" fill="black"/>
          <line x1="200" y1="50" x2="200" y2="68" stroke="black" stroke-width="1.5" marker-end="url(#arrowPar)"/>
          <!-- Aktion vor Fork -->
          <rect x="130" y="73" width="140" height="25" rx="10" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="200" y="90" text-anchor="middle" font-size="11">Bestellung annehmen</text>
          <line x1="200" y1="98" x2="200" y2="115" stroke="black" stroke-width="1.5" marker-end="url(#arrowPar)"/>
          <!-- Fork -->
          <rect x="80" y="118" width="240" height="5" rx="1" fill="black"/>
          <text x="340" y="125" font-size="9" fill="#888">Fork</text>
          <!-- Pfad 1 -->
          <line x1="130" y1="123" x2="130" y2="140" stroke="black" stroke-width="1.5" marker-end="url(#arrowPar)"/>
          <rect x="60" y="145" width="140" height="25" rx="10" fill="#e8f5e9" stroke="black" stroke-width="1.5"/>
          <text x="130" y="162" text-anchor="middle" font-size="10">Rechnung erstellen</text>
          <line x1="130" y1="170" x2="130" y2="210" stroke="black" stroke-width="1.5" marker-end="url(#arrowPar)"/>
          <!-- Pfad 2 -->
          <line x1="270" y1="123" x2="270" y2="140" stroke="black" stroke-width="1.5" marker-end="url(#arrowPar)"/>
          <rect x="200" y="145" width="140" height="25" rx="10" fill="#e3f2fd" stroke="black" stroke-width="1.5"/>
          <text x="270" y="162" text-anchor="middle" font-size="10">Ware verpacken</text>
          <line x1="270" y1="170" x2="270" y2="210" stroke="black" stroke-width="1.5" marker-end="url(#arrowPar)"/>
          <!-- Join -->
          <rect x="80" y="213" width="240" height="5" rx="1" fill="black"/>
          <text x="340" y="220" font-size="9" fill="#888">Join</text>
          <line x1="200" y1="218" x2="200" y2="238" stroke="black" stroke-width="1.5" marker-end="url(#arrowPar)"/>
          <!-- Aktion nach Join -->
          <rect x="130" y="243" width="140" height="25" rx="10" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="200" y="260" text-anchor="middle" font-size="11">Versand beauftragen</text>
          <line x1="200" y1="268" x2="200" y2="285" stroke="black" stroke-width="1.5" marker-end="url(#arrowPar)"/>
          <!-- Ende -->
          <circle cx="200" cy="293" r="8" fill="none" stroke="black" stroke-width="2"/>
          <circle cx="200" cy="293" r="5" fill="black"/>
        </svg>`
      },
      {
        titel: 'Swimlanes (Verantwortlichkeitsbereiche)',
        inhalt: `
          <h4>Was sind Swimlanes?</h4>
          <p><strong>Swimlanes</strong> (auch: Aktivitätsbereiche) teilen das Diagramm in <strong>vertikale oder horizontale Bahnen</strong>, die verschiedenen Akteuren oder Abteilungen zugeordnet sind.</p>
          <ul>
            <li>Jede Bahn trägt einen <strong>Namen</strong> (z.B. &bdquo;Kunde&ldquo;, &bdquo;Lager&ldquo;, &bdquo;Buchhaltung&ldquo;)</li>
            <li>Jede Aktion wird in die Bahn des <strong>Verantwortlichen</strong> platziert</li>
            <li>Pfeile können zwischen Bahnen verlaufen</li>
          </ul>
          <h4>Vorteile von Swimlanes</h4>
          <ul>
            <li>Zeigen klar, <strong>wer</strong> für welche Aktivität verantwortlich ist</li>
            <li>Visualisieren <strong>Übergaben</strong> zwischen Abteilungen</li>
            <li>Helfen, Engpässe und Kommunikationslücken zu erkennen</li>
          </ul>
          <h4>Objektknoten</h4>
          <p>Ein <strong>Objektknoten</strong> ist ein Rechteck (nicht abgerundet), das ein Datenobjekt darstellt, das zwischen Aktionen weitergegeben wird.</p>
          <ul>
            <li>Darstellung: <strong>Normales Rechteck</strong> mit dem Objektnamen</li>
            <li>Optional mit Zustand in eckigen Klammern: <code>Bestellung [geprüft]</code></li>
            <li>Zeigt den Datenfluss zwischen Aktionen</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style>
            <marker id="arrowSw" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0,0 8,3 0,6" fill="black"/>
            </marker>
          </defs>
          <!-- Swimlanes -->
          <rect x="5" y="5" width="130" height="290" fill="#fafafa" stroke="black" stroke-width="1.5"/>
          <text x="70" y="22" text-anchor="middle" font-size="12" font-weight="bold">Kunde</text>
          <line x1="5" y1="28" x2="135" y2="28" stroke="black" stroke-width="1"/>
          <rect x="135" y="5" width="135" height="290" fill="#f5f5f5" stroke="black" stroke-width="1.5"/>
          <text x="202" y="22" text-anchor="middle" font-size="12" font-weight="bold">Vertrieb</text>
          <line x1="135" y1="28" x2="270" y2="28" stroke="black" stroke-width="1"/>
          <rect x="270" y="5" width="125" height="290" fill="#fafafa" stroke="black" stroke-width="1.5"/>
          <text x="332" y="22" text-anchor="middle" font-size="12" font-weight="bold">Lager</text>
          <line x1="270" y1="28" x2="395" y2="28" stroke="black" stroke-width="1"/>
          <!-- Start -->
          <circle cx="70" cy="50" r="7" fill="black"/>
          <line x1="70" y1="57" x2="70" y2="72" stroke="black" stroke-width="1.5" marker-end="url(#arrowSw)"/>
          <!-- Aktion 1 -->
          <rect x="20" y="77" width="100" height="23" rx="10" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="70" y="92" text-anchor="middle" font-size="10">Bestellen</text>
          <line x1="120" y1="88" x2="152" y2="88" stroke="black" stroke-width="1.5" marker-end="url(#arrowSw)"/>
          <!-- Aktion 2 -->
          <rect x="155" y="77" width="110" height="23" rx="10" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="210" y="92" text-anchor="middle" font-size="10">Prüfen</text>
          <line x1="210" y1="100" x2="210" y2="120" stroke="black" stroke-width="1.5" marker-end="url(#arrowSw)"/>
          <!-- Objektknoten -->
          <rect x="165" y="124" width="90" height="22" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="210" y="139" text-anchor="middle" font-size="10">Auftrag [geprüft]</text>
          <line x1="255" y1="135" x2="290" y2="135" stroke="black" stroke-width="1.5" marker-end="url(#arrowSw)"/>
          <!-- Aktion 3 -->
          <rect x="293" y="124" width="90" height="23" rx="10" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="338" y="139" text-anchor="middle" font-size="10">Kommissionieren</text>
          <line x1="338" y1="147" x2="338" y2="168" stroke="black" stroke-width="1.5" marker-end="url(#arrowSw)"/>
          <!-- Aktion 4 -->
          <rect x="293" y="172" width="90" height="23" rx="10" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="338" y="187" text-anchor="middle" font-size="10">Versenden</text>
          <line x1="293" y1="183" x2="120" y2="220" stroke="black" stroke-width="1.5" marker-end="url(#arrowSw)"/>
          <!-- Aktion 5 -->
          <rect x="20" y="210" width="100" height="23" rx="10" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="70" y="225" text-anchor="middle" font-size="10">Empfangen</text>
          <line x1="70" y1="233" x2="70" y2="255" stroke="black" stroke-width="1.5" marker-end="url(#arrowSw)"/>
          <!-- Ende -->
          <circle cx="70" cy="265" r="8" fill="none" stroke="black" stroke-width="2"/>
          <circle cx="70" cy="265" r="5" fill="black"/>
        </svg>`
      },
      {
        titel: 'Häufige Fehler im Aktivitätsdiagramm',
        inhalt: `
          <h4>1. Entscheidung ohne Bedingungen</h4>
          <ul>
            <li>Jeder ausgehende Pfeil einer Raute <strong>muss</strong> eine Bedingung in eckigen Klammern haben</li>
            <li>Vergiss nicht <code>[else]</code> oder <code>[sonst]</code> für den Alternativpfad</li>
          </ul>
          <h4>2. Fork ohne Join (oder umgekehrt)</h4>
          <ul>
            <li>Jeder Fork braucht einen passenden Join</li>
            <li>Die Anzahl der parallelen Pfade muss übereinstimmen</li>
          </ul>
          <h4>3. Merge und Join verwechselt</h4>
          <ul>
            <li><strong>Merge (Raute):</strong> Nach einer Entscheidung &ndash; wartet NICHT auf alle Pfade</li>
            <li><strong>Join (Balken):</strong> Nach einem Fork &ndash; wartet auf ALLE Pfade</li>
          </ul>
          <h4>4. Fehlender Start- oder Endknoten</h4>
          <ul>
            <li>Genau <strong>ein</strong> Startknoten ist Pflicht</li>
            <li>Mindestens <strong>ein</strong> Endknoten muss vorhanden sein</li>
          </ul>
          <h4>5. Aktionen in falscher Swimlane</h4>
          <ul>
            <li>Jede Aktion muss in der Bahn des verantwortlichen Akteurs stehen</li>
            <li>Übergänge zwischen Lanes zeigen Kommunikation zwischen Abteilungen</li>
          </ul>
          <h4>6. Keine Pfeile an den Kontrollflüssen</h4>
          <p>Jede Verbindungslinie braucht einen Pfeil, der die Richtung zeigt!</p>
        `
      }
    ],
    pruefungsTipps: [
      'Verwechsle nicht Merge (Raute) und Join (Balken)! Merge wartet NICHT, Join wartet auf ALLE parallelen Pfade. Das ist ein sehr beliebtes Prüfungsthema.',
      'Entscheidungsknoten (Rauten) brauchen IMMER Bedingungen in eckigen Klammern an den ausgehenden Pfeilen. Vergiss nie den [else]-Pfad.',
      'Fork und Join gehören immer zusammen. Wenn du einen Fork zeichnest, brauchst du auch einen passenden Join. Die Anzahl der Pfade muss stimmen.',
      'Swimlanes sind besonders prüfungsrelevant. Achte darauf, dass jede Aktion in der richtigen Lane steht. Die Lane zeigt die Verantwortlichkeit.'
    ]
  },

  // ============================================================
  // ZUSTANDSDIAGRAMM
  // ============================================================
  {
    diagrammTyp: 'zustandsdiagramm',
    titel: 'Zustandsdiagramm (Zustandsautomat)',
    einleitung: 'Das Zustandsdiagramm modelliert die verschiedenen Zustände, die ein Objekt während seiner Lebensdauer einnehmen kann, und die Übergänge (Transitionen) zwischen diesen Zuständen. Es beantwortet die Frage: "In welchen Zuständen kann sich ein Objekt befinden und wie wechselt es zwischen ihnen?"',
    abschnitte: [
      {
        titel: 'Was ist ein Zustandsdiagramm?',
        inhalt: `
          <p>Ein <strong>Zustandsdiagramm</strong> (auch: Zustandsautomat oder State Machine Diagram) zeigt das <strong>zustandsabhängige Verhalten</strong> eines einzelnen Objekts.</p>
          <h4>Kernidee</h4>
          <p>Ein Objekt befindet sich zu jedem Zeitpunkt in genau <strong>einem Zustand</strong>. Durch <strong>Ereignisse</strong> (Events) kann es in einen anderen Zustand wechseln.</p>
          <h4>Einsatzgebiete</h4>
          <ul>
            <li><strong>Lebenszyklus von Objekten:</strong> z.B. Bestellung (neu, bestätigt, versendet, geliefert)</li>
            <li><strong>Zustände von Geräten:</strong> z.B. Ampel (rot, gelb, grün)</li>
            <li><strong>Benutzeroberflächen:</strong> z.B. Dialog (geöffnet, bearbeitet, gespeichert)</li>
            <li><strong>Prozesse:</strong> z.B. Antrag (eingereicht, in Prüfung, genehmigt, abgelehnt)</li>
          </ul>
          <h4>Grundelemente</h4>
          <ul>
            <li><strong>Zustand:</strong> Abgerundetes Rechteck mit dem Zustandsnamen</li>
            <li><strong>Startzustand:</strong> Gefüllter schwarzer Kreis</li>
            <li><strong>Endzustand:</strong> Gefüllter Kreis mit Ring (wie im Aktivitätsdiagramm)</li>
            <li><strong>Transition:</strong> Pfeil von einem Zustand zum anderen</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style>
            <marker id="arrowSt" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0,0 8,3 0,6" fill="black"/>
            </marker>
          </defs>
          <text x="200" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Zustandsdiagramm: Bestellung</text>
          <!-- Start -->
          <circle cx="45" cy="70" r="8" fill="black"/>
          <line x1="53" y1="70" x2="75" y2="70" stroke="black" stroke-width="1.5" marker-end="url(#arrowSt)"/>
          <!-- Zustand: Neu -->
          <rect x="80" y="52" width="90" height="36" rx="14" fill="white" stroke="black" stroke-width="2"/>
          <text x="125" y="74" text-anchor="middle" font-size="12">Neu</text>
          <line x1="170" y1="70" x2="200" y2="70" stroke="black" stroke-width="1.5" marker-end="url(#arrowSt)"/>
          <text x="185" y="62" text-anchor="middle" font-size="9">bestätigen</text>
          <!-- Zustand: Bestätigt -->
          <rect x="205" y="52" width="100" height="36" rx="14" fill="white" stroke="black" stroke-width="2"/>
          <text x="255" y="74" text-anchor="middle" font-size="12">Bestätigt</text>
          <line x1="255" y1="88" x2="255" y2="130" stroke="black" stroke-width="1.5" marker-end="url(#arrowSt)"/>
          <text x="275" y="115" font-size="9">versenden</text>
          <!-- Zustand: Versendet -->
          <rect x="205" y="135" width="100" height="36" rx="14" fill="white" stroke="black" stroke-width="2"/>
          <text x="255" y="157" text-anchor="middle" font-size="12">Versendet</text>
          <line x1="255" y1="171" x2="255" y2="210" stroke="black" stroke-width="1.5" marker-end="url(#arrowSt)"/>
          <text x="275" y="197" font-size="9">zustellen</text>
          <!-- Zustand: Geliefert -->
          <rect x="205" y="215" width="100" height="36" rx="14" fill="#e8f5e9" stroke="black" stroke-width="2"/>
          <text x="255" y="237" text-anchor="middle" font-size="12">Geliefert</text>
          <line x1="305" y1="233" x2="345" y2="233" stroke="black" stroke-width="1.5" marker-end="url(#arrowSt)"/>
          <!-- Ende -->
          <circle cx="360" cy="233" r="9" fill="none" stroke="black" stroke-width="2"/>
          <circle cx="360" cy="233" r="5" fill="black"/>
          <!-- Storno-Transition -->
          <line x1="125" y1="88" x2="125" y2="233" stroke="black" stroke-width="1.5"/>
          <line x1="125" y1="233" x2="205" y2="233" stroke="black" stroke-width="1.5" marker-end="url(#arrowSt)"/>
          <text x="95" y="165" font-size="9" transform="rotate(-90, 95, 165)">stornieren</text>
          <!-- Storniert -->
          <rect x="40" y="215" width="85" height="36" rx="14" fill="#ffebee" stroke="black" stroke-width="2"/>
          <text x="82" y="237" text-anchor="middle" font-size="11">Storniert</text>
          <line x1="82" y1="251" x2="82" y2="272" stroke="black" stroke-width="1.5" marker-end="url(#arrowSt)"/>
          <circle cx="82" cy="282" r="9" fill="none" stroke="black" stroke-width="2"/>
          <circle cx="82" cy="282" r="5" fill="black"/>
          <!-- Storno-Links -->
          <line x1="125" y1="88" x2="82" y2="215" stroke="black" stroke-width="1.5" stroke-dasharray="6,3" marker-end="url(#arrowSt)"/>
          <text x="75" y="150" font-size="9">stornieren</text>
        </svg>`
      },
      {
        titel: 'Zustände im Detail',
        inhalt: `
          <h4>Einfacher Zustand</h4>
          <p>Darstellung: <strong>Abgerundetes Rechteck</strong> mit dem Zustandsnamen. Optional können interne Aktivitäten angegeben werden:</p>
          <ul>
            <li><code>entry / Aktion</code> &ndash; wird beim <strong>Eintreten</strong> in den Zustand ausgeführt</li>
            <li><code>do / Aktivität</code> &ndash; wird <strong>während</strong> des Zustands ausgeführt</li>
            <li><code>exit / Aktion</code> &ndash; wird beim <strong>Verlassen</strong> des Zustands ausgeführt</li>
          </ul>
          <h4>Beispiel eines detaillierten Zustands</h4>
          <p>Zustand &bdquo;Druckt&ldquo;:</p>
          <ul>
            <li><code>entry / Drucker initialisieren</code></li>
            <li><code>do / Seiten drucken</code></li>
            <li><code>exit / Drucker freigeben</code></li>
          </ul>
          <h4>Startzustand</h4>
          <ul>
            <li>Darstellung: <strong>Gefüllter schwarzer Kreis</strong></li>
            <li>Genau einer pro Diagramm (bzw. pro Region bei zusammengesetzten Zuständen)</li>
            <li>Hat genau eine ausgehende Transition (ohne Bedingung)</li>
          </ul>
          <h4>Endzustand</h4>
          <ul>
            <li>Darstellung: <strong>Gefüllter Kreis mit äußerem Ring</strong></li>
            <li>Es kann mehrere Endzustände geben</li>
            <li>Zeigt, dass der Lebenszyklus des Objekts abgeschlossen ist</li>
          </ul>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs><style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style></defs>
          <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Zustand mit internen Aktivitäten</text>
          <!-- Detaillierter Zustand -->
          <rect x="80" y="40" width="240" height="100" rx="18" fill="white" stroke="black" stroke-width="2"/>
          <text x="200" y="65" text-anchor="middle" font-size="14" font-weight="bold">Druckt</text>
          <line x1="80" y1="75" x2="320" y2="75" stroke="black" stroke-width="1"/>
          <text x="95" y="95" font-size="12">entry / Drucker initialisieren</text>
          <text x="95" y="113" font-size="12">do / Seiten drucken</text>
          <text x="95" y="131" font-size="12">exit / Drucker freigeben</text>
          <!-- Legende -->
          <rect x="50" y="165" width="300" height="120" rx="6" fill="#f5f5f5" stroke="#ccc" stroke-width="1"/>
          <text x="200" y="185" text-anchor="middle" font-size="12" font-weight="bold">Interne Aktivitäten:</text>
          <text x="70" y="210" font-size="11"><tspan font-weight="bold">entry /</tspan> Wird beim Eintreten ausgeführt</text>
          <text x="70" y="232" font-size="11"><tspan font-weight="bold">do /</tspan> Läuft während des Zustands</text>
          <text x="70" y="254" font-size="11"><tspan font-weight="bold">exit /</tspan> Wird beim Verlassen ausgeführt</text>
          <text x="70" y="276" font-size="10" fill="#888">Alle drei sind optional und können einzeln verwendet werden.</text>
        </svg>`
      },
      {
        titel: 'Transitionen (Übergänge)',
        inhalt: `
          <p>Eine <strong>Transition</strong> ist der Übergang von einem Zustand in einen anderen. Sie wird als <strong>Pfeil</strong> dargestellt.</p>
          <h4>Beschriftung einer Transition</h4>
          <p>Die vollständige Notation lautet:</p>
          <p><code>Ereignis [Bedingung] / Aktion</code></p>
          <ul>
            <li><strong>Ereignis (Trigger):</strong> Was löst den Übergang aus? (z.B. &bdquo;buttonKlick&ldquo;, &bdquo;zeitAbgelaufen&ldquo;)</li>
            <li><strong>Bedingung (Guard):</strong> Unter welcher Bedingung? In eckigen Klammern: <code>[betrag > 0]</code></li>
            <li><strong>Aktion:</strong> Was passiert beim Übergang? Nach dem Schrägstrich: <code>/ benachrichtigung senden</code></li>
          </ul>
          <h4>Beispiele für Transitionen</h4>
          <ul>
            <li><code>bezahlt [betrag korrekt] / Rechnung erstellen</code></li>
            <li><code>timeout / Sitzung beenden</code></li>
            <li><code>abbrechen / Daten verwerfen</code></li>
            <li><code>[Guthaben < 0]</code> (nur Bedingung, kein Ereignis)</li>
          </ul>
          <h4>Selbsttransition</h4>
          <p>Ein Pfeil, der vom Zustand zu sich selbst zurückführt. Das Objekt bleibt im gleichen Zustand, aber die entry/exit-Aktionen werden erneut ausgeführt.</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style>
            <marker id="arrowTr" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0,0 8,3 0,6" fill="black"/>
            </marker>
          </defs>
          <text x="200" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Transitionen mit Beschriftung</text>
          <!-- Zustand 1 -->
          <rect x="30" y="60" width="120" height="40" rx="14" fill="white" stroke="black" stroke-width="2"/>
          <text x="90" y="84" text-anchor="middle" font-size="12">Warte auf</text>
          <text x="90" y="96" text-anchor="middle" font-size="12">Zahlung</text>
          <!-- Zustand 2 -->
          <rect x="250" y="60" width="120" height="40" rx="14" fill="white" stroke="black" stroke-width="2"/>
          <text x="310" y="84" text-anchor="middle" font-size="12">Bezahlt</text>
          <!-- Transition mit voller Beschriftung -->
          <line x1="150" y1="75" x2="248" y2="75" stroke="black" stroke-width="1.5" marker-end="url(#arrowTr)"/>
          <text x="200" y="68" text-anchor="middle" font-size="10" font-weight="bold">zahlung [betrag == preis] / quittung</text>
          <!-- Aufschlüsselung -->
          <rect x="25" y="130" width="350" height="80" rx="4" fill="#f5f5f5" stroke="#ccc" stroke-width="1"/>
          <text x="200" y="150" text-anchor="middle" font-size="12" font-weight="bold">Aufbau: Ereignis [Bedingung] / Aktion</text>
          <text x="40" y="172" font-size="11"><tspan fill="#1976d2" font-weight="bold">zahlung</tspan> = Ereignis (Was löst es aus?)</text>
          <text x="40" y="190" font-size="11"><tspan fill="#f57c00" font-weight="bold">[betrag == preis]</tspan> = Bedingung (Wann?)</text>
          <text x="40" y="208" font-size="11"><tspan fill="#388e3c" font-weight="bold">/ quittung</tspan> = Aktion (Was passiert?)</text>
          <!-- Selbsttransition -->
          <rect x="120" y="240" width="120" height="40" rx="14" fill="white" stroke="black" stroke-width="2"/>
          <text x="180" y="264" text-anchor="middle" font-size="12">Wartend</text>
          <path d="M 180 240 C 180 210, 250 210, 240 240" fill="none" stroke="black" stroke-width="1.5" marker-end="url(#arrowTr)"/>
          <text x="230" y="218" text-anchor="middle" font-size="10">timeout / retry</text>
          <text x="310" y="264" font-size="10" fill="#888">Selbsttransition</text>
        </svg>`
      },
      {
        titel: 'Zusammengesetzte Zustände und Unterzustände',
        inhalt: `
          <h4>Zusammengesetzter Zustand</h4>
          <p>Ein Zustand kann <strong>Unterzustände</strong> enthalten. Der äußere Zustand wird dann als großes abgerundetes Rechteck dargestellt, das weitere Zustände enthält.</p>
          <ul>
            <li>Hat einen eigenen <strong>Startknoten</strong> innerhalb</li>
            <li>Kann eigene Transitionen zwischen Unterzuständen haben</li>
            <li>Eine Transition zum zusammengesetzten Zustand führt automatisch zum Startknoten innerhalb</li>
          </ul>
          <h4>Beispiel: Zustand &bdquo;Aktiv&ldquo;</h4>
          <p>Der Zustand &bdquo;Aktiv&ldquo; könnte die Unterzustände &bdquo;Bereit&ldquo;, &bdquo;Arbeitet&ldquo; und &bdquo;Pausiert&ldquo; enthalten.</p>
          <h4>Historiezustand</h4>
          <p>Ein spezieller Pseudozustand innerhalb eines zusammengesetzten Zustands:</p>
          <ul>
            <li><strong>H</strong> (Shallow History): Merkt sich den letzten aktiven Unterzustand</li>
            <li><strong>H*</strong> (Deep History): Merkt sich den gesamten Zustandsbaum</li>
            <li>Wird beim erneuten Eintreten in den zusammengesetzten Zustand verwendet</li>
          </ul>
          <h4>Orthogonale Regionen</h4>
          <p>Ein zusammengesetzter Zustand kann in parallele Regionen unterteilt werden (durch eine gestrichelte Linie). Jede Region hat ihren eigenen Zustandsautomaten.</p>
        `,
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
          <defs>
            <style>text { font-family: 'Segoe UI', Arial, sans-serif; }</style>
            <marker id="arrowComp" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
              <polygon points="0,0 8,3 0,6" fill="black"/>
            </marker>
          </defs>
          <text x="200" y="18" text-anchor="middle" font-size="13" font-weight="bold" fill="#333">Zusammengesetzter Zustand</text>
          <!-- Äußerer Zustand -->
          <rect x="40" y="30" width="320" height="200" rx="20" fill="#fafafa" stroke="black" stroke-width="2.5"/>
          <text x="200" y="50" text-anchor="middle" font-size="14" font-weight="bold">Aktiv</text>
          <line x1="40" y1="56" x2="360" y2="56" stroke="black" stroke-width="1"/>
          <!-- Start innerhalb -->
          <circle cx="80" cy="100" r="7" fill="black"/>
          <line x1="87" y1="100" x2="110" y2="100" stroke="black" stroke-width="1.5" marker-end="url(#arrowComp)"/>
          <!-- Unterzustand: Bereit -->
          <rect x="115" y="82" width="80" height="36" rx="12" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="155" y="104" text-anchor="middle" font-size="11">Bereit</text>
          <line x1="195" y1="100" x2="220" y2="100" stroke="black" stroke-width="1.5" marker-end="url(#arrowComp)"/>
          <text x="208" y="93" text-anchor="middle" font-size="9">start</text>
          <!-- Unterzustand: Arbeitet -->
          <rect x="225" y="82" width="80" height="36" rx="12" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="265" y="104" text-anchor="middle" font-size="11">Arbeitet</text>
          <!-- Transition zu Pausiert -->
          <line x1="265" y1="118" x2="265" y2="145" stroke="black" stroke-width="1.5" marker-end="url(#arrowComp)"/>
          <text x="285" y="136" font-size="9">pause</text>
          <!-- Unterzustand: Pausiert -->
          <rect x="225" y="150" width="80" height="36" rx="12" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="265" y="172" text-anchor="middle" font-size="11">Pausiert</text>
          <!-- Zurück zu Arbeitet -->
          <line x1="225" y1="165" x2="195" y2="165" stroke="black" stroke-width="1"/>
          <line x1="195" y1="165" x2="195" y2="105" stroke="black" stroke-width="1"/>
          <line x1="195" y1="105" x2="225" y2="105" stroke="black" stroke-width="1" marker-end="url(#arrowComp)"/>
          <text x="175" y="140" font-size="9">resume</text>
          <!-- Historiezustand -->
          <circle cx="95" cy="170" r="14" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="95" y="175" text-anchor="middle" font-size="12" font-weight="bold">H</text>
          <text x="95" y="200" text-anchor="middle" font-size="9" fill="#888">Historie</text>
          <!-- Transition aus dem Gesamtzustand -->
          <line x1="200" y1="230" x2="200" y2="260" stroke="black" stroke-width="1.5" marker-end="url(#arrowComp)"/>
          <text x="230" y="248" font-size="9">beenden</text>
          <!-- Endzustand -->
          <rect x="140" y="265" width="120" height="30" rx="12" fill="#ffebee" stroke="black" stroke-width="1.5"/>
          <text x="200" y="284" text-anchor="middle" font-size="11">Beendet</text>
        </svg>`
      },
      {
        titel: 'Beispiel: Zustände einer Ampel',
        inhalt: `
          <p>Ein klassisches Beispiel für ein Zustandsdiagramm ist die <strong>Ampelsteuerung</strong>:</p>
          <ul>
            <li><strong>Zustände:</strong> Rot, Rot-Gelb, Grün, Gelb</li>
            <li><strong>Transitionen:</strong> Zeitgesteuert (nach x Sekunden wechselt der Zustand)</li>
            <li><strong>Ablauf:</strong> Rot &rarr; Rot-Gelb &rarr; Grün &rarr; Gelb &rarr; Rot (Zyklus)</li>
          </ul>
          <p>Weitere prüfungsrelevante Beispiele:</p>
          <ul>
            <li><strong>Bestellstatus:</strong> Neu &rarr; Bestätigt &rarr; In Bearbeitung &rarr; Versendet &rarr; Geliefert</li>
            <li><strong>Benutzerkonto:</strong> Gesperrt &rarr; Aktiv &rarr; Inaktiv &rarr; Gelöscht</li>
            <li><strong>Druckauftrag:</strong> Wartend &rarr; Druckt &rarr; Fertig / Fehler</li>
          </ul>
          <p>Tipps für die Prüfung:</p>
          <ul>
            <li>Überlege zuerst, welche <strong>Zustände</strong> es gibt</li>
            <li>Definiere dann die <strong>Ereignisse</strong>, die Übergänge auslösen</li>
            <li>Prüfe: Gibt es <strong>Sackgassen</strong>? (Zustände ohne ausgehende Transition)</li>
            <li>Prüfe: Sind alle Transitionen mit Ereignissen/Bedingungen beschriftet?</li>
          </ul>
        `
      },
      {
        titel: 'Häufige Fehler im Zustandsdiagramm',
        inhalt: `
          <h4>1. Zustände und Aktionen verwechselt</h4>
          <ul>
            <li>Ein <strong>Zustand</strong> beschreibt eine Situation (&bdquo;Wartet auf Zahlung&ldquo;)</li>
            <li>Eine <strong>Aktion</strong> beschreibt eine Tätigkeit (&bdquo;Zahlung prüfen&ldquo;)</li>
            <li>Im Zustandsdiagramm stehen <strong>Zustände</strong> in den Knoten, <strong>Aktionen</strong> an den Transitionen</li>
          </ul>
          <h4>2. Fehlende Ereignisse an Transitionen</h4>
          <ul>
            <li>Jede Transition sollte beschriftet sein mit dem Ereignis, das sie auslöst</li>
            <li>Ausnahme: Die Transition vom Startknoten zum ersten Zustand</li>
          </ul>
          <h4>3. Unerreichbare Zustände</h4>
          <ul>
            <li>Jeder Zustand muss über mindestens einen Pfad vom Startknoten aus erreichbar sein</li>
            <li>Prüfe: Gibt es isolierte Zustände ohne eingehende Transitionen?</li>
          </ul>
          <h4>4. Sackgassen (Deadlocks)</h4>
          <ul>
            <li>Jeder Zustand (außer Endzustände) muss mindestens eine ausgehende Transition haben</li>
            <li>Sonst bleibt das Objekt für immer in diesem Zustand stecken</li>
          </ul>
          <h4>5. Fehlender Start- oder Endzustand</h4>
          <ul>
            <li>Genau <strong>ein</strong> Startknoten ist Pflicht</li>
            <li>Mindestens <strong>ein</strong> Endzustand sollte vorhanden sein (wenn der Lebenszyklus ein Ende hat)</li>
          </ul>
          <h4>6. Bedingungen vergessen</h4>
          <p>Wenn es mehrere ausgehende Transitionen gibt, müssen Bedingungen oder unterschiedliche Ereignisse klar machen, welche Transition gewählt wird.</p>
        `
      }
    ],
    pruefungsTipps: [
      'Zustände sind KEINE Aktionen! Ein Zustand beschreibt eine Situation (z.B. "Wartet auf Eingabe"), eine Aktion beschreibt eine Tätigkeit (z.B. "Eingabe verarbeiten"). In der Prüfung wird dieser Unterschied oft getestet.',
      'Lerne die Transition-Notation auswendig: Ereignis [Bedingung] / Aktion. Nicht alle drei Teile müssen vorhanden sein, aber mindestens das Ereignis oder die Bedingung.',
      'Entry-, Do- und Exit-Aktionen innerhalb von Zuständen sind ein beliebtes Prüfungsthema. Entry wird beim Eintreten ausgeführt, Do während des Zustands, Exit beim Verlassen.',
      'Zusammengesetzte Zustände kommen seltener in der AP2 vor, aber du solltest wissen, was sie bedeuten: Ein Zustand, der weitere Unterzustände enthält.',
      'Prüfe dein Diagramm immer auf Sackgassen und unerreichbare Zustände. Jeder Zustand muss erreichbar sein und (außer Endzustände) eine ausgehende Transition haben.'
    ]
  }
];
