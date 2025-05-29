const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Registro e login de usuário
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
