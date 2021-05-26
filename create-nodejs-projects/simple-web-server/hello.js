// web server in node js with the http module
const http = require("http");
const host = "localhost";
const port = "3000";

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end("server starts");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server in running on ${host}:${port}`);
});

// returning dfferent types of content: JSON, CSV, html;
