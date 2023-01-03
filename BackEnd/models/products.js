
const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
{
  image_URL: {
    type: String,
  },
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
     // required: true,
    },
  description: {
      type: String,
      required: true,
    },
  type:{
      type:String,
      //required:true,
  },
  price:{
      type:Number,
      //required:true,
  },
  image:{
      type: String,
      // required: true,
  },
  InStock:{
    type:String,
   // required:true
  }
  },{ timestamps: true }
);

module.exports = mongoose.model("products", foodSchema);
