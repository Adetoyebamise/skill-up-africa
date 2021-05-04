process.stdin.on("data", (data) => {
  process.stdout.write(`\n\n ${data.toString().trim()} \n\n`);
});

// Create a Question and Answer using both stdin and stdout
