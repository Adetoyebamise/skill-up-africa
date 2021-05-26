const http = require("http");
const fs = require("fs").promises;
const host = "localhost";
const port = "3000";
let indexFile;

// serving an html page from a file
const requestListener = (request, response) => {
  response.setHeader("content-type", "text/html");
  response.writeHead(200);
  response.end(indexFile);
};
fs.readFile(__dirname + "/index.html")
  .then((contents) => {
    indexFile = contents;
    server.listen(port, host, () => {
      console.log(`Server in running on ${host}:${port}`);
    });
  })
  .catch((error) => {
    console.log(`could not read the index.html file ${error}`);
    process.exit(1);
  });

const server = http.createServer(requestListener);
