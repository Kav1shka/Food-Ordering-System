const moongoose =require("mongoose");

const wishListSchema = new moongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },

    image:{
        type:String,
        required:true,
    },

    price:{
        type:Number,
        required:true,
    },

    rating:{
        type:Number,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },
    
    Quantity:{
        type:Number,
        required:true,
    },


    customerID:{   
        type:moongoose.Schema.Types.ObjectId,
        ref:'customer',
        required:true
    },
    
    product:{
        type:moongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true
    }
    
})
const Wishlist= moongoose.model('Wishlist',wishListSchema)
module.exports=Wishlist;