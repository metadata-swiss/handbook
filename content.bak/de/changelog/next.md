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

Der nächste Release von I14Y ist für den frühen Abend des 2. September 2026 geplant. Er beinhaltet die untenstehenden Anpassungen und Erweiterungen. I14Y-Partnerorganisationen mit entsprechendem Zugang können die aktualisierte Software ab sofort auf der [Abnahme-Umgebung von I14Y](https://input.i14y-a.admin.ch) testen. Bitte kontaktieren Sie die Interoperabilitätsstelle, falls Sie noch keinen Zugang zu dieser für Software-Tests genutzten Umgebung haben.

Bitte beachten Sie, dass das Releasedatum bei Problemen kurzfristig verschoben werden kann. Es ist möglich, dass einzelne Funktionen aus dem Release entfernt und erst zu einem späteren Zeitpunkt freigeschaltet werden. Bei Fragen oder Problemen bezüglich des Releases wenden Sie sich bitte an das Kompetenzzentrum Datenbewirtschaftung ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Zusammenspiel mit LINDAS:** Konzepte und Datensätze werden bei der Publikation auf I14Y im Linked Data Service (LINDAS) des Bundes veröffentlicht, normalerweise im I14Y-Graphen. Ausgewählte Metadaten und Codelisten können in den zentralen LINDAS-Graphen kopiert werden, als gemeinsam genutzte Dimensionen. Auf der öffentlich zugänglichen Website von I14Y werden die entsprechenden Links neu angezeigt.

**Strukturen:** Datensätze verfügen über eine Struktur, die ihre einzelnen Attribute zusammenfasst. Für jedes Attribut kann hinterlegt werden, ob es auf einer bestimmten, gemeinsam genutzten Definition basiert – einem sogenannten Konzept. Ein neuer Knopf vereinfacht nun die Erfassung von Attributen: Ist ein passendes Konzept vorhanden, können die dort hinterlegten Informationen mit einem Klick ins betreffende Attribut importiert werden. 

**Verbesserungen der Benutzerfreundlichkeit:** Die Darstellung von Links zu externen Ressourcen wurde verbessert: Dank eines Symbols sind sie nun auf den ersten Blick als solche erkennbar.

**Anpassung der Links zum Handbuch und zum GitHub-Bereich:** Im Zuge des Projekts metadata.swiss wurde der GitHub-Bereich von `i14y-ch` in `metadata-swiss` umbenannt (siehe [News-Beitrag](/handbook/de/news/#der-github-bereich-von-i14y-wird-zu-metadata-swiss)). Mit diesem Release werden die Links von der I14Y-Website zu GitHub sowie zum dort betriebenen I14Y-Handbuch angepasst.

**Fehlerkorrekturen:** Wenn für eine Organisation kein Name in der vom Nutzer oder der Nutzerin gewählten Sprache vorliegt, wird stattdessen der Name in einer anderen Sprache angezeigt. Dieser Fallback stellt sicher, dass stets ein Name dargestellt wird. Ausserdem wurde ein Fehler bei URLs von Distributionen im RDF-Export korrigiert. 