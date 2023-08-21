const feedbacks=require("../models/feedback");
const { feedbackValid } = require("../validations.js");

const feedbackController={
getAllFeedbacks: async (req, res) => {
        try {
          const CfeeCdback = await feedbacks.find();
          res.status(200).json({ CfeeCdback });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      },

Addfeedback: async (req, res) => {
        try {
          const mfeedback = req.body.mfeedback;
          const topic = req.body.topic;
          console.log(req.body);
          const errorMessage = feedbackValid( mfeedback,topic );
          if (errorMessage) return res.status(400).json({ message: errorMessage });
          await new feedbacks({ mfeedback,topic }).save();
          res.status(201).json({
            message: "You have successfully Add FeddBack",
          });
        } catch (error) {
          return res.status(500).json({ message: error.message });
        }
      },
}
module.exports =  feedbackController; 