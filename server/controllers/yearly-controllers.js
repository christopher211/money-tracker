const { Yearly } = require("../models");

// Create a new yearly record
const createYearly = async (req, res) => {
  try {
    const { year, expenses, income } = req.body;

    const newYearly = await Yearly.create({
      year,
      expenses,
      income,
    });

    res.status(200).json(newYearly);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Get all yearly records
const getAllYearly = async (req, res) => {
  try {
    const allYearly = await Yearly.find({});

    res.status(200).json(allYearly);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Get a single yearly record using the id
const getYearlyById = async (req, res) => {
  try {
    const yearly = await Yearly.findOne({ _id: req.params.id });

    res.status(200).json(yearly);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Update a yearly record
const updateYearly = async (req, res) => {
  try {
    const yearly = await Yearly.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).json(yearly);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Delete yearly record
const deleteYearly = async (req, res) => {
  try {
    const yearly = await Yearly.findOneAndDelete({
      _id: req.params.id,
    });

    res.status(200).json(yearly);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createYearly,
  getAllYearly,
  getYearlyById,
  updateYearly,
  deleteYearly,
};
