const mongoose = require("mongoose");

const feedBackSchema=new mongoose.Schema(
    
    {
        topic: {
            type: String,
            required: true,
          },
        mfeedback:{
            type: String,
            require:true
        },
    }
)

const feedback =mongoose.model("Feedback", feedBackSchema);

module.exports=feedback;