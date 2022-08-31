const mongoose=require('mongoose');
const { number } = require('yargs');

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
            type:Number,
            required:true
        },
        KDU_ID:{
            type:String,
            required:true
        }
    }
)

const admin =mongoose.model("admin",AdminSchema );

module.exports 