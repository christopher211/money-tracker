const { Schema, model } = require('mongoose');

const yearlySchema = new Schema({
  id: {
    type: DataTypes.INTEGER,
    required: true,
  },
  expense: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  income: {
    type: DataTypes.DECIMAL,
    required: true,
  },
 
  transaction_id: { type: DataTypes.INTEGER, required: true },
});





const Yearly = model('Yearly', yearlySchema);
module.exports = Yearly;