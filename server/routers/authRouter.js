const express = require("express");
const router = express.Router();
const yup = require("yup");
const validateForm = require("../controllers/validateForm");

router.post("/register", (req, res) => {
  validateForm(req, res, true);
});

router.post("/login", (req, res) => {
  validateForm(req, res, false);
});

module.exports = router;
