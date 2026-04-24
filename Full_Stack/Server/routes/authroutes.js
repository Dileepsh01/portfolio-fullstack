const express = require("express");
const router = express.Router();

const { Register, Login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", Register);
router.post("/login", Login);

// Protected route
router.get("/", authMiddleware, (req, res) => {
  res.json({ message: "Protected route profile page", user: req.user });
});

module.exports = router;
