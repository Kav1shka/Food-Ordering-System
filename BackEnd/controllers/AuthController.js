const { registerValid, loginValid } = require("../validations.js");
const Customer = require("../models/customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const authController = {
  register: async (req, res) => {
    try {
      const  Name= req.body.Name;
      const  Email=req.body.Email;
      const  password=req.body.password;
      const  cf_password= req.body.cf_password;
      const   KDU_ID=req.body.KDU_ID;
      const  Phone = req.body.Phone;
      const errorMessage = registerValid(Name,KDU_ID,Phone, Email, password,cf_password);
      if (errorMessage) return res.status(400).json({ message: errorMessage });
       const CustomerExists = await Customer.findOne({ Email });
      if (CustomerExists) {
        return res
          .status(400)
          .json({ message: "This email is already in use!!!!" });
      }
     const hashedPassword = await bcrypt.hash(password, 10);
      await new Customer({
        Name,
        KDU_ID,
        Phone,
        Email,
        password: hashedPassword,
        cf_password

      }).save();
      res.status(201).json({
        message: "You have successfully registered. Please login now",
      });
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message });
    }
  },

  login: async (req, res) => {
    try {
      const { Email, password} = req.body;
      const errorMessage = loginValid(Email, password);
      if (errorMessage) return res.status(400).json({ message: errorMessage });

      const customer = await Customer.findOne({ Email });

     const details=await Customer.findOne(customer);
      if (!customer)
        return res.status(400).json({ message: "Not registered email" });
        
      const match = await bcrypt.compare(password, customer.password);
     
      console.log(match)
      if (!match){
        return res.status(400).json({ message: "Invalid email or password" });

      }

      const token = jwt.sign({ _id: customer._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      Customer.password = undefined;
      
      // Customer.password = undefined;
      // Customer.password = undefined;

      res.status(200).json({ message: "You have successfully logged in", Customer, token,details});
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
 