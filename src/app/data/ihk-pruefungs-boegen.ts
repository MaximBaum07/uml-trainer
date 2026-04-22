import { IhkPruefungsBogen } from '../models/app.models';

/**
 * Realistische IHK-Prüfungsbögen im Stil der AP2 Teil 2
 * (Handlungsschritt-Aufgaben mit Teilaufgaben und Punktevergabe,
 * Summe 100 Punkte, Notenschlüssel wie ZPA Nord-West).
 *
 * Orientiert am Aufbau der Prüfungen Sommer 2025 und Winter 2025/26.
 * Inhalte sind eigene Simulationen – keine Übernahme echter Prüfungsfragen.
 */
export const IHK_PRUEFUNGS_BOEGEN: IhkPruefungsBogen[] = [
  {
    configId: 'ap2-fachaufgabe-1',
    teilNummer: 1,
    titel: 'Planen eines Softwareproduktes',
    untertitel: 'Teil 2 der Abschlussprüfung',
    saison: 'Simulation 2026',
    termin: 'Simulationstermin',
    zeitMinuten: 90,
    gesamtpunkte: 100,
    belegsatz: `
      <p><strong>Die MediTrack AG</strong> ist ein mittelständisches Softwarehaus mit Sitz
      in Hannover und rund 180 Mitarbeitenden. Das Unternehmen entwickelt branchenspezifische
      Anwendungssoftware für den Gesundheitsmarkt.</p>
      <p>Im Rahmen einer Ausschreibung der bundesweiten Apothekenkette <strong>VitaPlus GmbH</strong>
      (ca. 420 Filialen) soll die MediTrack AG eine neue Anwendung zur
      <strong>Chargenverfolgung und Temperaturüberwachung</strong> temperaturempfindlicher
      Medikamente entwickeln. Die Lösung soll als zentral gehostete Webanwendung
      (SaaS-Modell) für die Mitarbeitenden in den Filialen sowie als REST-Schnittstelle
      für die angebundenen Großhandelssysteme und die Prüfbehörden bereitgestellt
      werden.</p>
      <p>Die Anwendung muss gesetzliche Vorgaben (u. a. DSGVO, Arzneimittelgesetz, GDP-Richtlinien)
      erfüllen. Projektstart ist in drei Monaten, die Markteinführung ist für
      das kommende Geschäftsjahr geplant. Sie sind als Fachinformatiker/-in für
      Anwendungsentwicklung bei der MediTrack AG der Projektgruppe zugeteilt.</p>
    `,
    aufgaben: [
      {
        nummer: 1,
        titel: 'Projektinitialisierung und Projektmanagement',
        punkte: 22,
        einleitung: `
          <p>Die Geschäftsführung der MediTrack AG hat Sie gebeten, im Rahmen der
          Projektinitialisierung verschiedene Vorarbeiten zu leisten und dem Lenkungsausschuss
          einen ersten Projektvorschlag vorzustellen.</p>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 6,
            text: `Nennen Sie <strong>drei Kriterien</strong> einer Machbarkeitsstudie,
              die im Rahmen dieses Projekts durchgeführt werden sollte, und erläutern
              Sie jeweils kurz die Bedeutung für das Projekt.`
          },
          {
            id: 'b',
            punkte: 8,
            text: `Nennen Sie <strong>zwei Stakeholder</strong> und beschreiben Sie für jeden
              Stakeholder jeweils eine <strong>Erwartung</strong> und eine
              <strong>Befürchtung</strong> bezüglich des geplanten Projekts.`
          },
          {
            id: 'c',
            punkte: 4,
            text: `Die Geschäftsführung möchte zwischen einem klassischen (Wasserfall) und
              einem agilen Vorgehensmodell (Scrum) entscheiden.
              Erläutern Sie <strong>zwei Kriterien</strong>, anhand derer diese Entscheidung
              im vorliegenden Projekt getroffen werden sollte.`
          },
          {
            id: 'd',
            punkte: 4,
            text: `Beschreiben Sie zwei Aufgaben, die zur Erstellung eines
              <strong>Projektabschlussberichts</strong> durchzuführen sind.`
          }
        ]
      },
      {
        nummer: 2,
        titel: 'Anforderungsanalyse mit UML',
        punkte: 22,
        einleitung: `
          <p>Für die erste Analyse der fachlichen Anforderungen sollen Sie mehrere
          UML-Diagramme anfertigen. Ziel ist die Darstellung der Abläufe rund um den
          <em>Wareneingang einer temperaturempfindlichen Lieferung</em> in einer Filiale.</p>
          <p>Im Gespräch mit der Fachabteilung wurden folgende Abläufe identifiziert:
          Ein <strong>Filialmitarbeiter</strong> nimmt die Lieferung an, erfasst die Charge
          per Barcode und liest die Temperaturdaten des angelieferten Kühlbehälters aus.
          Liegen die Werte außerhalb des zulässigen Bereichs, wird automatisch der
          <strong>Filialleiter</strong> benachrichtigt. Der Filialleiter entscheidet
          anschließend über die Annahme oder Rücksendung. Die <strong>Prüfbehörde</strong>
          kann bei Bedarf alle Chargendaten einer Filiale digital einsehen.</p>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 10,
            text: `Erstellen Sie auf Basis der Beschreibung ein
              <strong>Anwendungsfalldiagramm</strong> (Use-Case-Diagramm) mit
              allen Akteuren, mindestens vier Anwendungsfällen sowie mindestens
              einer &lt;&lt;include&gt;&gt;- und einer &lt;&lt;extend&gt;&gt;-Beziehung.`,
            antwortZeilen: 14
          },
          {
            id: 'b',
            punkte: 8,
            text: `Erstellen Sie ein <strong>Aktivitätsdiagramm</strong> für den
              Ablauf „Wareneingang bearbeiten“ inkl. der Entscheidung zur Temperaturprüfung
              und der Benachrichtigung des Filialleiters.`,
            antwortZeilen: 14
          },
          {
            id: 'c',
            punkte: 4,
            text: `Nennen und erläutern Sie <strong>zwei</strong> weitere UML-Diagrammarten,
              die im Rahmen dieses Projekts sinnvoll eingesetzt werden können.
              Begründen Sie Ihre Auswahl jeweils knapp.`
          }
        ]
      },
      {
        nummer: 3,
        titel: 'Datenmodellierung und Normalisierung',
        punkte: 22,
        einleitung: `
          <p>Ein Fachkollege hat die folgende, nicht normalisierte Tabelle zur
          Erfassung von Chargen erstellt:</p>
          <pre style="font-size: 11px; background: #f8fafc; padding: 8px; border: 1px solid #e2e8f0;">
Chargen(ChargenNr, Medikamentenname, Wirkstoff, Hersteller, HerstellerAnschrift,
        FilialeNr, FilialeName, FilialeAdresse, Liefertemperatur, Ablaufdatum)
          </pre>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 4,
            text: `Erläutern Sie den Begriff <strong>Redundanz</strong> anhand eines
              konkreten Beispiels aus der obigen Tabelle und nennen Sie zwei
              Nachteile redundanter Datenhaltung.`
          },
          {
            id: 'b',
            punkte: 6,
            text: `Beschreiben Sie die drei Anomaliearten
              (<strong>Einfüge-, Änderungs- und Löschanomalie</strong>) jeweils
              mit einem konkreten Beispiel aus der obigen Tabelle.`
          },
          {
            id: 'c',
            punkte: 12,
            text: `Überführen Sie die Tabelle in die <strong>3. Normalform</strong>.
              Geben Sie alle resultierenden Tabellen mit ihren Attributen,
              Primärschlüsseln (unterstrichen) und Fremdschlüsseln an und
              skizzieren Sie die Beziehungen in einem ER-Diagramm (Chen- oder
              Krähenfuß-Notation).`,
            antwortZeilen: 18
          }
        ]
      },
      {
        nummer: 4,
        titel: 'SQL-Abfragen und Datenbankoperationen',
        punkte: 20,
        einleitung: `
          <p>Für die weitere Bearbeitung liegt folgendes vereinfachtes Datenbankschema vor.
          Primärschlüssel sind <u>unterstrichen</u>, Fremdschlüssel mit <em>kursiv</em>
          markiert.</p>
          <pre style="font-size: 11px; background: #f8fafc; padding: 8px; border: 1px solid #e2e8f0;">
Filialen(<u>FilialeID</u>, Name, PLZ, Ort)
Medikamente(<u>PZN</u>, Bezeichnung, Wirkstoff, Lagertemperatur_min, Lagertemperatur_max)
Chargen(<u>ChargenNr</u>, <em>PZN</em>, <em>FilialeID</em>, Ablaufdatum, Eingangsdatum)
Messungen(<u>MessungID</u>, <em>ChargenNr</em>, Zeitpunkt, Temperatur)
          </pre>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 3,
            text: `Formulieren Sie eine SQL-Anweisung, die ein neues Medikament
              <em>Ibuprofen 400 mg</em> (PZN: 01234567, Wirkstoff: Ibuprofen,
              Lagertemperatur 2 bis 8 °C) in die Datenbank einfügt.`
          },
          {
            id: 'b',
            punkte: 5,
            text: `Formulieren Sie eine SQL-Anweisung, die je Filiale die
              Anzahl aller Chargen ausgibt, deren Ablaufdatum in den nächsten
              30 Tagen liegt. Das Ergebnis soll nach Anzahl absteigend sortiert
              werden.`
          },
          {
            id: 'c',
            punkte: 6,
            text: `Formulieren Sie eine SQL-Anweisung, die alle Chargen
              ermittelt, bei denen mindestens eine Messung außerhalb des für
              das zugehörige Medikament zulässigen Temperaturbereichs liegt.
              Ausgegeben werden sollen ChargenNr, Bezeichnung des Medikaments,
              Name der Filiale sowie die höchste gemessene Temperatur.`
          },
          {
            id: 'd',
            punkte: 6,
            text: `Erläutern Sie den Unterschied zwischen den SQL-Befehlen
              <code>DELETE</code>, <code>TRUNCATE</code> und <code>DROP</code>.
              Beschreiben Sie jeweils ein typisches Einsatzszenario.`
          }
        ]
      },
      {
        nummer: 5,
        titel: 'Qualitätssicherung und IT-Sicherheit',
        punkte: 14,
        einleitung: `
          <p>Vor dem Rollout soll die Anwendung umfassend geprüft werden.
          Weiterhin sind Anforderungen aus Datenschutz und IT-Sicherheit zu beachten.</p>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 4,
            text: `Nennen und erläutern Sie <strong>zwei</strong> Testarten, die im Rahmen
              des Projekts zum Einsatz kommen sollten. Begründen Sie Ihre Auswahl.`
          },
          {
            id: 'b',
            punkte: 4,
            text: `Erläutern Sie die Begriffe <strong>Zweigüberdeckung</strong>
              und <strong>Pfadüberdeckung</strong>. Geben Sie an, welche
              Überdeckung in der Regel angestrebt wird und warum.`
          },
          {
            id: 'c',
            punkte: 6,
            text: `Die Anmeldung am System erfolgt mit Benutzername und Passwort.
              Erläutern Sie, wie Passwörter in der Datenbank sicher gespeichert
              werden sollten. Gehen Sie dabei auf die Begriffe
              <strong>Hash-Funktion</strong> und <strong>Salt</strong> ein.`
          }
        ]
      }
    ]
  },
  {
    configId: 'ap2-fachaufgabe-2',
    teilNummer: 2,
    titel: 'Entwicklung und Umsetzung von Algorithmen',
    untertitel: 'Teil 2 der Abschlussprüfung',
    saison: 'Simulation 2026',
    termin: 'Simulationstermin',
    zeitMinuten: 90,
    gesamtpunkte: 100,
    belegsatz: `
      <p>Die Aufgaben 1 bis 4 beziehen sich auf die folgende Ausgangssituation:</p>
      <p>Die <strong>MediTrack AG</strong> setzt das Projekt „Chargenverfolgung und
      Temperaturüberwachung“ für die Apothekenkette <strong>VitaPlus GmbH</strong>
      aus Teil 1 der Abschlussprüfung fort. Sie sind als Fachinformatiker/-in für
      Anwendungsentwicklung in der Umsetzungsphase der Anwendung eingesetzt.</p>
      <p>Im Fokus dieses Prüfungsteils stehen die konkrete Implementierung,
      algorithmische Umsetzung einzelner Fachfunktionen, Qualitätssicherung durch
      Tests sowie die Datenbankanbindung. Die Anwendung wird in einer
      objektorientierten Programmiersprache (generische Pseudocode-Schreibweise
      zulässig) entwickelt.</p>
    `,
    aufgaben: [
      {
        nummer: 1,
        titel: 'Kontrollstrukturen und Algorithmik',
        punkte: 25,
        einleitung: `
          <p>Sie werden gebeten, eine Funktion zur Berechnung des
          <em>Restlaufzeit-Indikators</em> einer Charge zu implementieren.
          Eingabe ist das Ablaufdatum (Typ <code>Date</code>) und das aktuelle Datum.
          Die Funktion soll einen <code>String</code> liefern:
          „grün“ (&gt; 90 Tage), „gelb“ (30 – 90 Tage), „rot“ (&lt; 30 Tage)
          oder „abgelaufen“ (≤ 0 Tage).</p>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 8,
            text: `Implementieren Sie die Funktion
              <code>berechneStatus(ablauf: Date, heute: Date): String</code>
              in Pseudocode oder einer objektorientierten Programmiersprache Ihrer
              Wahl. Verwenden Sie geeignete Kontrollstrukturen.`,
            antwortZeilen: 16
          },
          {
            id: 'b',
            punkte: 4,
            text: `Nennen Sie <strong>vier</strong> Testfälle (mit Eingabewerten
              und erwartetem Ergebnis), mit denen Sie alle vier Rückgabewerte
              abdecken. Begründen Sie die Auswahl.`,
            antwortZeilen: 10
          },
          {
            id: 'c',
            punkte: 6,
            text: `Erläutern Sie die Begriffe <strong>Anweisungs-, Zweig- und
              Pfadüberdeckung</strong>. Geben Sie an, welche Überdeckung
              für obige Funktion angestrebt werden sollte und warum.`
          },
          {
            id: 'd',
            punkte: 4,
            text: `Die Laufzeit einer Prüffunktion, die alle Chargen-Messungen einer
              Filiale vergleicht, ist bei <em>n</em> Messungen und <em>m</em> Chargen
              in der schlechtesten Laufzeit <em>O(n · m)</em>.
              Erläutern Sie die Bedeutung der <strong>O-Notation</strong>
              und geben Sie zwei Möglichkeiten an, die Laufzeit zu verbessern.`
          },
          {
            id: 'e',
            punkte: 3,
            text: `Unterscheiden Sie <strong>Rekursion</strong> und <strong>Iteration</strong>
              anhand eines kurzen Beispiels.`
          }
        ]
      },
      {
        nummer: 2,
        titel: 'Klassenmodellierung und Entwurfsmuster',
        punkte: 25,
        einleitung: `
          <p>Für die Chargenverfolgung wurden vom Fachbereich folgende
          Anforderungen formuliert:</p>
          <ul>
            <li>Jede Charge besitzt eine Nummer, eine PZN und ein Ablaufdatum.</li>
            <li>Temperaturmessungen werden einer Charge zugeordnet (Zeitpunkt, Wert).</li>
            <li>Es gibt unterschiedliche Transportbehälter (Normalbehälter,
              Kühlbehälter, Trockeneisbehälter). Alle Behälter erfordern eine
              Prüfung, die sich je nach Typ unterscheidet.</li>
          </ul>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 10,
            text: `Erstellen Sie ein <strong>UML-Klassendiagramm</strong> mit den
              Klassen <code>Charge</code>, <code>Messung</code> und einer
              Vererbungshierarchie <code>Behaelter</code> ↔
              <code>Normalbehaelter</code>, <code>Kuehlbehaelter</code>,
              <code>Trockeneisbehaelter</code>. Ergänzen Sie Attribute,
              Sichtbarkeiten und Multiplizitäten.`,
            antwortZeilen: 16
          },
          {
            id: 'b',
            punkte: 6,
            text: `Erläutern Sie den Unterschied zwischen einer <strong>abstrakten
              Klasse</strong> und einem <strong>Interface</strong>.
              Welche der beiden würden Sie für <code>Behaelter</code> wählen?
              Begründen Sie.`
          },
          {
            id: 'c',
            punkte: 6,
            text: `Für das Anlegen neuer Behältertypen soll das Entwurfsmuster
              <strong>Factory Method</strong> eingesetzt werden.
              Erläutern Sie die Funktionsweise und nennen Sie zwei Vorteile für
              das vorliegende Projekt.`
          },
          {
            id: 'd',
            punkte: 3,
            text: `Nennen Sie ein weiteres Entwurfsmuster (außer Factory Method),
              das für diese Anwendung sinnvoll eingesetzt werden kann, und
              beschreiben Sie dessen Einsatzzweck kurz.`
          }
        ]
      },
      {
        nummer: 3,
        titel: 'Ablaufmodellierung und Sequenzdiagramm',
        punkte: 25,
        einleitung: `
          <p>Die Temperaturprüfung einer Charge verläuft wie folgt:</p>
          <ul>
            <li>Der Filialmitarbeiter startet die Prüfung für eine Charge.</li>
            <li>Die Anwendung fordert vom Behälter die aktuellen Messwerte an.</li>
            <li>Der Behälter liefert eine Liste von Messungen zurück.</li>
            <li>Die Anwendung bewertet die Messungen mit der Methode
              <code>bewerten(messungen)</code> der Klasse
              <code>TemperaturPruefer</code>.</li>
            <li>Liegt eine Abweichung vor, wird der Filialleiter per Nachricht
              informiert.</li>
            <li>Abschließend wird das Prüfungsergebnis persistiert.</li>
          </ul>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 12,
            text: `Erstellen Sie ein <strong>UML-Sequenzdiagramm</strong> zum
              beschriebenen Ablauf mit allen beteiligten Objekten und
              synchronen/asynchronen Nachrichten. Nutzen Sie ein
              <code>alt</code>-Fragment für die Abweichungsmeldung.`,
            antwortZeilen: 18
          },
          {
            id: 'b',
            punkte: 6,
            text: `Die Methode <code>bewerten</code> soll threadsicher sein, da
              mehrere Filialmitarbeiter gleichzeitig Prüfungen starten können.
              Erläutern Sie zwei Mechanismen, um <strong>Race Conditions</strong>
              zu vermeiden.`
          },
          {
            id: 'c',
            punkte: 4,
            text: `Nennen Sie <strong>zwei</strong> Arten von Ausnahmen (Exceptions),
              die in dem Ablauf auftreten können, und beschreiben Sie jeweils eine
              geeignete Behandlung.`
          },
          {
            id: 'd',
            punkte: 3,
            text: `Erläutern Sie den Unterschied zwischen <strong>Checked</strong>-
              und <strong>Unchecked Exceptions</strong>.`
          }
        ]
      },
      {
        nummer: 4,
        titel: 'Datenbank und Schnittstellen',
        punkte: 25,
        einleitung: `
          <p>Das Datenmodell aus Teil 1 wird in diesem Teil für die
          Implementierung verwendet. Im Folgenden wird der Zugriff auf die
          Datenbank sowie die Bereitstellung einer REST-Schnittstelle betrachtet.</p>
          <pre style="font-size: 11px; background: #f8fafc; padding: 8px; border: 1px solid #e2e8f0;">
Filialen(<u>FilialeID</u>, Name, PLZ, Ort)
Medikamente(<u>PZN</u>, Bezeichnung, Lagertemperatur_min, Lagertemperatur_max)
Chargen(<u>ChargenNr</u>, <em>PZN</em>, <em>FilialeID</em>, Ablaufdatum)
Messungen(<u>MessungID</u>, <em>ChargenNr</em>, Zeitpunkt, Temperatur)
          </pre>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 6,
            text: `Formulieren Sie eine SQL-Anweisung, die pro Filiale die
              <strong>Anzahl</strong> und den <strong>Durchschnitt</strong> aller
              Messungen der letzten 7 Tage ausgibt. Sortierung absteigend nach Anzahl.`
          },
          {
            id: 'b',
            punkte: 6,
            text: `Formulieren Sie eine SQL-Anweisung, die alle Medikamente
              zurückliefert, für die in den letzten 30 Tagen <em>keine</em>
              Messung vorliegt. Verwenden Sie dabei eine <code>NOT EXISTS</code>-
              oder <code>LEFT JOIN</code>-Konstruktion.`
          },
          {
            id: 'c',
            punkte: 4,
            text: `Erläutern Sie den Unterschied zwischen einer
              <strong>stored procedure</strong> und einem <strong>Trigger</strong>.
              Geben Sie je ein Einsatzbeispiel aus dem Projekt.`
          },
          {
            id: 'd',
            punkte: 6,
            text: `Die Temperaturdaten sollen per REST-Schnittstelle an die
              Prüfbehörden übertragen werden. Nennen Sie die vier gängigsten
              HTTP-Methoden und beschreiben Sie jeweils den passenden
              REST-Endpunkt zum Abruf bzw. Anlegen einer Messung.`
          },
          {
            id: 'e',
            punkte: 3,
            text: `Erläutern Sie den Begriff <strong>idempotent</strong>
              im Kontext von REST-Schnittstellen und geben Sie eine idempotente
              sowie eine nicht-idempotente HTTP-Methode an.`
          }
        ]
      }
    ]
  }
  // WiSo-PDF wird dynamisch aus buildPruefungsFragen generiert (kein statischer Bogen).
  // Früher war hier ein statischer Bogen; er wurde entfernt, damit jede Simulation
  // andere Fragen zeigt — genauso wie der Online-Modus.
  /* {
    configId: 'ap2-wiso',
    teilNummer: 3,
    titel: 'Wirtschafts- und Sozialkunde',
    untertitel: 'Teil 3 der Abschlussprüfung',
    saison: 'Simulation 2026',
    termin: 'Simulationstermin',
    zeitMinuten: 60,
    gesamtpunkte: 100,
    belegsatz: `
      <p>Die <strong>Nordlicht IT-Systeme GmbH</strong> in Kiel beschäftigt
      ca. 95 Mitarbeitende und ist Anbieter von IT-Dienstleistungen und
      individueller Softwareentwicklung für den öffentlichen Sektor. Sie sind
      dort im dritten Ausbildungsjahr als Fachinformatiker/-in für Anwendungsentwicklung
      beschäftigt. Im Folgenden werden Ihnen verschiedene Sachverhalte aus Ihrem
      beruflichen Alltag vorgelegt.</p>
    `,
    aufgaben: [
      {
        nummer: 1,
        titel: 'Arbeits- und Tarifrecht',
        punkte: 22,
        einleitung: `
          <p>Ihre Ausbildung neigt sich dem Ende zu. Sie erhalten das Angebot,
          nach bestandener Abschlussprüfung übernommen zu werden, und erhalten
          einen unbefristeten Arbeitsvertrag mit einer vereinbarten Probezeit
          von sechs Monaten.</p>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 4,
            text: `Nennen Sie <strong>vier</strong> Pflichtbestandteile eines
              Arbeitsvertrages gemäß Nachweisgesetz.`
          },
          {
            id: 'b',
            punkte: 6,
            text: `Erläutern Sie die Unterschiede zwischen einer
              <strong>ordentlichen</strong> und einer <strong>außerordentlichen
              Kündigung</strong>. Gehen Sie dabei auf Frist, Grund und Form ein.`
          },
          {
            id: 'c',
            punkte: 6,
            text: `Erklären Sie den Begriff <strong>Tarifautonomie</strong>
              und nennen Sie <strong>zwei</strong> Tarifvertragsparteien.
              Beschreiben Sie jeweils deren Rolle im Tarifverhandlungsprozess.`
          },
          {
            id: 'd',
            punkte: 6,
            text: `Beschreiben Sie <strong>drei</strong> mögliche Inhalte eines
              Tarifvertrages, die über die gesetzlichen Mindestanforderungen
              hinausgehen können.`
          }
        ]
      },
      {
        nummer: 2,
        titel: 'Sozialversicherung und Lohnabrechnung',
        punkte: 20,
        einleitung: `
          <p>Für Ihre erste Lohnabrechnung als ausgelernter Mitarbeiter wurde
          Ihnen ein Bruttogehalt von 3.200,00 € monatlich in Aussicht gestellt.</p>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 8,
            text: `Nennen Sie die <strong>fünf Säulen</strong> der gesetzlichen
              Sozialversicherung und geben Sie jeweils den ungefähren
              Beitragssatz (Arbeitnehmeranteil) an.`
          },
          {
            id: 'b',
            punkte: 4,
            text: `Erläutern Sie das Prinzip der <strong>paritätischen
              Finanzierung</strong> und nennen Sie eine Ausnahme.`
          },
          {
            id: 'c',
            punkte: 8,
            text: `Berechnen Sie überschlägig das Nettogehalt bei einem Bruttogehalt
              von 3.200 €, Steuerklasse I, keine Kirchensteuer, und
              einem angenommenen Lohnsteuer-Prozentsatz von 12 %. Stellen Sie
              den Rechenweg nachvollziehbar dar.`,
            antwortZeilen: 12
          }
        ]
      },
      {
        nummer: 3,
        titel: 'Unternehmensformen und Mitbestimmung',
        punkte: 20,
        einleitung: `
          <p>Die Nordlicht IT-Systeme GmbH erwägt, zur Erweiterung ihrer
          Kapitalbasis in eine Aktiengesellschaft umgewandelt zu werden.</p>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 6,
            text: `Nennen Sie <strong>drei</strong> Merkmale einer GmbH und
              <strong>drei</strong> Merkmale einer AG. Stellen Sie die
              Unterschiede in einer Übersicht dar.`,
            antwortZeilen: 10
          },
          {
            id: 'b',
            punkte: 6,
            text: `Beschreiben Sie die Organe einer Aktiengesellschaft und
              deren Aufgaben.`
          },
          {
            id: 'c',
            punkte: 4,
            text: `Erläutern Sie den Unterschied zwischen <strong>Betriebsrat</strong>
              und <strong>Aufsichtsrat</strong>. Gehen Sie dabei auf Wahl
              und Zuständigkeit ein.`
          },
          {
            id: 'd',
            punkte: 4,
            text: `Nennen Sie <strong>zwei</strong> Mitbestimmungsrechte des
              Betriebsrats nach dem Betriebsverfassungsgesetz.`
          }
        ]
      },
      {
        nummer: 4,
        titel: 'Wirtschaftskreislauf und Markt',
        punkte: 22,
        einleitung: `
          <p>Die Nordlicht IT-Systeme GmbH plant den Eintritt in einen neuen
          Marktsegment. In einer Besprechung werden Fragen zum Marktmechanismus
          und zur gesamtwirtschaftlichen Einordnung diskutiert.</p>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 8,
            text: `Skizzieren Sie den <strong>erweiterten Wirtschaftskreislauf</strong>
              mit den Wirtschaftssubjekten Haushalte, Unternehmen, Staat,
              Banken und Ausland. Zeichnen Sie die Güter- und Geldströme ein.`,
            antwortZeilen: 14
          },
          {
            id: 'b',
            punkte: 6,
            text: `Erläutern Sie das <strong>Marktgleichgewicht</strong>
              grafisch und begrifflich. Gehen Sie auf die Begriffe
              Nachfrageüberhang und Angebotsüberhang ein.`,
            antwortZeilen: 10
          },
          {
            id: 'c',
            punkte: 4,
            text: `Nennen Sie <strong>vier</strong> Merkmale des vollkommenen Marktes.`
          },
          {
            id: 'd',
            punkte: 4,
            text: `Unterscheiden Sie die Begriffe <strong>Konjunktur</strong>
              und <strong>Wirtschaftswachstum</strong> und nennen Sie jeweils
              eine Kennzahl.`
          }
        ]
      },
      {
        nummer: 5,
        titel: 'Berufsbildung und Duales System',
        punkte: 16,
        einleitung: `
          <p>Die Nordlicht IT-Systeme GmbH ist anerkannter Ausbildungsbetrieb.
          In der Geschäftsleitung wird über Ausbildung und Personalentwicklung
          gesprochen.</p>
        `,
        teilaufgaben: [
          {
            id: 'a',
            punkte: 6,
            text: `Erläutern Sie das <strong>Duale System</strong> der
              Berufsausbildung in Deutschland und nennen Sie die beiden
              Lernorte mit jeweils zwei Aufgaben.`
          },
          {
            id: 'b',
            punkte: 4,
            text: `Nennen Sie <strong>vier</strong> Pflichten des Ausbildenden
              nach dem Berufsbildungsgesetz (BBiG).`
          },
          {
            id: 'c',
            punkte: 6,
            text: `Beschreiben Sie <strong>drei</strong> Möglichkeiten der
              betrieblichen Weiterbildung nach der Ausbildung und geben Sie
              jeweils ein Beispiel.`
          }
        ]
      }
    ]
  } */
];

export function findIhkBogen(configId: string): IhkPruefungsBogen | undefined {
  return IHK_PRUEFUNGS_BOEGEN.find(b => b.configId === configId);
}
