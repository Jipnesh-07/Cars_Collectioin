const Cars = require("../models/cars");

exports.updateCars = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, company, model, reg_number, color, seating_capacity } =
      req.body;

    const cars = await Cars.findByIdAndUpdate(
      { _id: id },
      { name, company, model, reg_number, color, seating_capacity }
    );

    const updatedCars = await Cars.findById({ _id: id });
    res.status(200).json({
      success: true,
      data: updatedCars,
      message: "Entry updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
