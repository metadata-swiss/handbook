---
title: Eingabefelder übrige Objekte
slug: eingabefelder_uebrige
weight: 60
type: docs
translationKey: fields_other
keywords: [Interoperabilitätsplattform I14Y, I14Y, Glossar, Eingabefelder, Standard]
---

Die in diesem Abschnitt erwähnten Objekte können über die Weboberfläche der Interoperabilitätsplattform I14Y nicht gesetzt werden. Einige sind nötig nötig, wenn mit der API gearbeitet wird. Andere dienen zur Dokumentation der von der Plattform selbst genutzten Objekte. Wenden Sie sich für weitere Informationen an die Interoperabilitätsstelle.

## Katalog 
[dcat:Catalog](https://www.dcat-ap.ch/releases/2.0/dcat-ap-ch.html#Class:Catalog)

| Feld | Beschreibung | URI | Wertebereich | Kardinalität | Anmerkung | Bezug Standard |
| ----| ---- | ---- | ---- | ----| ---- | ---- |
| __Titel__ | Diese Eigenschaft enthält einen Titel, der dem Katalog gegeben wurde. Der Titel kann auf Deutsch, Französisch, Italienisch, Rätoromanisch und Englisch gespeichert werden. | [dct:title](https://www.dcat-ap.ch/releases/2.0/dcat-ap-ch.html#catalog-title) | rdfs:Literal | 1..n | obligatorisch | [DCAT-AP CH 2.0](https://www.dcat-ap.ch/releases/2.0/dcat-ap-ch.html) |
| __Beschreibung__ | In diesem Feld wird der Katalog möglichst präzise in Freitext beschrieben. Die Beschreibung kann in den Sprachen Deutsch, Französisch, Italienisch und Englisch hinterlegt werden. Es ist anzustreben, dass die Beschreibung in mehreren Sprachen vorliegt; Angaben in mindestens einer Sprache sind obligatorisch. | [dct:description](https://www.dcat-ap.ch/releases/2.0/dcat-ap-ch.html#catalog-description) | rdfs:Literal | 1..n | obligatorisch | [DCAT-AP CH 2.0](https://www.dcat-ap.ch/releases/2.0/dcat-ap-ch.html) |
| __Herausgeber__ | Als Herausgeber wird jene Organisation aufgeführt, die den Katalog in Auftrag gegeben hat oder ihn pflegt. | [dct:publisher](https://www.dcat-ap.ch/releases/2.0/dcat-ap-ch.html#catalog-publisher) | foaf:Agent | 1..1 | obligatorisch | [DCAT-AP CH 2.0](https://www.dcat-ap.ch/releases/2.0/dcat-ap-ch.html) |
| __Thementaxonomie__ | Das zu verwendende kontrollierte Vokabular basiert auf dem [EU-Datenthema](https://op.europa.eu/en/web/eu-vocabularies/dataset/-/resource?uri=http://publications.europa.eu/resource/dataset/data-theme). Die vom Normierungsgremium eCH entwickelte und veröffentlichte Themenliste ([eCH-0122](https://www.dcat-ap.ch/vocabulary/themes/20231122.html)) wurde mit dem EU-Datenthema abgeglichen. Die Interoperabilitätsstelle hat die Liste geringfügig erweitert. Diese erweiterte Liste wird gespeichert und ist ebenfalls als  [Konzept auf der Interoperabilitätsplattform I14Y](https://www.i14y.admin.ch/de/concepts/08da58dc-4dc8-f9cb-b6f2-7d16b3fa0cde/description) verfügbar. Die zusätzlichen Begriffe sollen in der nächsten Version des eCH-Dokuments aufgenommen werden. | [dcat:themeTaxonomy](https://www.dcat-ap.ch/releases/2.0/dcat-ap-ch.html#catalog-theme-taxonomy) | skos:Conceptscheme | 0..n | erwünscht | [DCAT-AP CH 2.0](https://www.dcat-ap.ch/releases/2.0/dcat-ap-ch.html) |

## Agent 
[foaf:Agent](http://xmlns.com/foaf/spec/#term_Agent)

In I14Y bezieht sich Agent auf Organisationen.

| Feld | Beschreibung | URI | Wertebereich | Kardinalität | Anmerkung | Bezug Standard |
| ----| ---- | ---- | ---- | ----| ---- | ---- |
| __Name__ | Der Name beschreibt die Organisation kurz und allgemein verständlich. Der Name kann in Deutsch, Französisch, Italienisch und Englisch angegeben werden; eine Sprachversion ist obligatorisch.| [foaf:name](http://xmlns.com/foaf/spec/#term_name) | rdfs:Literal | 1..n | obligatorisch | [DCAT-AP 3.0.0](https://semiceu.github.io/DCAT-AP/releases/3.0.0/)  |
| __Identifikator__ | Der Identifier ist ein Name, der die Organisation identifiziert. für das jeweilige Angebot. Er kann Buchstaben, Sonderzeichen und Zahlen enthalten. Leerzeichen sind nicht erlaubt. | [dct:identifier](http://purl.org/dc/elements/1.1/identifier) | rdfs:Literal | 1..1 | obligatorisch | Spezifisch für I14Y |