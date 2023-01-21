const express=require("express");
const router = express.Router();
const feedbackController =require( "../controllers/feedbackController");
// const adminAuthMiddleware = require("../validations.js");



router.get('/feedbackGet',feedbackController.getAllFeedbacks );
router.post('/feedbackPost', feedbackController.Addfeedback);

module.exports = router;