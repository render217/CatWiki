const mongoose = require("mongoose");

const catsImageSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  breed: {
    type: String,
  },
});
module.exports = mongoose.model("Image", catsImageSchema);
