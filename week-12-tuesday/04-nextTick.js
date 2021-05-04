const bar = () => console.log("bar");
const baz = () => console.log("baz");

// const doWork = () => {
//   while (true) {}
// };

const foo = () => {
  console.log("foo");
  // doWork();
  setTimeout((bar) => {}, 1000);
  new promise((resole, reject) => {
    resolve(`should be right before baz, before bar`);
  }).then(res);
  baz();
};
foo();

// Event loop manager
// Call Stack [Item], Message Queue [], Job Queue [], Next tick []
