# Project 3 : Marketplace POZA

## Description

The app enables a client to place an order, selecting activities he wishes to order.
It also permits a provider to register in POZA's providers database.
From a backoffice, the POZA agency can manage orders and providers.
POZA can link providers to a given client's order.

## This app is composed of 3 projects, each managing a different aspect of the app :

### API : Symfony project.

Data accessible via api platform. 
Manages the MongoDB database. 
Gathers information from front and backoffice, sends requested information.
https://github.com/WildCodeSchool/biarritz_P3_marketplaceV2

### Backoffice : Symfony project. 

From there, a provider can register on the website.
From there as well, POZA can manage its providers and orders.
Data are sent to and collected from the API project.
https://github.com/WildCodeSchool/biarritz_P3_marketplace_backoffice

### Client Front : React project. 

The client's orders are sent from there. Data are sent to the API project.
https://github.com/LorraineDamiens/P3_customer-frontend

## Requirements

All 3 projects must run at once for the app to work properly.

### API : Symfony project.
* PHP 7.3
* MongoDB 4.2
* Symfony 4
* Twig 2.7
* and the usual Symfony application requirements.
* Yarn, Node and Composer are installed
* Possibility to use Docker

### Backoffice : Symfony project. 
* PHP 7.4
* symfony 4.11.3
* twig 2.7

### Client Front : React project. 
* Node: 12.13.0 
* npm: 6.12.0

## Contact 

Lead Developper : 
* Cedric moncade (cedric.moncade@wildcodeschool.fr)

Junior Developper : 
* Lorraine DAMIENS (lorrainedams@me.com) [linkedIn](https://www.linkedin.com/in/lorrainedamiens/)
* Pierre-Juien LECOMTE (pjlecomte@hotmail.com) [linkedIn](https://www.linkedin.com/in/pierre-julien-lecomte/)
* Adrien PEREZ (adrien.perez789@gmail.com) [linkedIn](https://www.linkedin.com/in/adrien-perez-848530195/)
