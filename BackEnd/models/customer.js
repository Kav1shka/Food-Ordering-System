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
            type:int,
            required:true
        },
        KDU_ID:{
            type:String,
            required:true
        },
        Gender:{
            type:String,
            required:true
        },
        Regi_num:{
            type:String,
            required:true

        }
    }
)

const Customer =mongoose.model("Customer", customerSchema);

module.exports=Customer;