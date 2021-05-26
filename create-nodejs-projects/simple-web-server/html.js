const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = "3000";

// serving an html page from a file
const requestListener = (request, response) => {
  fs.readFile(__dirname + "/index.html")
    .then((contents) => {
      response.setHeader("content-type", "text/html");
      response.writeHead(200);
      response.end(contents);
    })
    .catch((error) => {
      response.writeHead(500);
      response.end(error.stack);
      return;
    });
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server in running on ${host}:${port}`);
});
