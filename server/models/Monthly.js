const { Schema, model } = require('mongoose');

const monthlySchema = new Schema({
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



const Monthly = model('Monthly', monthlySchema);
module.exports = Monthly;