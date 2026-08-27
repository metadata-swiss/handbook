---
title: Toolbox
slug: i14y-toolbox
weight: 60
type: docs
translationKey: toolbox
keywords: [I14Y, Interoperabilitätsplattform I14Y, Interoperabilität, Toolbox, Hilfsprogramme, Miniapplikationen, Excel Upload, Keyword Generator, Concept Import, Swagger, SHACL, Schweiz]
---

Das Kompetenzzentrum Datenbewirtschaftung (KDB) des BFS bietet in der [I14Y-Toolbox](https://toolbox.i14y.admin.ch) einfache Webanwendungen an, die das Dokumentieren von Daten in bestimmten Fällen erleichtern. Damit können beispielsweise Metadaten oder Konzepte aus Daten extrahiert, Textelemente automatisch übersetzt oder Inhalte mithilfe künstlicher Intelligenz generiert werden. So erhalten _Submitter_ oder _Local Data Stewards_ schnell eine erste Version eines Eintrags, den sie anschliessend prüfen, bearbeiten publizieren können.

Die Anwendungen basieren teilweise auf Skripten aus dem [I14Y-GitHub-Repository](https://github.com/metadata-swiss). Der Vorteil der Toolbox: Es ist keine lokale Python-Umgebung erforderlich. Die  Skripte können direkt über das Web-Frontend genutzt werden.

Die Webanwendungen der I14Y-Toolbox sind experimentell. Sie sind nicht stabil und werden bei Bedarf weiterentwickelt. Teile des Codes sind automatisch generiert. Das Kompetenzzentrum Datenbewirtschaftung übernimmt keine Verantwortung und bietet keinen Support. Das Hosting kann ausserhalb der Infrastruktur des Bundes erfolgen. Der Quellcode und die Anleitungen sind auf GitHub verfügbar und lassen sich über den Link in der jeweiligen Kachel aufrufen. Alle Anwendungen können bei Bedarf auch lokal ausgeführt werden.

{{< alert color="warning" title="Nicht geeignet für sensible Daten" >}}

Einige Anwendungen ermöglichen das Hochladen von Daten, um daraus Metadaten zu generieren. Laden Sie keine nicht-öffentlichen oder geschützten Daten hoch.

Falls Sie eine der Anwendungen mit sensiblen Daten nutzen möchten, haben Sie zwei Möglichkeiten:
- Laden Sie den Code über den GitHub-Link herunter, prüfen Sie ihn und führen Sie ihn lokal aus.
- Arbeiten Sie mit einem gleich strukturierten Test-Datensatz statt mit den echten Daten.

{{< /alert >}}

Haben Sie Vorschläge für weitere nützliche Anwendungen? Schreiben Sie  an [i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch). Möchten Sie eine der Anwendungen verbessern oder erweitern? Reichen Sie Ihre Änderungen als Pull-Request auf Github ein.

## Verfügbare Anwendungen

- **Excel Upload**: Importieren Sie Ihr Excel-basiertes Dateninventar einfach auf die Interoperabilitätsplattform I14Y.
- **Keyword Generator**: Erstellen Sie Schlagwörter, um Ihre Datensatzbeschreibungen auf I14Y zu verbessern.
- **Concept Import**: Importieren Sie Konzepte aus einer Tabelle auf I14Y.
- **Swagger to I14Y**: Generieren Sie aus Ihrer technischen API-Spezifikation (Swagger) eine API-Beschreibung auf I14Y.
- **Convert to SHACL**: Erstellen Sie eine SHACL-Beschreibung der Datenstruktur. Nutzen Sie dazu ihre Datensätze, z.B. in Form einer einer CSV-Datei.
- **SHACL-Editor**: Beschreiben oder bearbeiten Sie Datenstrukturen manuell mit dem SHACL-Struktureditor.
- **Harmonization Graph**: In welcher Datenstruktur werden welche eigenen oder fremden Konzepte verwendet? Mit der Visualisierung lassen sich die Beziehungen zwischen Datensätzen, Datenelementen und Konzepten grafisch darstellen.