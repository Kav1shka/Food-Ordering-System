const express=require("express");
const router = express.Router();
const customerController =require( "../controllers/customerControllers.js");
const adminAuthMiddleware = require("../validations.js");



router.get("/Customers", customerController.getAllCustomer);
router.delete("/Customer/:id", customerController.deleteCustomer);

module.exports = router;

/*const router = require("express").Router();
let Customer = require("../models/customer");

router.route("/add").post((req,res)=>{
   const Name = req.body.Name;
   const Email = Number(req.body.Email);
   const Gender = req.body.Gender;
   const KDU_ID=req.body.KDU_ID;
   const Phone=req.body.Phone;
   const Regi_num=req.body.Regi_num;

  

   const newCustomer = new Customer({
      Name,
      Email,
      Gender,
      KDU_ID,
      Phone,
      Regi_num
   })

   newStudent.save().then(()=>{
      res.json("Customer Added")
   }).catch((err)=>{
      console.log(err);
   })
})

router.route("/").get((req,res)=>{
    Customer.find().then((customer)=>{
      res.json(customer)
    }).catch((err)=>{
      console.log(err)
    })
})

router.route("/update/:id").put(async (req, res) => {
  let customerId = req.params.id;
  const {Name, Gender, Email,Phone,KDU_ID,Regi_num} = req.body;

  const updateCustomer = {
    Name,
    Email,
    Phone,
    KDU_ID,
    Gender,
    Regi_num 

  }

  const update = await Student.findByIdAndUpdate(customerId, updateCustomer)
  .then(() => {
    res.status(200).send({status: "Customer updated"})
  }).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
  })
})

router.route("/delete/:id").delete(async (req, res) => {
  let customerId = req.params.id;

  await Customer.findByIdAndDelete(customerId)
    .then(() => {
      res.status(200).send({status: "Customer deleted"});
    }).catch((errr) => {
      console.log(err.message);
      res.status(500).send({status: "Error with delete Customer", error: err.message});
    })
})

router.route("/get/:id").get(async (req, res) => {
  let customerId= req.params.id;
  const customer = await Customer.findById(customerId)
    .then((customer) => {
      res.status(200).send({status: "User fetched", customer})
    }).catch((err) => {
      console.log(err.message);
      res.status(500).send({status: "Error with get user", error: err.message});
  })
})

module.exports = router;
*/
/*
let express = require("express");
//import data from "../data.js";
let Customer =require("../models/customer");
let  bcrypt=require("bcrypt");
let  expressAsyncHandler = require("express-async-handler");
const yargs = require("yargs");
const {genrateToken, isAuth }=require('../utlis.js');

const customerRouter = express.Router();

customerRouter.get('/seed',
expressAsyncHandler(async(req,res)=>{
        const createCustomer= await Customer.insertMany(data.users)
        res.send({createCustomer})
    
})

);

// post request for signining users
customerRouter.post('/log_in',expressAsyncHandler(async(req,res)=>{
 const customer= await Customer.findOne({email:req.body.email})
 if(customer){
         if(bcrypt.compareSync(req.body.password,user.password)){ // if password mateches
           res.send({
                   _id:customer._id,
                   name:customer.Name,
                   eamil:customer.Email,
                   isAdmin:customer.isAdmin,
                   mobNo:customer.Phone,
                   token:genrateToken(customer)
           });
           return;
         }
 }
 res.status(401).send({message:'Invalid Email or Password'})
})
);

//post route for signup
customerRouter.post('/signup',expressAsyncHandler(async(req,res)=>{
        const customer= await Customer.findOne({email:req.body.email})
        if(customer){
                res.status(401).send({message:'Customer already exits'})
                     
        }else{
                const newCustomer = Customer({
                        name:req.body.Name,
                        email:req.body.Email,
                        kdu_id:req.body.KDU_ID,
                        gender:req.body.Gender,
                        phone:req.body.Phone,
                        isAdmin:req.body.isAdmin,
                        password:bcrypt.hashSync(req.body.password,10)
                });
                const customer =await newCustomer.save();
                res.send({
                   _id:customer._id,
                   name:customer.name,
                   eamil:customer.email,
                   isAdmin:customer.isAdmin,
                   token:genrateToken(customer),

                })
        }
     
})

);

//post route for adding address
/*
customerRouter.get('/shipping/:id',expressAsyncHandler(async(req,res)=>{
        const id =req.params.id
        const address = await Address.find({userId:id})
        res.send(address)
}))

userRouter.delete('/address/:id',expressAsyncHandler(async(req,res)=>{
         await Address.deleteOne({_id:req.params.id})
          res.send({id:req.params.id})
}))
userRouter.put('/address/:id',isAuth,expressAsyncHandler(async(req,res)=>{
         const address=await Address.findById(req.params.id)
       
         if(address){
                address.name= req.body.name;
                address.mobNo=req.body.mobNo
                address.pinCode=req.body.pinCode
                address.address=req.body.address
                address.town=req.body.town
                address.state=req.body.state
                address.city=req.body.city
                const newAddress= await address.save()
                res.send(newAddress)
         }
         else{
          res.status(404).send({message:'Address not found !'})
         }
}))

userRouter.post('/address',expressAsyncHandler(async(req,res)=>{
        console.log(req.body)
   const newAdress = Address({
           name:req.body.name,
           mobNo:req.body.mobNo,
           pinCode:req.body.pinCode,
           address:req.body.address,
           town:req.body.town,
           state:req.body.state,
           city:req.body.city,
           userId:req.body.userId
   })
   const address = await newAdress.save()
   res.send(address)

}))

userRouter.put('/updateProfile',isAuth,expressAsyncHandler(async(req,res)=>{
const user = await User.findById(req.user._id)
   if(user){
           user.name=req.body.name;
           user.mobNo=req.body.mobNo
           const updatedUser = await user.save()
           res.send({
                _id:user._id,
                   name:updatedUser.name,
                   eamil:updatedUser.email,
                   isAdmin:updatedUser.isAdmin,
                   mobNo:updatedUser.mobNo,    
                   token:genrateToken(updatedUser),
           })
   }
   else{
           res.status(404).send({message:'User not found'})
   }

  
}))
*/

// module.exports=customerRouter;

