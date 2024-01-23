const mongoose = require("mongoose");
const user_schema = new mongoose.Schema(
  {
    Name: {type: String, required: true},
    Email: {type: String, required: true},
    Password: {type: String, required: true},
    Role:{type:String, default: "user"}
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", user_schema);
