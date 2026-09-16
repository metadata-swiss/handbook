---
title: Information model
slug: informationmodel
translationKey: informationmodel
weight: 30
type: docs
keywords: [I14Y, I14Y interoperability platform, Data model, information model, catalogue, DCAT, structure, concept]
---
 
On the I14Y Interoperability Platform, data sets, electronic interfaces (APIs) and data elements as well as government services can be described. There are two entry points. In the catalogue part, data sets, electronic interfaces (APIs) and government services are managed. The descriptions of individual concepts can be found under "Concepts".

```mermaid 
    flowchart TD
        catalog(catalogue)
        publicservice(government service)
        dataservice(electronic interfaces)
        dataset(data sets)

        distribution(distribution)
        concept(concept)
        

        catalog---|contains|publicservice
        catalog---|contains|dataservice
        catalog---|contains|dataset

        dataset---|has a|distribution
        dataset---|referenced \nvia structure/ data element|concept

        dataservice---|delivers data to|dataset

    style catalog fill:#Ff987a
    style catalog stroke:black
    style concept fill:#Ff987a
    style concept stroke:black

    style publicservice fill:#6CC8FF
    style publicservice stroke:black
    style dataservice fill:#6CC8FF
    style dataservice stroke:black
    style dataset fill:#6CC8FF
    style dataset stroke:black

    style distribution fill:#6CC8FF
    style distribution stroke:black
```

The diagram provides a simplified representation of the different parts of I14Y. A detailed summary can be found in the [Information model on I14Y](/img/i14y_informationsmodell.png).

To do justice to the different offers, the platform uses various information models. For example, the Data Catalogue Vocabulary (DCAT) with the Swiss application profile is used for data sets and APIs. The _Core Public Service Vocabulary (CPSV)_ is used for government services.

## Data set

A data set is a group of data elements with related content in a uniform structure. It can exist in a wide variety of forms and formats: for example, as a CSV file, as a database or stored in a distributed system such as a blockchain.

A data set can be exported in several formats, i.e., contain so-called _distributions_. The distributions do not necessarily have to contain the full data. The data set can also form the basis for an electronic interface (API) through which specific individual information can be queried.

Data sets can be described in detail on I14Y: in addition to the catalogue entry, which contains the basic information such as the title, the description and the issuing organisation, information on the structure can also be saved. A structure usually contains several data elements, and each data element has a concept that describes the type of content. A concept is thus the smallest unit of a data set, often also called a (defined) variable or attribute.

```mermaid
    flowchart TD
        dataset1(data set)
        structure1(structure)
        dataelement1(data element)
        concept1(concept)
        codelist(code list)
        numeric(number)
        string(string)
        date(date)

        dataset1---|has a|structure1
        structure1---|contains a|dataelement1
        dataelement1---|has a|concept1
        concept1---|is a|codelist
        concept1---|is a|numeric
        concept1---|is a|string
        concept1---|is a|date

    style dataset1 fill:#6CC8FF
    style dataset1 stroke:black

    style structure1 fill:#Bfe2ab
    style structure1 stroke:black

    style dataelement1 fill:#Fbb54e
    style dataelement1 stroke:black

    style concept1 fill:#Ff8076
    style concept1 stroke:black

    style codelist stroke:#Ff8076
    style numeric stroke:#Ff8076
    style string stroke:#Ff8076
    style date stroke:#Ff8076
```

It is possible that several data sets have the same structure. The individual concepts, in turn, are often integrated into different structures.

```mermaid
    flowchart TD
        dataset1(data set 1)
        dataset2(data set 2)
        dataset3(data set 3)
        structure1(structure 1)
        structure2(structure 2)
        dataelement11(data element 1)
        dataelement12(data element 2)
        dataelement13(data element 3)
        dataelement21(data element 1)
        dataelement22(data element 2)
        dataelement23(data element 3)
        concept1(concept 1)
        concept2(concept 2)
        concept3(concept 3)
        concept4(concept 4)

        dataset1---structure1
        structure1---dataelement11
        structure1---dataelement12
        structure1---dataelement13

        dataset2---structure2
        dataset3---structure2
        structure2---dataelement21 
        structure2---dataelement22 
        structure2---dataelement23 

        dataelement11---concept1
        dataelement12---concept2
        dataelement13---concept2
        dataelement21---concept2
        dataelement22---concept3
        dataelement23---concept4


    style dataset1 fill:#6CC8FF
    style dataset1 stroke:black
    style dataset2 fill:#6CC8FF
    style dataset2 stroke:black
    style dataset3 fill:#6CC8FF
    style dataset3 stroke:black

    style structure1 fill:#Bfe2ab
    style structure1 stroke:black
    style structure2 fill:#Bfe2ab
    style structure2 stroke:black

    style concept1 fill:#Ff8076
    style concept1 stroke:black
    style concept2 fill:#Ff8076
    style concept2 stroke:black
    style concept3 fill:#Ff8076
    style concept3 stroke:black
    style concept4 fill:#Ff8076
    style concept4 stroke:black

    style dataelement11 fill:#Fbb54e
    style dataelement11 stroke:black
    style dataelement12 fill:#Fbb54e
    style dataelement12 stroke:black
    style dataelement13 fill:#Fbb54e
    style dataelement13 stroke:black

    style dataelement21 fill:#Fbb54e
    style dataelement21 stroke:black
    style dataelement22 fill:#Fbb54e
    style dataelement22 stroke:black
    style dataelement23 fill:#Fbb54e
    style dataelement23 stroke:black
```



For example: the data set of a veterinary clinic contains information on dogs -- name, date of birth, breed, dog chip number and the name and address of the dog owner. Each of these pieces of information is a data element with a concept. The type of concept for the name of the dog is a string, for the date of birth it is a date and for the breed it is a code list. These concepts can also be used in other data sets: thematically closely related ones such as a veterinarian's client database, or -- in the case of the date of birth -- also in completely different data sets.

