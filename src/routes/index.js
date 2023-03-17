const router = require('express').Router();
const apiRoutes = require('./API/');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Ruta equivocada!</h1>")
});

module.exports = router;