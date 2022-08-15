const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const customerSchema=new Schema(
    
    {
        Food_ID:{ 
            type:String,
            required:true
        },
        Name:{
            type:String,
            required:true
        },
        Category:{
            type:int,
            required:true
        },
        items:{
            type:int,
            required:true

        }
       
    }
)

const Customer =mongoose.model("Customer", customerSchema);

module.exports=Customer;