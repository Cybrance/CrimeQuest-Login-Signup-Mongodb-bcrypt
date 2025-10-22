const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");
const { read } = require("fs");
const bcrypt = require("bcryptjs"); // Add bcryptjs

const templatePath = path.join(__dirname, '../templates');

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", templatePath);
app.use(express.urlencoded({ extended: false }));
app.use('/Public', express.static(path.join(__dirname, '../Public')));

// Laad de inlogpagina
app.get("/", (req, res) => {
  res.render("login");
});

// Laad de registratiepagina
app.get("/signup", (req, res) => {
  res.render("signup");
});

// stuur de gegevens op voor registratie van een account
app.post("/signup", async (req, res) => {
  // Haal de gegevens op
  const hashedPassword = await bcrypt.hash(req.body.password, 10); // Hash password
  const data = {
    name: req.body.name,
    password: hashedPassword,
    email: req.body.email,
  };
  // Voeg de gegevens toe aan de database
  await collection.insertMany([data]);
  // Profielpagina
  res.render("home");
});

// Verwerk het inloggen
app.post("/login", async (req, res) => {
  try {
    // Zoek een al bestaande account op in de database
    const check = await collection.findOne({
      $or: [{ name: req.body.name }, { email: req.body.name }],
    });

    // Controleer of het wachtwoord klopt
    if (check && await bcrypt.compare(req.body.password, check.password)) {
      res.render("home");
    } else {
      // Render de login-pagina met een foutmelding en het gemarkeerde veld
      res.render("login", { error: "Verkeerde gebruikersnaam, e-mail of wachtwoord.", field: "name"});
    }
  } catch {
    res.render("login", { error: "Verkeerde gebruikersnaam, e-mail of wachtwoord.", field: "name" });
  }
});

app.use("/login", (req, res, next) => {
  res.render("login", { error: null, field: null });
});


// poort 3000
app.listen(3001, () => {
  console.log("port connected");
});

