const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    invoiceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const PaymentModel = mongoose.model("Payment", PaymentSchema);

module.exports = PaymentModel;
