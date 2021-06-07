const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const user = require("./model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_SECRET = "YTTGRFHYUtgf[hpg0GLLLLWXH598WH-,C[WQ0H8W";
const saltRounds = 10;

//connect to the mongodb database
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/login-app-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((resolve) => console.log("connection secured: welcome to mongodb"))
  .catch((error) => error.stack);

// serve the static file to the server
app.use("/", express.static(path.join(__dirname, "static")));
app.use(bodyParser.json());

// setting up the post method to change password;
app.post("/api/change-password", async (request, response) => {
  const { token, newPassword } = request.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const _id = user.id;
    const hashedPassword = await bcrypt.hash(newPassword);
    await user.updateOne(
      { _id },
      {
        $set: { password: hashedPassword },
      }
    );
    response.json({ status: "ok" });
  } catch {
    response.json({ status: "error", error: ";))" });
  }
  console.log(user);
  response.json({ status: "ok" });
});
// setting up the post method for login
app.post("api/login", async (request, response) => {
  const { email, password } = request.body;
  // lean return simple object representation
  const userOutput = await user.findOne({ username, password }).lean();
  if (!user) {
    return response.json({
      status: "error",
      error: "invalid username/password",
    });
  }

  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);
    return response.json({ status: "ok", data: "" });
  }
  response.json({ status: "ok", data: token });
  response.json({
    status: "error",
    error: "invalid username/password",
  });
});

// setting up post method
app.post("/api/register", async (request, response) => {
  const { firstname, lastname, email, password } = request.body;
  if (!firstname || typeof username !== "string") {
    return response.json({ status: "error", error: "Invalid input" });
  }
  if (!lastname || typeof lastname !== "string") {
    return response.json({ status: "error", error: "Invalid input" });
  }
  if (!email || typeof email !== "string") {
    return response.json({ status: "error", error: "Invalid input" });
  }
  if (!password || typeof password !== "string") {
    return response.json({ status: "error", error: "Invalid input" });
  }
  if (password.length < 5) {
    return response.json({ status: "error", error: "password strength low" });
  }
  //hashing the password
  const hash = await bcrypt.hash(password, 10);
  try {
    const userDetails = await user.create({
      firstname,
      lastname,
      email,
      password,
    });
    console.log(`user created successfully: ${userDetails}`);
  } catch (error) {
    if (error.message === "user validation failed") {
      return response.json({
        status: "error",
        error: "I have search stackoverflow",
      });
    } else {
      throw error;
    }
    // console.log(JSON.stringify(error.message));
    // return response.json({ status: "error" });
  }
  //respond with a status message ok;
  await response.json({ message: "ok" });
});

// start up the server
app.listen(3000);
