const questions = [
  "What is your name ?",
  "What food do you prefer to eat ?",
  "Where is your favorite destination ?",
];

const ask = (index = 0) => {
  process.stdout.write(`\n ${questions[index]}`);
  process.stdout.write(` > `);
};

ask();

const answers = [];
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(questions.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  const [name, food, favPlace] = answers;
  console.log(`Thank you ${name}, Go ahead eat up ${food} at ${favPlace}`);
});
