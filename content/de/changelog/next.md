---
title: Nächster Release
translationKey: next-release
slug: naechster-release
weight: 10
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
draft: false
notification: true
---

Der nächste Release von I14Y ist für den frühen Abend des 14. Oktober 2026 geplant. Er beinhaltet die untenstehenden Anpassungen und Erweiterungen. I14Y-Partnerorganisationen mit entsprechendem Zugang können die aktualisierte Software ab sofort auf der [Abnahme-Umgebung von I14Y](https://input.i14y-a.admin.ch) testen. Bitte kontaktieren Sie die Interoperabilitätsstelle, falls Sie noch keinen Zugang zu dieser für Software-Tests genutzten Umgebung haben.

Bitte beachten Sie, dass das Releasedatum bei Problemen kurzfristig verschoben werden kann. Es ist möglich, dass einzelne Funktionen aus dem Release entfernt und erst zu einem späteren Zeitpunkt freigeschaltet werden. Bei Fragen oder Problemen bezüglich des Releases wenden Sie sich bitte an das Kompetenzzentrum Datenbewirtschaftung ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).


**Nachvollziehbarkeit von Änderungen:** Bisher liess sich nicht zurückverfolgen, wer wann welche Änderungen an den Metadaten vorgenommen hat. Neu wird automatisch protokolliert, wenn Nutzende Einträge erstellen, abändern oder löschen. Gespeichert werden Angaben zur Person, zum Zeitpunkt, zur betroffenen Ressource und zur Art der Änderung. Die Protokolle sind vorerst nur für das Team einsehbar, das die Plattform betreibt. Eine Anzeige der detaillierten Protokolle in der Verwaltungsoberfläche ist fürs zukünftige System metadata.swiss vorgesehen.

**Leistung der Partner-API:** Die Leistungsfähigkeit der Partner-API wurde gemessen. Um die Antwortzeiten bei sehr vielen parallelen Anfragen zu verkürzen, werden Abfragen einzelner Ressourcen neu für kurze Zeit zwischengespeichert. Dadurch kann die API auch bei ausserordentlich vielen gleichzeitigen Anfragen zuverlässig und schnell Daten liefern.

**Filter nach weiteren beteiligten Organisationen:** Bisher konnte man auf I14Y nur nach der publizierenden Organisation eines Datensatzes filtern. Neu lässt sich zusätzlich nach Organisationen filtern, die eine andere Rolle im Zusammenhang mit dem Datensatz haben.

**Fehlerkorrekturen und Optimierungen**