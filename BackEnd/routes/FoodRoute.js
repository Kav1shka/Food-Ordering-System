const express = require("express");
const foodController = require("../controllers/foodController");
const adminAuthMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/food/new", adminAuthMiddleware, foodController.addFood);
router.get("/foods", foodController.getAllFoods);
router.get("/food/:id", foodController.getFoodDetails);
router.put("/food/:id", adminAuthMiddleware, foodController.updateFood);
router.delete("/food/:id", adminAuthMiddleware, foodController.deleteFood);

module.exports = router;


/*const customer = require("../models/customer.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValid, loginValid } = require("../utils/errorHandler");

const authController = {
  register: async (req, res) => {
    try {
      const { Name, Email, cf_password ,Phone,KDU_ID,Gender,Regi_num,password} = req.body;
      const errorMessage = registerValid(Name, Email, password, cf_password,Phone,KDU_ID,Gender,Regi_num);
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const userExists = await Users.findOne({ Email });
      if (userExists) {
        return res
          .status(400)
          .json({ message: "This email is already in use" });
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      await new customer({
        Name,
        Email,
        Gender,
        KDU_ID,
        Phone,
        Regi_num,
        password: hashedPassword,
      }).save();
      res.status(201).json({
        message: "You have successfully registered. Please login now",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { Email, password } = req.body;
      const errorMessage = loginValid(Email, password);
      if (errorMessage) return res.status(400).json({ message: errorMessage });

      const Customer = await customer.findOne({ Email });
      if (!Customer)
        return res.status(400).json({ message: "Invalid email or password" });

      const match = await bcrypt.compare(password, Customer.password);
      if (!match)
        return res.status(400).json({ message: "Invalid email or password" });

      const token = await jwt.sign({ _id: customer._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      customer.password = undefined;
      res
        .status(200)
        .json({ message: "You have successfully logged in", user, token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
*/
/*
let express =require( "express");
let expressAsyncHandler =require("express-async-handler");
let Product =require("../models/products.js");
let  Wishlist =require("../models/wishlist.js");
let y=require(isAuth,"../utlis.js") ;

const productRouter = express.Router();

productRouter.get('/',expressAsyncHandler(async(req,res)=>{
  const products = await Product.find({category:req.query.category}) //return all products
  res.send(products)
}));

productRouter.get('/search',expressAsyncHandler(async(req,res)=>{
    let regEx = new RegExp(req.query.name,'i');
    const serachedProducts = await Product.find({name:regEx})
    if(serachedProducts){
        res.send(serachedProducts)

    }else{
      res.status(402).send({message:'Opps No product found!!'})
    }
   }))

productRouter.post('/wishlist',isAuth,expressAsyncHandler(async(req,res)=>{
 const item = await Wishlist.findOne({productId:req.body._id});
 if(item){
  res.status(409).send({message:'Item Already exits'});
 }
 else{
    const newItem = new Wishlist({
        name:req.body.name,
        image:req.body.image,
        price:req.body.price,
        rating:req.body.rating,
        description:req.body.description,
        userId:req.user._id,
        product:req.body._id
    })
    const wishlistItem = await newItem.save();
    res.send(wishlistItem)
 }
}))

productRouter.get('/wishlist',isAuth,expressAsyncHandler(async(req,res)=>{

    const items = await Wishlist.find({userId:req.user._id});
    res.send(items)

}))
productRouter.delete('/wishlist/:id',isAuth,expressAsyncHandler(async(req,res)=>{
    const items = await Wishlist.deleteOne({productId:req.params.id});
    res.send(req.params.id)

}))

productRouter.get('/seed',
expressAsyncHandler(async (req,res)=>{
    const createProducts = await Product.insertMany(data.products)
    res.send({products:createProducts})
})
)

productRouter.get('/:id',expressAsyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(product){
        res.send(product)
    }else{
        res.status(404).send({message:'Product not found!'})
    }
}))


export default productRouter
*/
