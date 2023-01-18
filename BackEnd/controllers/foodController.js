  const Foods = require("../models/products.js");
const { addFoodErrorHandler } = require("../validations.js");


const foodController = {
  addFood: async (req, res) => {
    
    try {
      const { name, category, cost, description,image_URL} = req.body;
      const errorMessage = addFoodErrorHandler(
        name,
        category,
        cost,
        description,
         image_URL
      
     
      );

      if (errorMessage) return res.status(400).json({ message: errorMessage });
      const food = await new Foods({
        name,
        category,
        cost,
        description,
         image_URL
      }).save();
      res.status(201).json({ message: "Successfully added new food", food });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getAllFoods: async (req, res) => {
    try {
      const foods = await Foods.find();
      res.status(200).json({ foods });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  
  getAllFoods_Mains: async (req, res) => {
    try {
      const foods = await Foods.find({"category":{"$regex":"mains"}});
      res.status(200).json({ foods });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getAllFoods_Pastry: async (req, res) => {
    try {
      const foods = await Foods.find({"category":{"$regex":"pastry"}});
      res.status(200).json({ foods });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getAllFoods_Dessert: async (req, res) => {
    try {
      const foods = await Foods.find({"category":{"$regex":"dessert"}});
      res.status(200).json({ foods });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getAllFoods_Drinks: async (req, res) => {
    try {
      const foods = await Foods.find({"category":{"$regex":"drinks"}});
      res.status(200).json({ foods });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
 

  getFoodDetails: async (req, res) => {
    try {
      const food = await Foods.findById(req.params.id);
      if (!food)
        return res.status(400).json({ message: "This item does not exist" });
      res.status(200).json({ food });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  updateFood: async (req, res) => {
    try {
      let food = await Foods.findById(req.params.id);
      if (!food)
        return res.status(400).json({ message: "This item does not exist" });
      food = await Foods.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json({ message: "Successfully updated", food });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  deleteFood: async (req, res) => {
    try {
      let food = await Foods.findById(req.params.id);
      if (!food)
        return res.status(400).json({ message: "This item does not exist" });
      food.remove();
      res.status(200).json({ message: "Item is successfully deleted" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports =  foodController;