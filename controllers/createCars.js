const Cars = require("../models/cars");

exports.createCars = async (req, res) => {
  try {
    const { name, company, model, reg_number, color, seating_capacity } =
      req.body;

    const cars = await Cars.create({
      name,
      company,
      model,
      reg_number,
      color,
      seating_capacity,
    });

    res.status(200).json({
      success: true,
      data: cars,
      message: "Entry created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: error.message,
    });
  }
};
