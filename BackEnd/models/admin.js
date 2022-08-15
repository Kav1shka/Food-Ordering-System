const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const AdminSchema=new Schema(
    
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
        }
    }
)

const admin =mongoose.model("admin",AdminSchema );

module.exports 