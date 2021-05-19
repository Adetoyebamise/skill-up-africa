const fs = require("fs");
const http = require("https");

http
  .get(
    "https://coderbyte.com/api/challenges/json/age-counting",
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
      response.setEncoding("utf8");
      let rawData = "";
      response.on("data", (chunk) => {
        rawData += chunk;
      });
      response.on("end", () => {
        try {
          const parsedData = JSON.parse(rawData);
          // console.log(parsedData);
        } catch (error) {
          console.log(error.stack);
        }
      });
    }
  )
  .on("error", (error) => {
    console.log(`Got error: ${error.stack}`);
  });
