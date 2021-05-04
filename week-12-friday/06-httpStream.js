const http = require("http");

const server = http.createServer((request, response) => {
  // request is an http.IncomingMessage, which is a readable Stream.
  // response is an http.ServerResponse, which is a writable Stream.
  let body = "";
  // Get the data as utf8 strings.
  // If an encoding is not set, Buffer objects will be received
  request.setEncoding("utf8");

  // Readable Streams emit "data" events once a lisener is added
  request.on("data", (chunk) => {
    body += chunk;
  });

  // The "end" event indicates that the entire body has been received
  request.on("end", () => {
    try {
      const data = JSON.parse(body);
      //write back something interesting to the user
      response.write(typeof data);
      response.end();
    } catch (errror) {
      // uh oh! bad json!
      response.statusCode = 400;
      return response.end(`error: ${error.message}`);
    }
  });
});

server.listen(3000);
