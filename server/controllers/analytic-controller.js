const { Expenses, Monthly, Yearly } = require("../models");
const { User } = require("../models");


// create new monthly analytic stats
const createMonthly = async (req, res) => {
  try {
    const{Monthly_Expenses, Monthly_Income, Monthly_Savings, Monthly_Balance, user} = req.body;

    // find existing user
    const existingUser = await User.findById(user);

    console.log("existingUser", existingUser);

    if(!existingUser){
      res.status(500).json({message: "No user found with this id!"});
      return;
    }


    existingUser.Monthly_Balance = Monthly_Balance;
    existingUser.Monthly_Expenses = Monthly_Expenses;
    existingUser.Monthly_Income = Monthly_Income;
    existingUser.Monthly_Savings = Monthly_Savings;
    await existingUser.save();

    const newMonthly = await Monthly.create({
      Monthly_Expenses,
      Monthly_Income,
      Monthly_Savings,
      Monthly_Balance,
      user,
    });

    res.status(200).json(newMonthly);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

const gettAllMonthly = async (req, res) => {
  try {
    const allMonthly = await Monthly.find({}).populate("user");

    res.status(200).json(allMonthly);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getMonthlyById = async (req, res) => {
  try {
    const monthly = await Monthly.findById(req.params.id).populate("user");

    res.status(200).json(monthly);
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateMonthly = async (req, res) => {
  try {
    const { Monthly_Expenses, Monthly_Income, Monthly_Savings, Monthly_Balance, user } = req.body;
    const existingUser = await User.findById(user);

    if (!existingUser) {
      res.status(500).json({ message: "No user found with this id!" });
      return;
    }

    const monthly = await Monthly.updateOne(
      { _id: req.params.id },
      {
        Monthly_Balance,
        Monthly_Expenses,
        Monthly_Income,
        Monthly_Savings,
        user,
      },
      { new: true }
    );

    const updateUser = await User.updateOne(
      { _id: user },
      
      



    )
  }
}



 module.exports = {
    updateMonthly,
    getMonthlyById,
    gettAllMonthly,
    createMonthly,
  }