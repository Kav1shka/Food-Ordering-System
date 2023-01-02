const Orders = require("../models/orderDetails.js");
const Customer = require("../models/customer.js");
const { makeOrderErrorHandler } = require("../validations.js");

const orderController = {
  makeOrder: async (req, res) => {
    try {
      const { CustomerName, Email, foodName, KDU_ID,CustomerType ,quantity,paymentMethod,isPaid,paidAt,totalprice} = req.body;
      const errorMessage = makeOrderErrorHandler(
        CustomerName,
        KDU_ID,
        Email,
        foodName,
        CustomerType,
        // foodCode,
        totalprice,
        quantity,
        paymentMethod,
        isPaid,
        paidAt
       
      );
      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const customer = await Customer.findOne({ Email });
      if (!customer)
        return res
          .status(400)
          .json({ message: "wrong email address.Please retry" });
      await new Orders({ CustomerName, Email, foodName, KDU_ID,CustomerType ,quantity,paymentMethod,isPaid,paidAt,totalprice }).save();
      res.status(201).json({
        message: "You have successfully placed order",
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  getAllOrders: async (req, res) => {
    try {
      const orders = await find();
      res.status(200).json({ orders });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  deleteOrder: async (req, res) => {
    try {
      let order = await findById(req.params.id);
      await order.remove();
      res.status(200).json({ message: "Successfully Deleted!!" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports =  orderController; 