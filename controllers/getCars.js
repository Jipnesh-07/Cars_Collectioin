const Cars = require("../models/cars");

exports.getCars = async (req, res) => {
  try {
    const cars = await Cars.find({});

    res.status(200).json({
      success: true,
      data: cars,
      message: "Data fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCarsById = async (req, res) => {
  try {
    const { id } = req.params;
    const cars = await Cars.findById({ _id: id });

    if (!cars) {
      return res.status(404).json({
        success: false,
        message: "No data with given id",
      });
    }

    res.status(200).json({
      success: true,
      data: cars,
      message: "Data fetched with given id",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
