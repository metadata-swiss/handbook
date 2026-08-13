---
title: Nächster Release
translationKey: next-release
slug: naechster-release
weight: 10
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
draft: true
notification: false
---

Der nächste Release von I14Y ist für den frühen Abend des 12. August 2026 geplant. Er beinhaltet die untenstehenden Anpassungen und Erweiterungen. I14Y-Partnerorganisationen mit entsprechendem Zugang können die aktualisierte Software ab sofort auf der [Abnahme-Umgebung von I14Y](https://input.i14y-a.admin.ch) testen. Bitte kontaktieren Sie die Interoperabilitätsstelle, falls Sie noch keinen Zugang zu dieser für Software-Tests genutzten Umgebung haben.

Bitte beachten Sie, dass das Releasedatum bei Problemen kurzfristig verschoben werden kann. Es ist möglich, dass einzelne Funktionen aus dem Release entfernt und erst zu einem späteren Zeitpunkt freigeschaltet werden. Bei Fragen oder Problemen bezüglich des Releases wenden Sie sich bitte an das Kompetenzzentrum Datenbewirtschaftung ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

{{<alert title="Hinweis zur Open-Source-Veröffentlichung" color="warning">}}
Die Veröffentlichung unserer Codebasis als Open Source wurde auf einen späteren Zeitpunkt verschoben. Voraussichtlich erfolgt sie Ende August.
{{< /alert >}}

**Erfassen von Datenstrukturen:** Bisher mussten Strukturen extern erstellt und dann auf I14Y hochgeladen werden. Neu können einfache Strukturen (eine Klasse mit Attributen) direkt in der I14Y-Oberfläche erfasst werden.

**Bessere Kennzeichnung abgelöster Konzepte:** Normalerweise werden Konzepte versioniert, wenn Änderungen vorgenommen werden. Es ist aber auch möglich, dass ein Konzept durch ein anderes Konzept abgelöst wird. In diesem Fall wird der Status des bisherigen Konzepts auf "abgelöst" gesetzt. Neu lässt sich im nun gültigen Konzept dokumentieren, welche anderen Konzepte es abgelöst hat. Diese Information wird im Bereich "Abstammung" des Eintrags angezeigt.

**Umfassende Exportmöglichkeiten:** Sie möchten einen Eintrag exportieren? Bislang waren Exporte von Beschreibungen zu Datensätzen sowie von Konzepten möglich. Neu lassen sich auch die Einträge zu elektronischen Schnittstellen, Behördenleistungen und Mapping-Tabellen im JSON-Format exportieren.

**Verbesserter Filter:** I14Y erlaubt es die Suchresultate zu filtern. Neu können im Herausgeber-Filter mehrere Organisationen ausgewählt werden. Bislang liess sich nur ein Herausgeber auswählen.

**Räumliche oder zeitliche Abdeckung:** Neu kann in I14Y dokumentiert werden, wenn ein Datensatz mehrere geografische Räume oder mehrere Zeiträume abdeckt.

**Neuerungen auf der Partner-API:** Neue POST-Endpunkte erlauben es gleichzeitig mehrere Codelisten-Einträge und Relationen von Mapping-Tabellen zu senden. Ein neuer Endpunkt ermöglicht es ausserdem, die öffentlichen Informationen zu den Nutzungsorganisationen im RDF-Format zu exportieren.

**Fehlerkorrekturen**