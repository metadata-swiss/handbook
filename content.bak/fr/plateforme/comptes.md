---
title: Administration des comptes utilisateurs
slug: administration-comptes
translationKey: accounts
weight: 50
type: docs
keywords: [I14Y, plateforme d'interopérabilité I14Y, compte utilisateur, compte, accès, EIAM, login, connexion]
---

Il est nécessaire d'avoir un compte utilisateur pour saisir des données sur la plateforme d'interopérabilité I14Y ou pour visualiser les informations de son organisation qui n'ont pas (encore) été rendues publiques. Les accès sont administrés au moyen de l'outil de gestion des identités et des accès _eGovernment Identity & Access Management (eIAM)_ exploité par l'Office fédéral de l'informatique et de la télécommunication.  

Pour accéder au domaine interne de l'IOP I14Y, il faut avoir créé au préalable un compte auprès d'un fournisseur de solutions numériques d'identification. Les collaborateurs de l'administration fédérale utilisent leur [FED-Login](https://www.eiam.swiss). D'autres possibilités existent telles que le CH-Login, les identités électroniques de Switch ou celles des cantons de Berne, Schaffhouse, Zoug et Genève. Pour plus de détails, veuillez vous reporter au [tableau récapitulatif des possibilités d'identification](/handbook/de/anhang/eiam), fourni en annexe. 

Procédure à suivre:

1. Sur la page d'accueil de l'IOP I14Y, cliquez sur le symbole de connexion en haut à droite. Sélectionnez le prestataire d'identification souhaité. Connectez-vous à votre compte ou créez un nouveau compte. Attention: les collaborateurs de l'administration fédérale doivent utiliser le FED-Login et non le CH-Login (survenance possible de conflits). En cas d'interruption du processus, veillez à effacer les _cookies_. Vous parvenez directement sur la fenêtre de paramétrage appropriée via la combinaison de touches Ctrl-Maj-Suppr. 

2. Les droits d'accès à l'IOP I14Y doivent ensuite être attribués. Les grandes organisations administrent les comptes utilisateurs elles-mêmes ([voir ci-dessous](#kontenverwaltung-in-grösseren-organisationen)). Vous devez donc vous mettre en relation avec l'administratrice ou l'administrateur des comptes de votre organisation. Si vous n'utilisez pas de solution d'identification standardisée telle que FED-Login: indiquez l'adresse e-mail renseignée lors de la création du compte (étape 1). Dès que les droits de lecture/d'écriture vous auront été attribués, un e-mail contenant un lien et un code vous sera envoyé. Cliquez sur le lien et saisissez le code dans le champ approprié. Cette étape permet de relier votre identité numérique à la plateforme I14Y.  

```mermaid
flowchart TD
    user(fa:fa-user-circle \nL'utilisateur crée une identité numérique (CH-Login, p. ex.). \nL'authentification à deux facteurs est activée.)
    account(fa:fa-user-plus \nL'administrateur I14Y octroie les droits de lecture/écriture.)
    code(fa:fa-file-text \nL'utilisateur reçoit un code par e-mail. \nCe code permet d'associer l'identité au compte I14Y.)
    i14y(fa:fa-database \nL'utilisateur peut accéder à la zone interne de l'unité administrative sur la plateforme d'interopérabilité I14Y.)

user-->account
account-->code
code-->i14y
```

Cette procédure ne doit être effectuée qu'une seule fois. Pour modifier les informations de votre compte, rendez-vous sur [l'espace eIAM dédié](https://www.myaccount.eiam.admin.ch). 

{{<alert title="Combien coûte un compte utilisateur?" color="info" >}}
La plateforme d'interopérabilité I14Y est développée et exploitée par la Confédération dans le cadre du programme de gestion nationale des données (NaDB). Le développement et l'exploitation de la plateforme sont financés par la Confédération. Pour l'heure, le portail peut être utilisé gratuitement, y compris par les fournisseurs de contenus des administrations cantonales et communales, ainsi que par les entreprises parapubliques. Des discussions sont en cours concernant les modalités de financement à long terme. 

{{</alert>}}

## Administration des comptes au sein des grandes organisations 

Les grandes organisations sont responsables de l'administration de leurs comptes utilisateurs et mettent à disposition les ressources en personnel adéquates. Les étapes pour l'ouverture d'un compte peuvent varier d'une situation à l'autre.

Les droits de lecture/d'écriture sont généralement attribués via le [portail de l'administration déléguée](https://www.portal.eiam.admin.ch/). Si vous êtes responsable de l'administration des comptes utilisateurs, mais que vous n'avez pas encore accès à ce portail, ou si vous souhaitez mettre en place un processus d'accès automatique, nous vous invitons à contacter le [service d'interopérabilité](mailto:i14y@bfs.admin.ch). 

1. Pour créer un compte utilisateur, rendez-vous sur le portail de l'administration déléguée. Dans l'onglet «Administration des utilisateurs», sélectionnez l'option «Administration déléguée». Cliquez sur la flèche devant «I14Y», puis sur le nom de votre organisation. Cliquez sur «Suivant» pour ouvrir la vue détaillée avec les bénéficiaires des droits. Si votre organisation ne figure pas dans la liste, contactez le service d'interopérabilité.
2. Cliquez sur «Ajouter un nouvel utilisateur». Les champs «Nom» et «Adresse e-mail» sont obligatoires. Veillez à entrer l'adresse e-mail avec laquelle la personne s'est enregistrée auprès du service d'identification (CH-Login, p. ex.). 
3. Sélectionnez le nouvel utilisateur ajouté. Cliquez sur «Suivant». Il vous faut à présent attribuer les droits d'accès à cette personne. Commencez par adapter le profil en cliquant, à gauche, sur le symbole du crayon. Remplacez le nom de la personne par une description pertinente et le numéro par l'ID du profil. Sous «Désignation du profil», vous devez avoir «LocalDataSteward-1159123». Saisissez un astérisque (*) dans le champ de saisie en dessous. Cliquez sur «Enregistrer».
4. Sélectionner le rôle adéquat sous «Rôles». Vous avez en général le choix entre «Stewardship organization viewer» (droits de lecture uniquement), «Submitter» (droits de saisie de métadonnées, mais pas de publication) ou «Local data steward». Ajoutez les droits de lecture/d'écriture en cliquant sur «Autoriser». Cliquez sur «Suivant». __Attention:__ un seul rôle doit être attribué par profil. Il est cependant possible de créer plusieurs profils pour un même compte. Pour ce faire, cliquez sur le lien correspondant. Une personne disposant de plusieurs profils devra indiquer à la connexion le profil qu'elle souhaite utiliser.   
5. Décrivez brièvement le nouveau compte. Cliquez ensuite sur «Envoyer un e-mail d'information» pour informer la personne de la création du nouveau compte. Celle-ci devra cliquer sur le lien communiqué, et saisir le code dans le formulaire. Cette opération est nécessaire pour attribuer à l'identité numérique les droits de lecture/d'écriture définis. Sur la vue d'ensemble du portail d'administration déléguée, vous pouvez voir quelles personnes ont achevé le processus de création de compte (onboarding).