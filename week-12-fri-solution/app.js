const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "video/mp4" });
  const readableStream = fs.createReadStream(
    __dirname + "/1-fav-scene-recording.mp4"
  );
  readableStream.pipe(response);
});

server.listen(3000, () => {
  console.log("listening to port", server.address().port);
});
