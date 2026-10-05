---
title: Next release
translationKey: next-release
slug: next-release
weight: 10
type: docs
keywords: [I14Y, Interoperability platform I14Y, IOP, Changelog, Releases, Versions, Software development]
draft: false
notification: false
---

The next release of I14Y is planned for the early evening of 14 October 2026. It includes the changes and enhancements described below. I14Y partner organisations with the appropriate access can test the updated software immediately on the [I14Y acceptance environment](https://input.i14y-a.admin.ch). Please contact the Interoperability Unit if you do not yet have access to this environment, which is used for software testing.

Please note that the release date may be postponed at short notice if problems arise. Individual features may be removed from the release and only activated at a later point in time. If you have any questions or issues related to this release, please contact the Competence Center Data Management ([i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch)).

**Traceability of changes:** Until now, it was not possible to trace who made which changes to the metadata and when. From now on, whenever users create, modify or delete entries, this is logged automatically. The log records information on the person, the time, the resource concerned and the type of change. For the time being, the logs can only be viewed by the team that runs the platform. Displaying the detailed logs in the management interface is planned for the future metadata.swiss system.

**Partner API performance:** The performance of the Partner API has been measured. To shorten response times when there are very many parallel requests, queries for individual resources are now cached for a short time period. As a result, the API can deliver data reliably and quickly even under exceptionally high numbers of simultaneous requests.

**Filtering by other involved organisations:** Until now, I14Y only allowed filtering by the organisation that publishes a dataset. It is now also possible to filter by organisations that have a different role in relation to the dataset.

**Bug fixes and optimisations**
