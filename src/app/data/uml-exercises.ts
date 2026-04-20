import { UebungsSet } from '../models/app.models';

export const UEBUNGS_SETS: UebungsSet[] = [
  // =========================================================================
  // KLASSENDIAGRAMM
  // =========================================================================
  {
    themaId: 'uml-klassendiagramm',
    uebungen: [
      // MC 1 - Leicht
      {
        typ: 'multiple-choice',
        frage: 'Welches Symbol steht im UML-Klassendiagramm für eine öffentliche (public) Sichtbarkeit?',
        optionen: [
          '+ (Plus)',
          '- (Minus)',
          '# (Raute)',
          '~ (Tilde)'
        ],
        korrekteAntwort: 0,
        erklaerung: 'Im UML-Klassendiagramm kennzeichnet das Pluszeichen (+) die öffentliche Sichtbarkeit (public). Das Minuszeichen (-) steht für private, die Raute (#) für protected und die Tilde (~) für package-Sichtbarkeit.'
      },
      // MC 2 - Mittel (mit SVG)
      {
        typ: 'multiple-choice',
        frage: 'Welche Beziehung wird im folgenden Diagramm zwischen Klasse A und Klasse B dargestellt?',
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="350" height="250">
          <rect x="10" y="90" width="120" height="70" fill="white" stroke="black" stroke-width="2"/>
          <line x1="10" y1="115" x2="130" y2="115" stroke="black" stroke-width="2"/>
          <text x="70" y="108" text-anchor="middle" font-size="14" font-weight="bold">Fahrzeug</text>
          <text x="20" y="135" font-size="12">- marke: String</text>
          <text x="20" y="155" font-size="12">+ fahren(): void</text>
          <rect x="220" y="90" width="120" height="70" fill="white" stroke="black" stroke-width="2"/>
          <line x1="220" y1="115" x2="340" y2="115" stroke="black" stroke-width="2"/>
          <text x="280" y="108" text-anchor="middle" font-size="14" font-weight="bold">Motor</text>
          <text x="230" y="135" font-size="12">- leistung: int</text>
          <text x="230" y="155" font-size="12">+ starten(): void</text>
          <line x1="130" y1="125" x2="220" y2="125" stroke="black" stroke-width="2"/>
          <polygon points="220,125 205,118 205,132" fill="black" stroke="black"/>
          <text x="175" y="118" text-anchor="middle" font-size="11">1</text>
          <text x="145" y="118" text-anchor="middle" font-size="11">1</text>
        </svg>`,
        optionen: [
          'Assoziation',
          'Komposition',
          'Aggregation',
          'Vererbung'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Die ausgefüllte Raute (schwarzes Dreieck/Diamant) am Ende der Linie zeigt eine Komposition an. Bei einer Komposition ist das Teilelement (Motor) existenzabhängig vom Ganzen (Fahrzeug). Wird das Fahrzeug zerstört, wird auch der Motor zerstört. Eine Aggregation würde durch eine leere Raute dargestellt.'
      },
      // MC 3 - Mittel
      {
        typ: 'multiple-choice',
        frage: 'Was bedeutet die Multiplizität "0..*" an einem Assoziationsende im Klassendiagramm?',
        optionen: [
          'Genau ein Objekt',
          'Kein oder beliebig viele Objekte',
          'Mindestens ein Objekt',
          'Genau null Objekte'
        ],
        korrekteAntwort: 1,
        erklaerung: '"0..*" bedeutet, dass kein oder beliebig viele Objekte zugeordnet sein können. Die 0 gibt die untere Grenze (Minimum) und das * die obere Grenze (unbegrenzt) an. "1..*" würde mindestens eins bedeuten, "1" genau eins und "0..1" kein oder genau eins.'
      },
      // MC 4 - Schwer (mit SVG)
      {
        typ: 'multiple-choice',
        frage: 'Welche Aussage trifft auf das folgende Klassendiagramm zu?',
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="350" height="250">
          <rect x="115" y="10" width="120" height="50" fill="white" stroke="black" stroke-width="2"/>
          <line x1="115" y1="35" x2="235" y2="35" stroke="black" stroke-width="2"/>
          <text x="175" y="28" text-anchor="middle" font-size="13" font-style="italic">Tier</text>
          <text x="125" y="50" font-size="11" font-style="italic">+ lautGeben()</text>
          <rect x="20" y="160" width="120" height="50" fill="white" stroke="black" stroke-width="2"/>
          <line x1="20" y1="185" x2="140" y2="185" stroke="black" stroke-width="2"/>
          <text x="80" y="178" text-anchor="middle" font-size="13">Hund</text>
          <text x="30" y="200" font-size="11">+ lautGeben()</text>
          <rect x="210" y="160" width="120" height="50" fill="white" stroke="black" stroke-width="2"/>
          <line x1="210" y1="185" x2="330" y2="185" stroke="black" stroke-width="2"/>
          <text x="270" y="178" text-anchor="middle" font-size="13">Katze</text>
          <text x="220" y="200" font-size="11">+ lautGeben()</text>
          <line x1="80" y1="160" x2="175" y2="60" stroke="black" stroke-width="2"/>
          <line x1="270" y1="160" x2="175" y2="60" stroke="black" stroke-width="2"/>
          <polygon points="175,60 165,78 185,78" fill="white" stroke="black" stroke-width="2"/>
        </svg>`,
        optionen: [
          'Tier ist eine konkrete Klasse, Hund und Katze sind abstrakt',
          'Tier ist eine abstrakte Klasse, Hund und Katze erben und überschreiben lautGeben()',
          'Hund und Katze haben eine Assoziation zu Tier',
          'Hund und Katze sind durch eine Aggregation mit Tier verbunden'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Der kursiv geschriebene Klassenname "Tier" und die kursive Methode lautGeben() zeigen an, dass es sich um eine abstrakte Klasse mit einer abstrakten Methode handelt. Der leere Pfeil (Dreieck) zeigt eine Generalisierung/Vererbung. Hund und Katze erben von Tier und implementieren die abstrakte Methode lautGeben() konkret (nicht mehr kursiv).'
      },
      // WF 1
      {
        typ: 'wahr-falsch',
        aussage: 'Eine Aggregation wird im UML-Klassendiagramm durch eine ausgefüllte (schwarze) Raute dargestellt.',
        korrekt: false,
        erklaerung: 'Eine Aggregation wird durch eine leere (weiße) Raute dargestellt. Die ausgefüllte (schwarze) Raute steht für eine Komposition. Bei der Aggregation können die Teile auch ohne das Ganze existieren, bei der Komposition nicht.'
      },
      // WF 2
      {
        typ: 'wahr-falsch',
        aussage: 'In einem UML-Klassendiagramm werden abstrakte Klassen und Methoden kursiv geschrieben.',
        korrekt: true,
        erklaerung: 'Abstrakte Klassen und Methoden werden in UML kursiv geschrieben. Alternativ kann auch das Stereotyp {abstract} verwendet werden. Abstrakte Klassen können nicht direkt instanziiert werden und dienen als Vorlage für abgeleitete Klassen.'
      },
      // LT 1
      {
        typ: 'lueckentext',
        frage: 'Die Beziehung, bei der ein Objekt ohne das übergeordnete Objekt nicht existieren kann, heißt ___.',
        antwort: 'Komposition',
        erklaerung: 'Bei einer Komposition ist das Teil existenzabhängig vom Ganzen. Wird das Ganze zerstört, werden auch die Teile zerstört. Beispiel: Ein Raum kann nicht ohne ein Gebäude existieren. Im Gegensatz dazu können bei einer Aggregation die Teile auch unabhängig existieren.'
      },
      // LT 2
      {
        typ: 'lueckentext',
        frage: 'Das Sichtbarkeitssymbol "#" in einem UML-Klassendiagramm steht für die Sichtbarkeit ___.',
        antwort: 'protected',
        erklaerung: 'Das Rautenzeichen (#) steht für protected-Sichtbarkeit. Protected-Attribute und -Methoden sind innerhalb der eigenen Klasse und in allen abgeleiteten Klassen (Unterklassen) sichtbar, jedoch nicht von außerhalb der Vererbungshierarchie.'
      },
      // ZU 1
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die Beziehungstypen im Klassendiagramm den korrekten Beschreibungen zu.',
        paare: [
          { begriff: 'Vererbung', definition: 'Eine Klasse übernimmt Attribute und Methoden einer anderen Klasse (leerer Pfeil)' },
          { begriff: 'Komposition', definition: 'Starke Enthält-Beziehung mit Existenzabhängigkeit (ausgefüllte Raute)' },
          { begriff: 'Aggregation', definition: 'Schwache Enthält-Beziehung ohne Existenzabhängigkeit (leere Raute)' },
          { begriff: 'Realisierung', definition: 'Eine Klasse implementiert ein Interface (gestrichelter Pfeil)' },
          { begriff: 'Assoziation', definition: 'Allgemeine Beziehung zwischen zwei Klassen (einfache Linie)' }
        ],
        erklaerung: 'Im Klassendiagramm gibt es verschiedene Beziehungstypen: Vererbung (Generalisierung) mit leerem Dreieckspfeil, Komposition mit ausgefüllter Raute (Existenzabhängigkeit), Aggregation mit leerer Raute (Teil-Ganzes ohne Existenzabhängigkeit), Realisierung mit gestricheltem Pfeil (Interface-Implementierung) und einfache Assoziation als allgemeine Verbindung.'
      },
      // ZU 2
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die Sichtbarkeitsmodifikatoren den passenden Symbolen zu.',
        paare: [
          { begriff: 'public', definition: '+ (Plus)' },
          { begriff: 'private', definition: '- (Minus)' },
          { begriff: 'protected', definition: '# (Raute)' },
          { begriff: 'package', definition: '~ (Tilde)' }
        ],
        erklaerung: 'Die UML-Notation definiert vier Sichtbarkeitsstufen mit festen Symbolen: + für public (überall sichtbar), - für private (nur in der eigenen Klasse), # für protected (eigene Klasse und Unterklassen) und ~ für package (innerhalb des Pakets sichtbar).'
      }
    ]
  },

  // =========================================================================
  // ANWENDUNGSFALLDIAGRAMM (USE CASE)
  // =========================================================================
  {
    themaId: 'uml-anwendungsfall',
    uebungen: [
      // MC 1 - Leicht
      {
        typ: 'multiple-choice',
        frage: 'Wie wird ein Akteur in einem UML-Anwendungsfalldiagramm dargestellt?',
        optionen: [
          'Als Rechteck mit dem Namen',
          'Als Strichmännchen mit dem Namen darunter',
          'Als Oval mit dem Namen darin',
          'Als Raute mit dem Namen daneben'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Ein Akteur wird in UML als Strichmännchen (Stickfigure) dargestellt, wobei der Name des Akteurs darunter steht. Akteure können Personen, Systeme oder andere externe Entitäten sein, die mit dem System interagieren. Das Oval ist die Darstellung eines Anwendungsfalls.'
      },
      // MC 2 - Mittel (mit SVG)
      {
        typ: 'multiple-choice',
        frage: 'Welche Beziehung zwischen den Anwendungsfällen ist im Diagramm dargestellt?',
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="350" height="250">
          <rect x="60" y="10" width="250" height="230" fill="none" stroke="black" stroke-width="2"/>
          <text x="185" y="30" text-anchor="middle" font-size="13" font-weight="bold">Onlineshop</text>
          <ellipse cx="185" cy="80" rx="90" ry="25" fill="white" stroke="black" stroke-width="2"/>
          <text x="185" y="85" text-anchor="middle" font-size="12">Bestellung aufgeben</text>
          <ellipse cx="185" cy="170" rx="90" ry="25" fill="white" stroke="black" stroke-width="2"/>
          <text x="185" y="175" text-anchor="middle" font-size="12">Zahlung verarbeiten</text>
          <line x1="185" y1="105" x2="185" y2="145" stroke="black" stroke-width="1.5" stroke-dasharray="6,4"/>
          <polygon points="185,145 180,135 190,135" fill="black"/>
          <text x="250" y="130" font-size="11" font-style="italic">&lt;&lt;include&gt;&gt;</text>
        </svg>`,
        optionen: [
          'extend - Zahlung ist eine optionale Erweiterung',
          'include - Bestellung schließt Zahlung immer ein',
          'Generalisierung - Zahlung erbt von Bestellung',
          'Assoziation - Beide sind gleichwertig verbunden'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Der gestrichelte Pfeil mit dem Stereotyp <<include>> zeigt eine Include-Beziehung. Das bedeutet, dass der Anwendungsfall "Bestellung aufgeben" den Anwendungsfall "Zahlung verarbeiten" immer einschließt. Bei include wird der eingeschlossene Use Case zwingend ausgeführt. Der Pfeil zeigt vom Basis-Use-Case zum eingeschlossenen.'
      },
      // MC 3 - Schwer (mit SVG)
      {
        typ: 'multiple-choice',
        frage: 'Welche Aussage zum folgenden Diagramm ist korrekt?',
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="350" height="250">
          <rect x="70" y="5" width="210" height="240" fill="none" stroke="black" stroke-width="2"/>
          <text x="175" y="22" text-anchor="middle" font-size="12" font-weight="bold">Bibliothek</text>
          <ellipse cx="175" cy="65" rx="80" ry="22" fill="white" stroke="black" stroke-width="2"/>
          <text x="175" y="70" text-anchor="middle" font-size="11">Buch ausleihen</text>
          <ellipse cx="175" cy="140" rx="80" ry="22" fill="white" stroke="black" stroke-width="2"/>
          <text x="175" y="145" text-anchor="middle" font-size="11">Mahnung senden</text>
          <line x1="175" y1="87" x2="175" y2="118" stroke="black" stroke-width="1.5" stroke-dasharray="6,4"/>
          <polygon points="175,87 170,97 180,97" fill="black"/>
          <text x="240" y="107" font-size="10" font-style="italic">&lt;&lt;extend&gt;&gt;</text>
          <line x1="8" y1="30" x2="8" y2="50" stroke="black" stroke-width="2"/>
          <circle cx="8" cy="22" r="8" fill="none" stroke="black" stroke-width="2"/>
          <line x1="0" y1="35" x2="16" y2="35" stroke="black" stroke-width="2"/>
          <line x1="8" y1="50" x2="0" y2="65" stroke="black" stroke-width="2"/>
          <line x1="8" y1="50" x2="16" y2="65" stroke="black" stroke-width="2"/>
          <text x="8" y="78" text-anchor="middle" font-size="10">Mitglied</text>
          <line x1="16" y1="40" x2="95" y2="65" stroke="black" stroke-width="1.5"/>
        </svg>`,
        optionen: [
          'Mahnung senden wird bei jeder Ausleihe automatisch ausgeführt',
          'Mahnung senden ist eine optionale Erweiterung von Buch ausleihen',
          'Buch ausleihen erweitert Mahnung senden',
          'Mahnung senden ist ein Akteur im System'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Der gestrichelte Pfeil mit <<extend>> zeigt von "Mahnung senden" zu "Buch ausleihen". Bei einer Extend-Beziehung zeigt der Pfeil vom erweiternden zum Basis-Use-Case. Extend bedeutet, dass der erweiternde Anwendungsfall optional ist und nur unter bestimmten Bedingungen ausgeführt wird (z.B. wenn das Buch nicht rechtzeitig zurückgegeben wird).'
      },
      // MC 4 - Mittel
      {
        typ: 'multiple-choice',
        frage: 'Was stellt das Rechteck um die Anwendungsfälle in einem Use-Case-Diagramm dar?',
        optionen: [
          'Eine Klasse',
          'Die Systemgrenze',
          'Ein Paket',
          'Einen Kommentar'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Das Rechteck um die Anwendungsfälle herum stellt die Systemgrenze dar. Es definiert, was zum System gehört (innerhalb) und was extern ist (außerhalb, z.B. Akteure). Der Name des Systems steht oben im Rechteck. Akteure befinden sich immer außerhalb der Systemgrenze.'
      },
      // WF 1
      {
        typ: 'wahr-falsch',
        aussage: 'Bei einer <<include>>-Beziehung ist der eingeschlossene Anwendungsfall optional.',
        korrekt: false,
        erklaerung: 'Bei <<include>> wird der eingeschlossene Anwendungsfall immer (zwingend) ausgeführt, wenn der Basis-Anwendungsfall ausgeführt wird. Optional ist die <<extend>>-Beziehung, bei der der erweiternde Use Case nur unter bestimmten Bedingungen ausgeführt wird.'
      },
      // WF 2
      {
        typ: 'wahr-falsch',
        aussage: 'Ein Akteur im Anwendungsfalldiagramm muss immer eine reale Person sein.',
        korrekt: false,
        erklaerung: 'Ein Akteur muss nicht zwingend eine reale Person sein. Akteure können auch andere Systeme (z.B. ein Zahlungsdienstleister), Hardwarekomponenten (z.B. ein Sensor) oder zeitgesteuerte Ereignisse (z.B. ein Scheduler) sein. Entscheidend ist, dass der Akteur außerhalb des Systems steht und mit ihm interagiert.'
      },
      // LT 1
      {
        typ: 'lueckentext',
        frage: 'Bei der ___-Beziehung im Anwendungsfalldiagramm wird ein Anwendungsfall nur unter bestimmten Bedingungen ausgeführt.',
        antwort: 'extend',
        erklaerung: 'Die extend-Beziehung (Erweiterung) beschreibt optionales Verhalten. Der erweiternde Use Case wird nur unter bestimmten Bedingungen ausgeführt. Der Pfeil zeigt vom erweiternden zum Basis-Use-Case. Beispiel: "Rabatt gewähren" erweitert "Bestellung aufgeben" (nur wenn ein Gutschein vorhanden ist).'
      },
      // LT 2
      {
        typ: 'lueckentext',
        frage: 'Die Ellipse im Anwendungsfalldiagramm repräsentiert einen ___.',
        antwort: 'Anwendungsfall',
        erklaerung: 'Die Ellipse (Oval) ist das UML-Symbol für einen Anwendungsfall (Use Case). Der Name des Anwendungsfalls wird in die Ellipse geschrieben. Ein Anwendungsfall beschreibt eine in sich abgeschlossene Funktionalität des Systems aus Sicht eines Akteurs.'
      },
      // ZU 1
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die Begriffe des Anwendungsfalldiagramms den richtigen Beschreibungen zu.',
        paare: [
          { begriff: 'Akteur', definition: 'Externe Entität, die mit dem System interagiert (Strichmännchen)' },
          { begriff: 'Anwendungsfall', definition: 'Eine abgeschlossene Funktionalität des Systems (Ellipse)' },
          { begriff: 'Systemgrenze', definition: 'Rahmen der definiert was zum System gehört (Rechteck)' },
          { begriff: '<<include>>', definition: 'Zwingende Einbeziehung eines anderen Anwendungsfalls' },
          { begriff: '<<extend>>', definition: 'Optionale Erweiterung unter bestimmten Bedingungen' }
        ],
        erklaerung: 'Das Anwendungsfalldiagramm besteht aus Akteuren (Strichmännchen), Anwendungsfällen (Ellipsen), der Systemgrenze (Rechteck) und Beziehungen. Include bedeutet eine zwingende Einbeziehung, extend eine optionale Erweiterung. Akteure stehen außerhalb, Anwendungsfälle innerhalb der Systemgrenze.'
      },
      // ZU 2
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die Beziehungen im Anwendungsfalldiagramm den korrekten Pfeilrichtungen zu.',
        paare: [
          { begriff: '<<include>>-Pfeil', definition: 'Zeigt vom Basis-Use-Case zum eingeschlossenen Use Case' },
          { begriff: '<<extend>>-Pfeil', definition: 'Zeigt vom erweiternden Use Case zum Basis-Use-Case' },
          { begriff: 'Generalisierung (Akteur)', definition: 'Zeigt vom spezialisierten zum allgemeinen Akteur' },
          { begriff: 'Assoziation (Akteur zu UC)', definition: 'Einfache Linie ohne Pfeilspitze zwischen Akteur und Use Case' }
        ],
        erklaerung: 'Die Pfeilrichtungen sind entscheidend: Bei include zeigt der Pfeil vom Basis-UC weg zum eingeschlossenen UC. Bei extend zeigt der Pfeil vom erweiternden UC hin zum Basis-UC. Die Generalisierung zeigt vom Speziellen zum Allgemeinen. Die Assoziation zwischen Akteur und Use Case hat keine Richtung.'
      }
    ]
  },

  // =========================================================================
  // SEQUENZDIAGRAMM
  // =========================================================================
  {
    themaId: 'uml-sequenzdiagramm',
    uebungen: [
      // MC 1 - Leicht
      {
        typ: 'multiple-choice',
        frage: 'Was stellt die senkrechte gestrichelte Linie unter einem Objekt im Sequenzdiagramm dar?',
        optionen: [
          'Eine Nachricht',
          'Die Lebenslinie des Objekts',
          'Eine Rückgabe',
          'Ein Fragment'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Die senkrechte gestrichelte Linie unter einem Objekt ist die Lebenslinie. Sie zeigt die Existenz des Objekts über die Zeit an. Die Zeit verläuft im Sequenzdiagramm von oben nach unten. Auf der Lebenslinie können Aktivierungsbalken angezeigt werden, die angeben, wann das Objekt aktiv eine Operation ausführt.'
      },
      // MC 2 - Mittel (mit SVG)
      {
        typ: 'multiple-choice',
        frage: 'Welcher Nachrichtentyp wird durch den durchgezogenen Pfeil dargestellt?',
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="350" height="250">
          <rect x="40" y="10" width="80" height="30" fill="lightyellow" stroke="black" stroke-width="2"/>
          <text x="80" y="30" text-anchor="middle" font-size="12">:Kunde</text>
          <line x1="80" y1="40" x2="80" y2="240" stroke="black" stroke-width="1" stroke-dasharray="5,5"/>
          <rect x="230" y="10" width="80" height="30" fill="lightyellow" stroke="black" stroke-width="2"/>
          <text x="270" y="30" text-anchor="middle" font-size="12">:Server</text>
          <line x1="270" y1="40" x2="270" y2="240" stroke="black" stroke-width="1" stroke-dasharray="5,5"/>
          <rect x="74" y="70" width="12" height="60" fill="white" stroke="black" stroke-width="1.5"/>
          <rect x="264" y="85" width="12" height="30" fill="white" stroke="black" stroke-width="1.5"/>
          <line x1="86" y1="90" x2="264" y2="90" stroke="black" stroke-width="2"/>
          <polygon points="264,90 254,85 254,95" fill="black"/>
          <text x="175" y="83" text-anchor="middle" font-size="11">anfrage()</text>
          <line x1="264" y1="110" x2="86" y2="110" stroke="black" stroke-width="1.5" stroke-dasharray="6,4"/>
          <polygon points="86,110 96,105 96,115" fill="black"/>
          <text x="175" y="103" text-anchor="middle" font-size="11">antwort</text>
        </svg>`,
        optionen: [
          'Asynchrone Nachricht',
          'Synchrone Nachricht (Methodenaufruf)',
          'Rückgabenachricht',
          'Erstellungsnachricht'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Der durchgezogene Pfeil mit ausgefüllter Pfeilspitze stellt eine synchrone Nachricht dar (Methodenaufruf). Der Sender wartet auf die Antwort, bevor er fortfährt. Die gestrichelte Linie mit Pfeilspitze darunter ist die Rückgabenachricht (return). Eine asynchrone Nachricht würde durch eine offene (nicht ausgefüllte) Pfeilspitze dargestellt.'
      },
      // MC 3 - Schwer
      {
        typ: 'multiple-choice',
        frage: 'Was bedeutet das Fragment "alt" in einem Sequenzdiagramm?',
        optionen: [
          'Eine Schleife (Wiederholung)',
          'Eine Alternative (If-Else-Verzweigung)',
          'Einen optionalen Bereich',
          'Einen parallelen Ablauf'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Das Fragment "alt" (alternative) stellt eine If-Else-Verzweigung dar. Es enthält mehrere Bereiche mit Bedingungen (Guards), von denen genau einer ausgeführt wird. "loop" steht für Schleifen, "opt" für optionale Bereiche und "par" für parallele Abläufe.'
      },
      // MC 4 - Schwer (mit SVG)
      {
        typ: 'multiple-choice',
        frage: 'Welches Kombinationsfragment ist im Diagramm dargestellt?',
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="350" height="250">
          <rect x="50" y="10" width="80" height="30" fill="lightyellow" stroke="black" stroke-width="2"/>
          <text x="90" y="30" text-anchor="middle" font-size="12">:System</text>
          <line x1="90" y1="40" x2="90" y2="240" stroke="black" stroke-width="1" stroke-dasharray="5,5"/>
          <rect x="220" y="10" width="80" height="30" fill="lightyellow" stroke="black" stroke-width="2"/>
          <text x="260" y="30" text-anchor="middle" font-size="12">:Drucker</text>
          <line x1="260" y1="40" x2="260" y2="240" stroke="black" stroke-width="1" stroke-dasharray="5,5"/>
          <rect x="60" y="60" width="230" height="120" fill="none" stroke="black" stroke-width="2"/>
          <rect x="60" y="60" width="60" height="20" fill="white" stroke="black" stroke-width="1.5"/>
          <text x="90" y="75" text-anchor="middle" font-size="11" font-weight="bold">loop</text>
          <text x="170" y="95" text-anchor="middle" font-size="10" font-style="italic">[für jede Seite]</text>
          <line x1="90" y1="110" x2="260" y2="110" stroke="black" stroke-width="2"/>
          <polygon points="260,110 250,105 250,115" fill="black"/>
          <text x="175" y="105" text-anchor="middle" font-size="11">druckeSeite()</text>
          <line x1="260" y1="140" x2="90" y2="140" stroke="black" stroke-width="1.5" stroke-dasharray="6,4"/>
          <polygon points="90,140 100,135 100,145" fill="black"/>
          <text x="175" y="155" text-anchor="middle" font-size="11">bestätigung</text>
        </svg>`,
        optionen: [
          'alt - Bedingte Ausführung',
          'opt - Optionaler Bereich',
          'loop - Wiederholung für jede Seite',
          'par - Parallele Verarbeitung'
        ],
        korrekteAntwort: 2,
        erklaerung: 'Das Fragment "loop" mit der Bedingung "[für jede Seite]" zeigt eine Schleife. Der Inhalt des Fragments wird wiederholt ausgeführt, solange die Bedingung erfüllt ist. Hier wird druckeSeite() für jede Seite einmal aufgerufen. Die Bedingung steht in eckigen Klammern (Guard).'
      },
      // WF 1
      {
        typ: 'wahr-falsch',
        aussage: 'Im Sequenzdiagramm verläuft die Zeit von links nach rechts.',
        korrekt: false,
        erklaerung: 'Im Sequenzdiagramm verläuft die Zeit von oben nach unten. Die Objekte sind horizontal nebeneinander angeordnet, und die Nachrichten werden in chronologischer Reihenfolge von oben nach unten dargestellt. Je weiter unten eine Nachricht steht, desto später wird sie gesendet.'
      },
      // WF 2
      {
        typ: 'wahr-falsch',
        aussage: 'Eine asynchrone Nachricht wird im Sequenzdiagramm durch eine offene (nicht ausgefüllte) Pfeilspitze dargestellt.',
        korrekt: true,
        erklaerung: 'Eine asynchrone Nachricht wird durch einen durchgezogenen Pfeil mit offener Pfeilspitze dargestellt. Der Sender wartet nicht auf eine Antwort und kann sofort weitermachen. Bei synchronen Nachrichten ist die Pfeilspitze ausgefüllt (gefülltes Dreieck), und der Sender wartet auf die Rückgabe.'
      },
      // LT 1
      {
        typ: 'lueckentext',
        frage: 'Der schmale Balken auf der Lebenslinie, der anzeigt, dass ein Objekt gerade aktiv ist, heißt ___.',
        antwort: 'Aktivierungsbalken',
        erklaerung: 'Der Aktivierungsbalken (auch Ausführungsbalken oder Execution Specification) ist ein schmales Rechteck auf der Lebenslinie. Er zeigt den Zeitraum an, in dem das Objekt aktiv eine Operation ausführt oder auf eine Antwort wartet. Ohne Aktivierungsbalken ist das Objekt passiv.'
      },
      // LT 2
      {
        typ: 'lueckentext',
        frage: 'Das Kombinationsfragment ___ im Sequenzdiagramm stellt einen optionalen Bereich dar, der nur ausgeführt wird, wenn die Bedingung wahr ist.',
        antwort: 'opt',
        erklaerung: 'Das Fragment "opt" (option) stellt einen optionalen Bereich dar - vergleichbar mit einer if-Anweisung ohne else-Zweig. Der Inhalt wird nur ausgeführt, wenn die angegebene Bedingung (Guard) erfüllt ist. Anders als "alt" hat "opt" keinen Alternativzweig.'
      },
      // ZU 1
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die Kombinationsfragmente ihren Bedeutungen zu.',
        paare: [
          { begriff: 'alt', definition: 'If-Else-Verzweigung mit mehreren Alternativen' },
          { begriff: 'opt', definition: 'Optionaler Bereich (If ohne Else)' },
          { begriff: 'loop', definition: 'Wiederholung (Schleife)' },
          { begriff: 'par', definition: 'Parallele Ausführung mehrerer Abläufe' }
        ],
        erklaerung: 'Die wichtigsten Kombinationsfragmente im Sequenzdiagramm sind: alt für Verzweigungen (mehrere Bereiche, einer wird ausgeführt), opt für optionale Teile (ein Bereich, der ausgeführt wird oder nicht), loop für Schleifen und par für parallele Ausführungen.'
      },
      // ZU 2
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die Nachrichtentypen im Sequenzdiagramm ihrer Darstellung zu.',
        paare: [
          { begriff: 'Synchrone Nachricht', definition: 'Durchgezogener Pfeil mit ausgefüllter Pfeilspitze' },
          { begriff: 'Asynchrone Nachricht', definition: 'Durchgezogener Pfeil mit offener Pfeilspitze' },
          { begriff: 'Rückgabenachricht', definition: 'Gestrichelter Pfeil mit offener Pfeilspitze' },
          { begriff: 'Erstellungsnachricht', definition: 'Gestrichelter Pfeil der auf ein neues Objekt zeigt' }
        ],
        erklaerung: 'Es gibt verschiedene Nachrichtentypen: Synchron (Sender wartet, ausgefüllte Spitze), asynchron (Sender wartet nicht, offene Spitze), Rückgabe (Ergebnis zurück, gestrichelt) und Erstellung (neues Objekt wird erzeugt, gestrichelt zum neuen Objektkasten).'
      }
    ]
  },

  // =========================================================================
  // AKTIVITAETSDIAGRAMM
  // =========================================================================
  {
    themaId: 'uml-aktivitaetsdiagramm',
    uebungen: [
      // MC 1 - Leicht
      {
        typ: 'multiple-choice',
        frage: 'Wie wird der Startknoten im UML-Aktivitätsdiagramm dargestellt?',
        optionen: [
          'Als leerer Kreis',
          'Als ausgefüllter schwarzer Kreis',
          'Als Kreis mit einem X darin',
          'Als Rechteck mit abgerundeten Ecken'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Der Startknoten (Initialknoten) wird als kleiner ausgefüllter schwarzer Kreis dargestellt. Er markiert den Beginn des Ablaufs. Der Endknoten ist ein schwarzer Kreis mit einem Ring darum (Bullauge). Ein leerer Kreis hat in UML-Aktivitätsdiagrammen keine standardmäßige Bedeutung.'
      },
      // MC 2 - Mittel (mit SVG)
      {
        typ: 'multiple-choice',
        frage: 'Was stellen die dicken schwarzen Balken im folgenden Diagramm dar?',
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="350" height="250">
          <circle cx="175" cy="20" r="8" fill="black"/>
          <line x1="175" y1="28" x2="175" y2="50" stroke="black" stroke-width="2"/>
          <rect x="120" y="50" width="110" height="30" rx="10" fill="lightyellow" stroke="black" stroke-width="2"/>
          <text x="175" y="70" text-anchor="middle" font-size="11">Auftrag erfassen</text>
          <line x1="175" y1="80" x2="175" y2="100" stroke="black" stroke-width="2"/>
          <rect x="100" y="100" width="150" height="6" rx="2" fill="black"/>
          <line x1="130" y1="106" x2="130" y2="130" stroke="black" stroke-width="2"/>
          <line x1="220" y1="106" x2="220" y2="130" stroke="black" stroke-width="2"/>
          <rect x="75" y="130" width="110" height="30" rx="10" fill="lightyellow" stroke="black" stroke-width="2"/>
          <text x="130" y="150" text-anchor="middle" font-size="11">Rechnung erstellen</text>
          <rect x="165" y="130" width="110" height="30" rx="10" fill="lightyellow" stroke="black" stroke-width="2"/>
          <text x="220" y="150" text-anchor="middle" font-size="11">Ware verpacken</text>
          <line x1="130" y1="160" x2="130" y2="185" stroke="black" stroke-width="2"/>
          <line x1="220" y1="160" x2="220" y2="185" stroke="black" stroke-width="2"/>
          <rect x="100" y="185" width="150" height="6" rx="2" fill="black"/>
          <line x1="175" y1="191" x2="175" y2="210" stroke="black" stroke-width="2"/>
          <rect x="120" y="210" width="110" height="30" rx="10" fill="lightyellow" stroke="black" stroke-width="2"/>
          <text x="175" y="230" text-anchor="middle" font-size="11">Versand starten</text>
        </svg>`,
        optionen: [
          'Entscheidungsknoten',
          'Synchronisationsbalken für parallele Abläufe (Fork und Join)',
          'Start- und Endknoten',
          'Objektknoten'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Die dicken schwarzen Balken sind Synchronisationsbalken. Der obere Balken ist ein Fork (Aufspaltung) - er teilt den Ablauf in parallele Zweige auf. Der untere Balken ist ein Join (Zusammenführung) - er wartet, bis alle parallelen Zweige abgeschlossen sind, bevor der Ablauf weitergeht. Rechnung erstellen und Ware verpacken laufen gleichzeitig ab.'
      },
      // MC 3 - Mittel
      {
        typ: 'multiple-choice',
        frage: 'Wie wird eine Entscheidung (Bedingung) im Aktivitätsdiagramm dargestellt?',
        optionen: [
          'Als Rechteck mit abgerundeten Ecken',
          'Als Raute (Diamant)',
          'Als dicker schwarzer Balken',
          'Als Kreis mit einem Kreuz'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Eine Entscheidung wird als Raute (Diamant) dargestellt. Von der Raute gehen mehrere ausgehende Kanten mit Bedingungen (Guards in eckigen Klammern) ab. Genau eine Bedingung muss wahr sein, damit der entsprechende Pfad genommen wird. Die Raute kann auch als Zusammenführungsknoten (Merge) dienen.'
      },
      // MC 4 - Schwer (mit SVG)
      {
        typ: 'multiple-choice',
        frage: 'Welchen Ablauf beschreibt das folgende Aktivitätsdiagramm?',
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="350" height="250">
          <circle cx="175" cy="15" r="8" fill="black"/>
          <line x1="175" y1="23" x2="175" y2="40" stroke="black" stroke-width="2"/>
          <rect x="115" y="40" width="120" height="28" rx="10" fill="lightyellow" stroke="black" stroke-width="2"/>
          <text x="175" y="58" text-anchor="middle" font-size="11">Login-Daten eingeben</text>
          <line x1="175" y1="68" x2="175" y2="90" stroke="black" stroke-width="2"/>
          <polygon points="175,90 195,105 175,120 155,105" fill="white" stroke="black" stroke-width="2"/>
          <text x="175" y="109" text-anchor="middle" font-size="9">gültig?</text>
          <line x1="195" y1="105" x2="280" y2="105" stroke="black" stroke-width="2"/>
          <text x="237" y="100" text-anchor="middle" font-size="9">[nein]</text>
          <rect x="230" y="90" width="100" height="28" rx="10" fill="lightyellow" stroke="black" stroke-width="2"/>
          <text x="280" y="108" text-anchor="middle" font-size="10">Fehler anzeigen</text>
          <line x1="280" y1="118" x2="280" y2="140" stroke="black" stroke-width="2"/>
          <line x1="280" y1="140" x2="175" y2="140" stroke="black" stroke-width="2"/>
          <line x1="175" y1="140" x2="175" y2="68" stroke="black" stroke-width="2"/>
          <polygon points="175,68 170,78 180,78" fill="black"/>
          <line x1="175" y1="120" x2="175" y2="155" stroke="black" stroke-width="2"/>
          <text x="168" y="140" text-anchor="end" font-size="9">[ja]</text>
          <rect x="115" y="155" width="120" height="28" rx="10" fill="lightyellow" stroke="black" stroke-width="2"/>
          <text x="175" y="173" text-anchor="middle" font-size="11">Dashboard anzeigen</text>
          <line x1="175" y1="183" x2="175" y2="210" stroke="black" stroke-width="2"/>
          <circle cx="175" cy="220" r="10" fill="white" stroke="black" stroke-width="2"/>
          <circle cx="175" cy="220" r="6" fill="black"/>
        </svg>`,
        optionen: [
          'Paralleler Login mit zwei Servern',
          'Login-Prozess mit Wiederholung bei falschen Daten',
          'Einmaliger Login ohne Fehlerbehandlung',
          'Abmeldeprozess eines Benutzers'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Das Diagramm zeigt einen Login-Prozess mit einer Schleife: Nach der Eingabe der Login-Daten wird geprüft, ob sie gültig sind (Entscheidungsraute). Bei "nein" wird ein Fehler angezeigt und der Ablauf kehrt zurück zur Eingabe (Schleife). Bei "ja" wird das Dashboard angezeigt und der Ablauf endet. Dies ist ein typisches Muster für Validierungsschleifen.'
      },
      // WF 1
      {
        typ: 'wahr-falsch',
        aussage: 'Im Aktivitätsdiagramm kann eine Entscheidungsraute auch als Zusammenführungsknoten (Merge) verwendet werden.',
        korrekt: true,
        erklaerung: 'Die Raute dient sowohl als Entscheidungsknoten (Decision) als auch als Zusammenführungsknoten (Merge). Als Decision hat sie eine eingehende und mehrere ausgehende Kanten mit Guards. Als Merge hat sie mehrere eingehende und eine ausgehende Kante - sie führt alternative Pfade wieder zusammen (ohne zu warten, im Gegensatz zum Join-Balken).'
      },
      // WF 2
      {
        typ: 'wahr-falsch',
        aussage: 'Ein Aktivitätsdiagramm kann nur einen einzigen Endknoten besitzen.',
        korrekt: false,
        erklaerung: 'Ein Aktivitätsdiagramm kann mehrere Endknoten besitzen. Verschiedene Ablaufpfade können an unterschiedlichen Stellen enden. Allerdings gibt es in der Regel nur einen Startknoten. Zusätzlich gibt es den Ablaufendknoten (Flow Final, dargestellt als Kreis mit X), der nur einen einzelnen Pfad beendet, nicht die gesamte Aktivität.'
      },
      // LT 1
      {
        typ: 'lueckentext',
        frage: 'Der Synchronisationsbalken, der einen Ablauf in mehrere parallele Pfade aufteilt, heißt ___.',
        antwort: 'Fork',
        erklaerung: 'Ein Fork (Aufspaltung/Gabelung) ist ein Synchronisationsbalken mit einer eingehenden und mehreren ausgehenden Kanten. Er teilt den Kontrollfluss in parallele Zweige auf, die gleichzeitig ausgeführt werden. Das Gegenstück ist der Join (Zusammenführung), der mehrere parallele Pfade wieder vereint.'
      },
      // LT 2
      {
        typ: 'lueckentext',
        frage: 'Die Bedingungen an den ausgehenden Kanten einer Entscheidungsraute werden in UML als ___ bezeichnet und in eckigen Klammern geschrieben.',
        antwort: 'Guards',
        erklaerung: 'Guards (Wächter/Bedingungen) werden in eckigen Klammern geschrieben, z.B. [Betrag > 100]. Sie bestimmen, welcher Pfad nach einer Entscheidung genommen wird. An einer Entscheidungsraute muss genau eine Guard-Bedingung wahr sein, damit der Ablauf eindeutig ist.'
      },
      // ZU 1
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die Symbole im Aktivitätsdiagramm ihrer Bedeutung zu.',
        paare: [
          { begriff: 'Ausgefüllter schwarzer Kreis', definition: 'Startknoten (Initialknoten)' },
          { begriff: 'Kreis mit Ring darum (Bullauge)', definition: 'Endknoten (Aktivitätsendknoten)' },
          { begriff: 'Abgerundetes Rechteck', definition: 'Aktion (Aktivität)' },
          { begriff: 'Raute', definition: 'Entscheidungs- oder Zusammenführungsknoten' },
          { begriff: 'Dicker schwarzer Balken', definition: 'Fork oder Join (Parallelisierung)' }
        ],
        erklaerung: 'Die wichtigsten Symbole im Aktivitätsdiagramm: Ausgefüllter Kreis = Start, Bullauge = Ende, abgerundetes Rechteck = Aktion, Raute = Entscheidung/Merge, dicker Balken = Fork/Join. Zusätzlich gibt es den Ablaufendknoten (Kreis mit X), der nur einen Pfad beendet.'
      },
      // ZU 2
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die Kontrollfluss-Elemente ihren Beschreibungen zu.',
        paare: [
          { begriff: 'Fork', definition: 'Aufspaltung in parallele Abläufe (ein Eingang, mehrere Ausgänge)' },
          { begriff: 'Join', definition: 'Zusammenführung paralleler Abläufe (mehrere Eingänge, ein Ausgang)' },
          { begriff: 'Decision', definition: 'Entscheidung mit Guards (ein Eingang, mehrere bedingte Ausgänge)' },
          { begriff: 'Merge', definition: 'Zusammenführung alternativer Pfade ohne Synchronisation' }
        ],
        erklaerung: 'Fork und Join verwenden denselben Balken, aber unterschiedlich: Fork teilt auf (parallele Ausführung), Join wartet auf alle Pfade. Decision und Merge verwenden die Raute: Decision verzweigt bedingt (nur ein Pfad wird genommen), Merge führt alternative Pfade zusammen ohne zu synchronisieren.'
      }
    ]
  },

  // =========================================================================
  // ZUSTANDSDIAGRAMM
  // =========================================================================
  {
    themaId: 'uml-zustandsdiagramm',
    uebungen: [
      // MC 1 - Leicht
      {
        typ: 'multiple-choice',
        frage: 'Wie wird ein Zustand im UML-Zustandsdiagramm dargestellt?',
        optionen: [
          'Als Kreis',
          'Als Rechteck mit abgerundeten Ecken',
          'Als Raute',
          'Als Sechseck'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Ein Zustand wird als Rechteck mit abgerundeten Ecken dargestellt. Der Name des Zustands steht im oberen Bereich. Optional können interne Aktivitäten wie entry/, do/ und exit/ angegeben werden. Der Startzustand wird als ausgefüllter schwarzer Kreis dargestellt, der Endzustand als Bullauge.'
      },
      // MC 2 - Mittel (mit SVG)
      {
        typ: 'multiple-choice',
        frage: 'Was zeigt die Beschriftung "knopfGedrueckt / lichtAn()" an der Transition?',
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="350" height="250">
          <circle cx="30" cy="125" r="8" fill="black"/>
          <line x1="38" y1="125" x2="55" y2="125" stroke="black" stroke-width="2"/>
          <polygon points="55,125 48,120 48,130" fill="black"/>
          <rect x="55" y="100" width="100" height="50" rx="12" fill="white" stroke="black" stroke-width="2"/>
          <text x="105" y="130" text-anchor="middle" font-size="12">Aus</text>
          <line x1="155" y1="125" x2="230" y2="125" stroke="black" stroke-width="2"/>
          <polygon points="230,125 220,120 220,130" fill="black"/>
          <text x="192" y="115" text-anchor="middle" font-size="9">knopfGedrueckt</text>
          <text x="192" y="138" text-anchor="middle" font-size="9">/ lichtAn()</text>
          <rect x="230" y="100" width="100" height="50" rx="12" fill="white" stroke="black" stroke-width="2"/>
          <text x="280" y="130" text-anchor="middle" font-size="12">An</text>
        </svg>`,
        optionen: [
          'Einen Guard (Bedingung) und einen Zustand',
          'Ein Ereignis (Trigger) und eine Aktion (Effekt)',
          'Einen Zustand und eine Aktivität',
          'Eine Bedingung und einen Folgezustand'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Die Transitionsbeschriftung folgt dem Muster: Ereignis [Guard] / Aktion. "knopfGedrueckt" ist das Ereignis (Trigger), das die Transition auslöst, und "lichtAn()" ist die Aktion (Effekt), die bei der Transition ausgeführt wird. Ein optionaler Guard (Bedingung) würde in eckigen Klammern stehen.'
      },
      // MC 3 - Schwer (mit SVG)
      {
        typ: 'multiple-choice',
        frage: 'Welche internen Aktivitäten sind im folgenden Zustand definiert?',
        svgDiagramm: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 250" width="350" height="250">
          <rect x="75" y="40" width="200" height="120" rx="15" fill="white" stroke="black" stroke-width="2"/>
          <text x="175" y="65" text-anchor="middle" font-size="14" font-weight="bold">Verbunden</text>
          <line x1="75" y1="75" x2="275" y2="75" stroke="black" stroke-width="1"/>
          <text x="90" y="95" font-size="11">entry / verbindungHerstellen()</text>
          <text x="90" y="115" font-size="11">do / datenUebertragen()</text>
          <text x="90" y="135" font-size="11">exit / verbindungTrennen()</text>
        </svg>`,
        optionen: [
          'Nur eine Entry-Aktion beim Eintreten in den Zustand',
          'Entry-Aktion, fortlaufende Do-Aktivität und Exit-Aktion',
          'Drei verschiedene Transitionen zu anderen Zuständen',
          'Drei parallele Zustände innerhalb eines Oberzustands'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Der Zustand "Verbunden" hat drei interne Aktivitäten: entry/ wird beim Eintreten ausgeführt (verbindungHerstellen), do/ läuft kontinuierlich während des Zustands (datenUebertragen), und exit/ wird beim Verlassen ausgeführt (verbindungTrennen). Diese drei Arten interner Aktivitäten sind standard in UML-Zustandsdiagrammen.'
      },
      // MC 4 - Schwer
      {
        typ: 'multiple-choice',
        frage: 'Was ist ein zusammengesetzter Zustand (Composite State) im Zustandsdiagramm?',
        optionen: [
          'Ein Zustand, der mehrere Transitionen hat',
          'Ein Zustand, der Unterzustände mit eigenem Zustandsautomaten enthält',
          'Ein Zustand, der parallel zu einem anderen Zustand aktiv ist',
          'Ein Zustand ohne entry- und exit-Aktionen'
        ],
        korrekteAntwort: 1,
        erklaerung: 'Ein zusammengesetzter Zustand (Composite State) enthält in seinem Inneren weitere Unterzustände mit eigenen Transitionen, einem eigenen Start- und optional einem Endknoten. Er dient zur hierarchischen Strukturierung komplexer Zustandsautomaten. Beispiel: Ein Zustand "Angemeldet" könnte die Unterzustände "Aktiv" und "Inaktiv" enthalten.'
      },
      // WF 1
      {
        typ: 'wahr-falsch',
        aussage: 'Der Startzustand im Zustandsdiagramm wird genau wie im Aktivitätsdiagramm als ausgefüllter schwarzer Kreis dargestellt.',
        korrekt: true,
        erklaerung: 'Der Startzustand (Pseudozustand) wird sowohl im Zustandsdiagramm als auch im Aktivitätsdiagramm als ausgefüllter schwarzer Kreis dargestellt. Vom Startknoten geht genau eine Transition zum ersten echten Zustand. Der Startknoten ist kein echter Zustand, sondern ein Pseudozustand.'
      },
      // WF 2
      {
        typ: 'wahr-falsch',
        aussage: 'Eine Transition im Zustandsdiagramm muss immer ein Ereignis (Trigger) haben.',
        korrekt: false,
        erklaerung: 'Eine Transition muss nicht zwingend ein Ereignis haben. Es gibt sogenannte triggerlose Transitionen (auch Completion Transitions), die automatisch ausgeführt werden, wenn die internen Aktivitäten des Quellzustands abgeschlossen sind. Die vollständige Syntax lautet: Ereignis [Guard] / Aktion - alle drei Teile sind optional.'
      },
      // LT 1
      {
        typ: 'lueckentext',
        frage: 'Die interne Aktivität, die beim Eintreten in einen Zustand ausgeführt wird, wird mit dem Schlüsselwort ___ gekennzeichnet.',
        antwort: 'entry',
        erklaerung: 'Das Schlüsselwort "entry" kennzeichnet eine Aktion, die beim Eintreten in den Zustand ausgeführt wird. Daneben gibt es "do" für fortlaufende Aktivitäten während des Zustands und "exit" für Aktionen beim Verlassen des Zustands. Die Schreibweise ist: entry / aktion().'
      },
      // LT 2
      {
        typ: 'lueckentext',
        frage: 'Eine Bedingung an einer Transition, die in eckigen Klammern geschrieben wird, nennt man ___.',
        antwort: 'Guard',
        erklaerung: 'Ein Guard ist eine Bedingung in eckigen Klammern an einer Transition, z.B. [temperatur > 100]. Die Transition wird nur ausgeführt, wenn das Ereignis eintritt UND der Guard wahr ist. Guards ermöglichen es, verschiedene Transitionen vom selben Zustand bei demselben Ereignis zu unterscheiden.'
      },
      // ZU 1
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die Elemente des Zustandsdiagramms ihren Darstellungen zu.',
        paare: [
          { begriff: 'Zustand', definition: 'Abgerundetes Rechteck mit optionalen internen Aktivitäten' },
          { begriff: 'Startzustand', definition: 'Ausgefüllter schwarzer Kreis (Pseudozustand)' },
          { begriff: 'Endzustand', definition: 'Schwarzer Kreis mit einem Ring darum (Bullauge)' },
          { begriff: 'Transition', definition: 'Pfeil zwischen Zuständen mit Ereignis/Guard/Aktion' },
          { begriff: 'Entscheidungspseudozustand', definition: 'Raute mit bedingten ausgehenden Transitionen' }
        ],
        erklaerung: 'Die Grundelemente des Zustandsdiagramms: Zustände als abgerundete Rechtecke, Startzustand als schwarzer Kreis, Endzustand als Bullauge, Transitionen als Pfeile mit der Beschriftung Ereignis[Guard]/Aktion. Zusätzlich gibt es den Entscheidungspseudozustand (Raute) für bedingte Verzweigungen.'
      },
      // ZU 2
      {
        typ: 'zuordnung',
        frage: 'Ordnen Sie die internen Aktivitäten eines Zustands den richtigen Zeitpunkten zu.',
        paare: [
          { begriff: 'entry /', definition: 'Wird beim Eintreten in den Zustand einmalig ausgeführt' },
          { begriff: 'do /', definition: 'Wird kontinuierlich ausgeführt, solange der Zustand aktiv ist' },
          { begriff: 'exit /', definition: 'Wird beim Verlassen des Zustands einmalig ausgeführt' },
          { begriff: 'Ereignis / Aktion', definition: 'Interne Transition ohne Zustandswechsel bei einem Ereignis' }
        ],
        erklaerung: 'Zustände können vier Arten interner Aktivitäten haben: entry/ wird beim Eintreten ausgeführt, do/ läuft während der gesamten Zustandsdauer, exit/ wird beim Verlassen ausgeführt. Zusätzlich können interne Transitionen definiert werden, bei denen auf ein Ereignis reagiert wird, ohne den Zustand zu verlassen (entry/exit werden dabei nicht erneut ausgeführt).'
      }
    ]
  }
];
