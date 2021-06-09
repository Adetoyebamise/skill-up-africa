const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");
const io = socketio(server);

// set static folder
app.use(express.static(path.join(__dirname, "public")));
const chatBot = "app-chat-cord bot";

// run when a client connect
io.on("connection", (socket) => {
  console.log("New WS Connection");
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);

    //welcome current user
    socket.emit("message", formatMessages(chatBot, "welcome to app shat cord"));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessages(chatBot, `${user.username}A user has joined the chat`)
      );

    // send user and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  //Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    //emitting to the server log
    console.log(msg);

    // emitting to the client log
    io.to(user.room).emit("message", formatMessages(user.username, msg));

    // emitting to the client side
    outputMessage(message);
  });

  // run when a client disconnect
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);
    if (user) {
      // let everyone know: emit
      io.to(user.room).emit(
        "message",
        formatMessages(chatBot, `${user.username} user left the chat`)
      );
      // send user and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

//start up server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running ${PORT}`));
