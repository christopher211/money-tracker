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


  Monthly_Savings: {
    type: DataTypes.DECIMAL,
    required: true,
  },
  Monthly_Balance: { 
    type: DataTypes.DECIMAL,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

});





  transaction_id: { type: DataTypes.INTEGER, required: true },

});



const Monthly = model('Monthly', monthlySchema);
module.exports = Monthly;