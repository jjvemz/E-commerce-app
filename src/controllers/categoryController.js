const { Category, Product } = require('../models');

module.exports = {
  getAllCategories: (req, res) => {
    Category.findAll({
      include: [Product],
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
  },

  getCategoryById: (req, res) => {
    Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(500).json(err));
  },

  createCategory: (req, res) => {
    Category.create(req.body)
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  },

  updateCategory: (req, res) => {
    Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  },

  deleteCategory: (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((category) => res.status(200).json(category))
      .catch((err) => res.status(400).json(err));
  },
};
