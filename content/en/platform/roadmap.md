---
title: Road map
slug: roadmap
translationKey: roadmap
weight: 30
type: docs
keywords: [I14Y, I14Y interoperability platform, system architecture, technology, database]
---

The I14Y Interoperability Platform is being developed on the Confederation’s behalf by the Federal Statistical Office (FSO) in collaboration with the Federal Office of Information Technology, Systems and Telecommunication (FOITT). The project phase runs until the end of 2026. After that, the FSO will take over the operation of I14Y.

During the project phase, the platform’s functionality is continuously expanded. Requests for new features can be submitted to the Interoperability Office. It then prepares the detailed specification, prioritises development requests together with the Steering Committee and the National Data Management Committee (NaDB), and coordinates development and implementation work.

{{<alert title="Your suggestions are welcome" color="success">}}
If you discover an opportunity for improvement or a bug on the I14Y Interoperability Platform, the Interoperability Service would appreciate a note. You can submit proposals for new features in the [Feature Requests repository](https://github.com/metadata-swiss/feature-requests/issues) on GitHub or via [email](mailto:i14y@bfs.admin.ch). Please describe the requested functionality as precisely as possible. On GitHub, proposals can also be commented on.
{{</alert>}}

I14Y is developed in a so‑called Agile Release Train (ART). Features are continuously specified, developed and implemented. The roadmap below documents which features are planned for which development period; for details on individual functionalities, please contact the Interoperability Office. Priorities may change, for example if new functionalities are given high priority. The roadmap is updated before the start of each new development period (_Program Increment_, PI). The next stages are described in more detail, while later phases are formulated as more general goals.

{{< mermaid width="650px" >}}
timeline
    title Roadmap Interoperability Platform I14Y

    section 2026

        Q1 2026 (01.2026 - 03.2026)
        : ⭐ Introduce mapping tables to document differences between concepts.
        : URIs/permalinks will be introduced for all objects.
        : Complex data set structures can be edited via the web interface (part 1/2).
        : Additional work on structures – reuse of concepts (part 1/2).

        Q2 2026 (03.2026 - 06.2026)
        : Complex data set structures can be edited via the web interface (part 2/2).
        : Reuse of concepts (part 2/2).
        : Release of the programme code (open-source publication).
        : Introduction of audit metadata (minimal audit trail).
        : Improve the user experience.
        : Joint developments with metadata.swiss.

        Q3–Q4 2026 (06.2026 - 12.2026)
        : Maintenance work (bug fixes and small improvements).
        : Completion of the project phase.
        : Joint developments with metadata.swiss.

    section 2027
        Q1–Q4 2027
        : Operational phase

{{< /mermaid >}}

*⭐ Entries marked with a star are suggestions from the DVS BS+ project.*

### Open Source
The programme code of the I14Y Interoperability Platform is to be published under a [free licence](https://www.gnu.org/licenses). The Interoperability Office will publish the source code by the end of the project phase at the latest, i.e. by the end of 2026. This is in line with the Federal Act on the Use of Electronic Means to Conduct the Tasks of the Authorities ([EMBAG](https://www.fedlex.admin.ch/eli/fga/2023/787/en#art_9)). According to Article 9, federal authorities should — where possible — make their source codes freely available.

{{<card header="Legal basis" title="__Art. 9 Open Source Software__" footer="Federal Act on the Use of Electronic Means to Conduct the Tasks of the Authorities [(EMBAG)](https://www.fedlex.admin.ch/eli/fga/2023/787/en#art_9)">}}
The federal authorities subject to this Act shall, if it is possible and reasonable and if the rights of third parties are respected, disclose the source code of software which they develop or have developed for the performance of their tasks. They shall allow any person to use, develop and pass on the software and shall not charge any licence fees.
{{</card>}}

I14Y publishes source code and scripts under the name i14y-ch on the [GitHub platform](https://github.com/metadata-swiss).