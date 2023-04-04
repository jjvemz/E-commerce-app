const { Category, Product } = require("../models");

const getAllCategories = (req, res) => {
  Category.findAll({
    include: [Product],
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err));
};

const getCategoryById = (req, res) => {
  console.log("Finding category with id: ", req.params.id);
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Product],
  })
  .then((data) => {
    if (!data) {
      res.status(404).json({ message: 'Category not found' });
    } else {
      res.status(200).json(data);
    }
  })
  .catch((err) => {
    console.log("Error occurred while finding category: ", err);
    res.status(500).json(err)
  });
};





const createCategory = (req, res) => {
  Category.create(req.body)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => res.status(400).json(err));
};


const updateCategory = (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
};

const deleteCategory = (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.status(200).json(category))
    .catch((err) => res.status(400).json(err));
};
module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
