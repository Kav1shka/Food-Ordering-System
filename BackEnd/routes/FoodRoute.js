const express=require("express");
const router = express.Router();
const { addFood, getAllFoods, getFoodDetails, updateFood, deleteFood } =require( "../controllers/foodController.js");
const adminAuthMiddleware =require( "../middlewares/AuthenticationMiddleWare.js");


router.post("/food/new", adminAuthMiddleware, addFood);
router.get("/foods", getAllFoods);
router.get("/food/:id", getFoodDetails);
router.put("/food/:id", adminAuthMiddleware, updateFood);
router.delete("/food/:id", adminAuthMiddleware, deleteFood);

module.exports= router;     