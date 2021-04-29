const fs = require("fs");
const data = {
  name: "Tunmise",
};

fs.writeFile("data.json", JSON.stringify(data), (error, dataThree) => {
  console.log(dataThree, "i have seen the data");
});
console.log(data);
