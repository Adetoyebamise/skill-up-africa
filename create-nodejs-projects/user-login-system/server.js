if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const methodOverride = require("method-override");

const initializePassport = require("./passport-config");
initializePassport(passport, (email) => {
  users.find((user) => user.email === email),
    (id) => users.find((user) => user.id === id);
});

// Create an arbitrary database
const users = [];

// set view directory
app.set("views", "views");

// set view engine
app.set("view-engine", "ejs");

// Access the content of the client details
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// create route for GET
app.get("/", checkAuthenticated, (request, response) => {
  response.render("index.ejs", { name: request.user.name });
});

app.get("/register", checkNotAuthenticated, (request, response) => {
  response.render("register.ejs");
});

app.get("/login", checkNotAuthenticated, (request, response) => {
  response.render("login.ejs");
});

// create route to POST
app.post("/register", checkNotAuthenticated, async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    users.push({
      id: Date.now().toString(),
      name: request.body.name,
      email: request.body.email,
      password: hashedPassword,
    });
    response.redirect("/login");
  } catch (error) {
    response.redirect("/register");
  }
  console.log(users);
});

app.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

//create route to DELETE
app.delete("/logout", (request, response) => {
  request.logOut();
  response.redirect("/login");
});

// check if user is authenticated
function checkAuthenticated(request, response, next) {
  if (request.isAuthenticated()) {
    return next();
  } else {
    response.redirect("/login");
  }
}

// check if user is not authenticated
function checkNotAuthenticated(request, response, next) {
  if (request.isAuthenticated()) {
    return response.redirect("/");
  } else {
    next();
  }
}

// start server
app.listen(3000);
