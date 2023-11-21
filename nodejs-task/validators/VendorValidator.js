const { body } = require("express-validator");

exports.addVendorValidator = [
  body("vendorName").notEmpty().withMessage("vendorName is required"),
  body("vendorEmail")
  .notEmpty()
  .withMessage("vendorEmail is required")
  .isEmail().withMessage("Invalid email format")
];


