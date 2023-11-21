const mongoose = require("mongoose");

const InvoiceSchema = new mongoose.Schema(
  {
    invoiceName: {
      type: String,
      required: true,
    },

    invoiceAmount: {
      type: Number,
      required: true,
    },

    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },
  },
  { timestamps: true }
);

const InvoiceModel = mongoose.model("Invoice", InvoiceSchema);

module.exports = InvoiceModel;
