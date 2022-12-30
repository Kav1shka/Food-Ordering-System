
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
{
  productID: {
    type: String,
    required: true,
  },
  name: {
      type: String,
      required: true,
    },
  category: {
      type: String,
      required: true,
    },
  description: {
      type: String,
      required: true,
    },
  price:{
      type:Number,
      required:true,
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", foodSchema);
