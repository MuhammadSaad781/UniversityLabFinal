const mongoose = require("mongoose");
const addresstemplate = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Contact: {
    type: String,
    required: true,
  },
  PostalCode: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Address", addresstemplate);
