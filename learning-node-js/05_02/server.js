const express = require("express");
const app = express();
const messages = [
  { name: "tim", message: "hi" },
  { name: "Kim", message: "hey" },
];

app.use(express.static(__dirname));
app.get("/messages", (request, response) => {
  response.send(messages);
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
