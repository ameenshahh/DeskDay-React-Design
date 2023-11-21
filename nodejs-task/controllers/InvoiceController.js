const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

const InvoiceModel = require("../models/InvoiceModel");
const PaymentModel = require("../models/PaymentModel");

// Function to add a new invoice
exports.addInvoice = async (req, res) => {
  // input validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  try {
    // Create a new invoice using the InvoiceModel schema
    const invoice = new InvoiceModel(req.body);
    await invoice.save();
    res.status(201).json({
      status: true,
      message: "invoice added successfully",
      data: invoice,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "error adding invoice" });
  }
};

// reconciliation api
exports.invoicePayment = async (req, res) => {
  // Input validation using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If validation fails, return a 400 Bad Request with the validation error message
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  try {
    const { invoiceId, amount } = req.body;

    const { invoiceAmount } = await InvoiceModel.findById(invoiceId);

    const allPaymentsSum = await PaymentModel.aggregate([
      {
        $match: {
          invoiceId: new mongoose.Types.ObjectId(invoiceId),
        },
      },
      {
        $group: {
          _id: null,
          totalPaymentAmount: { $sum: "$amount" },
        },
      },
    ]);

    // return res.json({allPaymentsSum})
    let totalAmountPaid
    if (allPaymentsSum[0]) {
      totalAmountPaid = allPaymentsSum[0].totalPaymentAmount;
    } else {
      totalAmountPaid = 0;
    }

    const maxPayableAmount = invoiceAmount - totalAmountPaid;

    // Check if the invoice payment is already completed
    if (maxPayableAmount === 0) {
      return res.status(503).json({
        status: false,
        message: "Invoice payment is already completed",
      });
    }

    // Check if the payment amount exceeds the maximum payable amount
    if (amount > maxPayableAmount) {
      return res.status(500).json({
        status: false,
        message: `The amount you are trying to pay is more than required! You can pay a maximum amount of ${maxPayableAmount}`,
      });
    }

    const payment = new PaymentModel(req.body);
    await payment.save();

    if (!payment) {
      return res
        .status(404)
        .json({ status: false, message: "Payment was not successful" });
    }

    res.status(200).json({
      status: true,
      message: "Payment is successful",
      data: payment,
    });
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

