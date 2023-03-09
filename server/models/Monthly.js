const { Schema, model } = require('mongoose');

const monthlySchema = new Schema({
  id: {
    type: DataTypes.INTEGER,
    required: true,
  },
  Monthly_Expenses: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  Monthly_Income: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  Monthly_Savings: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  Monthly_Balance: { 
    type: DataTypes.DECIMAL,
    required: true,
  }

});








const Monthly = model('Monthly', monthlySchema);
module.exports = Monthly;