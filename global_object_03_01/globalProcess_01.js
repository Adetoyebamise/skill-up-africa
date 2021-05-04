console.log(process.pid);
console.log(process.versions.node);
// print process.argv :  It returns an array containing the command line arguments passed
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
const [, , firstName, lastName] = process.argv;
console.log(`Your Name is ${firstName} ${lastName}`);
