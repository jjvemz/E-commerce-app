const { Product, Category, Tag, ProductTag } = require('../models')

module.exports={
    getAllProducts: (req, res) =>{
        Product.findAll({
		include: [
			Category,
			{
				model: Tag,
				through: ProductTag,
			},
		],
	})
    .then((products) => res.json(products))
    .catch((error) =>{
        console.log(error)
        .res.status(500).json(error)
    })
    },
    getProductById:(req, res) =>{
        Product.findOne({
            where:{
                id: req.params.id,
            },
            include:[
                Category,{
                    model: Tag,
                    through:ProductTag
                }
            ]
        })
        .then((product)=> res.json(product))
        .catch((error) =>{
            console.log(error)
            res.status(400).json(error)
        })
    },

    createProduct : (req,res)=>{
        Product.create(req.body)
        .then((product) =>{
            res.status(200).json(product)
        })
        .catch((error)=>{
            console.log(error)
            res.status(400).json(error)
        })
    },

    updateProduct: (req, res) =>{
        Product.update(req.body, {
            where: {
                id: req.params.id,
            },
        })
            .then((product) => {
                return ProductTag.findAll({ where: { product_id: req.params.id } })
            })
            .then((productTags) => {
                const productTagIds = productTags.map(({ tag_id }) => tag_id)
                const newProductTags = req.body.tagIds
                    .filter((tag_id) => !productTagIds.includes(tag_id))
                    .map((tag_id) => {
                        return {
                            product_id: req.params.id,
                            tag_id,
                        }
                    })
                const productTagsToRemove = productTags
                    .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
                    .map(({ id }) => id)
    

                return Promise.all([
                    ProductTag.destroy({ where: { id: productTagsToRemove } }),
                    ProductTag.bulkCreate(newProductTags),
                ])
            })
            .then((updatedProductTags) => res.json(updatedProductTags))
            .catch((errror) => {
                 console.log(errror);
                res.status(400).json(errror)
            })
    },

    deleteProduct: (req, res) =>{
        Product.destroy({
            where:{
                id: req.params.id,
            },
        })
        .then((products)=>{
            console.log(products)
            res.json(products)
        })
        .catch((error) =>{
            console.log(error)
            res.status(400).json(error)
        })
    }
}