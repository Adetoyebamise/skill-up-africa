const events = require("events");
const eventEmitter = new events();

eventEmitter.on("start", () => {
  console.log(`i was clicked - `);
});

eventEmitter.emit("start");
