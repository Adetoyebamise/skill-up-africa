const eventEmitter = require("events");
const loggerEmitter = new eventEmitter();
loggerEmitter.on("event", () => {
  console.log(
    `You scanned your fingerprint, You are logged in at : ${new Date()}`
  );
});

loggerEmitter.emit("event");

// A device or computer program for making a systematic recording of events, observations, or measurements.
