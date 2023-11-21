const express = require("express");
const router = express.Router();

const { authenticate } = require("../middlewares/auth");
const { addInvoiceValidator ,invoicePaymentValidator} = require("../validators/InvoiceValidator");
const { addInvoice,invoicePayment } = require("../controllers/InvoiceController");

router.post("/add", authenticate, addInvoiceValidator,addInvoice);
router.post("/payment", authenticate, invoicePaymentValidator,invoicePayment);

module.exports = router;
