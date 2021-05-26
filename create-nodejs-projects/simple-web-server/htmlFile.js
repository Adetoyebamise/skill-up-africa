const http = require("http");
const host = "localhost";
const port = "3000";
// returning html content
const requestListener = (request, response) => {
  response.setHeader("content-type", "text/html");
  response.writeHead(200);
  response.end("<h2> HTML here</h2>");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server in running on ${host}:${port}`);
});
