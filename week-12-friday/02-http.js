const http = require("http"); // -> express fastify

//  Stream  Instance EventEmitters
const server = http.createServer((request, response) => {
  console.log("I got here");
});
server.listen(3000, () => {
  console.log(`lIstening on port 3000`);
});
