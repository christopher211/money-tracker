const { Schema, model } = require('mongoose');

const expensesSchema = new Schema({
  id: {
    type: DataTypes.INTEGER,
    required: true,
  },
  home: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  utilities: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  groceries: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  vehicle: { 
    type: DataTypes.DECIMAL,
    required: true,
  },
  phone : {
    type: DataTypes.DECIMAL,
    required: true,
  },
  insurance: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  subscriptions : {
    type: DataTypes.DECIMAL,
    required: true,
  },
  misc : {
    type: DataTypes.DECIMAL,
    required: true,
  },

});





const Expenses = model('Expenses', expensesSchema);
module.exports = Expenses;