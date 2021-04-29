//console.log(process.argv);
// Todo create a grab function that uses flag and print to the console

const grab = (flag) => {
  let indexOfValue = process.argv.indexOf(flag) + 1;
  return process.argv[flagIndex];
};

console.log(`"language" - ${grab("--lang")}`);
console.log(`"user" - ${grab("--user")}`);
