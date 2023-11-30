const Cars = require("../models/cars");

exports.deleteCars = async (req, res) => {
  try {
    const { id } = req.params;
    const cars = await Cars.findByIdAndDelete({ _id: id });
    if (!cars) {
      res.status(404).json({
        success: false,
        message: "Data not present",
      });
    }
    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
