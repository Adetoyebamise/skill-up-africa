const express = require("express");
const app = express();
const server = app.get(5500);
const io = require("socket.io")(server);
const cors = require("cors");
const users = {};
app.use(
  cors({
    origin: "*",
  })
);
io.on("connection", (socket) => {
  // console.log("new user");
  socket.on("new-user", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-connected", name);
  });

  // socket.emit("chat-message", "Hello World");
  socket.on("send-chat-message", (message) => {
    // console.log(message);
    socket.broadcast.emit("chat-message", {
      message: message,
      name: users[socket.id],
    });
  });
  socket.on("disconected", () => {
    // console.log(message);
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    delete users[socket.id];
  });
});
