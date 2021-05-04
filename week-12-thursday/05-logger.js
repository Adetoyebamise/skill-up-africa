const eventEmitter = require("events");
const loggerEmitter = new eventEmitter();
const logger = (message) => {
  loggerEmitter.emit("event", `${message}`);
};

loggerEmitter.on("event", (message) => {
  console.log(
    `${message} scanned your fingerprint, You are logged in at : ${new Date()}`
  );
});

logger("Kee");

exports.logger = logger;
// A device or computer program for making a systematic recording of events, observations, or measurements.
