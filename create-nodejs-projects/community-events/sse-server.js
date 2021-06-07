// How To Use Server-Sent Events in Node.js to Build a Realtime App
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (request, response) => response.json({ clients: clients.length }));

let clients = [];
let facts = [];

function handleEvent(request, response, next) {
  const headers = {
    "content-Type": "text/event-stream",
    connection: "keep-alive",
    "Cache-Control": "no-cache",
  };
  response.writeHead(200, headers);
  const data = `data: ${JSON.stringify(facts)}\n\n`;
  response.write(data);

  const clientId = Date.now();

  const newClient = {
    id: clientId,
    response,
  };
  clients.push(newClient);

  request.on("close", () => {
    console.log(`${clientId} Connection closed`);
    clients = clients.filter((client) => client.id !== clientId);
  });
}

app.get("/events", handleEvent);

function sendEventsToAll(newFact) {
  clients.forEach((client) =>
    client.response.write(`data: ${JSON.stringify(newFact)}\n\n`)
  );
}

async function addFact(request, response, next) {
  const newFact = request.body;
  facts.push(newFact);
  response.json(newFact);
  return sendEventsToAll(newFact);
}

app.post("/fact", addFact);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`facts Events service listening at http://localhost:${PORT}`);
});
