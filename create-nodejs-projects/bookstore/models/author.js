const mongoose = require("mongoose");

// Define schema
const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

//export the model : name of the database and the name of the Schema;
module.exports = mongoose.model("Author", authorSchema);
