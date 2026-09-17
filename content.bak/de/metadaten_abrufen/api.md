---
title: Elektronische Schnittstelle (API)
slug: api
weight: 20
type: docs
translationKey: i14y-api-public
keywords: [I14Y, Interoperabilitätsplattform I14Y, I14Y-API, API, Application Programming Interface, elektronische Schnittstelle, Automatisierung]
---

Die Interoperabilitätsplattform I14Y stellt zwei elektronische Schnittstellen zur Verfügung, so genannte _Application Programming Interfaces (APIs)_:

- **Public API**: Ermöglicht den **Abruf** von öffentlich publizierten Metadaten zu Datensätzen, elektronischen Schnittstellen, Behördenleistungen und Konzepten ohne Authentifizierung. Diese API richtet sich an alle Interessierten, die auf öffentliche I14Y-Metadaten zugreifen möchten.

- **Partner API**: Ermöglicht autorisierten Personen, etwa _Local Data Stewards_, das **Erfassen, Bearbeiten und Löschen** von Metadaten mittels API-Zugriff. Um diese API zu nutzen, ist eine Authentifizierung erforderlich. Weitere Informationen zur Partner API finden Sie im Kapitel [Datenerfassung über die elektronische Schnittstelle](/handbook/de/publikation/api/).

Diese Seite fokussiert auf die Public API zum Abruf von Metadaten.

## Verfügbare Metadaten

Über die Public API sind folgende Informationen abrufbar:

- **Katalogdaten**: Metadaten zu Datensätzen, elektronischen Schnittstellen (APIs) und Behördenleistungen
- **Konzepte**: Definitionen zu Datenelementen inklusive Codelisten

Die API ermöglicht es unter anderem, Inhalte ab der Plattform direkt in eine Fachanwendung zu integrieren. So könnten etwa die Codelisten zur Berufsnomenklatur oder zu den Gemeindenummern an jene Webapp angebunden werden, über die in einer Befragung oder in einem Geschäftsprozess Daten erfasst werden. Die Interoperabilitätsplattform empfiehlt eine Zwischenspeicherung (_Caching_), falls I14Y an eine produktive Applikation angebunden wird.

```python
import requests

concept_id = "08da7a0f-978f-8ca7-93a6-6f0f9a056cbc"
url = f"https://api.i14y.admin.ch/api/public/v1/concepts/{concept_id}?includeCodeListEntries=true"

response = requests.get(url)
data = response.json()
print(data)
```

**Code-Beispiel:** Abrufen einer Codeliste von I14Y mit der Skriptsprache Python.

Die Public API ist in der [Swagger UI](https://apiconsole.i14y.admin.ch/public/v1/index.html) vollständig dokumentiert. Für die Nutzung ist keine Authentifizierung erforderlich. Nachfolgend werden einzelne besonders oft genutzte Endpunkte kurz beschrieben.  

| Ressource | Endpunkt | Beschreibung |
|-----------|----------|--------------|
| **Datensatz** | `GET /datasets/{id}` | Ruft die Metadaten eines bestimmten Datensatzes ab. |
| **Behördenleistung** | `GET /publicservices/{id}` | Ruft die Metadaten einer bestimmten Behördenleistung ab. |
| **Elektronische Schnittstelle** | `GET /dataservices/{id}` | Ruft die Metadaten einer bestimmten elektronischen Schnittstelle (API) ab. |
| **Konzept** | `GET /concepts/{id}` | Ruft die Metadaten eines bestimmten Konzepts (z.B. Codeliste) ab. |

Das Angebot an Endpunkten wird weiter ausgebaut. Das Kompetenzzentrum Datenbewirtschaftung steht Ihnen bei Fragen und Wünschen zu den Endpunkten gerne zur Verfügung. Kontaktieren Sie uns unter [i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch).

{{<alert title="Fair Use der Public API" color="warning" >}}

Die Nutzung der Public API unterliegt untenstehenden _Fair Use_-Richtlinien. Diese dienen der Sicherstellung eines stabilen und gleichberechtigten Zugangs für alle Nutzenden.

- Die Nutzung kann zum Zweck der Lastüberprüfung protokolliert werden.
- Die Anzahl der Transaktionen pro Nutzende oder Organisation kann jederzeit limitiert werden.
- Beim Anbinden an eine Fachapplikation wird die Nutzung eines Zwischenspeichers (Cache) empfohlen.
- Eine besonders umfangreiche oder intensive Nutzung ist mit dem [Kompetenzzentrum Datenbewirtschaftung](mailto:i14y@bfs.admin.ch) vorgängig abzusprechen.

{{</alert>}}