const http = require("http");
const host = "localhost";
const port = "8000";
//sendin JSON file
const requestListener = (request, response) => {
  response.setHeader("content-type", "application.json");
  response.writeHead(200);
  response.end(`{ "message": " JSON response" }`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server in running on ${host}:${port}`);
});
