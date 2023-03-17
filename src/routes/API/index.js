const router = require('express').Router();
const categoryRoutes= require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const tagRoutes = require('./tagRoutes');
const authRoutes = require('./authRoutes')

router.use('/categories',categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);
router.use('/auth', authRoutes);

module.exports = router;