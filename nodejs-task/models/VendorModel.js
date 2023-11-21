const mongoose = require("mongoose");

const VendorSchema = new mongoose.Schema(
  {
    vendorName: {
      type: String,
      required: true,
    },

    vendorEmail: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const VendorModel = mongoose.model("Vendor", VendorSchema);

module.exports = VendorModel;
