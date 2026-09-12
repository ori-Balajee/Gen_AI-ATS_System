const express = require('express');
const router = express.Router();
const {registerUser, loginUser, logoutUser} = require('../controller/authController');
const {authMiddleware} = require("../middleware/authMiddleware");

router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/logout",logoutUser)
router.get("/get-me", authMiddleware, loginUser);

module.exports = router;