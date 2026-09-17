---
title: Metadaten pflegen
slug: pflegen
weight: 60
type: docs
translationKey: metadata-maintenance
keywords: [I14Y, Interoperabilitätsplattform I14Y, Interoperabilität, Datenpflege, Daten pflegen, Local Data Steward, Schweiz]
---

Metadaten stiften Verwirrung, wenn sie falsch oder veraltet sind. Daher sollten die Beschreibungen der Datenangebote auf der Interoperabilitätsplattform I14Y stets aktuell sein. Dies ist eine zentrale Aufgabe der lokalen Datenverantwortlichen in den Organisationen. Als _Local Data Steward_ sollten Sie mindestens einmal jährlich alle Einträge auf Aktualität und Richtigkeit prüfen.

Sofern die Einträge nicht öffentlich publiziert sind und noch den Status _Initial_ haben, lassen sie sich einfach anpassen. Bei der Nutzung der Weboberfläche klicken Sie dazu auf die Kachel «Katalog pflegen», wählen Sie den Eintrag aus, klicken Sie auf das Symbol «Betrachten» und anschliessend auf «Bearbeiten».

{{< alert color="warning" title="Vorsicht bei Änderungen an publizierten Einträgen" >}}
Bei Einträgen, die bereits publiziert sind oder die intern als Referenz genutzt werden, sollten Sie bei Adaptionen grosse Vorsicht walten lassen. Dies gilt insbesondere für Konzepte des Typs Codeliste, die automatisiert in Fremdsystemen genutzt werden können (z. B. Fachapplikationen oder Schnittstellen zu Drittsystemen). Wird bei einer Codeliste ein Code entfernt oder umbenannt, kann dies Auswirkungen auf die vom Fremdsystem erfassten Daten haben (z. B. fehlerhafte Zuordnungen oder ungültige Werte). Geänderte Definitionen wiederum können zu Problemen mit der Datenqualität führen (z. B. inkonsistente Auswertungen oder widersprüchliche Kennzahlen).
{{< /alert >}}

Beschreibungen von Datensätzen, die zur Publikation auf I14Y vorgeschlagen sind, können nicht angepasst werden. Damit soll verhindert werden, dass während der Validierungsarbeiten der Interoperabilitätsstelle Änderungen vorgenommen werden. Nach der Publikation sind kleinere Anpassungen, etwa in der Beschreibung, möglich. Für grössere Änderungen sollte das Objekt versioniert werden. Bei Codelisten ist besondere Vorsicht geboten: Bei bereits publizierten (und genutzten) Listen dürfen keine Codes entfernt werden. Im Zweifelsfall erstellen Sie eine neue Version. Kontaktieren Sie das I14Y-Team, wenn Sie unsicher sind, wie vorzugehen ist.

{{< alert color="warning" title="Hauptidentifikator ist nach Publikation stabil" >}}
Bei bereits publizierten Einträgen darf der erste Identifikator (Hauptidentifikator) nachträglich nicht geändert werden. Der Grund: Dieser Identifikator wird in der URL (Permalink) verwendet. Ein stabiler Permalink ist essentiell, damit externe Links und Referenzen langfristig gültig bleiben. 

Das System speichert Identifikatoren als geordnete Liste (Array). Zusätzliche Identifikatoren können nach der Publikation noch ergänzt werden -- nur der erste Identifikator bleibt für alle Objekte (Datensätze, APIs, Behördenleistungen, Konzepte, Mapping-Tabellen) unwandelbar.

Bei Problemen mit bestehenden Identifikatoren nehmen Sie [Kontakt mit der Interoperabilitätsstelle](mailto:i14y@bfs.admin.ch) auf.
{{< /alert >}}