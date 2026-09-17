---
title: Struktur beschreiben
slug: struktur
weight: 20
type: docs
translationKey: dataset-structure
keywords: [I14Y, Interoperabilitätsplattform I14Y, I14Y, Interoperabilität, Datensatz, Dataset, Erfassen, Erfassung, Inventar, Katalog, Struktur, Datenmodellierung, TTL, Turtle, JSON-LD, RDF]
---

Die Struktur beschreibt den Aufbau eines Datenangebots -- also welche Datenelemente (z.B. Spalten, Felder, Attribute) enthalten sind und in welcher Beziehung diese zueinander stehen. Während der zuvor erstellte Katalogeintrag primär dokumentiert, _dass_ ein Datenangebot existiert, zeigt die Struktur _wie_ es aussieht.

Das Hinterlegen der Struktur ist eine zentrale Voraussetzung für die Datenharmonisierung. Diese ermöglicht es, Datenelemente über mehrere Datenangebote hinweg zu vergleichen und -- wenn gewünscht -- auf gemeinsame Definitionen abzustützen. Ziel ist es, möglichst alle relevanten Strukturen zu erfassen. Sobald diese grundlegende Dokumentation abgeschlossen ist, können Arbeiten zur Datenharmonisierung begonnen werden.

Typische Inhalte einer Struktur umfassen Namen und Beschreibungen der Datenelemente (z.B. "Gemeindenummer", "Gemeindename", "Wohnbevölkerung_total"), Datentypen und Formate (z.B. Zahl, Text, Datum), Referenzen und Beziehungen, optionale Einschränkungen oder Regeln (z.B. Pflichtfelder, Wertebereiche) sowie Verweise auf verwendete Definitionen.

