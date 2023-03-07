const mongoose = require('mongoose');

const savedMealModelSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
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