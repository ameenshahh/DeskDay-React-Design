const express = require("express");
const router = express.Router();
const { authenticate } = require("../middlewares/auth");
const { addVendorValidator } = require("../validators/VendorValidator");

const { addVendor } = require("../controllers/VendorController");

router.post("/add", authenticate, addVendorValidator, addVendor);

module.exports = router;