```mermaid
    flowchart TD
        dataset1(data set \veterinary clinic 1)
        dataset2(data set  \veterinary clinic 2)
        dataset3(data set  \veterinary clinic 3)
        structure1(admission form dog)
        structure2(admission form bird)
        dataelement11(dog breed)
        dataelement12(coat colour)
        dataelement13(gender)
        dataelement21(gender)
        dataelement22(plumage colour)
        dataelement23(bird breed)
        concept1(dog breed  \string)
        concept2(colour \ code list)
        concept3(gender \code list)
        concept4(bird breed \string)

        dataset1---structure1
        structure1---dataelement11
        structure1---dataelement12
        structure1---dataelement13

        dataset2---structure2
        dataset3---structure2
        structure2---dataelement21 
        structure2---dataelement22 
        structure2---dataelement23 

        dataelement11---concept1
        dataelement12---concept2
        dataelement13---concept3
        dataelement21---concept3
        dataelement22---concept2
        dataelement23---concept4


    style dataset1 fill:#6CC8FF
    style dataset1 stroke:black
    style dataset2 fill:#6CC8FF
    style dataset2 stroke:black
    style dataset3 fill:#6CC8FF
    style dataset3 stroke:black

    style structure1 fill:#Bfe2ab
    style structure1 stroke:black
    style structure2 fill:#Bfe2ab
    style structure2 stroke:black

    style concept1 fill:#Ff8076
    style concept1 stroke:black
    style concept2 fill:#Ff8076
    style concept2 stroke:black
    style concept3 fill:#Ff8076
    style concept3 stroke:black
    style concept4 fill:#Ff8076
    style concept4 stroke:black

    style dataelement11 fill:#Fbb54e
    style dataelement11 stroke:black
    style dataelement12 fill:#Fbb54e
    style dataelement12 stroke:black
    style dataelement13 fill:#Fbb54e
    style dataelement13 stroke:black

    style dataelement21 fill:#Fbb54e
    style dataelement21 stroke:black
    style dataelement22 fill:#Fbb54e
    style dataelement22 stroke:black
    style dataelement23 fill:#Fbb54e
    style dataelement23 stroke:black

```

Data sets are described in I14Y using the [Data Catalogue Vocabulary (DCAT)](/handbook/en/glossar). DCAT is a standardised model for describing data catalogues, maintained by the Internet Standards Board [W3C](https://www.w3.org/). The application profile for Switzerland is largely used on the platform ([DCAT-AP CH 2](https://www.dcat-ap.ch/)). DCAT specifies which information must be saved. In addition, the vocabulary suggests further possibilities for describing the data set.

To store information about a data set on I14Y, the minimum requirements set by the DCAT standard must be met. I14Y offers some additional fields that go beyond the current DCAT standard. Which fields are filled with which information when entering data sets is listed in the chapter [publication](/handbook/en/publikation/katalog/datensammlung).

### Structure

The structure describes how the contents of a data set are organised. Each structure consists of at least one data element ([see below](#dataelement)). The individual structures can be used in several data sets. For example, the identical structure is usually used in a recurring publication of a register (version).

For the description of the structure, the DCAT standard with the Swiss application profile is largely used for I14Y.

### Data element

The data element is the smallest descriptive unit of a data collection. Often the data element is also called an attribute, a (defined) variable or "column". The data element contains the individual values, such as the OASI numbers, the number of vacant flats or measured water temperature values. Each data element references a concept.

### Concept

The concept uniquely and completely describes the information contained in the data element. A concept can be a number, a string, a date or a code list with predefined values.

The standard [ISO 11179-1:2023](https://www.iso.org/standard/78914.html) is used to describe the concepts in I14Y. The type of concept is documented. Dependent upon this, further details such as the length or the possible minimum and maximum values are necessary. Step-by-step instructions for documenting a concept can be found in the chapter [publication](/handbook/en/publikation/konzepte).

## Electronic interface (API)

An Application Program Interface (API)_ -- allows machines, among other things, to specifically request individual pieces of information from a set of data. Thanks to APIs, isolated systems can exchange information in an efficient and standardised way. In order for developers to be able to programme their software to obtain information from external systems, they need to know these interfaces. I14Y offers the possibility to describe the interfaces in a central location.

On I14Y, in addition to the title and description, a so-called endpoint from where data can be obtained or a link to the documentation must be given. If possible, reference is also made to the data set upon which the API is based.

APIs are also thoroughly described on I14Y using the data catalogue vocabulary DCAT. It is imperative that some fields that are optional in the standard must be filled in. Thus, the DCAT standard recommends that only a description is documented when an API is catalogued. On I14Y this information is mandatory. All fields specified in the standard must also be filled in on the platform.

A step-by-step guide on how to create electronic interfaces is given in the chapter 
[publication](/handbook/de/publikation/katalog/api). 

## E-government service

E-government services can also be described on the I14Y interoperability platform. The web or mobile applications that simplify certain tasks are thus documented. Information is also documented on how the app in question can be accessed and which organisation is responsible for it. Thanks to the central directory, e-government services should be easier to find.

The _Core Public Service Vocabulary_ defined by the European Union is used to describe public services. The structure and the entire vocabulary are available on the European Commission's Interoperability Platform 
[Join up](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/core-public-service-vocabulary/releases). The reusable and expandable vocabulary specifies certain fields that must be filled in. Each government service can be assigned to a channel -- an internet address, for example, or a telephone number.

On I14Y, the chapter [publication](/handbook/de/publikation/katalog/publicservice/) describes in detail how a government service is documented.