const fs = require("fs");
console.log(`started`);
const files = fs.readdirSync(__dirname);
console.log(files);
console.log(`completed`);
