---
title: Datenerfassung per API
slug: i14y-api
weight: 70
type: docs
translationKey: i14y-api-partner
keywords: [I14Y, Interoperabilitätsplattform I14Y, I14Y, Interoperabilität, API, elektronische Schnittstelle, automatisiert, Endpunkte, Swagger, Schweiz]
---

Die Interoperabilitätsplattform I14Y bietet zwei elektronische Schnittstellen (APIs) an. Über diese lassen sich sämtliche Funktionen, die auch im Web-Interface verfügbar sind, programmatisch ausführen -- bei Bedarf vollständig automatisiert. Eine API ist insbesondere dann sinnvoll, wenn Metadaten regelmässig in grösseren Mengen abgerufen oder publiziert, Prozesse in bestehende Systeme integriert oder wiederkehrende Aufgaben ohne manuelle Schritte umgesetzt werden sollen.

I14Y bietet zwei APIs an: 

- **Public API**: Mit der öffentlichen API rufen Sie öffentlich publizierte Metadaten auf I14Y ab, ohne dass ein Authentifizierungstoken erforderlich ist.
- **Partner API**: Die Partner-Schnittstelle kann von Organisationen genutzt werden, die I14Y aktiv zur Publikation von Metadaten nutzen. Via diese Schnittstelle können -- zusätzlich zu den öffentlichen -- auch organisationsinterne Metadaten abgerufen, bearbeitet und publiziert werden. Dazu ist ein Authentifizierungstoken erforderlich (siehe unten).

## API-Dokumentation

Alle Informationen zu den APIs sind unter [https://apiconsole.i14y.admin.ch](https://apiconsole.i14y.admin.ch) zu finden. Dort stehen auch technische Dokumentationen (Swagger UI) zur Verfügung, in denen die einzelnen Attribute im Detail beschrieben werden:

- [Public API - Swagger UI](https://apiconsole.i14y.admin.ch/public/v1/index.html)
- [Partner API - Swagger UI](https://apiconsole.i14y.admin.ch/partner/v1/index.html)

Weitere Informationen zu den einzelnen Feldern sind im Anhang unter [Eingabefelder](/handbook/de/anhang/eingabefelder) zu finden. Wie die Endpunkte praktisch genutzt werden können, wird in den Tutorials im [I14Y-Github-Repository](https://github.com/metadata-swiss/tutorials) gezeigt.

## Authentifizierung

Um die Partner-API nutzen zu können, benötigen Sie ein Authentifizierungstoken. Dieser kann der Anfrage entweder manuell mitgegeben werden. Alternativ steht auch ein Maschine-zu-Maschine-Token für vollautomatisierte Prozesse zur Verfügung. 

### User-Token

Bei einer manuellen API-Abfrage müssen Sie das eigene Token mitgeben, das nach dem Einloggen auf I14Y erstellt wird. Gehen Sie wie folgt vor: Loggen Sie sich im [internen Bereich](https://input.i14y.admin.ch) der Plattform ein. Klicken Sie oben rechts auf das Personensymbol. Kopieren Sie das technische Token. Geben Sie dieses Token bei Ihren Anfragen an die API mit.

### Maschine-zu-Maschine-Token (M2M-Token)

Ein Maschine-zu-Maschine-Token ist nötig, wenn Sie den Bezug oder die Publikation von Metadaten vollständig automatisieren möchten, Skripte oder Anwendungen betreiben, die regelmässig und automatisiert auf die API zugreifen, oder keine manuelle Eingabe des User-Tokens bei jedem API-Aufruf durchführen möchten.

**Vorgehen zur Beantragung eines M2M-Tokens:**

1. Senden Sie eine E-Mail an das [Kompetenzzentrum Datenbewirtschaftung](mailto:i14y@bfs.admin.ch) mit folgenden Informationen:
   - kurze Erklärung zu Ihrem Vorhaben
   - Name der Organisation
   - erwartetes Zugriffsvolumen (ungefähre Anzahl API-Aufrufe)

2. Das Kompetenzzentrum Datenbewirtschaftung liefert Ihnen anschliessend:
   - den Namen eines technischen Nutzers
   - ein Passwort
   - einige Zeilen Code

3. Mit diesen Informationen kann Ihr Skript automatisiert ein gültiges Token beziehen.

### Identifikation von automatisierten Clients (User-Agent)

Bei der Nutzung der API mit automatisierten Clients, insbesondere bei der Verwendung von _Machine to Machine Tokens_, sollte ein aussagekräftiger _User Agent Header_ übermittelt werden. Diese Angabe ermöglicht es dem Kompetenzzentrum Datenbewirtschaftung und der Gruppe Metadatenplattform, die Nutzung der API besser zu verstehen und technische Probleme effizienter zu analysieren. Zudem erleichtert sie die Kontaktaufnahme mit der betreibenden Organisation einer Anwendung, falls ungewöhnliche Nutzungsmuster, Fehlkonfigurationen oder technische Probleme festgestellt werden.

Der _User Agent_ sollte Informationen enthalten, die den verwendeten Client oder die Anwendung  identifizieren. Bewährt hat sich ein Format, das den Namen der Anwendung oder des Dienstes sowie den Namen der nutzenden Organisation enthält. Die Angabe einer Kontaktadresse ist freiwillig, wird jedoch empfohlen, damit bei technischen Problemen oder auffälligem Verhalten eine rasche Rückmeldung möglich ist. Die Kontaktinformation wird ausschliesslich zu diesem Zweck verwendet. 

```
User-Agent: <ApplicationName>/<Version> (<Organisation>; contact: <E-Mail>)
```

Das folgende Beispiel zeigt einen API-Aufruf mit einem User-Agent als CURL-Befehl sowie in Python. Einzufügen ist das Token, zu ersetzen sind die Angaben in _User-Agent_.  

**CURL:**

```bash
curl -X GET "https://api.i14y.admin.ch/partner/v1/datasets/BUILDING_DWELLING_MASTER_DATA" \
  -H "Authorization: Bearer <ACCESS_TOKEN>" \
  -H "User-Agent: DataPortalSync/1.2 (i14y; contact: i14y@bfs.admin.ch)" \
  -H "Accept: application/json"
```

**Python:** 

```python
import requests

url = "https://api.i14y.admin.ch/partner/v1/datasets/BUILDING_DWELLING_MASTER_DATA"

headers = {
    "Authorization": "Bearer <ACCESS_TOKEN>",
    "User-Agent": "DataPortalSync/1.2 (i14y; contact: i14y@bfs.admin.ch)",
    "Accept": "application/json"
}

response = requests.get(url, headers=headers)
```