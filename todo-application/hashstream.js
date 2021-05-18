const http = require("http");
const { emit } = require("process");

// JSON fetching
// let response = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json;charset=utf-8",
//   },
// };
http.get(
  "http://coderbyte.com/api/challenges/json/age-counting",
  (request, response) => {
    const statusCode = response;
    const contentType = response.headers("content-type");
    let error;

    //checking for 200 status code
    if (statusCode !== 200) {
      error = new Error("Request Failed.\n" + `statusCode:${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error(
        "Invalid content-type.\n" +
          `We Expected application/json but received ${contentType}`
      );
    }
    if (error) {
      console.error(error.message);
      // consume response data
      response.resume();
      return;
    }
  }
);

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

server.listen(8000);
