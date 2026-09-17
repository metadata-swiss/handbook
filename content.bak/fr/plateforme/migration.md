---
title: Migration vers le Cloud Public
slug: migration
translationKey: migration
weight: 40
type: docs
keywords: [I14Y, plateforme d'interopérabilité I14Y, compte utilisateur, connexion, EIAM, connexion, Migration, Cloud Public, Azure]
---

I14Y passe au Cloud Public. L'utilisation du Cloud Public simplifie de nombreux processus techniques, permettant ainsi un développement plus rapide et plus flexible. De plus, les coûts d'exploitation peuvent être réduits, ce qui permet à I14Y de rester attractif à long terme.

Cette page informe sur l'état des travaux de migration.

## État de la migration

__La migration vers le Cloud Public a été achevée le jeudi 27 novembre à 17h30.__

| Étape | Statut | Remarque |
|-------|--------|----------|
| Migration ABN | ✅ | L'environnement de validation fonctionne maintenant dans le Cloud Public. |
| Read-only PROD | ✅ | L'environnement de production a été mis en mode lecture seule. Actuellement, aucune métadonnée ne peut être saisie ou modifiée. |
| Migration données PROD | ✅ | Les données ont été migrées. |
| Migration logiciel PROD | ✅ | I14Y est maintenant dans le Cloud Public. |
| Activation droits d'écriture PROD | ✅ | La plateforme peut à nouveau être utilisée normalement. |

## Procédure prévue

__Lundi 17.11.2025 :__ L'adresse Internet pour l'environnement de validation sera mise à jour. Une fois les répertoires Internet actualisés, l'environnement de validation sera déployé depuis le Cloud Public.

__À partir de mardi 18.11.2025 :__ L'[environnement de validation](https://input.i14y-a.admin.ch) fonctionne désormais dans le Cloud Public et peut être testé, à condition de disposer des accès nécessaires. Les problèmes doivent être signalés à [i14y@bfs.admin.ch](mailto:i14y@bfs.admin.ch).

__Mercredi 26.11.2025 :__ Le mode lecture seule sera activé pour l'environnement de production. Les métadonnées de l'ancienne plateforme seront synchronisées avec la nouvelle installation. L'adresse Internet pour l'environnement de production sera mise à jour. Une fois les répertoires Internet actualisés, l'environnement de validation sera déployé depuis le Cloud Public.

__Jeudi 27.11.2025 :__ I14Y sera de nouveau disponible avec les fonctionnalités habituelles -- y compris pour la publication de métadonnées.