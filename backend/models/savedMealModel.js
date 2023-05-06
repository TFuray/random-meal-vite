const mongoose = require('mongoose');

const savedMealModelSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  meal: {
    type: String
  },
  rating: {
    type: Number,
    default: 0
  }
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model('SavedMeal', savedMealModelSchema);