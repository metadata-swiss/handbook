---
title: Beispiele für reguläre Ausdrücke
slug: regex
weight: 30
type: docs
translationKey: regex-examples
keywords: [Interoperabilitätsplattform I14Y, I14Y, Glossar, Eingabefelder, Standard, Reguläre Ausdrücke, Regex, Regular Expressions, PCRE]
---

Mit regulären Ausdrücken (_Regular expression_, kurz _Regex_) lassen sich Zeichenketten präzise beschreiben. Wenn solche Ausdrücke auf der Interoperabilitätsplattform I14Y hinterlegt sind, können Daten später anhand dieser Vorgaben geprüft werden. Fehlerhafte Eingaben lassen sich so rasch erkennen und korrigieren. Zudem kann die Datenqualität automatisiert überprüft werden. 

Im Laufe der Jahre wurden verschiedene Regex-Implementierungen entwickelt, die sich teilweise in wichtigen Details unterscheiden. Auf I14Y wird die weit verbreitete Syntax _PCRE (Perl-Compatible Regular Expressions)_ verwendet, die auch in den meisten Programmiersprachen und Tools zum Einsatz kommt.

## Grundlagen der PCRE-Syntax

Die PCRE-Syntax bietet eine Vielzahl von Metazeichen und Operatoren, um Muster präzise zu beschreiben. Die wichtigsten Elemente sind:

| Element | Beschreibung | Beispiel |
| --- | --- | --- |
| `\d` | Eine Ziffer (0-9) | `\d` beinhaltet "2" |
| `\w` | Ein Wortzeichen (typischerweise Buchstabe, Ziffer oder Unterstrich) | `\w+` entspricht "Hallo123" |
| `\s` | Ein Leerzeichen (Space, Tab, Zeilenumbruch) | `\s+` entspricht einem oder mehreren Leerzeichen |
| `.` | Ein beliebiges Zeichen (ausser Zeilenumbruch) | `a.b` entspricht "a3b" oder "axb" |
| `^` | Anfang der Zeichenkette | `^Hallo` entspricht "Hallo" nur am Anfang |
| `$` | Ende der Zeichenkette | `Ende$` entspricht "Ende" nur am Schluss |
| `*` | Null oder mehr Wiederholungen | `a*` entspricht "", "a", "aa", "aaa" |
| `+` | Eine oder mehr Wiederholungen | `a+` entspricht "a", "aa", "aaa" (aber nicht "") |
| `?` | Null oder eine Wiederholung (optional) | `colou?r` entspricht "color" und "colour" |
| `(...)?` | Optionale Gruppe (definierte Zeichenfolge) | `(CHF\s)?\d+` entspricht "CHF 20" und "20" |
| `{n}` | Genau n Wiederholungen | `\d{3}` entspricht genau drei Ziffern |
| `{n,m}` | Zwischen n und m Wiederholungen | `\d{2,4}` entspricht zwei bis vier Ziffern |
| `[...]` | Zeichenklasse (eines der Zeichen) | `[abc]` entspricht "a", "b" oder "c" |
| `[^...]` | Negierte Zeichenklasse (keines der Zeichen) | `[^0-9]` entspricht jedem Zeichen ausser Ziffern |
| `\|` | Oder-Verknüpfung (Alternative) | `ja\|nein` entspricht "ja" oder "nein" |
| `(...)` | Gruppierung | `(ab)+` entspricht "ab", "abab", "ababab" |

## Schritt für Schritt eine eigene Regex erstellen

Um einen regulären Ausdruck für Ihre Daten zu entwickeln, gehen Sie wie folgt vor:

1. **Beispieldaten sammeln:** Notieren Sie 5-10 gültige Beispiele sowie einige ungültige Beispiele, die nicht passen sollten.

2. **Muster erkennen:** Analysieren Sie die Struktur:
   - Welche Zeichen kommen vor? (Zahlen, Buchstaben, Sonderzeichen)
   - Gibt es feste Positionen? (z.B. immer 4 Ziffern am Anfang)
   - Gibt es optionale Teile?
   - Welche Länge hat die Zeichenkette?

3. **Regex schrittweise aufbauen:** Beginnen Sie einfach und erweitern Sie schrittweise:
   - Starten Sie mit den festen Teilen (z.B. `756\.` für AHV-Nummern)
   - Fügen Sie variable Teile hinzu (z.B. `\d{4}` für vier Ziffern)
   - Kombinieren Sie die Teile zum vollständigen Ausdruck

4. **Testen:** Prüfen Sie den Ausdruck mit Ihren Beispielen:
   - Werden alle gültigen Beispiele akzeptiert?
   - Werden alle ungültigen Beispiele abgelehnt?
   - Nutzen Sie Online-Tools wie [regex101.com](https://regex101.com) zum Testen

5. **Verfeinern:** Passen Sie den Ausdruck bei Bedarf an, um Randfälle abzudecken oder zu streng formulierte Regeln zu lockern.

## Beispiele für reguläre Ausdrücke

Nachfolgend werden einige Beispiele für solche Ausdrücke aufgelistet. 

| Ausdruck | Beschreibung | Beispiel |
| --- | --- | --- |
| `\+41\s\d{2}\s\d{3}\s\d{2}\s\d{2}` | Schweizer Telefonnummer | +41 26 262 62 62 |
| `[A-Za-z0-9\-\_\.\+]{1,64}@[A-Za-z0-9\-\_\.]+\.[a-zA-Z]+` | E-Mail-Adresse | i14y@bfs.admin.ch |
| `(0[1-9]\|[12][0-9]\|3[01])\.(0[1-9]\|1[1,2])\.(19\|20)\d{2}` | Datum zwischen dem 01.01.1900 und dem 31.12.2099 | 15.05.2023 |
| `http[s]?:\/\/[\w+\.]?\w+\.\w+` | URL | https://i14y.admin.ch |
| `\-?\d{1,2}\s\°C` | Temperaturangabe zwischen -99 und 99, inklusive der Masseinheit °C. | -12 °C |
| `756\.\d{4}\.\d{4}\.\d{2}` | Schweizer [AHV-Nummer](https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ahv/grundlagen-gesetze/ahv-nummer.html) | 756.1234.5678.97 |
| `CHE\-\d{3}\.\d{3}\.\d{3}` | [Unternehmens-Identifikationsnummer (UID)](https://www.uid.admin.ch) | CHE-123.456.789 |
| `CH\d{2}\s\d{4}\s\d{4}\s\d{4}\s\d{4}\s\d` | Schweizer [IBAN](https://www.six-group.com/de/products-services/banking-services/iban-validation.html) | CH93 0076 2011 6238 5295 7 |
{.regex}
