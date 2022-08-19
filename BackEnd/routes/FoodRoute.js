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