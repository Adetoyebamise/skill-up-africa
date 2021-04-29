const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("event", (date) => {});
eventEmitter.emit("event"`${date}`);
