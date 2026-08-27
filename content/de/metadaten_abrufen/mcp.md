---
title: MCP-Server
slug: mcp
weight: 30
type: docs
translationKey: mcp
keywords: [I14Y, Interoperabilitätsplattform I14Y, MCP, MCP-Server, Model Context Protocol, KI, Chatbot, Chatbots, Interface]
---

I14Y bietet einen öffentlichen Zugang über das _Model Context Protocol (MCP)_ an. Dadurch können KI-Assistenten und Anwendungen strukturiert auf die Metadaten der Interoperabilitätsplattform zugreifen. Informationen werden damit direkt aus einer verlässlichen Quelle bezogen, was die Qualität der Antworten erhöht und das Risiko von Fehlinterpretationen reduziert. Oder anders gesagt: Dank dem MCP-Server "halluziniert" der Chatbot weniger oft.

{{< alert color="success" title="Was ist das Model Context Protocol (MCP)?" >}}
So genannte _Large Language Models (LLM)_ werden mit sehr grossen Datenmengen trainiert. Dieses Wissen genügt jedoch nicht immer: Die allgemeinen Modelle funktionieren etwa dann nicht, wenn aktuelle, spezifische oder verifizierte Informationen benötigt werden. In solchen Fällen muss eine KI-Applikation auf externe Quellen zugreifen. Eine Suche im Web und das anschliessende Auslesen der gewünschten Informationen ist fehleranfällig.

Genau hier setzt das _Model Context Protocol (MCP)_ an. MCP ist ein offener Standard, mit dem digitale Applikationen externe Datenquellen auf eine einheitliche Weise nutzen können. Damit werden aufwändige Einzelanbindungen überflüssig. Weitere Informationen sind auf der [Website zum MCP-Protokoll](https://modelcontextprotocol.io) zu finden.
{{< /alert >}}

Der MCP-Server macht die öffentlichen I14Y-Metadaten direkt für KI-Anwendungen nutzbar. Dadurch werden Antworten von KI-Chatbots zuverlässiger, die technische Integration wird vereinfacht und bestehende Metadaten sowie Codelisten können in weiteren Anwendungen besser nachgenutzt werden. So kann etwa ein digitaler Assistent Fragen zu Daten aus der öffentlichen Verwaltung der Schweiz zuverlässiger beantworten -- auf Basis der Beschreibungen auf I14Y. Ebenso können KI-gestützte Hilfsprogramme für die Softwareentwicklung direkt auf die Codelisten von I14Y zugreifen.

Der I14Y-MCP-Server ist unter der folgenden URL verfügbar: `https://mcp.i14y.d.c.bfs.admin.ch/mcp`. Eine detaillierte Dokumentation der Funktionalität ist im [Repository auf Github](https://github.com/metadata-swiss/mcp-i14y) zu finden. 

<details>
<summary><strong>So wird MCP mit Mistral genutzt</strong></summary>

Die folgende Anleitung beschreibt das Vorgehen am Beispiel des Chats Vibes von Mistral. Andere KI-Chatbots (z. B. ChatGPT oder Claude) bieten die MCP-Integration ähnlich an. Für die MCP-Unterstützung ist je nach Plattform ein kostenpflichtiges Abonnement erforderlich.

1. Erstellen Sie ein Konto bei [chat.mistral.ai](https://chat.mistral.ai) oder melden Sie sich an.
2. Fügen Sie unter [chat.mistral.ai/connections](https://chat.mistral.ai/connections) einen neuen MCP-Server hinzu, indem Sie folgende Adresse eintragen: `https://mcp.i14y.d.c.bfs.admin.ch/mcp`.
3. Starten Sie einen neuen Chat. Stellen Sie mit einem Klick auf das Pluszeichen sicher, dass der neu konfigurierte Server unter "Konnektoren" aktiviert ist. Stellen Sie Ihre Frage normal im Chat.

</details>

<details>
<summary><strong>So wird MCP mit Mistral genutzt</strong></summary>

Mistral ist ein KI-Chatbot von Mistral AI, der ebenfalls MCP-Connectoren unterstützt. Damit kann der Chat direkt auf den I14Y-MCP-Server zugreifen und aktuelle Metadaten strukturiert abfragen.

1. Öffnen Sie [chat.mistral.ai/connections](https://chat.mistral.ai/connections) und erstellen Sie ein Konto oder melden Sie sich an.
2. Wählen Sie **Benutzerdefinierter MCP-Connector** aus.
3. Tragen Sie als Server-Adresse ein: `https://mcp.i14y.d.c.bfs.admin.ch/mcp`
4. Ergänzen Sie optional eine Beschreibung, zum Beispiel **I14Y MCP-Server**.
5. Bestätigen Sie die Verbindung und wechseln Sie anschliessend in den Chat-Modus.
6. Klicken Sie im Chat auf das **+**-Symbol und aktivieren Sie die neue Quelle **I14Y**.
7. Stellen Sie eine konkrete Frage, zum Beispiel: *«Welche Datensätze zum Thema Bevölkerung sind auf I14Y verfügbar?»*

</details>

<details>
<summary><strong>So wird MCP in einer Entwicklungsumgebung genutzt</strong></summary>

Die folgende Anleitung zeigt die Integration am Beispiel von Visual Studio Code mit GitHub Copilot. Voraussetzung ist ein aktives GitHub Copilot-Abonnement sowie VS Code ab Version 1.99.

1. Öffnen Sie in VS Code das Projektverzeichnis, in dem Sie den MCP-Server nutzen möchten.
2. Erstellen Sie im Projektordner die Datei `.vscode/mcp.json` (falls sie noch nicht vorhanden ist). Sie können sie über **Datei → Neue Datei** anlegen oder direkt im Explorer-Panel mit Rechtsklick auf den Ordner `.vscode`.
3. Fügen Sie folgenden Inhalt ein und speichern Sie die Datei:

```json
{
  "servers": {
    "i14y": {
      "type": "http",
      "url": "https://mcp.i14y.d.c.bfs.admin.ch/mcp"
    }
  }
}
```

4. Öffnen Sie das Copilot Chat-Panel (**Ansicht → Copilot Chat** oder das Chat-Symbol in der Seitenleiste).
5. Wechslen Sie im Chat-Panel oben in den Modus **Agent** (Auswahlmenü neben dem Eingabefeld).
6. Klicken Sie auf das **Werkzeug-Symbol** (🔧), um zu prüfen, ob der I14Y-Server als Tool aufgeführt ist.
7. Stellen Sie eine Frage, die explizit auf I14Y-Daten Bezug nimmt, zum Beispiel: *«Welche Codelisten zu Kantonen sind auf I14Y verfügbar?»*

</details>

