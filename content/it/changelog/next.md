---
title: Prossimo rilascio
translationKey: next-release
slug: prossimo-rilascio
weight: 10
type: docs
keywords: [I14Y, Piattaforma di interoperabilità I14Y, IOP, Changelog, Releases, Versioni, Sviluppo software]
draft: true
---

{{<alert title="Language" color="warning">}}
__IT:__ Questa pagina è disponibile solo in inglese.
{{</alert>}}

The next release of I14Y is planned for the early evening of 12 August 2026. It includes the changes and enhancements described below. I14Y partner organisations with the appropriate access can test the updated software immediately on the [I14Y acceptance environment](https://input.i14y-a.admin.ch). Please contact the Interoperability Unit if you do not yet have access to this environment, which is used for software testing.

Please note that the release date may be postponed at short notice if problems arise. Individual features may be removed from the release and only activated at a later point in time. If you have any questions or issues related to this release, please contact the Competence Center Data Management ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

{{<alert title="Note on open source publication" color="warning">}}
The publication of our codebase as open source has been postponed to a later date. It is expected to take place at the end of August.
{{< /alert >}}

**Capture of data structures:** Previously, structures had to be created externally and then uploaded to I14Y. Now simple structures (a class with attributes) can be captured directly in the I14Y interface.

**Better tagging of deprecated concepts:** Normally concepts are versioned when changes are made. It is also possible, however, for one concept to be replaced by another. In this case, the status of the previous concept is set to "deprecated". Now the currently valid concept can document which other concepts it has replaced. This information appears in the "Lineage" section of the entry.

**Extensive export options:** JSON exports are now available for all resources. This also covers interface descriptions, mapping tables and public services.

**Improved filter:** The publisher filter allows multiple publishers to be selected at once. Previously only one publisher could be selected.

**Multiple coverages for datasets:** Dataset descriptions can now record multiple temporal and spatial coverages.

**Partner API:** POST requests to generate codeliste entries, mapping table relations or catalogue entries can now contain multiple objects. The public available information on Organisations can be exported in RDF format.

**Bug fixes**