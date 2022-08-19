const router = require("express").Router();
let Customer = require("../models/customer");

router.route("/add").post((req,res)=>{
   const Name = req.body.Name;
   const Email = Number(req.body.Email);
   const Gender = req.body.Gender;
   const KDU_ID=req.body.KDU_ID;
   const Phone=req.body.Phone;
   const Regi_num=req.body.Regi_num;

   if(!Name|| !)

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