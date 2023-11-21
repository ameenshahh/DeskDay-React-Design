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

    paid: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const InvoiceModel = mongoose.model("Invoice", InvoiceSchema);

module.exports = InvoiceModel;
