const mongoose = require("mongoose");

const customerSchema=new mongoose.Schema(
    
    {
        Name:{ 
            type:String,
            required:true
        },
        Email:{
            type:String,
            required:true
        },
        Phone:{
            type:String,
            required:true
        },
        KDU_ID:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        cf_password:{
            type:String,
            required:true
        }
    }
)

const customer =mongoose.model("Customer", customerSchema);

//export defaultcustomer;

module.exports=customer;