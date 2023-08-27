const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    CustomerName: {
      type: String,
      required: true,
    },

    CustomerType:{
      type:String,
     // required:true,
    },

    Email: {
      type: String,
     // required: true,
    },

    foodName: {
      type: [],
      //required: true,
    },

    KDU_ID:{
      type:String,
      //required:true,
    },

    // Faculty: {
    //   type: String,
    //   required: true,
    // },

    paymentMethod:
    {type:String,
      //required:true
    },

    itemsPrice:{
      type:Number,
      // required:true
    },

    totalprice:{
      type:Number,
      required:true
    },

    //userId:{type:moongoose.Schema.Types.ObjectId,ref:'User',required:true},
    isPaid:{
      type:Boolean,
      default:false
    },

    paidAt:{
      type:Date
    },

    isPlaced:{
      type:Boolean,
      default:true
    },
    
    paymentId:{
       type:String,
    },
    itemList:{
      type:[],
      require:true,
    }
 
  },
  { timestamps: true }
);

module.exports = mongoose.model("orderDetails", orderSchema);