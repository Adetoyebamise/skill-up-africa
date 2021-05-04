const http = require("http");
const fs = require("fs");
const Stream = require("stream");
const writableStream = new Stream.Writable();

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "video/mp4" });
  const stream = fs.createReadStream(__dirname + "/1-fav-scene-recording.mp4");
  let body = "";
  stream.pipe(response);
});

server.listen(3000, () => {
  console.log("listening to port", server.address().port);
});
