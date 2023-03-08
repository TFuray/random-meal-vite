const mongoose = require('mongoose');

const savedMealModelSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  meal: {
    type: String
  }
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model('SavedMeal', savedMealModelSchema);