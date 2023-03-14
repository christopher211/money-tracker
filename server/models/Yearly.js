const { Schema, model } = require('mongoose');

const yearlySchema = new Schema({
  id: {
    type: DataTypes.INTEGER,
    required: true,
  },
  yearly_Expenses: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  yearly_Income: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  yearly_Savings: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  yearly_Balance: { 
    type: DataTypes.DECIMAL,
    required: true,
  },
   user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

});





const Yearly = model('Yearly', yearlySchema);
module.exports = Yearly;