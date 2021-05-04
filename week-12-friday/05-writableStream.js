const Stream = require("stream");
const writableStream = new Stream.Writable();

writableStream._write = (chunk, encoding, next) => {
  console.log("local response >> " + chunk.toString());
  next();
};

process.stdin; //.pipe(writableStream)

// Stream -> Continous flow of data/byte
// All streaam is of instance eventEmitter
// Stream can be of two kind
// 1 ReadableStream ( Create an eventEmitter that accept data from a source (file, htpp, keyboard))
// 2.WritableStream (creatte an eventEmiter that flush out data to a source (Terminal, file, httpClient))
// ReadableStream => accept input with the aim of processing it
// WritableStream => flush out processed data
