---
title: Prinzipien der Datenerfassung
slug: prinzipien
translationKey: principles
weight: 30
description: Allgemeine Grundsätze zur Erfassung von Metadaten auf I14Y
keywords: [I14Y, Interoperabilitätsplattform I14Y, Interoperabilität, Datenerfassung, Erfassung, Prinzipien, Grundsätze, Tipps, Vorgaben]
type: docs
---

Die Erfassung von Metadaten auf I14Y folgt bestimmten Grundregeln. Diese wurden formuliert, um eine konsistente und sinnvolle Erfassung von Metadaten zu gewährleisten. Die hier aufgeführten Prinzipien kommen bei der Erfassung von mehreren Arten von Einträgen zum Tragen, also etwa sowohl für Datensätze, elektronische Schnittstellen, Behördenleistungen wie auch für Konzepte. In diesem Abschnitt werden die wichtigsten allgemeinen Prinzipien erklärt. 

## Zugänglichkeit der effektiven Daten
Auf I14Y werden nebst offen zugänglichen Daten auch Datensätze und zugehörige Schnittstellen beschrieben, die nicht öffentlich oder nur eingeschränkt zugänglich sind -- etwa, weil sie Personendaten enthalten. Die Beschreibung dieser Daten inklusive der Informationen zum Erfassungs- und Bearbeitungszweck sowie zur Zugänglichkeit fördern die Transparenz und damit das Vertrauen der Bevölkerung in die Verwaltung.

In einem ersten Schritt wird geprüft, ob die Beschreibung zu den betreffenden Daten überhaupt veröffentlicht werden dürfen. Bei Unsicherheiten ist der Rechtsdienst der Verwaltungseinheit beizuziehen. Bei einem positiven Entscheid zur Publikation auf I14Y muss die Zugänglichkeit der effektiven Daten angegeben werden. Dabei stehen für Einträge zu Datensätzen und elektronischen Schnittstellen folgende Kategorisierungsmöglichkeiten zur Verfügung:

- **Öffentlich:** Daten sind öffentlich zugänglich. Eine Registrierung oder die Anforderung von API-Schlüsseln kann erforderlich sein kann. Bedingung für die Kategorisierung "öffentlich" ist aber, dass es keinerlei Einschränkungen bei der Vergabe der Zugänge gibt. Zulässig sind lediglich geringfügige technische Einschränkungen (z.B. Limiten für besonders viele API-Zugriffe in kurzer Zeit), insbesondere um den Zugang für alle gleichermassen anbieten zu können. In diese Kategorie fallen offene Behördendaten (_Open Government Data, OGD_) oder Datensätze öffentlich zugänglicher Register bzw. Teilen davon, wie z.B. zentraler Firmenindex (Zefix), Kernmerkmale des UID-Registers, A-Daten des Gebäude- und Wohnungsregisters (GWR).
- **Eingeschränkt:** Daten sind nur unter bestimmten Voraussetzungen zugänglich. Diese Kategorie umfasst Daten, die nicht allgemein und zu irgendwelchen Zwecken zugänglich sind, sondern bestimmten gesetzlichen Nutzungsvoraussetzungen unterliegen. So können sie etwa kostenpflichtig sein, nur unter Geheimhaltungsvereinbarungen oder nur zu bestimmten Zwecken herausgegeben werden. In diese Kategorie fallen z.B. Datensätze wie die Zusatzmerkmale des UID-Registers oder Personendaten des UPI-Services.
- **Nicht öffentlich:** Daten sind aufgrund von spezialrechtlichen Bestimmungen nicht zugänglich. Diese Kategorie umfasst Daten, die sensible oder persönliche Informationen enthalten und deshalb mit niemandem geteilt werden können (z.B. Gesundheitsdaten, politische Meinungen oder religiöse Überzeugungen einzelner natürlicher Personen). Die Metadaten dieser Datensätze dürfen bzw. müssen veröffentlicht werden.

Bei der obenstehenden Kategorisierung geht es einzig um die Zugänglichkeit der Daten. Diese Kategorisierung unterscheidet sich von der Klassifizierung der Datensätze etwa im Rahmen des Informationssicherheitsgesetzes. Zudem ist sie abzugrenzen von Angaben zur Vertraulichkeit.

## Versionierung 
Die Versionierung der Konzepte auf I14Y folgt den Grundsätzen der semantischen Versionierung. Dementsprechend können Änderungen im MAJOR.MINOR.PATCH-Format angegeben. Die jeweiligen Änderungen haben folgenden Charakter:

- **MAJOR-Änderung:** Grundlegende Änderungen (Breaking Changes), Rückwärtskompatibilität ist nicht gewährleistet. Beispiele: Bei einem Konzept des Typs Codeliste werden einzelne Codes entfernt.
- **MINOR-Änderung:** Kleine Änderungen (ohne Breaking Changes), Rückwärtskompatibilität ist gewährleistet. Beispiel: Bei einem Konzept des Typs Codeliste werden einzelne Codes hinzugefügt.
- **PATCH-Änderung:** Lediglich Fehlerkorrekturen, Rückwärtskompatibilität ist gewährleistet. Beispiel: Bei einem Konzept des Typs Codeliste werden Rechtschreibefehler in Labels bestehender Codes korrigiert.

In der Regel ist die erste Version eines Objekts 1.0.0. Wenn die Metadaten jedoch auf einem Standard beruhen, kann die effektive Version des Standards übernommen werden.

## Reifegrad der Datenobjekte
Der Reifegrad eines Datenobjekts wird auf I14Y über den Registrierungsstatus abgebildet. Für die operative Arbeit sind insbesondere folgende Status relevant:

- **Initial:** Eintrag ist in Erarbeitung oder Überarbeitung; die Qualität ist noch nicht abschliessend geprüft.
- **Kandidat:** Eintrag ist fachlich weitgehend vollständig und bereit für die Validierung.
- **Registriert:** Eintrag ist geprüft und kann öffentlich zugänglich gemacht werden.
- **Qualifiziert:** Eintrag kann mittelfristig zu einem Standard werden.
- **Standard / Empfohlener Standard:** Eintrag entspricht einem anerkannten Standard oder wird als bevorzugte Referenz geführt.

Beschreibungen sollten in der Regel mindestens den Status _Registriert_ erreicht haben, bevor sie öffentlich publiziert werden.

## Mehrsprachigkeit
Mehrsprachigkeit ist ein zentrales Prinzip der öffentlichen Verwaltung. Für Bundesstellen sollen Metadaten grundsätzlich in Deutsch, Französisch und Italienisch vorliegen. Rätoromanisch und Englisch können ergänzend erfasst werden.

Für die Qualität der Übersetzungen gilt:

- Rechtlich oder fachlich kritische Inhalte sollten durch die zuständigen Sprachdienste geprüft werden.
- Bei Unsicherheiten zu juristischen Begriffen ist der Rechtsdienst beizuziehen.
- Bei der Nutzung von Übersetzungstools ist zwingend eine Qualitätskontrolle erforderlich.

