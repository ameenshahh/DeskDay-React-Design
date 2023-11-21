const VendorModel = require("../models/VendorModel");
const { validationResult } = require("express-validator");

// Function to add a new vendor
exports.addVendor = async (req, res) => {
  // input validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0].msg });
  }

  try {

    // Create a new vendor using the VendorModel schema
    const vendor = new VendorModel(req.body);
    await vendor.save();
    res
      .status(201)
      .json({ status: true, message: "vendor added successfully", data: vendor });
  } catch (error) {
    res.status(500).json({ status: false, message: "error adding vendor" });
  }
};

