const express=require("express");
const router = express.Router();
const { addFood, getAllFoods,getAllFoods_Mains,getAllFoods_Pastry, getAllFoods_Drinks,getAllFoods_Dessert,getFoodDetails, updateFood, deleteFood } =require( "../controllers/foodController.js");
const adminAuthMiddleware =require( "../middlewares/AuthenticationMiddleWare.js");


router.post("/food/new",   addFood);
router.get("/foods/all", getAllFoods)
router.get("/foods/category/mains", getAllFoods_Mains);
router.get("/foods/category/pastry", getAllFoods_Pastry);
router.get("/foods/category/drinks", getAllFoods_Drinks);
router.get("/foods/category/desserts", getAllFoods_Dessert);
router.get("/food/_id", getFoodDetails);
router.put("/food/put/_id", updateFood);
router.delete("/food/delete/:id",deleteFood);

module.exports= router;     