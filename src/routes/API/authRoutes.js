const express = require('express');
const router = express.Router();
const { login, logout, register } = require('../../controllers/authController');
const requireAuth = require('../../middleware/authMiddleware');

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);

router.get('/protected', requireAuth, (req, res) => {
  res.json({ message: 'Esta ruta está protegida.' });
});

module.exports = router;
