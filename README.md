# CrimeQuest registratie systeem ReadMe

Welkom, bij de ReadMe van het registratie systeem bij CrimeQuest registratie systeem! Dit is een Node.js-applicatie die is gebouwd om gebruikersregistratie en login mogelijk te maken. Gebruikers kunnen een account aanmaken en inloggen.

## Inhoudsopgave

- [Technologieën](#technologieën)
- [Installatie](#installatie)
- [Gebruik](#gebruik)
- [Structuur van de Repository](#structuur-van-de-repository)

## Technologieën

Dit project maakt gebruik van de volgende technologieën en bibliotheken:

- **Node.js**: De serverzijde van de applicatie is geschreven in Node.js.
- **Express.js**: Express wordt hier gebruikt als het framework om HTTP-verzoeken te verwerken.
- **MongoDB en Mongoose**: MongoDB wordt gebruikt als de database voor de gebruikersgegevens,
  Mongoose wordt gebruikt voor de interactie met de database.
- **Handlebars (hbs)**: Handlebars worden gebruikt als de webpagina's om alles te weergeven.
- **Andere**: Bekijk het `package.json`-bestand voor een lijst met andere modules (dependencies) die in het project worden gebruikt.

## Installatie

Volg deze stappen om de applicatie op je lokale machine te installeren en uit te voeren:

```bash
1. Clone de repository naar je lokale machine:

git clone https://git.fhict.nl/I511976/crimequest.git

Installeer de dependencies van de package.json file
# Installeer Express.js
npm install express@4.18.2

# Installeer Handlebars (hbs)
npm install hbs@4.2.0

# Installeer MongoDB
npm install mongod@2.0.0

# Installeer Mongoose
npm install mongoose@8.0.0
```

## Gebruik

**Registratie**: Bezoek `http://localhost:3000/signup`. Om je te registreren maak je een account met je naam, e-mail en wachtwoord. De gegevens worden opgeslagen in de MongoDB database.

**Inloggen**: Ga naar `http://localhost:3000/`log in met je gebruikersnaam en wachtwoord als de gegevens overeenkomen met wat er in de database staat word je doorgestuurd naar de home pagina.

## Structuur van de Repository

- `API/`: hier zitten de volgende bestanden in:

  - `Mongodb.js`
  - `index.js`
  - `node_modules/` (dit zijn de modules die nodig zijn voor de applicatie deze worden automatisch geïnstalleerd met de dependencies)
  - `node.gitignore` (dit voorkomt het pushen van onnodige bestanden tijdens de samenwerking)

- `Public/`: Hierin zitten de css files

  - `login.css`
  - `signup.css`

- `Templates/`: In deze folder zitten de handlebars (`.hbs`) files:
  - `login.hbs`
  - `signup.hbs`

## Veiligheid & Gevoelige Data

Let op: Sla nooit gevoelige data zoals API keys, wachtwoorden of geheime configuratiebestanden op in de repository. Gebruik een `.env` bestand voor gevoelige gegevens en zorg dat `.env` en andere gevoelige bestanden in `.gitignore` staan zodat ze niet worden geüpload naar versiebeheer.

## Auteur

**Semmy Verdonschot**
