const express = require("express");
const fs = require("fs");
const app = express();
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});
app.listen(8000, () => {
  console.log("Listening on port 8000");
});

app.get("/video", (request, response) => {
  //ensure a video range
  const range = request.headers.get("Range");
  if (!range) {
    response.status(400).send("Range Header Required");
  } else {
    // Video statistics (22414860 Byte)
    const videoPath = "1-fav-scene-recording.mp4";
    const videoSize = fs.statSync(__dirname + "/1-fav-scene-recording.mp4")
      .size;

    // parsing range
    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

    // Create Headers
    const contentLength = end - start + 1;
    const headers = {
      "Content-Range": `bytes ${start}-${end}/${videoSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": contentLength,
      "Content-Type": "video/mp4",
    };

    // HTTP status 206 for partial Content
    response.writeHead(206, headers);

    // create video read stream for this particular chunk
    const videoStream = fs.createReadStream(videoPath, { start, end });

    //stream the video chunk to the client
    videoStream.pipe(response);
  }
});
