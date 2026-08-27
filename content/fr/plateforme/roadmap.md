---
title: Roadmap
slug: roadmap
translationKey: roadmap
weight: 40
type: docs
keywords: [I14Y, plateforme d'interopérabilité I14Y, architecture système, technique, base de données, banque de données]
---

La plateforme d'interopérabilité I14Y est développée sur mandat de la Confédération par l’Office fédéral de la statistique (OFS), en collaboration avec l’Office fédéral de l’informatique (OFIT). La phase de projet court jusqu’à fin 2026. Ensuite, l’OFS reprendra l’exploitation d’I14Y.

Pendant la phase de projet, le périmètre fonctionnel de la plateforme est continuellement étendu. Les demandes de nouvelles fonctionnalités peuvent être soumises au service d’interopérabilité. Celui-ci élabore ensuite la spécification détaillée, priorise les demandes en collaboration avec le comité de pilotage ainsi qu’avec le comité Gestion nationale des données (NaDB), et coordonne les travaux de développement et d’implémentation.

{{<alert title="Votre avis nous intéresse!" color="success">}}
Si vous découvrez une possibilité d’amélioration ou une erreur sur la plateforme d’interopérabilité I14Y, le service d’interopérabilité vous remercie de le signaler. Vous pouvez soumettre des propositions de nouvelles fonctionnalités dans le [dépôt « Feature Requests »](https://github.com/metadata-swiss/feature-requests/issues) sur GitHub ou par [e-mail](mailto:i14y@bfs.admin.ch). Merci de décrire la fonctionnalité souhaitée aussi précisément que possible. Sur GitHub, les propositions peuvent également être commentées.
{{</alert>}}

I14Y est développée selon une approche dite Agile Release Train (ART). Les fonctionnalités sont spécifiées, développées et implémentées en continu. Les fonctionnalités prévues pour les différentes étapes de développement sont documentées dans la roadmap ci‑dessous; pour des informations détaillées sur une fonctionnalité, veuillez contacter le service d’interopérabilité. Les priorités peuvent évoluer, par exemple si de nouvelles fonctionnalités sont fortement priorisées. La roadmap est mise à jour avant le début de chaque nouvelle période de développement (_Program Increment_, PI). Les prochaines étapes sont décrites plus en détail, tandis que les phases ultérieures sont présentées sous forme d’objectifs plus généraux.

{{< mermaid width="650px" >}}
timeline
    title Roadmap Plateforme d'interopérabilité I14Y

    section 2026

        T1 2026 (01.2026 - 03.2026)
        : ⭐ Introduction de tables de mapping pour documenter les différences entre les concepts.
        : Des URI/permalinks sont introduits pour tous les objets.
        : Les structures complexes des ensembles de données peuvent être éditées via l’interface web (partie 1/2).
        : Travaux supplémentaires sur les structures – réutilisation des concepts (partie 1/2).

        T2 2026 (03.2026 - 06.2026)
        : Les structures complexes des ensembles de données peuvent être éditées via l’interface web (partie 2/2).
        : Réutilisation des concepts (partie 2/2).
        : Publication du code du programme (open source).
        : Introduction de métadonnées d’audit (audit trail minimal).
        : Amélioration de l’expérience utilisateur.
        : Développements communs avec metadata.swiss.

        T3–T4 2026 (06.2026 - 12.2026)
        : Travaux de maintenance (corrections de bugs et petites améliorations).
        : Achèvement de la phase de projet.
        : Développements communs avec metadata.swiss.

    section 2027
        T1–T4 2027
        : Phase d’exploitation

{{< /mermaid >}}

*⭐ Les entrées marquées d’une étoile sont des propositions du projet DVS BS+.*

### Code source ouvert
Le code de programme de la plateforme d’interopérabilité I14Y doit être publié sous une [licence libre](https://www.gnu.org/licenses). Le service d’interopérabilité publiera le code source au plus tard à la fin de la phase de projet, c’est‑à‑dire d’ici fin 2026. Cela se fait conformément à la loi fédérale sur l’utilisation de moyens électroniques pour l’exécution des tâches des autorités ([EMBAG](https://www.fedlex.admin.ch/eli/fga/2023/787/fr#art_9)). Selon l’art. 9, les autorités fédérales doivent — dans la mesure du possible — mettre les codes source à disposition librement.

{{<card header="Base légale" title="__Art. 9 Logiciels à code source ouvert__" footer="Loi fédérale sur l'utilisation de moyens électroniques pour l'exécution des tâches des autorités [(EMBAG)](https://www.fedlex.admin.ch/eli/fga/2023/787/fr#art_9)">}}
Les autorités fédérales soumises à la présente loi publient, s’il est possible et raisonnable et si les droits de tiers sont respectés, le code source des logiciels qu’elles développent ou font développer pour l’exécution de leurs tâches. Elles permettent à toute personne d’utiliser, de développer et de partager ces logiciels et ne perçoivent pas de redevances de licence.
{{</card>}}

I14Y publie ses codes source et ses scripts sous le nom i14y-ch sur la [plateforme GitHub](https://github.com/metadata-swiss).