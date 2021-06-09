const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");

//With multer : set storage engine
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (request, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

//Initialize upload variable
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 },
  fileFilter: function (request, file, callback) {
    checkFileType(file, callback);
  },
}).single("myImage");

// Check file type
function checkFileType(file, callback) {
  // allowed extention
  const filetypes = /jpeg|jpg|png|gif/;
  //check extention
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  //check mimetype
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return callback(null, true);
  } else {
    callback("Error: Images Only");
  }
}

// Init app
const app = express();

// EJS setup
app.set("view engine", "ejs");

//Public folder
app.use(express.static("./public"));

//  Route
app.get("/", (request, response) => {
  response.render("index");
});

app.post("/upload", (request, response) => {
  response.send("test");
  upload(request, response, (error) => {
    if (error) {
      response.render("index", {
        msg: error,
      });
    } else {
      console.log(request.file);
      response.send("test");
      if (request.file == undefined) {
        response.render("index", {
          msg: "Error: No File Selected",
        });
      } else {
        response.render("index", {
          msg: "file uploaded!",
          file: `uploads/${request.file.filename}`,
        });
      }
    }
  });
});

//start server
app.listen(3000, () => {
  console.log("server running ");
});
