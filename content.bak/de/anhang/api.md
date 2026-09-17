---
title: API-Dokumentation
slug: api
weight: 20
type: docs
translationKey: api-documentation
draft: true
---

## Konzept-API

| Attribut | Ausprägung | Beschreibung |
| --- | --- | --- |
| id | uuid | Technischer Identifikator des Konzepts. |
| identifier | Zeichenkette | Bei der Erfassung manuell gesetzter Identifikator des Konzepts |
| version | Zeichenkette | Manuell gesetzte Versionsnummer des Konzepts |
| name | Zeichenkette multilingual | Name des Konzepts |
| description | Zeichenkette multilingual | Beschreibung des Konzepts |
| conceptType | Zeichenkette | Der Typ des Konzepts -- entweder _undefined_, _string_, _numeric_, _date_ oder _codelist_. Der Typ definiert, welche Attribute zwingend nötig sind und bei der Eingabe eingetragen werden müssen. Und er definiert, welche Attribute bei einer API-Abfrage zurückgegeben werden. |
| codelistEntryValueMaxLength | Ganzzahl | Nur bei Konzepten des Typs Codeliste. Diese Angabe beschreibt, wie viele Zeichen jeder einzelne Eintrag einer Codeliste maximal haben darf. |
| codeListEntryValueType | codeListEntryValueType | Only for concepts of type codelist. Codelist entries can be either of type string or numeric. The codelist entry type defines what type of characters are allowed for the code of the codelist entry. |
| maxLength | integer | Only for concepts of type string. Contains the maximum number of carachters allowed for data described by this concept. |
| maxValue | integer | Only for concepts of type numeric. Contains the maximum value allowed for data described by this concept. |
| measurementUnit | string | Contains the measurements unit for data described by this concept. |
| minLength | integer | Only for concepts of type string. Contains the minimum number of carachters allowed for data described by this concept. |
| minValue | integer | Only for concepts of type numeric. Contains the minimum value allowed for data described by this concept. |
| nbDecimal | integer | Only for concepts of type numeric. Contains the allowed number of decimals allowed for data described by this concept. |
| pattern | string | Only for concepts of type string, numeric and date. Contains the regex pattern allowed for data described by this concept. |
| validFrom | timestamp | Contains the date from which this concept is valid for using. |
| validTo | timestamp | Contains the date to which this concept is valid for using. |
| publisher | API_Agency | Identifies the organisation publishing this concept. |
| codeListEntries | API_Codelistentry | Only for concepts of type codelist. Contains the codelist entries that can be used with this concept. |
| | | |
| API_Codelistentry | | |
| code | string | Identifier of the codelistentry. Has to be unique within a codelist. |
| name | multilanguagestring | Name of the codelistentry, is isually the information displayed to identify the meaning of the codelistentry. |
|description|multilanguagestring|Description of the codelistentry, contains more information regarding the meaning of the codelistentry that would be too long to include in the name. |
|parentCode|string|Contains the optional parent code within the codelist, if the codelitentries are organised hierarchichally. |
|annotations|API_Annotation|Contains optional annotation related to the codelistentry. |
| | | |
| API_Annotation | | |
| identifier | string | Identifier of the annotation. Annotations allow to attach additional structured information to an object. |
| type | string | Annotation type |
| text | multilanguagestring | Annotation text|
| title | string | Annotation title |
| uri | string | Annotation URI |
| | | |
| API_Agency | | |
| identifier | string | Identifier of the agency |
| name | multilanguagestring | Name of the agency |
