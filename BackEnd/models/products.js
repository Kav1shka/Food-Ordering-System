
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
{
  name: {
      type: String,
      required: true,
    },
  category: {
      type: String,
      required: true,
    },
  cost: {
      type: Number,
      required: true,
    },
  description: {
      type: String,
      required: true,
    },
  InStock:{
    type:String,
   required:true
  }
  },{ timestamps: true }
);

module.exports = mongoose.model("products", foodSchema);
