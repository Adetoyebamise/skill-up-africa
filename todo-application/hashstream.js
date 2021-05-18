const http = require("http");
const { emit } = require("process");

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
