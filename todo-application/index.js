const express = require("express");
const rateLimit = require("express-rate-limit");
const routes = require("./routes");
const middleware = require("./middleware"); // queryString or qs

const app = express();

// TODO: organised the middleware to have its own file. Just like the route .

// TODO: add a rate limiter to this application
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

routes(app);
middleware(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is lisening on port ${PORT}`);
});
