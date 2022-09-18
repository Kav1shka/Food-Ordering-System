const Customer = require("../models/customer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValid, loginValid } = require("../validations.js");

const authController = {
  register: async (req, res) => {
    try {
      const  Name= req.body.Name;
      const  Email=req.body.Email;
      const  password=req.body.password;
      const  cf_password= req.body.cf_password;
      const   KDU_ID=req.body.KDU_ID;
      const  Phone = req.body.Phone;
      const errorMessage = registerValid(Name, Email, password,cf_password, KDU_ID,Phone);
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      // const CustomerExists = await customers.findOne({ Email });
      // if (CustomerExists) {
      //   return res
      //     .status(400)
      //     .json({ message: "This email is already in use!!!!" });
      // }
     // const hashedPassword = await hash(password, 100);
      await new Customer({
        Name,
        Email,
        KDU_ID,
        Phone,
        //password: hashedPassword,
        password
        
        
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
      const { Email, password } = req.body;
      const errorMessage = loginValid(Email, password);
      if (errorMessage) return res.status(400).json({ message: errorMessage });

      const customer = await findOne({ Email });
      if (!customer)
        return res.status(400).json({ message: "Invalid email or password" });

      const match = await compare(password, customer.password);
      if (!match)
        return res.status(400).json({ message: "Invalid email or password" });

      const token = await sign({ _id: customer._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      customer.password = undefined;
      res
        .status(200)
        .json({ message: "You have successfully logged in", customer, token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = authController;
 