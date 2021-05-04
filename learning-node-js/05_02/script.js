const sendButton = document.querySelector("#send");
const formInput = document.querySelector(".form-control");
const messageBox = document.querySelector("#messages");
const data = { name: "Tim", message: "hello" };
sendButton.addEventListener("click", () => {
  //messageBox.innerText = formInput.value;
  //console.log("loaded");
  addMessages({ name: "Tim", message: "hello" });
  getMessages();
});

function addMessages(message) {
  messageBox.append(`<h4>${message.name}</h4><p>${message.message}</p>`);
}
function getMessages() {
  "http://localhost:3000/messages",
    (data) => {
      data.forEach((element) => {
        addMessages(element);
        console.log(data);
      });
    };
}
// const message = { name: "Tim", message: "hello" };
// sendButton.addEventListener("click", (message) => {
//   messageBox.append(`<h4>${message.name}</h4><p>${message.message}</P>`);
// });

// $(() => {
//   $("#send").click(() => {
//     addMessages({ name: "Tim", message: "hello" });
//   });
//   addMessages({ name: "Tim", message: "hello" });
//   console.log("loading");
// });
// function addMessages(message) {
//   $("#messages").append(`<h4>${message.name}</h4><p>${message.message}</p>`);
// }
// function getMessages() {
//   $.get("http://localhost:3000/messages", (data) => {
//     data.array.forEach(function (element) {
//       addMessages(element);
//     }, this);
//     console.log(data);
//   });
// }
