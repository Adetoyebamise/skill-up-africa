const bar = () => console.log("bar");
const baz = () => console.log("baz");

const doWork = () => {
  while (true) {}
};

const foo = () => {
  console.log("foo");
  bar();
  doWork();
  baz();
};
foo();
