---
title: Mapping-Tabellen erfassen
slug: mapping
weight: 60
type: docs
translationKey: mapping
keywords: [I14Y, Interoperabilitätsplattform I14Y, Konzepte, Codeliste, Codelisten, Mapping, Zuordnung, Zuordnungstabelle, SSSOM]
---

Mapping-Tabellen ermöglichen es, die Beziehungen zwischen zwei Codelisten nachvollziehbar und maschinenlesbar zu dokumentieren. Für jeden relevanten Wert der Quell-Codeliste wird festgehalten, welchem Wert oder welchen Werten der Ziel-Codeliste er entspricht. Zur Beschreibung der Beziehungstypen nutzt I14Y das Mapping-Vokabular aus SKOS. Die Mapping-Tabelle ist auf I14Y ein eigenständiges Katalogobjekt mit eigenen beschreibenden Metadaten.

Um eine Zuordnungstabelle zu erfassen, wählen Sie sich im [Input-Bereich](https://input.i14y.admin.ch) ein. Klicken Sie auf die Kachel **Katalog pflegen**. Wählen Sie nun oben rechts **Erstellen** aus und klicken Sie auf "Neue Mapping-Tabelle". 

Im nun eingeblendeten Formular füllen Sie die Pflichtfelder **Name**, **Beschreibung**, **Identifikator**, **Version**, **Herausgeber**. Das Feld **Identifikator** speichert die Kennung der Mapping-Tabelle. Bei Bedarf können mehrere Identifikatoren erfasst werden, die das System als geordnete Liste (Array) speichert. Der erste Identifikator (Hauptidentifikator) hat eine besondere Stabilität: Nach der Publikation kann dieser nicht mehr geändert werden. Ist noch kein Identifikator manuell gesetzt worden, bevor der Publikationskanal von "Intern" auf "Öffentlich" umgestellt wird, erzeugt das System den Hauptidentifikator automatisch aus dem Titel (Slugification). Tragen Sie eine **Ansprechperson** und **Vertretung Ansprechperson** ein; die betreffenden Personen müssen sich zuvor zumindest einmal auf I14Y eingeloggt haben. Erfassen Sie im Abschnitt "Codesysteme" die **URI des Quellcodesystems** und die **URI des Zielcodesystems**. Ergänzen Sie nach Bedarf weitere Metadaten wie den Gültigkeitszeitraum, die Themen und Schlüsselwörter. Speichern Sie nun den Grundeintrag. 

Öffnen Sie den Eintrag erneut. Nun können Sie die einzelnen Zuordnungen erfassen. Geben Sie den **Ursprungscode** sowie den **Zielcode** (URI) ein. Wählen Sie anschliessend den passenden **Beziehungstyp** aus dem Dropdown-Menü aus. Zur Auswahl stehen die unten aufgeführten Ausprägungen. Die Codeliste, die im Dropdown verwendet wird, ist auch als Konzept auf I14Y verfügbar (siehe [Mapping-Prädikat-Vokabular](https://register.ld.admin.ch/i14y/concept/VOCAB_I14Y_MAPPING_PREDICATE/version/1.0.0)). Wiederholen Sie diese Schritte für alle zu erfassenden Codewerte. Speichern Sie danach den Eintrag.

| Beziehungstyp | Name | Bedeutung |
|---|---|---|
| `skos:exactMatch` | exakte Übereinstimmung | Die beiden Codes sind bedeutungsgleich und können im gegebenen Kontext in der Regel ohne Informationsverlust gegenseitig ersetzt werden. In der Praxis entspricht dies meist einer 1:1-Zuordnung. |
| `skos:closeMatch` | nahe Übereinstimmung | Die Codes sind sehr ähnlich, aber nicht vollständig identisch. Eine Zuordnung ist oft sinnvoll, kann jedoch je nach Anwendungsfall zu kleinen Bedeutungsverschiebungen führen (z. B. leicht andere Abgrenzung, Detailtiefe oder Verwendung). |
| `skos:broadMatch` | breite Übereinstimmung | Der Ziel-Code ist allgemeiner (breiter gefasst) als der Quell-Code. Der Quell-Code ist also spezifischer und passt als Unterfall in den Ziel-Code; dabei gehen beim Mapping in Richtung Ziel häufig Details verloren. |
| `skos:narrowMatch` | eingeschränkte Übereinstimmung | Der Ziel-Code ist spezifischer (enger gefasst) als der Quell-Code. Der Quell-Code ist also allgemeiner und kann mehrere mögliche Ziel-Codes umfassen; häufig ist zusätzliche Information nötig, um den passenden Ziel-Code eindeutig zu bestimmen. |
| `skos:relatedMatch` | verwandte Übereinstimmung | Die Codes sind inhaltlich verwandt, stehen aber nicht in einer Hierarchie und sind keine (nahezu) gleichen Bedeutungen. Die Beziehung beschreibt eine sachliche Nähe (z. B. thematisch, funktional oder prozessual), ohne dass eine Ersetzung des Codes empfohlen ist. |

Sobald die Zuordnungstabelle vollständig erfasst und gespeichert ist, kann sie als stabil markiert und auf Wunsch auch öffentlich publiziert werden. Öffnen Sie dazu die Mapping-Tabelle. Wählen Sie den richtigen Status gemäss dem [Workflow](/handbook/de/gouvernanz/arbeitsablauf) aus. Falls Sie die Mapping-Tabelle öffentlich publizieren möchten, schalten Sie unter Publikationskanal auf "Öffentlich" um. Hinweis: Welche Statuswechsel und welcher Publikationskanal Ihnen zur Verfügung stehen, hängt von Ihrer Rolle ab. Falls ein Status oder ein Kanal nicht direkt gewählt werden kann, muss eine Person in der Rolle _Local Data Steward_ den Vorschlag bestätigen.

Die erfassten Mapping-Tabellen können jederzeit exportiert werden. Verfügbar sind sie in zwei Formaten: als Tabelle im CSV-Format oder als JSON-Download. Die untenstehenden Minimalbeispiele zeigen die Struktur in den beiden Formaten. Daten in dieser Form können via den Import-Knopf auch eingelesen werden. Dies erlaubt es grössere Mapping-Tabellen effizient zu erfassen und zu verwalten. Für automatisierte oder halbautomatisierte Workflows können die entsprechenden Endpunkte in der [Partner-API](https://apiconsole.i14y.admin.ch/partner/v1/index.html) genutzt werden.

**CSV:**

```
Source_code_uri,Target_code_uri,Relation_type
"https://eine.uri/wert1","https://eine.zweite.uri/wert3","skos:narrowMatch"
"https://eine.uri/wert2","https://eine.zweite.uri/wert1","skos:exactMatch"
```

**JSON:**

```json
{
  "data": [
    {
      "source": {
        "uri": "https://eine.uri/wert1"
      },
      "target": {
        "uri": "https://eine.zweite.uri/wert3"
      },
      "relationType": {
        "code": "skos:narrowMatch",
        "name": {
          "de": "eingeschränkte Übereinstimmung",
          "en": "narrow match",
          "fr": "correspondance restreinte"
        },
        "uri": "http://www.w3.org/2004/02/skos/core#narrowMatch"
      }
    },
    {
      "source": {
        "uri": "https://eine.uri/wert2"
      },
      "target": {
        "uri": "https://eine.zweite.uri/wert1"
      },
      "relationType": {
        "code": "skos:exactMatch",
        "name": {
          "de": "exakte Übereinstimmung",
          "en": "exact match",
          "fr": "correspondance exacte"
        },
        "uri": "http://www.w3.org/2004/02/skos/core#exactMatch"
      }
    }
  ]
}
```
