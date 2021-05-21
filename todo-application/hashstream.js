const crypto = require("crypto");
const fs = require("fs");
const http = require("https");

const RESOURCE_URL = "https://coderbyte.com/api/challenges/json/age-counting";

http.get(RESOURCE_URL, (response) => {
  let body = "";

  response.on("data", (chunk) => {
    body += chunk;
  });
  response.on("end", () => {
    const jsonBody = JSON.parse(body).data;
    const keyValueList = jsonBody.split(", ");
    const numberOfAge32 = keyValueList.filter(
      (item) => item == "age=32"
    ).length;
    keyValueList.unshift(numberOfAge32);
    console.log(numberOfAge32);
    const writeStream = fs.createWriteStream("output.txt");
    for (const keyValue of keyValueList) {
      writeStream.write(keyValue + "\n");
    }
    writeStream.write("\n");
    let myHash = getHash("output.txt");
  });
});

const getHash = (fileName) => {
  const readStream = fs.createReadStream(fileName);
  const hash = crypto.createHash("SHA1");
  readStream.on("data", (chunk) => {
    hash.update(chunk);
  });
  readStream.on("end", () => {
    return hash.digest("hex");
  });
};
