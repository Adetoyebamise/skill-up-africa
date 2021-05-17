const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
require("./models/sequelize/index");
const configs = require("./configs/configs.json");
const PORT = process.env.PORT || 3000;

const routes = require("./routes");
const middleware = require("./middleware"); // queryString or qs

routes(app);
middleware(app);

// TODO: add a rate limiter to this application
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
