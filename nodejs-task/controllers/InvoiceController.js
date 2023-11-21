const InvoiceModel = require("../models/InvoiceModel");
const { validationResult } = require("express-validator");

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

// exports.invoicePayment = async (req, res) => {
//   // input validation
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array()[0].msg });
//   }

//   try {
//     const { invoiceId, invoiceAmount } = req.body;

//     // before making payment we need to check how much amount is remaining to be paid by the department.
//     // if user is trying to pay more than what is maximum to be paid should throw an error

//     // fetch invoice
//     const { invoiceAmount: totalInvoiceAmount, paid } =
//       await InvoiceModel.findById(invoiceId);

//     const maxPayableAmount = totalInvoiceAmount - paid;

//     if (maxPayableAmount == 0) {
//       return res.status(503).json({
//         status: false,
//         message: "Invoice payment is already completed",
//       });
//     }

//     if (invoiceAmount > maxPayableAmount) {
//       return res.status(500).json({
//         status: false,
//         message: `The amount you are trying to pay is more than required! You can pay a maximum amout of ${maxPayableAmount}`,
//       });
//     }

//     const updatePayment = await InvoiceModel.updateOne(
//       { _id: invoiceId },
//       { $set: { paid: invoiceAmount + paid } }
//     );

//     if (!updatePayment) {
//       return res
//         .status(404)
//         .json({ status: false, message: "Payment was not successful" });
//     }

//     res.status(200).json({
//       status: true,
//       message: "Payment is successful",
//       data: updatePayment,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };



exports.invoicePayment = async (req, res) => {
  // Input validation using express-validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If validation fails, return a 400 Bad Request with the validation error message
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  try {
    // Destructure values from the request body
    const { invoiceId, invoiceAmount } = req.body;

    // Fetch the invoice details from the database
    const { invoiceAmount: totalInvoiceAmount, paid } = await InvoiceModel.findById(invoiceId);

    // Calculate the maximum payable amount
    const maxPayableAmount = totalInvoiceAmount - paid;

    // Check if the invoice payment is already completed
    if (maxPayableAmount === 0) {
      return res.status(503).json({
        status: false,
        message: "Invoice payment is already completed",
      });
    }

    // Check if the payment amount exceeds the maximum payable amount
    if (invoiceAmount > maxPayableAmount) {
      return res.status(500).json({
        status: false,
        message: `The amount you are trying to pay is more than required! You can pay a maximum amount of ${maxPayableAmount}`,
      });
    }

    // Update the payment in the database
    const updatePayment = await InvoiceModel.updateOne(
      { _id: invoiceId },
      { $set: { paid: invoiceAmount + paid } }
    );

    // Check if the payment update was successful
    if (!updatePayment) {
      return res
        .status(404)
        .json({ status: false, message: "Payment was not successful" });
    }

    // Return a successful response with payment details
    res.status(200).json({
      status: true,
      message: "Payment is successful",
      data: updatePayment,
    });
  } catch (error) {
    // Handle unexpected errors
    console.error(error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};
