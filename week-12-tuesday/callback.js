const phone = (number) => {
  console.log(`ring...`);
  console.log(`vibrate...`);
};
const call = (reachUsCallback) => {
  reachUsCallback();
};
const ringOutFunction = () => {
  console.log(`she's calling`);
};
const connectWith = (reachUsCallback) => {
  console.log(`leave a message`);
};
call();
call();
