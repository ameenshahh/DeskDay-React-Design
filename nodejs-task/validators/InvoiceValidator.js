const { body } = require("express-validator");

exports.addInvoiceValidator = [
  body("invoiceName").notEmpty().withMessage("invoiceName is required"),
  body("invoiceAmount")
    .notEmpty()
    .withMessage("invoiceAmount is required")
    .isNumeric()
    .withMessage("amount number must be a valid number"),
  body("vendor")
    .notEmpty()
    .withMessage("vendorName is required")
    .isMongoId()
    .withMessage("Invalid vendor"),
];

exports.invoicePaymentValidator = [
  body("invoiceId").notEmpty().withMessage("invoice id is required"),
  body("amount")
    .notEmpty()
    .withMessage("invoiceAmount is required")
    .isNumeric()
    .withMessage("amount number must be a valid number"),
];
