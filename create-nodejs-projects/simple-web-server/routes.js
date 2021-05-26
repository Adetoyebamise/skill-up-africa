const http = require("http");
const host = "localhost";
const port = "3000";
// managing route using http request object

const books = JSON.stringify([
  { title: "Prilgrim's Progress", author: "John Buyan", year: 1678 },
  { title: " Holier than thou", author: "Jackie Hill Perry", year: 2021 },
]);
const author = JSON.stringify([
  {
    name: "John Buyan",
    authorContryOfBirth: "Bedford",
    yearOfBirth: "November 1628",
  },
  {
    name: " Jackie Hill Perry",
    authorContryOfBirth: "America",
    yearOfBirth: " june 1989",
  },
]);
const requestListener = (request, response) => {
  response.setHeader("content-type", "application.json");
  switch (request.url) {
    case "/books":
      response.writeHead(200);
      response.end(books);
      break;
    case "/author":
      response.writeHead(200);
      response.end(author);
      break;
    default:
      response.writeHead(404);
      response.end(JSON.stringify({ error: "Resource cannot be reached" }));
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server in running on ${host}:${port}`);
});
