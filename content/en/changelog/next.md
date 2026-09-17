---
title: Next release
translationKey: next-release
slug: next-release
weight: 10
type: docs
keywords: [I14Y, Interoperability platform I14Y, IOP, Changelog, Releases, Versions, Software development]
draft: true
notification: false
---

The next release of I14Y is planned for the early evening of 2 September 2026. It includes the changes and enhancements described below. I14Y partner organisations with the appropriate access can test the updated software immediately on the [I14Y acceptance environment](https://input.i14y-a.admin.ch). Please contact the Interoperability Unit if you do not yet have access to this environment, which is used for software testing.

Please note that the release date may be postponed at short notice if problems arise. Individual features may be removed from the release and only activated at a later point in time. If you have any questions or issues related to this release, please contact the Competence Center Data Management ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Interaction with LINDAS:** When concepts and datasets are published on I14Y, they are made available in the Federal Administration's Linked Data Service (LINDAS), usually in the I14Y graph. Selected metadata and codelists can be copied to central LINDAS graphs as shared dimensions. The corresponding links will now be displayed on the publicly accessible I14Y website.

**Structures:** Datasets have a structure that groups their individual attributes. For each attribute, it is possible to specify whether it is based on a particular shared definition, known as a concept. A new button now simplifies the creation of attributes: if a suitable concept exists, the information stored in it can be imported into the attribute with a single click.

**Usability improvements:** The display of links to external resources has been improved: an icon now makes them recognisable at first glance.

**Updates to links to the handbook and GitHub:** As part of the metadata.swiss project, the `i14y-ch` GitHub organisation was renamed `metadata-swiss` (see the [news article](/de/news/#der-github-bereich-von-i14y-wird-zu-metadata-swiss)). This release updates links from the I14Y website to GitHub and to the I14Y handbook hosted there.

**Bug fixes:** If an organisation has no name in the language selected by the user, its name in another language is displayed instead. This fallback ensures that a name is always shown. A bug affecting distribution URLs in the RDF export has also been fixed.
