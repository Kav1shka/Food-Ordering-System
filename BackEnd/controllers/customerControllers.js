const Customer = require("../models/customer.js");

const customerController = {
  getAllCustomer: async (req, res) => {
    try {
      const customer = await find();
      res.status(200).json({ customer });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  deleteCustomer: async (req, res) => {
    let customer = await customer.findById(req.params.id);
    if (!customer) {
      return res.status(400).json({ message: "customer does not exist" });
    }
    await customer.remove();
    res.status(200).json({ message: "This customer has been deleted" });
  },
};

module.exports =  customerController;
//export default customerController;

