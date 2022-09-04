const express=require("express");
const router = express.Router();
const orderController =require( "../controllers/orderController");


router.post("/order/new", orderController.makeOrder);
router.get("/orders", orderController.getAllOrders);
router.delete("/orders/:id", orderController.deleteOrder);

module.exports =  router;