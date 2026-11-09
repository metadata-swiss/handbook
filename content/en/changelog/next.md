---
title: Next release
translationKey: next-release
slug: next-release
weight: 10
type: docs
keywords: [I14Y, Interoperability platform I14Y, IOP, Changelog, Releases, Versions, Software development]
draft: false
notification: true
---

The next release of I14Y is planned for the early evening of 2 December 2026. It includes the changes and enhancements described below. I14Y partner organisations with the appropriate access can already test the updated software on the [I14Y acceptance environment](https://input.i14y-a.admin.ch). Please contact the Interoperability Unit if you do not yet have access to this environment used for software testing. Due to major changes to the search infrastructure, this release will remain available on the acceptance environment for testing longer than usual.

Please note that the release date may be postponed at short notice if problems arise. Individual features may be removed from the release and only activated at a later point in time. If you have any questions or issues related to this release, please contact the Competence Center Data Management ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**EU themes are now the standard:** Until now, I14Y used a theme vocabulary based on eCH standard 0122 (see [I14Y theme vocabulary](https://www.i14y.admin.ch/de/catalog/concepts/08da58dc-4dc8-f9cb-b6f2-7d16b3fa0cde)). The opendata.swiss portal, by contrast, uses the [EU theme vocabulary](https://www.i14y.admin.ch/de/catalog/concepts/08dbf1a0-8d10-c75b-a0b4-6a5c2873b2bc). In view of the merger of opendata.swiss and I14Y, theme usage is now being harmonised: from this release onward, I14Y will also use EU themes as standard. Existing I14Y themes can still be used. In addition, domain-specific theme lists can be configured where needed. The Competence Center Data Management will be happy to advise you on this. Specific changes:
- Existing entries were supplemented with matching EU themes using a mapping table. Existing I14Y themes remain in place.
- Filters now use EU themes. If you use links in documents or on websites that contain an encoded filter, those links may need to be updated.
- All scripts for automated data harvesting operated by I14Y were switched to EU themes. Your own scripts should continue to work, but it is advisable to migrate to EU themes going forward.
- Exports now include all assigned themes when multiple controlled vocabularies are used as theme sources.

**Dedicated search service with Elasticsearch:** Search now runs via a separate service using Elasticsearch (instead of Lucene). The ranking of search results has been improved. Fields are now weighted in this order: title/name, identifier, version, keywords, description, contact point, responsible person and deputy. Another criterion is the maturity of the entry: entries with status Preferred Standard are shown first, followed, in this order, by Standard, Qualified, Recorded, Candidate, Initial, Superseded and Retired. Finally, where applicable, the number of reuses is taken into account.

**Email for organisations:** An email address must now be stored for every organisation. A generic group email is preferred (for example info@organisation.org or team@organisation.org). The email address is required so automated metadata changes can be documented in the so-called audit trail (machine-to-machine communication).

**Important change for the Partner API (Breaking Change):** The `GET /agents` endpoint of the Partner API has been aligned with the new data model that will be used in the metadata.swiss project. As part of this, field names were changed. `subOrganizationOf` now contains exactly one parent organisation (instead of a list as before). The previous `subAgents` field, which contains a list of subordinate organisations, has been renamed to `hasSubOrganizations`.

Previous format (simplified):

```json
"subAgents": […],
"subAgentOf": […]
```

New format (simplified):

```json
"subOrganizationOf": {…},
"hasSubOrganizations": […]
```
