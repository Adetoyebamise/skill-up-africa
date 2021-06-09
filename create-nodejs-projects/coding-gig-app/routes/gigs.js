const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");

// get gig list
router.get("/", (request, response) => {
  Gig.findAll()
    .then((gigs) => {
      console.log(gigs);
      response.sendStatus(200);
      response.render("gigs", {
        gigs: gigs,
      });
    })
    .catch((error) => {
      throw error;
    });
});

// Display add gig form
router.get("/add", (request, response) => {
  response.render("add");
});

//Add a gig
router.get("/add", (request, response) => {
  const data = {
    title: "Looking for a React Developer",
    technologies: "React , JavaScript, HMTL, CSS",
    budget: "3000 USD",
    description: "Lorem ipsum dolor sit amet",
    contact_email: "user1@gmail,com",
  };

  let { title, technologies, budget, description, contact_email } = data;

  //Insert into table
  Gig.create({
    title: title,
    technologies,
    budget,
    description,
    contact_email,
  })
    .then((gig) => {
      response.redirect("/gigs");
    })
    .catch((error) => {
      throw error;
    });
});

module.exports = router;