Die Struktur kann auf I14Y nicht direkt erfasst werden. Stattdessen muss sie ausserhalb der Plattform beschrieben werden. Wie Sie dabei vorgehen können, wird unter [Strukturdatei erstellen](#strukturdatei-erstellen) erläutert. Akzeptiert werden Dateien in drei Formaten: TTL (Turtle/SHACL), RDF und JSON-LD. 

Sobald die Strukturdatei bereit liegt, kann sie in I14Y einem Datensatz zuwiesen werden: Öffnen Sie dazu den betreffenden Eintrag im internen Bereich von I14Y. Wechseln Sie ins Register Struktur. Laden Sie anschliessend die Strukturdatei über die Weboberfläche hoch. Strukturen lassen sich auf I14Y teilweise direkt im Browser editieren. Bei kleinen Änderungen (Titel oder Typ eines Attributs) erfolgt die Änderung direkt in der Benutzeroberfläche. Bei größeren Änderungen (Hinzufügen einer Klasse oder eines Attributs) wird die Struktur heruntergeladen, lokal angepasst und dann wieder hochgeladen.  

<details>
<summary><strong>Formate zur Beschreibung von Strukturen</strong></summary>

**Turtle (TTL)** ist eine kompakte, menschenlesbare Serialisierungssprache für RDF-Daten, die vom World Wide Web Consortium (W3C) standardisiert wurde. In Kombination mit SHACL eignet sie sich besonders gut zur Definition von Validierungsregeln und Datenstrukturen. Dank ihrer übersichtlichen Syntax lässt sich Turtle leicht von Hand schreiben und im Code-Editor bearbeiten. Turtle ist daher das empfohlene Format auf I14Y.

**RDF (Resource Description Framework)** ist das vom W3C entwickelte Datenmodell zur Beschreibung von Ressourcen im Web und bildet die Grundlage des semantischen Web. Informationen werden als Tripel (Subjekt -- Prädikat -- Objekt) strukturiert, was RDF besonders gut für Linked-Data-Anwendungen geeignet macht. Die manuelle Bearbeitung ist jedoch weniger intuitiv als bei Turtle.

**JSON-LD** ist ein auf JSON basierendes Format zur Darstellung von Linked Data. Es ermöglicht die Einbettung semantischer Metadaten in bestehende JSON-Strukturen und wird häufig in modernen elektronischen Schnittstellen (APIs) eingesetzt. Entsprechend ist das Format den meisten Entwicklerinnen und Entwicklern vertraut. Gegenüber Turtle ist das JSON-LD jedoch weniger kompakt. Deshalb ist es aufwändiger Daten in diesem Format manuell zu editieren.

</details>

Strukturen auf I14Y bestehen aus drei Hauptobjekten: Klassen, Attributen und Assoziationen. Am Beispiel einer Tabelle zu Gemeinden: Die Klasse entspricht der Tabelle. Bei den einzelnen Spalten der Tabelle (z.B. den Spalten `Gemeindenummer` oder `Gemeindename`) handelt es sich um Attribute. Eine Assoziation hingegen beschreibt die Beziehung zwischen zwei Klassen. So lässt sich etwa zeigen, dass jede `Gemeindenummer` genau einem `Kanton` zugeordnet ist. 

<details>
<summary><strong>Klassen, Attribute und Assoziationen im Detail</strong></summary>

**Klasse:** Eine Klasse beschreibt einen Entitätstyp. In vielen Fällen entspricht sie einer Tabelle. In SHACL wird sie als `sh:NodeShape` definiert. Für den Namen einer Klasse wird `rdfs:label` verwendet; Beschreibungen werden mit `dcterms:description` oder `rdfs:comment` hinterlegt. Zusätzlich können folgende Eigenschaften definiert werden: `sh:property` (Liste der Attribute und Assoziationen), `sh:targetClass` (optionale Validierungszielklasse) und `sh:closed` (definiert, ob nur die angegebenen Eigenschaften erlaubt sind).

**Attribut:** Ein Attribut ist ein einfaches Datenelement (ein Feld oder eine Spalte) ohne Verweis auf eine andere Klasse. Es wird in SHACL als `sh:PropertyShape` modelliert. Wichtige Felder sind: `sh:path` (Pflicht), `sh:datatype`, `sh:name` (menschenlesbarer Name), `sh:description` (ausführliche Beschreibung), Kardinalitäten (`sh:minCount`, `sh:maxCount`), `sh:order` (Reihenfolge der Eigenschaften), Validierungsregeln (`sh:pattern`, `sh:minLength`, `sh:maxLength`, `sh:in` für Enumerationen) sowie `dcterms:conformsTo` (Verweis auf ein I14Y-Konzept). Mit `sh:in` lassen sich Enumerationen definieren, um die zulässigen Werte auf eine vordefinierte Liste zu beschränken.

**Assoziation:** Eine Assoziation ist eine Beziehung zwischen zwei Klassen. Sie wird ebenfalls als `sh:PropertyShape` modelliert, jedoch mit `sh:class` oder `sh:node` als Ziel-Klasse. In I14Y wird `sh:node` gegenüber `sh:class` bevorzugt, da `sh:node` gegen die Struktur (d.h. gegen eine andere `sh:NodeShape`) validiert, während `sh:class` lediglich den RDF-Typ prüft. Beide Varianten werden unterstützt. Wichtige Felder sind: `sh:path` (Pflicht), `sh:node` oder `sh:class`, `sh:name`, `sh:description`, Kardinalitäten (`sh:minCount`, `sh:maxCount`), `sh:order` sowie `dcterms:conformsTo`.

Für Attribute und Assoziationen kann mit `dcterms:conformsTo` angegeben werden, dass sich das Element auf ein I14Y-Konzept abstützt. Daten, die sich auf dieselben grundlegenden Definitionen beziehen, sind (teilweise) harmonisiert.

Eine ausführliche Beschreibung aller Felder für Klassen, Attribute und Assoziationen findet sich im [Anhang](/de/anhang/eingabefelder/eingabefelder_struktur/).

</details>

## Strukturdatei erstellen

Strukturen lassen sich auf drei verschiedene Arten produzieren: Sie können entweder direkt in einem Code-Editor modelliert werden. Alternativ lassen sich die Strukturen, wie sie auf I14Y verwendet werden, aus vorhandenen Schemata ableiten, etwa aus jenem in einer XSD-Datei. Oder die Struktur wird anhand der eigentlichen Daten erstellt.

I14Y stellt in der [Toolbox](https://toolbox.i14y.admin.ch) den **Data Structure Editor** bereit. Dieses Hilfsprogramm unterstützt Sie beim Erstellen oder Extrahieren von Strukturen. Für die Umwandlung von Schemas oder Datendateien steht in der Toolbox zudem das Hilfsprogramm **Convert to SHACL** zur Verfügung; die darin verwendeten Python-Skripte können auf [Github](https://github.com/metadata-swiss/shacl_importer_scripts) bezogen werden. 

Allenfalls können auch externe Werkzeuge hilfreich sein, wenn SHACL-Strukturen erstellt und geprüft werden müssen. Einige dieser externen Hilfsprogramme sind nachfolgend aufgelistet. 

| Werkzeug | Beschreibung |
|---|---|
| [SHACL Play!](https://shacl-play.sparna.fr/play) | Validierung, UML-Visualisierung, HTML-Dokumentation, SHACL aus RDF generieren, JSON Schema / JSON-LD exportieren |
| [SKOS Play!](https://skos-play.sparna.fr/play/convert) | Konvertierung von Excel-Vorlagen in RDF (unterstützt SKOS, SHACL, RDF) |
| [SHACL Playground](https://shacl.org/playground/) | Online-Editor und Validator |
| [SHACL Online Editor](https://www.ida.liu.se/~robke04/SHACLTutorial/) | Online-Editor mit Tutorial |
| [SHACL Validator (EU)](https://www.itb.ec.europa.eu/shacl/any/upload) | SHACL-Validierung |
| [XSD2SHACL](https://github.com/dtai-kg/XSD2SHACL) | Generiert SHACL-Shapes aus XML Schema (XSD) |
| [W3C RDF Validator](https://www.w3.org/RDF/Validator/) | Syntaxvalidierung von RDF/Turtle-Dateien |

### Hinweise zur Erstellung von SHACL-Strukturen

### Turtle-Beispiel

Das folgende Beispiel zeigt eine einfache SHACL-Struktur in Turtle-Notation mit zwei Klassen, drei Attributen und einer Assoziation:

```turtle
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix i14y: <https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/> .

i14y:SurgicalProcedure
    rdf:type sh:NodeShape ;
    rdfs:label "SurgicalProcedure"@en,
               "Chirurgischer Eingriff"@de ;
    dcterms:description "Beschreibung eines chirurgischen Eingriffs"@de ;
    sh:property <https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/SurgicalProcedure/procedureType>,
                <https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/SurgicalProcedure/date>,
                <https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/SurgicalProcedure/performedBy> ;
    sh:targetClass i14y:SurgicalProcedure .

<https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/SurgicalProcedure/procedureType>
    rdf:type sh:PropertyShape ;
    sh:path <https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/SurgicalProcedure/procedureType> ;
    sh:name "procedureType"@en, "Eingriffstyp"@de ;
    sh:description "Klassifikation des Eingriffs gemäss CHOP-Nomenklatur"@de ;
    sh:datatype xsd:string ;
    sh:minCount 1 ;
    sh:maxCount 1 ;
    sh:order 0 ;
    dcterms:conformsTo <https://register.ld.admin.ch/i14y/concept/DV_CHOP/version/2024.99.0> .

<https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/SurgicalProcedure/date>
    rdf:type sh:PropertyShape ;
    sh:path <https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/SurgicalProcedure/date> ;
    sh:name "date"@en, "Datum"@de ;
    sh:description "Datum des chirurgischen Eingriffs"@de ;
    sh:datatype xsd:date ;
    sh:minCount 1 ;
    sh:maxCount 1 ;
    sh:order 1 .

<https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/SurgicalProcedure/performedBy>
    rdf:type sh:PropertyShape ;
    sh:path <https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/SurgicalProcedure/performedBy> ;
    sh:name "performedBy"@en, "Durchgeführt von"@de ;
    sh:description "Arztpraxis, die den Eingriff durchgeführt hat"@de ;
    sh:node i14y:MedicalPractice ;
    sh:minCount 1 ;
    sh:maxCount 1 ;
    sh:order 2 .

i14y:MedicalPractice
    rdf:type sh:NodeShape ;
    rdfs:label "MedicalPractice"@en,
               "Arztpraxis"@de ;
    dcterms:description "Beschreibung einer Arztpraxis"@de ;
    sh:property <https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/MedicalPractice/practiceId>,
                <https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/MedicalPractice/practiceType> ;
    sh:targetClass i14y:MedicalPractice .

<https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/MedicalPractice/practiceId>
    rdf:type sh:PropertyShape ;
    sh:path <https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/MedicalPractice/practiceId> ;
    sh:name "practiceId"@en, "Praxis-ID"@de ;
    sh:description "Eindeutiger Identifikator der Arztpraxis"@de ;
    sh:datatype xsd:string ;
    sh:pattern "^[0-9]{6}\\.[0-9]{3}$" ;
    sh:minCount 1 ;
    sh:maxCount 1 ;
    sh:order 0 .

<https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/MedicalPractice/practiceType>
    rdf:type sh:PropertyShape ;
    sh:path <https://register.ld.admin.ch/i14y/dataset/MY_DATASET/structure/MedicalPractice/practiceType> ;
    sh:name "practiceType"@en, "Praxistyp"@de ;
    sh:description "Rechtsform der Arztpraxis"@de ;
    sh:datatype xsd:string ;
    sh:in ( "0220" "0221" "0222" ) ;
    sh:minCount 0 ;
    sh:maxCount 1 ;
    sh:order 1 ;
    dcterms:conformsTo <https://register.ld.admin.ch/i14y/concept/legalForm/version/1.2.0> .
```

Das Präfix `i14y` verweist auf den Basis-URI des eigenen Datensatzes auf I14Y. `MY_DATASET` muss durch den tatsächlichen Identifikator des Datensatzes ersetzt werden. Alle Klassen und Attribute des Datensatzes erhalten damit eine stabile, eindeutige IRI (International Resource Identifier) nach folgendem Schema:

| Objekt | IRI-Schema | Beispiel |
|---|---|---|
| Klasse | `.../dataset/{id}/structure/{KlassenName}` | `.../dataset/MY_DATASET/structure/localUnitMasterDataType` |
| Attribut | `.../dataset/{id}/structure/{KlassenName}/{AttributName}` | `.../dataset/MY_DATASET/structure/localUnitMasterDataType/localId` |

Diese IRIs sind auf der I14Y-Plattform für alle Objekttypen eingeführt worden -- neben Datensätzen auch für Konzepte, Codelist-Einträge, Datenservices und Public Services. Sie dienen als stabile, maschinenlesbare Adressen und werden z.B. in RDF-Exporten verwendet. Weitere Informationen zu I14Y-IRIs finden Sie unter [I14Y-URIs und Identifikatoren](/de/anhang/i14y-uris/).

Die Struktur kann u.a. mit dem Tool [SHACL Play!](https://shacl-play.sparna.fr/play/draw) als UML-Diagramm visualisiert werden.

#### Weitere Hinweise

**Sprachmarkierungen (Language Tags)**: Für sprachabhängige String-Felder wie `sh:name` oder `rdfs:label` ist pro Sprache nur ein Wert erlaubt. Das folgende Beispiel ist ungültig und wird abgelehnt:

```turtle
sh:name "Vacances"@fr,
        "Vacances administratives & congés"@fr ;
```

**Namen und Beschreibungen**: Verschiedene Vokabulare können für Bezeichnungen und Beschreibungen verwendet werden. Auf I14Y gilt folgende Empfehlung:

| Prädikat | Verwendung |
|---|---|
| `rdfs:label` | Name einer Klasse (`sh:NodeShape`) |
| `dcterms:description` | Beschreibung einer Klasse |
| `sh:name` | Name eines Attributs (`sh:PropertyShape`) |
| `sh:description` | Beschreibung eines Attributs |

Zur Maximierung der Kompatibilität werden auf I14Y sowohl `rdfs:label` als auch `sh:name` für Namen akzeptiert.
