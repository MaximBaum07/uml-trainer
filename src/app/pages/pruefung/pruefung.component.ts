import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Button } from 'primeng/button';
import { ProgressBar } from 'primeng/progressbar';
import { QuizMultipleChoiceComponent } from '../../components/quiz-multiple-choice.component';
import { QuizWahrFalschComponent } from '../../components/quiz-wahr-falsch.component';
import { QuizLueckentextComponent } from '../../components/quiz-lueckentext.component';
import { QuizZuordnungComponent } from '../../components/quiz-zuordnung.component';
import { QuizFreitextComponent } from '../../components/quiz-freitext.component';
import { PRUEFUNGS_CONFIGS, buildPruefungsFragen } from '../../data/pruefungs-configs';
import { findIhkBogen } from '../../data/ihk-pruefungs-boegen';
import {
  PruefungsConfig, PruefungsFrage, PruefungsErgebnisState, ExamAntwortDetail,
  Uebung, MultipleChoiceUebung, WahrFalschUebung, LueckentextUebung,
  ZuordnungUebung, FreitextUebung, IhkPruefungsBogen
} from '../../models/app.models';

@Component({
  selector: 'app-pruefung',
  standalone: true,
  imports: [RouterLink, Button, ProgressBar,
    QuizMultipleChoiceComponent, QuizWahrFalschComponent,
    QuizLueckentextComponent, QuizZuordnungComponent, QuizFreitextComponent],
  template: `
    @if (config && modus() === 'auswahl') {
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-6 max-w-2xl mx-auto mt-8">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
               [style.background-color]="config.farbe + '20'">
            <i [class]="config.icon" [style.color]="config.farbe" class="text-xl"></i>
          </div>
          <div>
            <h1 class="text-xl font-bold text-slate-800">{{ config.name }}</h1>
            <p class="text-sm text-slate-500">Wie möchtest du die Prüfung ablegen?</p>
          </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2 mt-6">
          <button type="button"
                  class="text-left p-5 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition"
                  (click)="modusWaehlen('web')">
            <div class="flex items-center gap-2 mb-2">
              <i class="pi pi-desktop text-blue-600 text-lg"></i>
              <span class="font-semibold text-slate-800">Online im Browser</span>
            </div>
            <p class="text-xs text-slate-600">
              Interaktiv mit Timer, automatischer Auswertung und Lösungen nach Abgabe.
            </p>
          </button>
          <button type="button"
                  class="text-left p-5 rounded-xl border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition"
                  (click)="modusWaehlen('pdf')">
            <div class="flex items-center gap-2 mb-2">
              <i class="pi pi-file-pdf text-red-600 text-lg"></i>
              <span class="font-semibold text-slate-800">PDF-Prüfungsbogen</span>
            </div>
            <p class="text-xs text-slate-600">
              Druckbare Version im Stil einer echten IHK-Prüfung – per Druckdialog als PDF speichern.
            </p>
          </button>
        </div>
        <div class="mt-6 text-center">
          <a routerLink="/" class="text-xs text-slate-400 hover:text-slate-600 no-underline">
            <i class="pi pi-times mr-1"></i>Abbrechen
          </a>
        </div>
      </div>
    }

    @if (config && modus() === 'pdf' && ihkBogen) {
      <div class="no-print mb-4 flex items-center justify-between gap-3 flex-wrap">
        <a routerLink="/" class="text-sm text-slate-600 no-underline">
          <i class="pi pi-arrow-left mr-1"></i>Zurück zum Dashboard
        </a>
        <p-button label="Drucken / Als PDF speichern" icon="pi pi-print" (click)="drucken()" />
      </div>
      <div class="pdf-bogen bg-white shadow-sm border border-slate-200 mx-auto">

        <!-- ===== DECKBLATT ===== -->
        <section class="pdf-deckblatt px-12 pt-10 pb-8 page-break-after">
          <!-- Kopfleiste mit Kästchen-Feldern -->
          <div class="flex justify-between items-start mb-4">
            <div class="flex-1">
              <p class="text-xs font-semibold text-slate-800 mb-1">Diese Kopfleiste bitte unbedingt ausfüllen!</p>
              <p class="text-[10px] text-slate-600 mb-1">Familienname, Vorname (bitte durch eine Leerspalte trennen)</p>
              <div class="grid grid-cols-20 gap-0 mb-3 border border-slate-800" style="display: grid; grid-template-columns: repeat(24, 1fr);">
                @for (_ of [].constructor(24); track $index) {
                  <div class="border-r border-slate-400 h-6 last:border-r-0"></div>
                }
              </div>
              <div class="flex gap-3 items-end">
                <div>
                  <p class="text-[9px] text-slate-600">Bereich</p>
                  <div class="flex border border-slate-800">
                    <div class="w-6 h-6 border-r border-slate-400 bg-blue-50 flex items-center justify-center text-xs font-bold">6</div>
                    <div class="w-6 h-6 bg-blue-50 flex items-center justify-center text-xs font-bold">6</div>
                  </div>
                </div>
                <div>
                  <p class="text-[9px] text-slate-600">Berufsnummer</p>
                  <div class="flex border border-slate-800">
                    <div class="w-6 h-6 border-r border-slate-400 bg-blue-50 flex items-center justify-center text-xs font-bold">1</div>
                    <div class="w-6 h-6 border-r border-slate-400 bg-blue-50 flex items-center justify-center text-xs font-bold">2</div>
                    <div class="w-6 h-6 border-r border-slate-400 bg-blue-50 flex items-center justify-center text-xs font-bold">0</div>
                    <div class="w-6 h-6 bg-blue-50 flex items-center justify-center text-xs font-bold">1</div>
                  </div>
                </div>
                <div>
                  <p class="text-[9px] text-slate-600">IHK-Nummer</p>
                  <div class="flex border border-slate-800">
                    @for (_ of [].constructor(3); track $index) {
                      <div class="w-6 h-6 border-r border-slate-400 last:border-r-0"></div>
                    }
                  </div>
                </div>
                <div>
                  <p class="text-[9px] text-slate-600">Prüflingsnummer</p>
                  <div class="flex border border-slate-800">
                    @for (_ of [].constructor(5); track $index) {
                      <div class="w-6 h-6 border-r border-slate-400 last:border-r-0"></div>
                    }
                  </div>
                </div>
                <div class="ml-2 text-sm font-semibold text-slate-800">Termin: {{ ihkBogen.termin }}</div>
              </div>
            </div>
            <div class="ml-6 w-20 h-20 bg-slate-900 text-white flex items-center justify-center font-bold text-xl tracking-wider">IHK</div>
          </div>

          <div class="border-t-2 border-slate-800 pt-4 mt-2">
            <h1 class="text-3xl font-bold text-slate-900">Abschlussprüfung {{ ihkBogen.saison }}</h1>
            <p class="text-lg text-slate-800 mt-1">1201</p>
          </div>

          <!-- Titel mit großer Ziffer -->
          <div class="flex items-start gap-6 mt-8">
            <div class="w-20 h-28 bg-slate-900 text-white flex items-center justify-center text-6xl font-bold">
              {{ ihkBogen.teilNummer }}
            </div>
            <div class="flex-1 pt-2">
              <h2 class="text-xl font-bold text-slate-900 leading-tight">{{ ihkBogen.titel }}</h2>
            </div>
            <div class="text-right pt-2">
              <p class="text-base text-slate-900 leading-tight">Fachinformatiker</p>
              <p class="text-base text-slate-900 leading-tight">Fachinformatikerin</p>
              <p class="text-base text-slate-900 leading-tight italic">Anwendungsentwicklung</p>
            </div>
          </div>

          <!-- Info-Block und Bearbeitungshinweise -->
          <div class="grid grid-cols-2 gap-8 mt-10">
            <div>
              <h3 class="font-bold text-slate-900 text-base mb-3">{{ ihkBogen.untertitel }}</h3>
              <ul class="text-sm text-slate-900 space-y-1 ml-4" style="list-style-type: none;">
                <li>{{ ihkBogen.aufgaben.length }} Aufgaben</li>
                <li class="ml-4">mit Belegsatz</li>
                <li>{{ ihkBogen.zeitMinuten }} Minuten Prüfungszeit</li>
                <li>{{ ihkBogen.gesamtpunkte }} Punkte</li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold text-slate-900 text-base mb-2">Bearbeitungshinweise</h3>
              <ol class="text-[10px] text-slate-800 space-y-1 pl-4 leading-snug" style="list-style-type: decimal;">
                <li>Bevor Sie mit der Bearbeitung der Aufgaben beginnen, überprüfen Sie bitte die <strong>Vollständigkeit</strong> dieses Aufgabensatzes.</li>
                <li>Füllen Sie zuerst die <strong>Kopfzeile</strong> aus. Tragen Sie Ihren Familiennamen, Ihren Vornamen und Ihre Prüflings-Nr. in die oben stehenden Felder ein.</li>
                <li>Lesen Sie bitte den <strong>Text</strong> der Aufgaben ganz durch, bevor Sie mit der Bearbeitung beginnen.</li>
                <li>Halten Sie sich bei der Bearbeitung der Aufgaben genau an die <strong>Vorgaben der Aufgabenstellung</strong> zum Umfang der Lösung.</li>
                <li>Tragen Sie die frei zu formulierenden <strong>Antworten</strong> in die dafür lt. Aufgabenstellung vorgesehenen Bereiche (Lösungszeilen, Formulare, Tabellen u. a.) des Arbeitsbogens ein.</li>
                <li>Sofern nicht ausdrücklich ein Brief oder eine Formulierung in ganzen Sätzen gefordert werden, ist eine <strong>stichwortartige Beantwortung</strong> zulässig.</li>
                <li>Schreiben Sie deutlich und gut lesbar. Ein nicht eindeutig zuzuordnendes oder <strong>unleserliches Ergebnis</strong> wird als <strong>falsch</strong> gewertet.</li>
                <li>Zur Lösung der Rechenaufgaben darf ein nicht programmierter, netzunabhängiger <strong>Taschenrechner</strong> ohne Kommunikationsmöglichkeit mit Dritten verwendet werden.</li>
                <li>Wenn Sie ein <strong>gerundetes Ergebnis</strong> eintragen und damit weiterrechnen müssen, rechnen Sie (auch im Taschenrechner) nur mit diesem gerundeten Ergebnis weiter.</li>
                <li>Für <strong>Hilfsaufzeichnungen</strong> können Sie das in der Tasche beigelegte Konzept­papier verwenden. Bewertet werden jedoch grundsätzlich nur Ihre Eintragungen in diesem Aufgabensatz.</li>
              </ol>
            </div>
          </div>

          <!-- Bewertung (wird vom Korrektor ausgefüllt) -->
          <div class="mt-10 border-t border-slate-800 pt-4">
            <p class="font-bold text-sm text-slate-900 mb-2">Wird vom Korrektor ausgefüllt!</p>
            <p class="font-semibold text-xs text-slate-800 mb-1">Bewertung</p>
            <p class="text-[10px] text-slate-700 mb-3">Für die Bewertung gilt die Vorgabe der Punkte in den Lösungshinweisen.</p>
            <div class="flex flex-wrap gap-4 mb-4">
              @for (aufgabe of ihkBogen.aufgaben; track aufgabe.nummer) {
                <div class="flex items-center gap-1 text-xs">
                  <span>{{ aufgabe.nummer }}. Aufg.</span>
                  <div class="w-12 h-6 border border-slate-800"></div>
                  <span>Punkte</span>
                </div>
              }
            </div>
            <div class="flex items-end gap-6">
              <div>
                <div class="w-10 h-6 border border-slate-800 mb-1"></div>
                <p class="text-[9px] text-slate-700">Prüfungszeit<br>Die entsprechende Ziffer (1, 2 oder 3)</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-semibold text-sm">Gesamtpunktzahl</span>
                <div class="flex border border-slate-800">
                  @for (_ of [].constructor(3); track $index) {
                    <div class="w-7 h-7 border-r border-slate-400 last:border-r-0"></div>
                  }
                </div>
              </div>
              <div class="ml-auto text-right text-xs">
                <div class="border-b border-slate-500 w-48 h-6"></div>
                <p class="text-[10px] mt-1">Prüfungsort, Datum</p>
                <div class="border-b border-slate-500 w-48 h-6 mt-4"></div>
                <p class="text-[10px] mt-1">Unterschrift</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ===== AUFGABENTEIL ===== -->
        <section class="pdf-aufgabenteil px-12 py-8">
          <!-- Ausgangssituation -->
          <div class="pdf-ausgangssituation mb-6 p-4 border border-slate-800">
            <div class="text-sm text-slate-900 leading-relaxed space-y-2" [innerHTML]="sanitize(ihkBogen.belegsatz)"></div>
          </div>

          @for (aufgabe of ihkBogen.aufgaben; track aufgabe.nummer) {
            <div class="pdf-aufgabe mb-10 break-inside-avoid">
              <div class="flex items-baseline justify-between gap-3 mb-2">
                <h2 class="text-base font-bold text-slate-900">
                  {{ aufgabe.nummer }}. Aufgabe ({{ aufgabe.punkte }} Punkte)
                </h2>
              </div>
              <p class="text-xs italic text-slate-600 mb-3">{{ aufgabe.titel }}</p>
              <div class="text-sm text-slate-900 leading-relaxed mb-3 space-y-2" [innerHTML]="sanitize(aufgabe.einleitung)"></div>

              @for (t of aufgabe.teilaufgaben; track t.id) {
                <div class="pdf-teilaufgabe mt-5 break-inside-avoid">
                  <div class="flex items-start justify-between gap-3 mb-2">
                    <div class="text-sm text-slate-900 leading-relaxed flex-1">
                      <span class="font-semibold mr-1">{{ t.id }})</span>
                      <span [innerHTML]="sanitize(t.text)"></span>
                    </div>
                    <span class="text-sm text-slate-800 whitespace-nowrap mt-0.5">{{ t.punkte }} Punkte</span>
                  </div>
                  @if (t.anlage) {
                    <p class="text-xs text-slate-500 italic ml-5 mt-1">{{ t.anlage }}</p>
                  }
                  <div class="antwort-linien mt-2">
                    @for (_ of antwortZeilen(t); track $index) {
                      <div class="border-b border-slate-400 h-6"></div>
                    }
                  </div>
                </div>
              }
            </div>
          }

          <div class="mt-10 pt-3 border-t border-slate-800 text-[10px] text-slate-600 flex justify-between">
            <span>ZPA FIA {{ ihkBogen.teilNummer === 3 ? 'WiSo' : (ihkBogen.teilNummer === 1 ? 'I' : 'II') }}</span>
            <span>– Ende der Prüfung –</span>
          </div>
        </section>
      </div>
    }

    @if (config && modus() === 'pdf' && !ihkBogen && fragen.length > 0) {
      <div class="no-print mb-4 flex items-center justify-between gap-3 flex-wrap">
        <a routerLink="/" class="text-sm text-slate-600 no-underline">
          <i class="pi pi-arrow-left mr-1"></i>Zurück zum Dashboard
        </a>
        <p-button label="Drucken / Als PDF speichern" icon="pi pi-print" (click)="drucken()" />
      </div>

      @if (config.kategorie === 'wiso') {
        <!-- ===== IHK WiSo-Bogen (dynamisch, variiert jedes Mal) ===== -->
        <div class="pdf-bogen bg-white shadow-sm border border-slate-200 mx-auto">

          <!-- DECKBLATT -->
          <section class="pdf-deckblatt px-12 pt-10 pb-8 page-break-after">
            <div class="flex justify-between items-start mb-4">
              <div class="flex-1">
                <p class="text-xs font-semibold text-slate-800 mb-1">Diese Kopfleiste bitte unbedingt ausfüllen!</p>
                <p class="text-[10px] text-slate-600 mb-1">Familienname, Vorname (bitte durch eine Leerspalte trennen)</p>
                <div class="border border-slate-800 mb-3" style="display: grid; grid-template-columns: repeat(24, 1fr);">
                  @for (_ of [].constructor(24); track $index) {
                    <div class="border-r border-slate-400 h-6 last:border-r-0"></div>
                  }
                </div>
                <div class="flex gap-3 items-end">
                  <div>
                    <p class="text-[9px] text-slate-600">Bereich</p>
                    <div class="flex border border-slate-800">
                      <div class="w-6 h-6 border-r border-slate-400 bg-blue-50 flex items-center justify-center text-xs font-bold">6</div>
                      <div class="w-6 h-6 bg-blue-50 flex items-center justify-center text-xs font-bold">6</div>
                    </div>
                  </div>
                  <div>
                    <p class="text-[9px] text-slate-600">Berufsnummer</p>
                    <div class="flex border border-slate-800">
                      <div class="w-6 h-6 border-r border-slate-400 bg-blue-50 flex items-center justify-center text-xs font-bold">1</div>
                      <div class="w-6 h-6 border-r border-slate-400 bg-blue-50 flex items-center justify-center text-xs font-bold">2</div>
                      <div class="w-6 h-6 border-r border-slate-400 bg-blue-50 flex items-center justify-center text-xs font-bold">0</div>
                      <div class="w-6 h-6 bg-blue-50 flex items-center justify-center text-xs font-bold">1</div>
                    </div>
                  </div>
                  <div>
                    <p class="text-[9px] text-slate-600">IHK-Nummer</p>
                    <div class="flex border border-slate-800">
                      @for (_ of [].constructor(3); track $index) {
                        <div class="w-6 h-6 border-r border-slate-400 last:border-r-0"></div>
                      }
                    </div>
                  </div>
                  <div>
                    <p class="text-[9px] text-slate-600">Prüflingsnummer</p>
                    <div class="flex border border-slate-800">
                      @for (_ of [].constructor(5); track $index) {
                        <div class="w-6 h-6 border-r border-slate-400 last:border-r-0"></div>
                      }
                    </div>
                  </div>
                  <div class="ml-2 text-sm font-semibold text-slate-800">Termin: {{ heute }}</div>
                </div>
              </div>
              <div class="ml-6 w-20 h-20 bg-slate-900 text-white flex items-center justify-center font-bold text-xl tracking-wider">IHK</div>
            </div>

            <div class="border-t-2 border-slate-800 pt-4 mt-2">
              <h1 class="text-3xl font-bold text-slate-900">Abschlussprüfung Simulation {{ heute }}</h1>
              <p class="text-lg text-slate-800 mt-1">1201</p>
            </div>

            <div class="flex items-start gap-6 mt-8">
              <div class="w-20 h-28 bg-slate-900 text-white flex items-center justify-center text-6xl font-bold">3</div>
              <div class="flex-1 pt-2">
                <h2 class="text-xl font-bold text-slate-900 leading-tight">Wirtschafts- und Sozialkunde</h2>
              </div>
              <div class="text-right pt-2">
                <p class="text-base text-slate-900 leading-tight">Fachinformatiker</p>
                <p class="text-base text-slate-900 leading-tight">Fachinformatikerin</p>
                <p class="text-base text-slate-900 leading-tight italic">Anwendungsentwicklung</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-8 mt-10">
              <div>
                <h3 class="font-bold text-slate-900 text-base mb-3">Teil 3 der Abschlussprüfung</h3>
                <ul class="text-sm text-slate-900 space-y-1 ml-4" style="list-style-type: none;">
                  <li>{{ fragen.length }} Aufgaben</li>
                  <li>{{ config.zeitlimitMinuten }} Minuten Prüfungszeit</li>
                  <li>100 Punkte</li>
                </ul>
              </div>
              <div>
                <h3 class="font-bold text-slate-900 text-base mb-2">Bearbeitungshinweise</h3>
                <ol class="text-[10px] text-slate-800 space-y-1 pl-4 leading-snug" style="list-style-type: decimal;">
                  <li>Überprüfen Sie die <strong>Vollständigkeit</strong> dieses Aufgabensatzes.</li>
                  <li>Füllen Sie zuerst die <strong>Kopfzeile</strong> aus.</li>
                  <li>Lesen Sie die Aufgaben vollständig, bevor Sie beginnen.</li>
                  <li>Tragen Sie bei Einfachauswahl-Aufgaben genau <strong>eine Ziffer</strong> ein.</li>
                  <li>Bei Mehrfachauswahl: tragen Sie genau die <strong>geforderte Anzahl</strong> Ziffern ein.</li>
                  <li>Zur Lösung von Rechenaufgaben darf ein nicht programmierter <strong>Taschenrechner</strong> verwendet werden.</li>
                  <li>Schreiben Sie deutlich und gut lesbar – unleserliche Antworten werden als <strong>falsch</strong> gewertet.</li>
                </ol>
              </div>
            </div>

            <div class="mt-10 border-t border-slate-800 pt-4">
              <p class="font-bold text-sm text-slate-900 mb-3">Wird vom Korrektor ausgefüllt!</p>
              <div class="flex items-center gap-4">
                <span class="font-semibold text-sm">Gesamtpunktzahl</span>
                <div class="flex border border-slate-800">
                  @for (_ of [].constructor(3); track $index) {
                    <div class="w-7 h-7 border-r border-slate-400 last:border-r-0"></div>
                  }
                </div>
                <div class="ml-auto text-right text-xs">
                  <div class="border-b border-slate-500 w-48 h-6"></div>
                  <p class="text-[10px] mt-1">Prüfungsort, Datum</p>
                  <div class="border-b border-slate-500 w-48 h-6 mt-4"></div>
                  <p class="text-[10px] mt-1">Unterschrift</p>
                </div>
              </div>
            </div>
          </section>

          <!-- AUFGABENTEIL -->
          <section class="pdf-aufgabenteil px-12 py-8">
            <!-- Ausgangssituation -->
            <div class="pdf-ausgangssituation mb-6 p-4 border border-slate-800">
              <div class="text-sm text-slate-900 leading-relaxed" [innerHTML]="sanitize(wisoAusgangssituation)"></div>
            </div>

            @for (frage of fragen; track $index) {
              <div class="pdf-aufgabe mb-5 break-inside-avoid">

                @if (frage.uebung.typ === 'multiple-choice') {
                  <!-- Aufgabennummer + Thema -->
                  <div class="flex items-baseline gap-2 mb-1">
                    <span class="font-bold text-slate-900 text-sm">Aufgabe {{ $index + 1 }}</span>
                    <span class="text-[10px] text-slate-500">({{ frage.themaName }})</span>
                  </div>
                  <!-- Fragetext -->
                  <div class="text-sm text-slate-900 leading-snug mb-2 ml-1"
                       [innerHTML]="sanitize(asMultipleChoice(frage.uebung).frage)"></div>
                  <!-- Optionen mit Kästchen -->
                  @for (opt of asMultipleChoice(frage.uebung).optionen; track $index) {
                    <div class="flex items-start gap-2 mb-1 ml-1">
                      <span class="text-sm text-slate-700 font-semibold min-w-4 shrink-0">{{ $index + 1 }}</span>
                      <div class="w-4 h-4 border border-slate-700 shrink-0 mt-0.5"></div>
                      <span class="text-sm text-slate-900 leading-snug" [innerHTML]="sanitize(opt)"></span>
                    </div>
                  }
                  <!-- Antwortfeld -->
                  <div class="mt-2 flex items-center gap-2 ml-1">
                    <span class="text-xs text-slate-600 font-semibold">Antwort (Ziffer eintragen):</span>
                    <div class="w-8 h-6 border border-slate-800"></div>
                  </div>
                  <div class="mt-3 border-b border-slate-200"></div>
                }

                @if (frage.uebung.typ === 'zuordnung') {
                  <div class="flex items-baseline gap-2 mb-1">
                    <span class="font-bold text-slate-900 text-sm">Aufgabe {{ $index + 1 }}</span>
                    <span class="text-[10px] text-slate-500">({{ frage.themaName }})</span>
                  </div>
                  <div class="text-sm text-slate-900 leading-snug mb-3 ml-1"
                       [innerHTML]="sanitize(asZuordnung(frage.uebung).frage)"></div>
                  <div class="grid grid-cols-2 gap-4 ml-1 text-sm">
                    <div>
                      <p class="font-semibold text-xs text-slate-700 mb-1 uppercase tracking-wide">Begriffe</p>
                      @for (p of asZuordnung(frage.uebung).paare; track $index) {
                        <div class="flex items-start gap-2 mb-1">
                          <span class="font-semibold min-w-4">{{ $index + 1 }}.</span>
                          <span class="text-slate-900">{{ p.begriff }}</span>
                        </div>
                      }
                    </div>
                    <div>
                      <p class="font-semibold text-xs text-slate-700 mb-1 uppercase tracking-wide">Definitionen</p>
                      @for (d of wisoMischePaare(asZuordnung(frage.uebung), $index); track $index) {
                        <div class="flex items-start gap-2 mb-1">
                          <span class="font-semibold min-w-4">{{ 'ABCDEFGHIJ'[$index] }}.</span>
                          <span class="text-slate-900">{{ d.definition }}</span>
                        </div>
                      }
                    </div>
                  </div>
                  <div class="mt-2 flex items-center gap-2 ml-1 flex-wrap">
                    <span class="text-xs text-slate-600 font-semibold">Zuordnung (z. B. 1–A):</span>
                    @for (p of asZuordnung(frage.uebung).paare; track $index) {
                      <div class="flex items-center gap-1">
                        <span class="text-xs font-semibold">{{ $index + 1 }}–</span>
                        <div class="w-6 h-6 border border-slate-800"></div>
                      </div>
                    }
                  </div>
                  <div class="mt-3 border-b border-slate-200"></div>
                }

                @if (frage.uebung.typ === 'freitext') {
                  <div class="flex items-baseline gap-2 mb-1">
                    <span class="font-bold text-slate-900 text-sm">Aufgabe {{ $index + 1 }}</span>
                    <span class="text-[10px] text-slate-500">({{ frage.themaName }} · Rechenaufgabe)</span>
                  </div>
                  <div class="text-sm text-slate-900 leading-snug mb-3 ml-1"
                       [innerHTML]="sanitize(asFreitext(frage.uebung).frage)"></div>
                  <div class="ml-1 space-y-3">
                    @for (_ of [].constructor(5); track $index) {
                      <div class="border-b border-slate-400 h-5"></div>
                    }
                  </div>
                  <div class="mt-3 flex items-center gap-2 ml-1">
                    <span class="text-xs text-slate-600 font-semibold">Ergebnis:</span>
                    <div class="border-b border-slate-800 w-40 h-6"></div>
                  </div>
                  <div class="mt-3 border-b border-slate-200"></div>
                }

              </div>
            }

            <div class="mt-10 pt-3 border-t border-slate-800 text-[10px] text-slate-600 flex justify-between">
              <span>ZPA FIA WiSo – Simulation</span>
              <span>– Ende der Prüfung –</span>
            </div>
          </section>
        </div>

      } @else {
        <!-- Einfacher Fallback für andere Prüfungstypen (z. B. Schnelltest) -->
        <div class="pdf-bogen bg-white shadow-sm border border-slate-200 mx-auto p-10">
          <div class="pdf-header border-b-2 border-slate-800 pb-4 mb-6">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h1 class="text-2xl font-bold text-slate-900">{{ config.name }}</h1>
              </div>
              <div class="text-right text-xs text-slate-600">
                <p>Datum: {{ heute }}</p>
                <p>Bearbeitungszeit: {{ config.zeitlimitMinuten }} Minuten</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-6 mt-4 text-xs">
              <div>
                <span class="text-slate-600">Name, Vorname:</span>
                <div class="border-b border-slate-400 h-6 mt-1"></div>
              </div>
              <div>
                <span class="text-slate-600">Prüflings-Nr.:</span>
                <div class="border-b border-slate-400 h-6 mt-1"></div>
              </div>
            </div>
          </div>

          @for (frage of fragen; track $index) {
            <div class="pdf-aufgabe mb-6 pb-4 border-b border-slate-200 break-inside-avoid">
              <span class="font-bold text-slate-800">Aufgabe {{ $index + 1 }}.</span>
              @switch (frage.uebung.typ) {
                @case ('multiple-choice') {
                  <div class="text-sm text-slate-900 mb-2 mt-1" [innerHTML]="sanitize(asMultipleChoice(frage.uebung).frage)"></div>
                  <ol class="text-sm text-slate-900 mt-2 space-y-1" style="list-style-type: upper-alpha; padding-left: 1.5rem;">
                    @for (opt of asMultipleChoice(frage.uebung).optionen; track $index) {
                      <li [innerHTML]="sanitize(opt)"></li>
                    }
                  </ol>
                  <div class="mt-3 text-xs text-slate-600">Antwort: <span class="inline-block border-b border-slate-500 w-20 ml-1"></span></div>
                }
                @case ('zuordnung') {
                  <div class="text-sm text-slate-900 mb-2 mt-1" [innerHTML]="sanitize(asZuordnung(frage.uebung).frage)"></div>
                  <div class="grid grid-cols-2 gap-4 mt-3 text-sm">
                    <div>
                      <p class="font-semibold text-xs text-slate-600 mb-1">Begriffe</p>
                      <ol class="space-y-1" style="list-style-type: decimal; padding-left: 1.25rem;">
                        @for (p of asZuordnung(frage.uebung).paare; track $index) { <li>{{ p.begriff }}</li> }
                      </ol>
                    </div>
                    <div>
                      <p class="font-semibold text-xs text-slate-600 mb-1">Definitionen</p>
                      <ol class="space-y-1" style="list-style-type: upper-alpha; padding-left: 1.25rem;">
                        @for (d of mischePaare(asZuordnung(frage.uebung).paare); track $index) { <li>{{ d.definition }}</li> }
                      </ol>
                    </div>
                  </div>
                  <div class="mt-3 text-xs text-slate-600">Zuordnung (z.B. 1–C): <span class="inline-block border-b border-slate-500 w-40 ml-1"></span></div>
                }
                @case ('freitext') {
                  <div class="text-sm text-slate-900 mb-2 mt-1" [innerHTML]="sanitize(asFreitext(frage.uebung).frage)"></div>
                  <div class="mt-3 space-y-4">
                    @for (_ of [].constructor(4); track $index) { <div class="border-b border-slate-400 h-5"></div> }
                  </div>
                }
              }
            </div>
          }
          <div class="mt-8 pt-4 border-t border-slate-300 text-xs text-slate-500 text-center">– Ende der Prüfung –</div>
        </div>
      }
    }

    @if (config && modus() === 'web' && fragen.length > 0) {
      <!-- Header -->
      <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-6">
        <div class="flex items-center justify-between mb-3 gap-3">
          <div class="flex items-center gap-3 min-w-0">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                 [style.background-color]="config.farbe + '20'">
              <i [class]="config.icon" [style.color]="config.farbe"></i>
            </div>
            <div class="min-w-0">
              <h1 class="text-lg font-bold text-slate-800 truncate">{{ config.name }}</h1>
              <p class="text-xs text-slate-500">
                Frage {{ aktuelleFrageIndex + 1 }} von {{ fragen.length }}
                · {{ beantworteteAnzahl }} beantwortet
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-xl font-mono font-bold text-xl"
               [class]="timerKritisch() ? 'bg-red-50 border border-red-200 text-red-700' : 'bg-slate-100 text-slate-700'">
            <i class="pi pi-clock text-base"
               [class]="timerKritisch() ? 'text-red-500' : 'text-slate-400'"></i>
            {{ timerFormatiert() }}
          </div>
        </div>
        <p-progressBar
          [value]="(aktuelleFrageIndex / fragen.length) * 100"
          [showValue]="false"
          styleClass="h-2" />
        @if (timerKritisch()) {
          <p class="text-xs text-red-600 mt-2 font-medium">
            <i class="pi pi-exclamation-triangle mr-1"></i>Weniger als 5 Minuten verbleibend!
          </p>
        }
      </div>

      <!-- Belegsatz -->
      <div class="flex items-center flex-wrap gap-2 mb-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-violet-100 text-violet-800">
          <i class="pi pi-tag text-xs"></i>
          {{ aktuelleFrage.bereichName }} · {{ aktuelleFrage.themaName }}
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
              [class]="getTypBadgeClass(aktuelleUebung.typ)">
          {{ getTypLabel(aktuelleUebung.typ) }}
        </span>
        @if (istAktuelleVollstaendig) {
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
            <i class="pi pi-check text-xs"></i>Beantwortet
          </span>
        } @else {
          <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
            <i class="pi pi-circle text-xs"></i>Offen
          </span>
        }
      </div>

      <!-- Frage -->
      @if (quizSichtbar) {
        <div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
          @switch (aktuelleUebung.typ) {
            @case ('multiple-choice') {
              <app-quiz-multiple-choice
                [uebung]="asMultipleChoice(aktuelleUebung)"
                [examModus]="true"
                [vorherigeAntwort]="vorherigeAntwort"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
            @case ('wahr-falsch') {
              <app-quiz-wahr-falsch
                [uebung]="asWahrFalsch(aktuelleUebung)"
                [examModus]="true"
                [vorherigeAntwort]="vorherigeAntwort"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
            @case ('lueckentext') {
              <app-quiz-lueckentext
                [uebung]="asLueckentext(aktuelleUebung)"
                [examModus]="true"
                [vorherigeAntwort]="vorherigeAntwort"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
            @case ('zuordnung') {
              <app-quiz-zuordnung
                [uebung]="asZuordnung(aktuelleUebung)"
                [examModus]="true"
                [vorherigeAntwort]="vorherigeAntwort"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
            @case ('freitext') {
              <app-quiz-freitext
                [uebung]="asFreitext(aktuelleUebung)"
                [examModus]="true"
                [vorherigeAntwort]="vorherigeAntwort"
                (examAntwortEvent)="onExamAntwort($event)" />
            }
          }
        </div>
      }

      <!-- Navigation -->
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <p-button label="Zurück" icon="pi pi-arrow-left"
                  severity="secondary" [outlined]="true"
                  [disabled]="aktuelleFrageIndex === 0"
                  (click)="vorherigeFrage()" />

        <p class="text-xs text-slate-500 text-center flex-1 px-3 min-w-0">
          <i class="pi pi-info-circle mr-1"></i>
          Auswertung und Lösungen erscheinen nach Abgabe.
        </p>

        @if (aktuelleFrageIndex < fragen.length - 1) {
          <p-button label="Nächste Frage" icon="pi pi-arrow-right" iconPos="right"
                    (click)="naechsteFrage()" />
        } @else {
          <p-button label="Prüfung abgeben" icon="pi pi-flag-fill" severity="success"
                    (click)="pruefungAbgeben()" />
        }
      </div>

      <!-- Abbruch-Link dezent am Ende -->
      <div class="mt-8 text-center">
        <a routerLink="/" class="text-xs text-slate-400 hover:text-slate-600 no-underline">
          <i class="pi pi-times mr-1"></i>Prüfung abbrechen (Fortschritt wird nicht gespeichert)
        </a>
      </div>
    }

    @if (!config) {
      <div class="text-center mt-20">
        <p class="text-slate-500">Prüfungskonfiguration nicht gefunden.</p>
        <a routerLink="/" class="text-blue-600 no-underline mt-3 block">Zurück zum Dashboard</a>
      </div>
    }
  `
})
export class PruefungComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private sanitizer = inject(DomSanitizer);

  config?: PruefungsConfig;
  fragen: PruefungsFrage[] = [];
  aktuelleFrageIndex = 0;
  antwortDetails: (ExamAntwortDetail | null)[] = [];
  quizSichtbar = true;
  modus = signal<'auswahl' | 'web' | 'pdf'>('auswahl');
  heute = new Date().toLocaleDateString('de-DE');
  ihkBogen?: IhkPruefungsBogen;
  wisoAusgangssituation = '';

  // Gecachte gemischte Paare pro Zuordnungs-Aufgabe (Index → gemischte Definitionen)
  private zuordnungCache = new Map<number, { begriff: string; definition: string }[]>();

  antwortZeilen(t: { punkte: number; antwortZeilen?: number }): number[] {
    const n = t.antwortZeilen ?? Math.max(4, Math.min(14, Math.round(t.punkte * 1.5)));
    return Array.from({ length: n }, (_, i) => i);
  }

  countdown = signal(0);
  private timerInterval?: ReturnType<typeof setInterval>;

  timerFormatiert = computed(() => {
    const c = this.countdown();
    const min = Math.floor(c / 60);
    const sek = c % 60;
    return `${String(min).padStart(2, '0')}:${String(sek).padStart(2, '0')}`;
  });

  timerKritisch = computed(() => {
    const c = this.countdown();
    return c > 0 && c < 300;
  });

  get aktuelleFrage(): PruefungsFrage {
    return this.fragen[this.aktuelleFrageIndex];
  }

  get aktuelleUebung(): Uebung {
    return this.fragen[this.aktuelleFrageIndex].uebung;
  }

  get vorherigeAntwort(): ExamAntwortDetail | undefined {
    return this.antwortDetails[this.aktuelleFrageIndex] ?? undefined;
  }

  get istAktuelleVollstaendig(): boolean {
    return this.istVollstaendig(this.aktuelleFrageIndex);
  }

  get beantworteteAnzahl(): number {
    let n = 0;
    for (let i = 0; i < this.fragen.length; i++) {
      if (this.istVollstaendig(i)) n++;
    }
    return n;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.config = PRUEFUNGS_CONFIGS.find(c => c.id === id);
    if (!this.config) { this.router.navigate(['/']); return; }

    this.ihkBogen = findIhkBogen(this.config.id);
    this.fragen = buildPruefungsFragen(this.config);
    if (this.config.kategorie === 'wiso') {
      this.wisoAusgangssituation = this.zufaelligeWisoAusgangssituation();
    }
    if (this.fragen.length === 0) { this.router.navigate(['/']); return; }

    this.antwortDetails = new Array(this.fragen.length).fill(null);
    this.countdown.set(this.config.zeitlimitMinuten * 60);
  }

  modusWaehlen(m: 'web' | 'pdf'): void {
    this.modus.set(m);
    if (m === 'web') {
      this.timerInterval = setInterval(() => {
        const c = this.countdown();
        if (c > 0) {
          this.countdown.set(c - 1);
        } else {
          this.pruefungAbgeben();
        }
      }, 1000);
    }
  }

  drucken(): void {
    window.print();
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  mischePaare(paare: { begriff: string; definition: string }[]): { begriff: string; definition: string }[] {
    const copy = [...paare];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  onExamAntwort(detail: ExamAntwortDetail): void {
    this.antwortDetails[this.aktuelleFrageIndex] = detail;
  }

  istVollstaendig(index: number): boolean {
    const detail = this.antwortDetails[index];
    if (!detail) return false;
    switch (detail.typ) {
      case 'multiple-choice': return !!detail.mcGewaehlterText;
      case 'wahr-falsch': return detail.wfGewaehlterWert !== undefined;
      case 'lueckentext': return !!detail.lueckentextEingabe?.trim();
      case 'zuordnung': {
        const z = this.fragen[index].uebung as ZuordnungUebung;
        return (detail.zuordnungen?.length ?? 0) === z.paare.length;
      }
      case 'freitext': return !!detail.freitextEingabe?.trim();
    }
    return false;
  }

  naechsteFrage(): void {
    if (this.aktuelleFrageIndex >= this.fragen.length - 1) return;
    this.remountQuiz(() => { this.aktuelleFrageIndex++; });
  }

  vorherigeFrage(): void {
    if (this.aktuelleFrageIndex <= 0) return;
    this.remountQuiz(() => { this.aktuelleFrageIndex--; });
  }

  private remountQuiz(apply: () => void): void {
    this.quizSichtbar = false;
    this.cdr.detectChanges();
    apply();
    this.quizSichtbar = true;
  }

  pruefungAbgeben(): void {
    clearInterval(this.timerInterval);
    const richtig = this.fragen.map((_, i) => this.berechneRichtig(i));
    const zeitGebraucht = (this.config?.zeitlimitMinuten ?? 0) * 60 - this.countdown();
    const state: PruefungsErgebnisState = {
      configName: this.config!.name,
      fragen: this.fragen,
      antwortDetails: this.antwortDetails,
      richtig,
      zeitGebrauchtSek: zeitGebraucht,
      zeitlimitSek: this.config!.zeitlimitMinuten * 60
    };
    this.router.navigate(['/pruefung-ergebnis'], { state });
  }

  private berechneRichtig(index: number): boolean {
    const detail = this.antwortDetails[index];
    if (!detail) return false;
    const uebung = this.fragen[index].uebung;
    switch (detail.typ) {
      case 'multiple-choice': {
        const mc = uebung as MultipleChoiceUebung;
        return detail.mcGewaehlterText === mc.optionen[mc.korrekteAntwort];
      }
      case 'wahr-falsch': {
        const wf = uebung as WahrFalschUebung;
        return detail.wfGewaehlterWert === wf.korrekt;
      }
      case 'lueckentext': {
        const lt = uebung as LueckentextUebung;
        return (detail.lueckentextEingabe ?? '').trim().toLowerCase() === lt.antwort.toLowerCase();
      }
      case 'zuordnung': {
        const zu = uebung as ZuordnungUebung;
        const map = new Map(zu.paare.map(p => [p.begriff, p.definition]));
        const user = detail.zuordnungen ?? [];
        if (user.length !== zu.paare.length) return false;
        return user.every(z => map.get(z.begriff) === z.definition);
      }
      case 'freitext':
        return false;
    }
    return false;
  }

  private zufaelligeWisoAusgangssituation(): string {
    const firmen = [
      { name: 'Infotec GmbH', ort: 'Dortmund', n: '120', branche: 'Softwareentwicklung und IT-Beratung' },
      { name: 'Gramberg IT GmbH', ort: 'Bremen', n: '85', branche: 'IT-Dienstleistungen für Industrie und Handwerk' },
      { name: 'GreenByte Solutions GmbH', ort: 'Münster', n: '200', branche: 'nachhaltige IT-Lösungen und Cloud-Services' },
      { name: 'Sachs-IT GmbH', ort: 'Bochum', n: '145', branche: 'IT-Systemintegration und Softwareentwicklung' },
      { name: 'MarSi-IT GmbH', ort: 'Duisburg', n: '60', branche: 'Webentwicklung und digitale Transformation' },
      { name: 'EcoTec GmbH', ort: 'Essen', n: '175', branche: 'IT-Infrastruktur und grüne Technologien' },
      { name: 'DataVision GmbH', ort: 'Hannover', n: '110', branche: 'Datenbankentwicklung und Business Intelligence' },
      { name: 'NetWork Solutions AG', ort: 'Bielefeld', n: '230', branche: 'Netzwerkinfrastruktur und IT-Sicherheit' },
    ];
    const f = firmen[Math.floor(Math.random() * firmen.length)];
    return `<p>Die <strong>${f.name}</strong> mit Sitz in ${f.ort} beschäftigt ca. ${f.n} Mitarbeitende und ist im Bereich ${f.branche} tätig. Sie befinden sich im dritten Ausbildungsjahr als Fachinformatiker/-in für Anwendungsentwicklung und sind dem Unternehmen zugeteilt. Im Folgenden werden Ihnen verschiedene Sachverhalte aus dem beruflichen und wirtschaftlichen Alltag vorgelegt.</p>`;
  }

  // Gemischte Zuordnungs-Definitionen – pro Aufgabe gecacht, damit sie beim
  // erneuten Rendern nicht neu gemischt werden (würde Reihenfolge ändern).
  wisoMischePaare(uebung: ZuordnungUebung, index: number): { begriff: string; definition: string }[] {
    if (!this.zuordnungCache.has(index)) {
      const copy = [...uebung.paare];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      this.zuordnungCache.set(index, copy);
    }
    return this.zuordnungCache.get(index)!;
  }

  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
  }

  asMultipleChoice(u: Uebung): MultipleChoiceUebung { return u as MultipleChoiceUebung; }
  asWahrFalsch(u: Uebung): WahrFalschUebung { return u as WahrFalschUebung; }
  asLueckentext(u: Uebung): LueckentextUebung { return u as LueckentextUebung; }
  asZuordnung(u: Uebung): ZuordnungUebung { return u as ZuordnungUebung; }
  asFreitext(u: Uebung): FreitextUebung { return u as FreitextUebung; }

  getTypLabel(typ: string): string {
    const labels: Record<string, string> = {
      'multiple-choice': 'Multiple Choice',
      'wahr-falsch': 'Wahr oder Falsch',
      'lueckentext': 'Lückentext',
      'zuordnung': 'Zuordnung',
      'freitext': 'Freitext'
    };
    return labels[typ] ?? typ;
  }

  getTypBadgeClass(typ: string): string {
    const classes: Record<string, string> = {
      'multiple-choice': 'bg-blue-100 text-blue-800',
      'wahr-falsch': 'bg-purple-100 text-purple-800',
      'lueckentext': 'bg-amber-100 text-amber-800',
      'zuordnung': 'bg-green-100 text-green-800',
      'freitext': 'bg-cyan-100 text-cyan-800'
    };
    return classes[typ] ?? 'bg-slate-100 text-slate-800';
  }
}
