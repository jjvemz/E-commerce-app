const { Tag, Product, ProductTag } = require("../models");

module.exports = {
  getAllTags: (req, res) => {
	Tag.findAll({
		include: [
			{
				model: Product,
				through: ProductTag,
			},
		],
	})
		.then((tags) => res.status(200).json(tags))
		.catch((err) => res.status(500).json(err))
},
  getTagById: (req, res) => {
	Tag.findOne({
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Product,
				through: ProductTag,
			},
		],
	})
		.then((tag) => res.status(200).json(tag))
		.catch((err) => res.status(404).json(err))
},
  createTag: (req, res) => {
	Tag.create(req.body)
		.then((tag) => res.status(200).json(tag))
		.catch((err) => res.status(404).json(err))
},
  updateTag: (req, res) => {
	Tag.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((tag) => res.status(200).json(tag))
		.catch((err) => res.status(404).json(err))
},
  deleteTag: (req, res) => {
	Tag.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((tag) => res.status(200).json(tag))
		.catch((err) => res.status(404).json(err))
},
};
