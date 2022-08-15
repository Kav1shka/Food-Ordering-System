const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const customerSchema=new Schema(
    
    {
        Order_ID:{ 
            type:String,
            required:true
        },
        Food_ID:{
            type:String,
            required:true
        },
        Amount:{
            type:int,
            required:true
        },
        Quantity:{
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