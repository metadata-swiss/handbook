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

Der nächste Release von I14Y ist für den frühen Abend des 2. Dezember 2026 geplant. Er beinhaltet die untenstehenden Anpassungen und Erweiterungen. I14Y-Partnerorganisationen mit entsprechendem Zugang können die aktualisierte Software ab sofort auf der [Abnahme-Umgebung von I14Y](https://input.i14y-a.admin.ch) testen. Bitte kontaktieren Sie die Interoperabilitätsstelle, falls Sie noch keinen Zugang zu dieser für Software-Tests genutzten Umgebung haben. Aufgrund der grossen Anpassungen bei der Suchinfrastruktur steht dieser Release länger als gewohnt auf der Abnahme-Umgebung für Tests zur Verfügung. 

Bitte beachten Sie, dass das Releasedatum bei Problemen kurzfristig verschoben werden kann. Es ist möglich, dass einzelne Funktionen aus dem Release entfernt und erst zu einem späteren Zeitpunkt freigeschaltet werden. Bei Fragen oder Problemen bezüglich des Releases wenden Sie sich bitte an das Kompetenzzentrum Datenbewirtschaftung ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**EU-Themen sind neu der Standard:** Bisher verwendete I14Y ein Themenvokabular auf Basis des eCH-Standards 0122 (siehe [I14Y-Themenvokabular](https://www.i14y.admin.ch/de/catalog/concepts/08da58dc-4dc8-f9cb-b6f2-7d16b3fa0cde)). Das Portal opendata.swiss nutzt hingegen das [EU-Themenvokabular](https://www.i14y.admin.ch/de/catalog/concepts/08dbf1a0-8d10-c75b-a0b4-6a5c2873b2bc). Im Hinblick auf die Zusammenführung von opendata.swiss und I14Y wird die Nutzung der Themen harmonisiert: Ab diesem Release verwendet I14Y standardmässig die EU-Themen. Die bisherigen I14Y-Themen können weiterhin benutzt werden. Zudem lassen sich bei Bedarf domänenspezifische Themenlisten konfigurieren. Das Kompetenzzentrum Datenbewirtschaftung berät sie diesbezüglich gerne. Konkrete Anpassungen: 
- Die bestehenden Einträge wurden anhand einer Mapping-Tabelle um passende EU-Themen ergänzt. Die bisherigen I14Y-Themen bleiben erhalten. 
- Die Filter verwenden nun die EU-Themen. Falls Sie in Dokumenten oder auf Webseiten Links verwenden, in denen ein Filter codiert ist, müssten Sie diese Links anpassen. 
- Alle Skripte für den automatischen Datenbezug, die von I14Y betrieben werden, wurden auf EU-Themen umgestellt. Ihre eigenen Skripte sollten weiterhin funktionieren; es ist aber sinnvoll, dass Sie in Zukunft auf die EU-Themen umstellen.
- In Exporten werden alle zugewiesenen Themen ausgegeben, sofern mehrere kontrollierte Vokabulare als Themenquellen verwendet werden. 

**Eigener Suchdienst mit Elasticsearch:** Die Suche läuft neu über einen separaten Dienst mit Elasticsearch (anstelle von Lucene). Die Reihenfolge der Suchtreffer wurde verbessert. Die Felder werden nun in dieser Reihenfolge gewichtet: Titel/Name, Kennung, Version, Schlüsselwörter, Beschreibung, Kontaktstelle, verantwortliche Person und Stellvertretung. Ein weiteres Kriterium ist die Maturität des Eintrags: Zuoberst werden Einträge mit dem Status Empfohlener Standard angezeigt, gefolgt -- in dieser Reihenfolge -- von den Status Standard, Qualifiziert, Registriert, Kandidat, Initial, Abgelöst, Zurückgezogen. Schliesslich wird -- sofern zutreffend -- die Anzahl der Wiederverwendungen einbezogen. 

**E-Mail für Organisationen:** Für jede Organisationen muss neu eine E-Mail hinterlegt werden. Bevorzugt wird eine generische Gruppen-E-Mail (z.B. info@organisation.org oder team@organisation.org). Die E-Mail ist nötig, damit im so genannten _Audit Trail_ automatisierte Änderungen an Metadaten  dokumentiert werden können (Maschine-zu-Maschine-Kommunikation). 

**Wichtige Änderung für die Partner-API (_Breaking Change_):** Der Endpunkt `GET /agents` der Partner-API wurde an das neue Datenmodell angepasst, das im Projekt metadata.swiss zum Einsatz kommen wird. Dabei wurden Feldnamen geändert. `subOrganizationOf` enthält neu genau eine übergeordnete Organisation (statt wie bisher einer Liste). Das bisherige Feld `subAgents`, in dem eine Liste von untergeordneten Organisationen hinerlegt werden kann, wird in `hasSubOrganizations` umbenannt.  

Bisheriges Format (vereinfacht):

```json
"subAgents": […],
"subAgentOf": […]
```

Neues Format (vereinfacht):

```json
"subOrganizationOf": {…},
"hasSubOrganizations": […]
```
