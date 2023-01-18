const mongoose = require("mongoose");

const feedBackSchema=new mongoose.Schema(
    
    {
        foodName:{ 
            type:String,
            required:true
        },
        fbMessage:{
            type:String,
            require:true
        },
    }
)

const feedback =mongoose.model("Feedback", feedBackSchema);

module.exports=feedback;