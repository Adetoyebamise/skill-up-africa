const EventEmitter = require("events");
const eventEmitter = new EventEmitter();
eventEmitter.on("event", (message, date) => {
  process.stdin();
});
eventEmitter.emit("event", `This is the time on the West coast:`, new Date());

// A device or computer program for making a systematic recording of events, observations, or measurements.
("a data logger");
