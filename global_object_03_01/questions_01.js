const questions = [
  "What is your name ?",
  "What food do you prefer to eat ?",
  "Where isyour favorite destination ?",
];

const ask = (index = 0) => {
  process.stdout.write(`\n\n\n ${questions[index]}`);
  process.stdout.write(` > `);
};

ask();

process.stdin.on("data", (data) => {
  process.stdout.write(`\n\n ${data}`);
  process.exit();
});

// function askQuestion(index) {
//   process.stdout.write(`\n\n\n ${questions[index]}`);
//   process.stdout.write(` > `);
// }

// askQuestion(0);
// askQuestion(1);
// askQuestion(2);
