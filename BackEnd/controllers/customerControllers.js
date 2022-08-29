const Customer = require("../models/customer.js");

const userController = {
  getAllUser: async (req, res) => {
    try {
      const customer = await Customer.find();
      res.status(200).json({ customer });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteUser: async (req, res) => {
    let customer = await customer.findById(req.params.id);
    if (!customer) {
      return res.status(400).json({ message: "user does not exist" });
    }
    await customer.remove();
    res.status(200).json({ message: "This user has been deleted" });
  },
};

module.exports = customerController;
