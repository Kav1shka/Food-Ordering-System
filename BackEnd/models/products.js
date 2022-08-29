import { boolean } from "yargs";

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
      type: String,
      required: true,
    },
  rating:{
      type: String,
      required: true,
    },
  description: {
      type: String,
      required: true,
    },
  type:{
      type:String,
      required:true,
  },
  price:{
      type:Number,
      required:true,
  },
  image:{
      type: String,
      required: true,
  },
  countInStock:{
    type:boolean,
    required:true
  }
  },{ timestamps: true }
);

module.exports = mongoose.model("products", foodSchema);
export default products;