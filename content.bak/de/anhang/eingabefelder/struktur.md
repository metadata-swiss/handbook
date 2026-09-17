---
title: Felder zur Beschreibung einer Struktur
slug: eingabefelder_struktur
weight: 15
type: docs
translationKey: fields_structure
keywords: [Interoperabilitätsplattform I14Y, I14Y, Eingabefelder, Struktur, SHACL, Klasse, Attribut, Assoziation]
---

Eine Struktur beschreibt, wie ein Datenangebot aufgebaut ist: Welche Klassen (Tabellen/ Entitätstypen), Attribute (Felder/ Spalten) und Assoziationen (Beziehungen zwischen Klassen) enthält es? Auf I14Y werden Strukturen mit der [Shapes Constraint Language (SHACL)](https://www.w3.org/TR/shacl/) definiert und als Turtle (TTL)-, RDF- oder JSON-LD-Datei hinterlegt.

Eine Einführung in das praktische Vorgehen findet sich unter [Struktur beschreiben](/handbook/de/publikation/datensatz/struktur/). Nachfolgend werden alle Felder für die drei Hauptobjekte – **Klasse**, **Attribut** und **Assoziation** – dokumentiert.

## Klasse
Eine Klasse beschreibt eine Gruppe von Objekten, die ähnliche Merkmale haben -- zum Beispiel Einträge desselben Typs.

| Feld | Beschreibung | URI | Wertebereich | Kardinalität | Anmerkung |
| ---- | ---- | ---- |---- |---- |---- |
| __Title__ | Lesbarer Name der Klasse, nützlich für Dokumentation und Benutzeroberflächen. | [rdfs\:label](https://www.w3.org/TR/rdf-schema/#ch_label) | `rdfs:Literal` | 0..n | erwünscht |
| __Typ__ | Gibt den Typ des Objekts an. Klassen in SHACL sind vom Typ `sh:NodeShape`. | [rdf\:type](https://www.w3.org/TR/rdf12-schema/#ch_type) | `sh:NodeShape` (IRI) | 1..n | `sh:NodeShape` ist obligatorisch; weitere Typen sind möglich |
| __Hat Eigenschaften__ | Liste der `PropertyShape`-Instanzen, die Attribute dieser Klasse beschreiben. | [sh\:property](https://www.w3.org/TR/shacl/#PropertyConstraintComponent) | Liste von `sh:PropertyShape` (IRIs) | 0..n | erwünscht; erforderlich, wenn die Klasse Eigenschaften hat. |
| __Beschreibung__ | Beschreibung der Klasse. | [dcterms\:description](http://purl.org/dc/terms/description) | `rdfs:Literal` | 0..n | erwünscht |
| __Modifiziert__ | Datum der letzten Änderung der Klasse. | [dcterms\:modified](http://purl.org/dc/terms/modified) | `xsd:dateTime` | 0..1 | erwünscht |
| __Erstellt__ | Erstellungsdatum der Klasse. | [dcterms\:created](http://purl.org/dc/terms/created) | `xsd:dateTime` | 0..1 | erwünscht |

## Attribut
Ein Attribut ist eine Eigenschaft oder ein Datenfeld, das einer Klasse zugeordnet ist (über sh:property). 

| Feld | Beschreibung | URI | Wertebereich | Kardinalität | Anmerkung | 
| ----| ---- | ---- | ---- | ----| ---- |
| __Link zu den Daten__ | Legt fest, auf welche RDF-Daten die Einschränkung zutrifft. Dieses Attribut ist für eine gültige Struktur obligatorisch. Wenn die Daten nicht im RDF-Format vorliegen, Sie die Struktur jedoch in SHACL beschreiben möchten, können Sie einen Platzhalter-Link zur Ressource erstellen (z. B. mit einem Platzhalter-Präfix: http://example.com/). Dieser kann geändert werden, sobald die Daten im RDF-Format vorliegen. | [sh\:path](https://www.w3.org/TR/shacl/#property-shapes)| IRI | 1 | obligatorisch |
| __Title__| Ein lesbarer Name für das Attribut, nützlich für Dokumentation und Benutzeroberflächen. | [sh\:name](https://www.w3.org/TR/shacl/#name)| `rdfs:Literal` | 0..n | erwünscht | 
| __Typ__| Der Typ des Objekts. Ein Attribut in SHACL kann explizit (mit einem Objekt, das über die URI vom Typ sh:PropertyShape gefunden werden kann) oder implizit (ohne Erstellung eines separaten Objekts, durch direkte Angabe der Einschränkungen innerhalb der sh:property im Klassenobjekt) definiert werden. Es wird empfohlen, aber nicht vorgeschrieben, eine Eigenschaftsform als SHACL-Instanz von sh:PropertyShape zu deklarieren. | [rdf\:type](https://www.w3.org/TR/rdf12-schema/#ch_type) | `sh:PropertyShape` (IRI) | 1..n | obligatorisch (wird jedoch nicht verwendet, wenn das Attribut direkt in der Klasse über sh:property definiert ist) |
| __Data Type__| Gibt den Datentyp der Eigenschaft an (z. B. "xsd:string", "xsd:dateTime" usw.). Diese Eigenschaft stellt sicher, dass die der Eigenschaft zugewiesenen Werte dem erwarteten Datentyp entsprechen.|[sh\:datatype](https://www.w3.org/TR/shacl/#DatatypeConstraintComponent) | IRIs (`xsd:integer`, `xsd:decimal`, `xsd:boolean`, `xsd:date`, ... Eine Liste der RDF-kompatiblen XSD-Typen finden Sie in der folgenden Dokumentation: [RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/rdf11-concepts/#section-Datatypes)) |  0..1 | optional |
| __Regex Pattern__ | In diesem Feld können Sie ein reguläres Ausdrücke definieren, die zum Abgleichen von Zeichenkombinationen in einer Zeichenfolge verwendet werden. Die Werte von sh:pattern sind gültige Musterargumente für die [SPARQL-Funktion REGEX](https://www.w3.org/TR/sparql11-query/#func-regex).|[sh\:pattern](https://www.w3.org/TR/shacl/#PatternConstraintComponent)| `rdfs:Literal` (with datatype `xsd:string`)| 0..1 | optional |
| __Minimale Anzahl__| Kardinalitätsbeschränkung. Gibt die Mindestanzahl an, wie oft die Eigenschaft vorkommen darf.| [sh\:minCount](https://www.w3.org/TR/shacl/#MinCountConstraintComponent) | `rdfs:Literal` (typed as `xsd:integer`)| 0..1 |  optional |
| __Maximale Anzahl__| Kardinalitätsbeschränkung. Gibt an, wie oft die Eigenschaft maximal vorkommen darf.| [sh\:maxCount](https://www.w3.org/TR/shacl/#MaxCountConstraintComponent) | `rdfs:Literal` (typed as `xsd:integer`) | 0..1 |  optional |
| __Mindestlänge__| Mindestlänge eines String-Wertes. | [sh\:minLength](https://www.w3.org/TR/shacl/#MinLengthConstraintComponent) | rdfs:Literal (typed as xsd:integer)  | 0..1 |  optional |
| __Maximale Länge__| Maximale Länge eines String-Werts. |[sh\:maxLength](https://www.w3.org/TR/shacl/#MaxLengthConstraintComponent) | `rdfs:Literal` (typed as `xsd:integer`) | 0..1 |  optional |
| __Position__| Gibt die relative Reihenfolge des Elements an. | [sh\:order](https://www.w3.org/TR/shacl/#order) | `rdfs:Literal` (typed as `xsd:integer`)| 0..1 | optional |
| __Beschreibung__| Eine Textbeschreibung, die weitere Details zur Eigenschaft liefert. | [sh\:description](https://www.w3.org/TR/shacl/#name) | `rdfs\:Literal` | 0..n | optional |
| __Conforms To__| Ein Standard, dem die Ressource entspricht. In diesem Feld können die mit diesem Attribut verbundenen I14Y-Konzepte verlinkt werden. | [dcterms\:confromsTo](http://purl.org/dc/terms/conformsTo) | `dct:Standard` | 0..1 | optional |

## Assoziation
Eine Assoziation ist eine bestimmte Beziehung zwischen verschiedenen Entitäten oder Klassen (über `sh:class`). 

| Feld | Beschreibung | URI | Wertebereich | Kardinalität | Anmerkung | 
| ----| ---- | ---- | ---- | ----| ---- |
| __Link zu den Daten__ | Legt fest, auf welche RDF-Daten die Einschränkung zutrifft. Dieses Attribut ist für eine gültige Struktur obligatorisch. Wenn die Daten nicht im RDF-Format vorliegen, Sie die Struktur jedoch in SHACL beschreiben möchten, können Sie einen Platzhalter-Link zur Ressource erstellen (z. B. mit einem Platzhalter-Präfix: http://example.com/), der geändert werden kann, sobald die Daten im RDF-Format vorliegen. | [sh\:path](https://www.w3.org/TR/shacl/#property-shapes)| IRI | 1 | obligatorisch |
| __Title__| Ein Name für die Attribut, den man lesen kann. Das ist wichtig, um die Klasse in der Dokumentation oder in Benutzeroberflächen zu erkennen. | [sh\:name](https://www.w3.org/TR/shacl/#name)| `rdfs:Literal` | 0..n | erwünscht | 
| __Typ__| Der Typ des Objekts. Ein Attribut in SHACL kann explizit (mit einem Objekt, das über die URI vom Typ sh:PropertyShape gefunden werden kann) oder implizit (ohne Erstellung eines separaten Objekts, durch direkte Angabe der Einschränkungen innerhalb der sh:property im Klassenobjekt) definiert werden. Es wird empfohlen, aber nicht vorgeschrieben, eine Eigenschaftsform als SHACL-Instanz von sh:PropertyShapezu deklarieren.| [rdf\:type](https://www.w3.org/TR/rdf12-schema/#ch_type) | `sh:PropertyShape` (IRI) | 0..n | optional (die implizite Syntax kann verwendet werden) |
| __Assoziation zur Klasse__| Dies ist die Eigenschaft, die eine Assoziation mit einer Klasse verknüpft (z. B. ist hasAddress mit der Klasse Address verknüpft). Sie können entweder sh:class oder sh:node verwenden. sh:class überprüft, ob ein Wert eine Instanz einer bestimmten RDF-Klasse ist, während sh:node überprüft, ob der Wert einer anderen Struktur (sh:NodeShape) entspricht. | [sh\:class](https://www.w3.org/TR/shacl/#ClassConstraintComponent)/[sh\:node](https://www.w3.org/TR/shacl/#NodeConstraintComponent)| IRIs | 0..1 |  erwünscht |
| __Minimale Anzahl__| Kardinalitätsbeschränkung. Gibt die Mindestanzahl an, wie oft die Eigenschaft vorkommen darf.| [sh\:minCount](https://www.w3.org/TR/shacl/#MinCountConstraintComponent) |`rdfs:Literal` (typed as `xsd:integer`) | 0..1 |  optional |
| __Maximale Anzahl__| Kardinalitätsbeschränkung. Gibt an, wie oft die Eigenschaft maximal vorkommen darf.| [sh\:maxCount](https://www.w3.org/TR/shacl/#MaxCountConstraintComponent)| `rdfs:Literal` (typed as `xsd:integer`) | 0..1 |  optional |
| __Beschreibung__| Eine Textbeschreibung, die weitere Details zur Eigenschaft liefert. |[sh\:description](https://www.w3.org/TR/shacl/#name) | `rdfs:Literal` | 0..n | optional |
| __Conforms To__| Ein Standard, dem die Ressource entspricht. In diesem Feld können die mit diesem Attribut verbundenen I14Y-Konzepte verlinkt werden. | [dcterms\:confromsTo](http://purl.org/dc/terms/conformsTo) | `dct:Standard` | 0..1 | optional |

## Weiterführende Spezifikationen

- [SHACL – Shapes Constraint Language](https://www.w3.org/TR/shacl/)
- [SHACL Advanced Features](https://www.w3.org/TR/shacl-af/)
- [RDF 1.1 Concepts and Abstract Syntax](https://www.w3.org/TR/rdf11-concepts/)
- [SPARQL 1.1 Query Language](https://www.w3.org/TR/sparql11-query/)
- [Validating RDF Data (Online-Buch)](https://book.validatingrdf.com/)
