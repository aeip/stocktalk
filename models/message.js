const { Schema, model } = require("mongoose");

//Message SCHEMA
const messageSchema = new Schema(
  {
    username: String,
    message: Number,
  },
  { timestamps: true }
);

//Message MODEL
const Message = model("message", messageSchema);

//EXPORT MODEL
module.exports = Message;
