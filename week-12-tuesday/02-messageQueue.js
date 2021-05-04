const bar = () => console.log("bar");
const baz = () => console.log("baz");
const doWork = () => {
  while (true) {}
};
const foo = () => {
  console.log("foo");
  setTimeout(bar, 0);
  baz();
};
foo();
// Event loop manager
// Call Stack [Item], Message Queue [].
