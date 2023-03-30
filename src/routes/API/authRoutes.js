const express = require('express');
const router = express.Router();
const { login, logout, register, updateUser,deleteUser } = require('../../controllers/authController');
const requireAuth = require('../../middleware/authMiddleware');

router.post('/login', login);
router.post('/logout', logout);
router.post('/register', register);
router.put('/updateUser', requireAuth , updateUser);
router.delete('/updateUser', requireAuth , deleteUser);

router.get('/protected', requireAuth, (req, res) => {
  res.json({ message: 'Esta ruta está protegida.' });
});

module.exports = router;
