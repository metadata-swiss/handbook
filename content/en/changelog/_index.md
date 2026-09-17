---
title: Changelog
slug: changelog
translationKey: changelog
weight: 80
type: docs
keywords: [I14Y, Interoperabilitätsplattform I14Y, IOP, Changelog, Releases, Versionen, Software-Entwicklung]
---

The I14Y interoperability platform is under continuous development. New features are added with each release. Bugs are also fixed. The most important changes are briefly documented below. For detailed information on the development of the platform, please contact the [I14Y team](mailto:i14y@bfs.admin.ch). 

## Release September 2 2026

**Interaction with LINDAS:** When concepts and datasets are published on I14Y, they are made available in the Federal Administration's Linked Data Service (LINDAS), usually in the I14Y graph. Selected metadata and codelists can be copied to central LINDAS graphs as shared dimensions. The corresponding links will now be displayed on the publicly accessible I14Y website.

**Structures:** Datasets have a structure that groups their individual attributes. For each attribute, it is possible to specify whether it is based on a particular shared definition, known as a concept. A new button now simplifies the creation of attributes: if a suitable concept exists, the information stored in it can be imported into the attribute with a single click.

**Usability improvements:** The display of links to external resources has been improved: an icon now makes them recognisable at first glance.

**Updates to links to the handbook and GitHub:** As part of the metadata.swiss project, the `i14y-ch` GitHub organisation was renamed `metadata-swiss` (see the [news article](/de/news/#der-github-bereich-von-i14y-wird-zu-metadata-swiss)). This release updates links from the I14Y website to GitHub and to the I14Y handbook hosted there.

**Bug fixes:** If an organisation has no name in the language selected by the user, its name in another language is displayed instead. This fallback ensures that a name is always shown. A bug affecting distribution URLs in the RDF export has also been fixed.

## Adaptation of the GitHub repository

As part of the metadata.swiss project, I14Y’s GitHub space will soon be renamed metadata-swiss. Existing addresses will continue to redirect; we recommend gradually updating your references and local Git repositories. Further information is available in the [News article about the new GitHub space](/de/news/#der-github-bereich-von-i14y-wird-zu-metadata-swiss).

## Release August 12 2026

**Capture of data structures:** Previously, structures had to be created externally and then uploaded to I14Y. Now simple structures (a class with attributes) can be captured directly in the I14Y interface.

**Better tagging of deprecated concepts:** Normally concepts are versioned when changes are made. It is also possible, however, for one concept to be replaced by another. In this case, the status of the previous concept is set to "deprecated". Now the currently valid concept can document which other concepts it has replaced. This information appears in the "Lineage" section of the entry.

**Extensive export options:** JSON exports are now available for all resources. This also covers interface descriptions, mapping tables and public services.

**Improved filter:** The publisher filter allows multiple publishers to be selected at once. Previously only one publisher could be selected.

**Multiple coverages for datasets:** Dataset descriptions can now record multiple temporal and spatial coverages.

**Partner API:** POST requests to generate codeliste entries, mapping table relations or catalogue entries can now contain multiple objects. The public available information on Organisations can be exported in RDF format.

**Bug fixes**

## Release July 8 2026

**Organisation logo:** Since the last release, a logo or photo can be stored for each organisation. These images are now displayed on the Organisations page.

**Tabular view of data structures:** Data structures can now also be displayed as a table instead of a UML diagram. In some cases, the table view is more suitable for getting a quick overview of the structure of a dataset.

**Improved navigation:** A new Back button is now available above the detail view of an entry. It allows users to jump back to the list of filtered search results. Until now, users had to use the browser's Back button.

**More information in overview lists:** The list of entries now includes chips for the themes and the formats of the attached distributions.

**RDF export enhancement:** The RDF export, which is used in particular for harvesting a data catalogue, now includes the `coverage` attribute in the area of distributions.

**API adjustment:** In the electronic interface (API), the field `identifier` was previously used for concepts and public services. It contained a string. This field has now been fully replaced in this release by `identifiers`, which contains a list of strings. Existing integrations for reading or writing concepts or public services must be adapted without exception. Please read the corresponding [News article](/de/news/#breaking-change-auf-der-i14y-api).

**Bug fixes:** Incorrect results in the My Data area in the platform's internal section have been corrected. A layout issue on the codelist entries page has been fixed, and several typos in the user interface have been corrected.

**Note:** The open source publication of the I14Y codebase has, contrary to the earlier announcement, been postponed to a later date because one remaining dependency is not compatible with the MIT licence.

## Release June 17 2026

**Organisation logo:** The I14Y team can now store a logo or another image (for example, a photo of a building) for each organisation and link it to that organisation. This enhancement was developed as part of the work on the new version of opendata.swiss and will also be used for the future metadata.swiss platform. Please [contact the I14Y team](mailto:i14y@bfs.admin.ch) if you would like to provide an image or replace an existing one.

**API for organisations:** Basic information on recorded organisations can now be retrieved through both the Partner API and the Public API. Links to organisation logos are also available through these interfaces.

**Better overview for data providers:** The start page of the internal I14Y area has been improved. In the My Data column, entries are now shown if the signed-in person is listed as (deputy) contact person or as data owner. This allows users to access the entries relevant to them more quickly.

**Stable first identifier:** I14Y allows multiple identifiers to be stored. The first identifier of an entry for a dataset, concept, mapping table, API, or public service can no longer be changed once the entry has been published publicly for the first time. This ensures that public permalinks remain permanently valid.

**Export of filtered codelists:** Filtered entries of a codelist can now be exported directly from the user interface.

**Optional date fields for concepts:** The Valid from and Valid to fields are now optional for concepts and mapping tables.

**Deputy contact person:** The deputy contact person field is now optional. It is no longer possible to enter the same person as in the contact person field.

**Bug fixes**

## Release May 27 2026

**Creation type is now visible publicly:** The public user interface now shows when an entry was created and last modified, as well as whether it was created manually or automatically. This field was introduced in the last release.

**Creation type in the admin area:** The admin area now shows a warning when an entry was created automatically. This helps prevent accidental manual edits of entries that are regularly overwritten by automated processes.

**Reuse of concepts:** The concept detail page now shows how often a concept is used in data structures, including links to the relevant datasets. The catalog page also shows this number in a chip.

**Official I14Y URIs:** I14Y now provides stable URIs for classes, attributes and associations. Machine access to these URIs redirects to the linked data object, while browser access redirects to the corresponding page in I14Y.

**Small UX improvements**

**Bug fixes**

## Release May 6 2026

**Editing structures in the user interface:** Classes, attributes and associations of a data structure can now be edited directly in the user interface. All properties displayed in the sidebar are editable. When editing an attribute, it is also possible to search for a concept and link to a specific version.

**System metadata in the Partner API:** All objects now include a "system" section in the JSON responses of the Partner API. It contains the creation date (`createdAt`), the date of the last modification (`modifiedAt`) and the creation type (`creationType`). The latter indicates whether an object was created manually via a browser token (_Manual_) or automatically via an M2M token (_Automated_).

**Multiple identifiers for concepts and public services:** Concepts and public services can now carry multiple identifiers. For this purpose, the `identifiers` property has been introduced as an array. To avoid disrupting existing integrations, the previous `identifier` field will continue to be returned for the time being; both fields appear in API responses at the same time. Note: the `identifier` field (singular) will be removed in a future release. Scripts that use this field when creating objects will need to be updated in time.

**Create a new version of a mapping table:** It is now possible to create a new version from an existing mapping table.

**Catalog search via the Partner API:** The endpoint for catalog search is now also available via the Partner API. The search supports various parameters such as query term and language.

**Extended editing rights for submitters:** Submitters can now edit objects with the registration status "Initial" or "Candidate", even if they are already publicly published. The condition is that they must not have been locked beforehand.

**Distributions on the dataset detail page:** Distributions belonging to a dataset are now displayed directly on the dataset description page.

**Export of codelists without annotations:** Codelists can now optionally be exported without annotations; the supported formats are JSON and CSV.

**Technical updates as well as minor improvements and bug fixes**

## Release March 25 2026

**Mapping tables:** With this release, mapping tables are introduced on the interoperability platform. They serve to document similarities and differences between the values of two codelists. Mapping tables are normal objects on I14Y: they are discoverable via search and filters, and can be viewed both on the public platform and in the administration interface. Via the administration interface or the API, mapping tables can also be created and edited; an import function is also available.

**Clickable «Conforms to» links:** For each data element it can be documented whether it is based on a foundational concept. To do so, a link is stored in the SHACL structure in the «Conforms to» field. Previously, these IRIs were only displayed in the attribute sidebar; they are now clickable.

**Sorted versions:** For versioned concepts, a table listing the available versions of the concept is displayed. Entries are now shown in descending order, which simplifies navigation through the concept history.

**Various bug fixes**

## Release February 25 2026

- **IRIs for all objects:** In the previous release, _International Resource Identifiers (IRIs)_ were introduced for concepts. These are stable, unique addresses that allow content to be linked reliably. With this release, all remaining object types on I14Y also receive their own IRIs. This includes codelist entries (codes), datasets, data services and public services. The IRIs are shown on the respective detail pages in the user interface. For codelist entries that are published on the LINDAS platform, the IRIs point to the information available on LINDAS. For datasets, data services and public services there is no content directly on LINDAS, but they still have a stable, machine‑readable address. In the technical RDF exports, for example to opendata.swiss, these new IRIs replace the URLs that were used previously. For most users, day‑to‑day work does not change, but links to I14Y content become more robust and easier to process automatically.

- **Filter datasets with structure:** The catalogue search now offers a new filter. It allows the result list to be restricted to dataset entries that have a structure attached. This makes it easier to quickly identify datasets that can serve as a basis for harmonisation work.

- **First step towards mapping tables between codelists:** To make similarities and differences between two codelists easier to understand, I14Y is introducing mapping tables. In a first step, these tables are visible as dedicated detail pages in the I14Y input view. They can be viewed there but cannot yet be edited, and they are not yet available via the standard catalogue search. This allows initial experience to be gathered on how to represent relationships between codelists before the feature is further expanded and integrated into the rest of the user interface.

- **API monitoring on the dashboard:** I14Y provides data via both a public API and a partner API. The I14Y dashboard now displays simple metrics on the use of these interfaces, for example how many requests per day are made by selected user agents. This gives organisations a better overview of how strongly the APIs are used and helps them react more easily if unusual patterns occur.I per i partner.

- **Stricter rules for identifiers:** All objects on I14Y, such as datasets, codelists or data services, have an identifier. This identifier is used, among other things, in IRIs and technical interfaces. To make sure these identifiers work reliably with the new IRI resolver, the set of allowed characters has been restricted. Certain special characters are no longer permitted. Only letters (A–Z, a–z), digits (0–9) and the characters dot (.), underscore (_), tilde (~), at sign (@) and hyphen (-) are allowed. Technically, this corresponds to the pattern `^[A-Za-z0-9._~@-]+$`. For users, this means that error messages may appear when entering or editing identifiers if disallowed special characters are used. In such cases, the system will point out the problem with a validation message.

- **Improvements to search results:** The I14Y search has been further refined so that important content is easier to find. Entries that are marked as a standard or preferred standard are now given a higher weight when sorting search results and therefore appear more prominently. In addition, it is now possible to search explicitly by data owner. This makes it easier to find datasets or services.

## Release January 28 2026

- **Permalinks for concepts:** A so-called _International Resource Identifier (IRI)_ is now displayed on the detail pages of published concepts. The _Linked Data_ area of the federal government is used for this stable and unique identifier, also known as a permalink. The permalink is composed of the system-internal identifier and the version of the concept: `https://register.ld.admin.ch/i14y/concept/{concept-identifier}/version/{version}`. An IRI is only generated once a concept is published; internal concepts do not have such a permalink.
- **Extension of the RDF export:** Descriptions of data records are also available in RDF format via the electronic interface (API). This enables the automated reading of the contents of a catalogue (known as _harvesting_). The RDF export has now been supplemented with additional information on the distribution type.
– **More information in the graph view:** The structure of a data record is displayed graphically on I14Y. This display now also shows the units of measurement for attributes, if the relevant information has been entered.
- **Improved filters:** The options in filters are now better organised. Some are sorted according to business criteria (e.g. the status filter), while others are in alphabetical order (e.g. the filter for life situations).
- **Bug fixes:** Several bugs have been fixed. Among other things, large code lists can now be uploaded more quickly again.

## Release January 7 2026

- **Keywords linked to predefined concepts**: Keywords can now be linked to unique designations from controlled vocabularies. Technically, this is done via an additional text field (`uri`). _Attention: This changes the structure of the data returned by the public and partner API._ This change has been approved by the Steering Committee.
- **Improved display of allowed values**: In the data structures, the allowed values of a field can be defined. As soon as the corresponding field is clicked in the visualisation, the allowed values are now also displayed in the sidebar. This makes it easier to see which values are permitted per field.
- **Improved catalogue search**: The search in the catalogue has been further expanded. It no longer distinguishes between upper and lower case. It also takes into account the additional fields contact person and deputy contact person, contact point as well as the identifiers of the objects.
- **Internal improvements and bug fixes**

## Release November 27 2025

This release marks a significant infrastructure change: The I14Y interoperability platform is now operated in the public cloud (Azure, sourced via the Federal Office of Information Technology [BIT]). Additionally, the code is now managed on GitHub. Due to the new infrastructure, various technical details in the I14Y code had to be adapted.

Additional features:
- **Enhanced search functionality**: The Partner and Public API now offer an endpoint for searching code list entries.
- **Catalog record management**: New endpoints in the Partner and Public API enable retrieval of entries from DCAT catalogs.
- **Improved catalog export**: The GET endpoint for catalog export has been refactored. The desired format (RDF or TTL) can now be requested via a parameter.
- **Bug fixes**: Various bugs have been fixed to improve stability and user-friendliness.

## Release October 22 2025
- **Improved editing masks**: The Save button is now active by default. Previously, it was only activated after changes were made to the metadata. Clicking the button helps identify incomplete metadata: the corresponding fields are outlined in red. 
- **Clearer organisation page**: Organisations that have not yet published metadata publicly will no longer be displayed on the [organisation page](https://www.i14y.admin.ch/de/organisations).
- **Simplified entry of public services**: Previously, entering government services usually required two steps: first, the basic description of the public service was recorded. Then, on a second form, the link or channel was added. Now, the basic description and links can be entered using a single form. This allows public services to be recorded more quickly and efficiently. 
- **New filtering options**: Thanks to the new Concept Type filter, it is now possible to filter specifically for concepts with certain types. For example, a search can be limited to all code lists. 
- **Internal improvements and bug fixes**

## Release September 24 2025
- A detailed technical description of the data structure can be stored for every dataset description on I14Y. The stored structures can now be downloaded from the public website in multiple formats (TTL, RDF, JSON-LD).
- All metadata of a dataset can now be exported from the public website via a newly introduced button.
- Web addresses inserted into descriptions are automatically displayed as clickable links.
- When retrieving information via the API, all results are now returned if no number of desired items per page (pageSize) is specified.
- There is now a direct link in the website footer to the I14Y toolbox with helpful tools for importing metadata.
- The search index is now built independently of application startup. The platform therefore becomes available more quickly after a restart and search is more stable.
- New internal monitoring endpoints (health checks) help detect technical issues more quickly.
- Various bugs have been fixed.

## Release September 10 2025
- Two new date fields have been introduced for electronic interfaces (APIs): the issue date and the date of last modification. This information makes it easier to track updates.
- When creating descriptions of public services and electronic interfaces (APIs), it is now possible to specify the responsible person and their deputy. This improves contact options and clarifies responsibilities.
- Code list entries now have "Valid from" and "Valid to" fields. This allows the temporal validity of entries to be clearly defined, which is particularly helpful for classifications that change over time.
- Similar to datasets, specifying an identifier for electronic interfaces (APIs) is now optional. If no identifier is entered, one is automatically generated.
- Electronic interfaces (APIs) can now be deleted directly via the user interface. This simplifies the management of API descriptions that are no longer needed.
- Various bug fixes to improve stability and user-friendliness.

## Release July 30 2025
- Specifying an identifier for datasets is now optional. If no identifier is entered, one is generated automatically, regardless of whether the metadata is entered via the user interface or the electronic interface.
- The display and functionality of the organisation page have been improved.
- Bug fix: In the last version, public services whose channel contained an ownedBy field triggered an error message. This issue has been resolved.
- Bug fix: Public services with an assigned channel could not be edited in the last version. This bug has been fixed.
- Bug fix: An error occurred when searching within code list entries in the last version. The search function has been corrected and now works as expected.

## Release July 23 2025
- Which organisations use the I14Y interoperability platform? A new page lists all organisations that publish metadata on I14Y. It also shows the number of descriptions of datasets, APIs and public services published by each organisation, as well as the number of concepts published.
- Since early summer, more complex data structures can be documented on I14Y. Previously, this information was only visible in the internal area. The latest release introduces a graphical representation of recorded data structures on the public website.
- Public services can now be accessed individually via the electronic interface (API). Another endpoint also allows I14Y partner organisations to publish public services on I14Y in a fully or semi-automated manner.
- Bug fixes

## Release July 2 2025
- I14Y uses [Oblique](https://oblique.bit.admin.ch/), a collection of standardised graphic components from the federal administration, for its graphical user interface. With this release, we are switching to Oblique 13. This will slightly modernise the graphics of the I14Y website. 
- With the latest releases, I14Y has introduced a new technology for describing data structures (see Structure Beta). The uploaded structures can now be displayed graphically in the internal area of the platform.
- Published code lists can now be searched on the public website.
- Thanks to new endpoints, descriptions of APIs can be obtained and written automatically. 
- The contact point's email address field must now be filled in. This complies with the requirements of the next version of the DCAT-AP CH standard ([Version 3](https://www.dcat-ap.ch/releases/3.0_workingdraft/dcat-ap-ch_3.0_workingdraft.html)). Existing entries on I14Y cannot be saved again until the email field has been filled in. 
- Bug fixes

## Release May 28 2025
- A new download button allows descriptions of data sets from the internal area to be downloaded in JSON format. This simplifies the export of metadata.
- Descriptions of data sets can now be imported from a file. The import option is available when you click on the "Import" button. 
- Since the last release, it has been possible to upload data structures in RDF, TTL or JSON-LD format. These structures can now be displayed graphically.
- The [I14Y-API](https://apiconsole.i14y.admin.ch/) provides new endpoints for importing and exporting a structure in RDF, TTL, and JSON-LD formats.
- New information fields have been introduced for organisations. These enable a more detailed description of the organisations recorded in I14Y.
- Some translations have been updated.
- The search indexing system has been improved. Search queries now deliver more accurate results.

## Release May 7 2025
- The Interoperability Platform I14Y has previously used several systems to store metadata. Starting with the current release, all objects are now stored in the central I14Y database. The previous functions have been adapted and the data from the old system has been migrated. The decision not to use a microservice architecture in this area makes the system faster, especially when searching across multiple object categories.
- The appearance of the pages displaying descriptions of a dataset, an electronic interface, a government service or a concept has been improved: a directory is now available on the left-hand side, allowing users to navigate quickly through the descriptions.
- Which data is publicly available, which can be viewed under certain conditions, and which is confidential? The new icons on the overview pages indicate the availability status for each entry.
- Thanks to a new endpoint in the public API and in the API for I14Y partners, filtered concept lists can be retrieved. Filtering can be done by publisher or status, for example. 
- A new endpoint in the API for I14Y partners allows existing concepts to be updated programmatically.
- In the description of an electronic interface, a link to the dataset that the interface accesses can now be displayed.
- The recording of data structures is currently being revised. A new tab is being introduced with this release. It can be used to upload and download information about the data structure in RDF and TTL formats. The new functions are still in the test phase. The previous tab is still available. However, structures can no longer be created in the conventional way. The next release will further improve the recording and visualisation of structures.
- Numerous bug fixes

## Release of 5 March 2025
- The [I14Y-API](https://apiconsole.i14y.admin.ch/) offers new endpoints in the area of dataset descriptions. The metadata for datasets can be read (GET). New descriptions can be entered (POST). Existing ones can be edited and published (PUT) or deleted if necessary (DELETE).
- When registering a public service, it is now possible to select the area for which the service is offered. In addition to the whole of Switzerland, all cantons, districts and municipalities are available in the selection field. This information is also supplied when exporting via the API. The basis for this is the code list [cantons, districts and municipalities](https://www.i14y.admin.ch/de/catalog/concepts/08dc23f0-d04d-2d2f-a9f5-9cea80695acf/description).
- When creating an internal work area for an office or other organisation, the interoperability service can now store the organisation number from the business register, information on the [legal form](https://www.i14y.admin. ch/en/catalog/concepts/08dad8ff-f18a-560b-bfa6-20767f2afb17/description) and information on the federal level of the organisation. The information on the area in which an organisation operates is provided when a public  service description is obtained via the API.
- The home page and the overview page in the internal area have been slightly revised in terms of content: the introductory texts have been adapted. And a link to the I14Y API console has been added in the footer area. The video on data harmonisation, which was previously placed on the home page, has been removed; it can still be found in the [news section](https://i14y-ch.github.io/en/news/) and on [Youtube](https://youtu.be/ZLMM-bM74oY?si=RWzpZB1DU36Z4Br4).
- An error in the publisher field has been corrected: Until now, the publisher's organisation name often had to be reselected as soon as an entry had been edited. This is no longer necessary. 
- An error in the data owner field has been corrected: Previously, it was not possible to delete a name when editing an entry. This is now possible again.
- Numerous bug fixes

## Release January 15 2025
- The [Partner API](https://apiconsole.i14y.admin.ch/partner/v1/index.html) can now be used to retrieve and publish dataset descriptions (GET and POST). 
- The [Partner API](https://apiconsole.i14y.admin.ch/partner/v1/index.html) can now be used to set status and publication level (PUT).
- Minor search improvements
- Numerous bug fixes

## Major release 13 November
With the major release of 13 November, the I14Y user interface becomes simpler and more intuitive to use: the previous separation between the catalogue and the concepts on the graphical interface is eliminated. A global search is now available. The appearance has been modernised. A new API endpoint is also introduced. The changes in detail.

### Public area of the portal
- With the new release, the portal will be updated to the new version of the Federal Administration's Oblique design system. This modernises the appearance.
- The graphical distinction between catalogue and concept has been removed; data concepts are now assigned to the catalogue and the tiles have been removed. The menu now contains only the Home, Catalogue, News and Manual items.
A prominently placed search field is now available, making metadata searchable regardless of type. Results are displayed in tabs (Data Collections, Government Services, APIs, Concepts). Results from the Opendata and Geocat metadata portals are also displayed.
- A link to the I14Y GitHub repository (https://github.com/metadata-swiss/) (with scripts and tutorials) has been added to the footer. A link to I14Y's LinkedIn account (https://www.linkedin.com/showcase/i14y/) has also been added.

### Changes to the internal organisation section of the website
- The "My Tasks", "Pending Proposals" and "My Organisation's Data" sections now include data element concepts.
- Data element concepts can now be left open or locked. If left open, the concepts and code lists can be edited without having to create a new version. When locked, concepts cannot be edited but must be versioned.
- All entries in a code list can now be deleted at once.

### Application interfaces (APIs)
- With the new release, an endpoint is available on the [API gateway](https://input.i14y.admin.ch/console/partner/v1/index.html) for partner organisations to publish descriptions of datasets.

## Release September 4 2024
- How fast is the number of metadata entries on the I14Y growing? And how often are data concepts reused? The I14Y dashboard, which is available in a beta version, is now accessible via the homepage. 
- Web links can now be opened with a right click. 
- Additional filtering options have been added to the data concepts overview. The list can now be filtered by status.  
- The "My data" section on the I14Y homepage now also lists data concepts that need the attention of the logged-in user. 
- The button to link an additional catalogue on the data collection input screen is greyed out if the logged-in user has only submitter rights. 
- Information about government services can now be retrieved via the I14Y Partner API.

## Release August 14 2024
- Data concepts (input area): Until now, entries for a code list were inserted directly on the page. The new release introduces a pop-up. This provides a clearer display and makes it easier to add entries to a code list.  
- Data concepts (input area): The "Versions" section in the input area for data concepts is now positioned above the "Connections" section. In this way, the order corresponds to that on the public side of the I14Y. 
- Data concepts (input area): The entries in a code list can now be filtered. This makes it easier to check and adapt longer code lists.
- Data concepts: Previously, data concepts that were integrated into a data collection via a structure could be edited directly from the display screen in the catalogue section. The corresponding "Edit" button has now been removed. Concepts are consistently edited in the concept section of the platform.  
- Public services (input area): The input screen for public services has been slightly adapted: The fields for the identifier and the publisher are now on one row. Previously, they were arranged one below the other. The input screen is now harmonised with the screen for entering datasets.   
- Input area: The new "View publication" button allows you to check an entry you have just entered directly on the publicly accessible website. 
- Input area: The "My data" mini-dashboard has been improved. It gives users an overview of their tasks and of their metadata.  
- Bug fixes

## Release July 17 2024
- Since the last release, public services can be better categorised using Life and Business events. It is now also possible to filter the search results according to specific life or business events. 
- The display of codelists has been improved. 
- The download link for concept content has been adapted to ensure consistency across the system.
- Bug fixes

## Release July 10 2024
- The I14Y improves the categorisation of public services: When entering the description of a public service, it is now possible to select the life or business situation in which a particular e-government service can be useful. This makes it easier for both citizens and entrepreneurs to find the right public service. 
- Improved and enhanced filtering for description of datasets, data services and public services.
- The Labs tile has been removed to make the GUI clearer. Experimental work can be found in the [I14Y Github](https://github.com/metadata-swiss/) area. 
- Bug fixes

## Release July 3 2024
- The catalogue search functionality in the input section of the platform has been visually improved.
- The buttons to create or edit an object are now disabled if the action is not allowed. 
- Several minor improvements
- Bug fixes

## Release 19 June 2024
- Hierarchical code lists are now displayed in a tree view. This improves the visibility of the hierarchy. 
- The code lists can be downloaded in JSON and CSV format from the public front-end.
- When describing a distribution, usage rights information can now be entered. 
- It is no longer necessary to specify the format for distributions. This information can still be entered as an option. 
- Descriptions of dataservices also list which datasets are linked. 
- Descriptions of distributions refer to the appropriate dataservice. 
- The versions of a data element concept are now displayed on the overview page. 
- Several improvements have been made to the graphical interface. 
- Bugfixes

## Release 26 Mai 2024
- The system now automatically checks for correct URL syntax when entering metadata. If the entry is incorrect, an error message is displayed.
- Spaces are not allowed in identifiers to ensure compatibility with different systems. When entering metadata, the system now automatically checks for spaces in the identifier. If spaces are detected, an error message is displayed. 
- Improved display speed for frequently used concepts, such as the AHV number.
- Bugfixes

## Release 22 April 2024
- With the new release, it will be possible to delete distributions with just a few clicks via the web interface. Previously, this had to be done via the electronic interface. 
- The news page has been revised: it can now be updated more quickly.
- Bugfixes 

## Release 8 April 2024
- The interoperability service introduces new entry fields. They allow for more detailed description of records on the I14Y interoperability platform. The fields in detail: The name of the data owner can now be entered. It is also possible to add the name of the person who is operationally responsible for the data and the name of the deputy. For data collections that are official geodata under federal law according to the [Geoinformation Ordinance](https://www.fedlex.admin.ch/eli/cc/2008/389/de), the corresponding number can now be selected.    
- Bugfixes

## Release 27 March 2024
- Bugfixes

## Release 12 March 2024
- Concepts can be reused in various datasets. This ensures that the same definitions, the same characteristics and the same coding methods are used. The description of the individual concepts now shows which datasets use this particular concept. An indication of the number of reuses is also displayed. Only data collections that have been publicly described on the platform are counted. 
- Bugfixes

## Release 27 February 2024
- The description of a dataset (fields according to DCAT-AP CH) can now be assigned to several catalogues. This allows it to use the description both in the I14Y catalogue and in the catalogue for opendata.swiss. The interoperability service can open additional catalogues upon request. 
- Bugfixes

## Release 5 February 2024
- The channels of a public service are now displayed directly on the overview page. Previously, they could be found in a separate tab. This change allows users to access the public service with fewer clicks. 
- Records can now be assigned to multiple catalogues. For example, a record can be part of both the I14Y and Opendata catalogues. The keywords, which may differ from catalogue to catalogue, can be set for each catalogue. 

## Release 25 January 2024
- Introduction of new fields to document the protection status of the da dataset: Thanks to the news fields, it is possible to enter information about whether a record contains personal data or even particularly sensitive personal data. Information about the retention period of the data can also be recorded.
- First implementation of the Catalog class. In the future, several catalogues can be managed on the I14Y. Records can be assigned to one or more catalogues. 
- Provision of a machine-readable security information file (security.txt) according to the National Cyber Security Centre (NCSC) specification.
- Bug fixes

## Release 04 December 2023
- Change in user management: Only people who have logged in to the I14Y input can be found and entered as responsible person and responsible deputy for concepts and structures.
- The filters "Publisher" and "Topics" are now available on the concept search page.
- The "Delete" action is now available on the concept view page.
- Bug fixes

## Release 20 November 2023
- Filters for publication level, publisher and themes are now available on the concept page.
- Bug fixes

## Relase 3 November 2023
- Demo endpoint: Retrieve catalogue as RDF-XML and RDF-Turtle
- Bug fixes

## Relase 24 October 2023
- Concept search fix: Terms are now found regardless of capitalisation and default language. 
- The Qualified Attribution and Qualified Relation properties can now be edited from the user interface.
- The submitter role is now displayed in the user info box. 
- Bug fixes

## Release 10 October 2023
- Concept search now works with hyphens and underscores. This makes it possible to find concepts with titles such as "EXAMPLE_CONCEPT-2023-10-04". 
- The concept detail page now displays the additional properties Themes, Keywords, and ConformsTo.
- The concept JSON endpoint now returns the additional themes, keywords and conformsTo fields.
- Optimised the user information popup. An issue with the login status display has been fixed. And the organisation name is now displayed in the default language. 
- Bug fixes

## Release 29 September 2023
- Additional fields for describing data collections have been introduced. These correspond to the DCAT-AP-CH standard in version 2. The following fields are now available: frequency, image, is referenced by, qualified attribution, qualified relation, related resource, licence, availability, checksum, coverage, identifier, image, media type, packaging format, temporal resolution.
- Revision of the I14Y Homepage: Adjusted structure with headings and revised texts, contact information added.
- IdP Kanton Bern can be used for the I14Y input area.
- Various bugfixes and UX improvements

## Release 30 Juin 2023
- I14Y Handbook: The comprehensive documentation of the I14Y functionality can now be accessed via the tile on the homepage and the main navigation.
- I14Y Chatbot: A chatbot is now available in the lab section that can answer questions about the I14Y interoperability platform and data harmonisation in Switzerland.
- A problem concerning the import of code list entries via the API has been fixed.
- First public endpoint to retrieve concepts is available.

## Release 15 June 2023
- Concepts can now be displayed and searched on the public page 
- The registration status and publication level can be set via the graphical user interface
- Versioning for concepts 
- Bugfixes

## Release 15 January 2023
- Conversion of authentication to eIAM. The accounts of existing users must be migrated. 
- Bugfixes
