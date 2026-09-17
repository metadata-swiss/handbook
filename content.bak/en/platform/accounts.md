---
title: Accounts to access I14Y
slug: accounts
translationKey: accounts
weight: 10
type: docs
keywords: [I14Y, I14Y interoperability platform, user account, account, connection, EIAM, Login]
---

Anyone who wants to enter data on I14Y needs a user account. The same applies to those who want to view information of their own organisation that has not (yet) been published publicly. Access is controlled with the _Enterprise Identity and Access Management (EIAM)_. This service is operated by the Federal Office of Information Technology for the Confederation.

To access the internal area of I14Y, an account with a provider of a digital identification solution is required. The Federal Administration's employees can use their [Fedlogin](https://www.eiam.swiss). In addition, there are other options to choose from, such as the CH login, the electronic identities of Switch or those of cantons such as Berne, Schaffhausen, Zug and Geneva. Further details can be found in the [Table of identification options](/handbook/en/anhang/eiam) in the appendix.

Proceed as follows:

1. On I14Y, click on the icon in the top right-hand corner. Select the appropriate identification provider. Log in to the digital identity provider or create a new account. Attention: Federal Administration employees must use the Fedlogin instead of the CH-Login, otherwise errors may arise. If the process suddenly stops, the _cookies_ may have to be deleted. You can access the corresponding dialogue by pressing the key combination Ctrl-Shift-Delete in the web browser.

2. In a second step, the authorisations must be assigned on I14Y. Larger organisations manage their accounts themselves ([see below](#accountadministration-in-larger-organisations)). Therefore, please contact your account administrator. If you do not use an organisation-internal standard solution such as Fedlogin, let them know which email address you used when creating the login (see step 1). As soon as read or edit access rights have been granted, you will receive an email. This contains a web link and a code. Visit the specified website and enter the code that was sent to you. This will link your digital identity to I14Y.

```mermaid
flowchart TD
    user(fa:fa-user-circle \n The user creates a digital identity, e.g. a CH login. \2-factor authentication is activated).
    account(fa:fa-user-plus \ I14Y-Admin assigns the read and edit permissions.)
    code(fa:fa-file-text \The user receives a code by email. \This is necessary to link the identity to the I14Y account).
    i14y(fa:fa-database \The user can now access the internal area of their own administrative unit on the I14Y Interoperability Platform).

user-->account
account-->code
code-->i14y
```

These set-up steps are necessary once only. If you want to change the details of your account later, visit the [Account Management Area of EIAM](https://www.myaccount.eiam.admin.ch).

{{<alert title="How much does the account cost?" color="info" >}}
I14Y is being developed and operated by the Confederation as part of the National Data Management programme. The development work as well as the operation are financed by the Confederation. In the medium term, the portal can be used free of charge -- including by content providers from cantonal and communal administrations and by state-related companies. Longer-term financing will be decided at a later stage.

{{</alert>}}

## Account management in larger organisations

Larger organisations are responsible for managing the accounts themselves. They provide the necessary human resources. Depending on the situation, the steps to open an account may vary.

The read and edit rights are usually assigned via the [Delegated Management Portal](https://www.portal.eiam.admin.ch/). If you are responsible for managing the user accounts and do not yet have access to this portal, or if you would like to set up an automated onboarding process, contact the [Interoperability Unit](mailto:i14y@bfs.admin.ch).

1. To open an individual user account, visit the Delegated Management Portal. In the "User Management" tab, select the item "Delegated Management". Click on the arrow in front of "I14Y" and on the name of your organisation. Click on "Next" to open the detailed view with the list of authorised users. If your organisation does not yet exist, contact the Interoperability Office. 
2. Click on "Add new user". The fields with the name and the email address must be filled in. Make sure that you use the email address with which the person to be saved has registered with the identity provider (such as CH-Login). 
3. Select the new person to be added. Click on "Next". Now you will be prompted to assign the access authorisations. First adjust the profile. To do this, click on the pencil icon on the left. Replace the name with a meaningful description and replace the number with the profile ID you see at the start. Under "Profile name" it should say something like "LocalDataSteward-1159123". Enter the character * in the input field below. Click on "Save".
4. Select the appropriate role under "Business roles". As a rule "StewardshipOrganizationViewer" (read-only access),"Submitter" (rights to collect metadata, but not to publish) or "LocalDatasteward" is selected there. Add the corresponding edit and read rights to the profile by clicking on the "Authorise" button. Finally, click on "Next". __Caution:__ Only one role should be assigned to each profile. However, it is possible to open several profiles for one account. To do so, click on the corresponding link. In this case, the person concerned must select which profile he or she wants to log in with when logging in.
5. Briefly describe the new account. Finally, click on "Send notification email" to send the onboarding message to the person concerned. In the message, the person is asked to click on a link and enter a code sent with the message into a web form. This assigns the necessary read and edit permissions to the digital identity. At any time, on the overview of the Delegated Management Portal, you can see which persons have successfully completed the onboarding.
