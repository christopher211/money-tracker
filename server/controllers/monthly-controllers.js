const { Monthly } = require("../models");
const { Transaction } = require("../models");
const { User } = require("../models");




// Create a new monthly record

const createMonthly = async (req, res) => {
  try {
    const { month, year, expenses, income } = req.body;

    
    
    
    const newMonthly = await Monthly.create({
      month,
      year,
      expenses,
      income,
    });

    res.status(200).json(newMonthly);
  } catch (err) {
    res.status(400).json(err);
  }
};


// Get all
const getMonthlyDataById = async (req, res) => {
  try {
    //const allMonthly = await Monthly.find({});

    const { user_id, type } = req.params;

    // Get all the monthly records of the user with the given ID and type from request month
    // and sum the total expenses and income then return the monthly records
    const transaction = await Transaction.find({
        user: user_id,
        type: type,
        date: "", // TODO
    }).populate("user");

    console.log("transaction", transaction);

    const total = transaction.reduce((acc, curr) => {
        return acc + curr.amount;
    }, 0);

    console.log("getMonthlyDataById", total);


    res.status(200).json({total});
  } catch (err) {
    res.status(400).json(err);
  }
};




// Get a single monthly record using the id
const getMonthlyById = async (req, res) => {
  try {
    const monthly = await Monthly.findOne({ _id: req.params.id });

    res.status(200).json(monthly);
  } catch (err) {
    res.status(400).json(err);
  }
};





// Update a monthly record
const updateMonthly = async (req, res) => {
  try {
    const monthly = await Monthly.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).json(monthly);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Delete monthly record
const deleteMonthly = async (req, res) => {
  try {
    const monthly = await Monthly.findOneAndDelete({
      _id: req.params.id,
    });

    res.status(200).json(monthly);
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createMonthly,
  getMonthlyById,
  updateMonthly,
  deleteMonthly,
  getMonthlyDataById
};
