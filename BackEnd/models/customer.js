const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const customerSchema=new Schema(
    
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
        isAdmin:{
            type:Boolean,
            default:false
        }, 
        KDU_ID:{
            type:String,
            required:true
        },
        Gender:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

const customer =mongoose.model("Customer", customerSchema);

module.exports=customer;