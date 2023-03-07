const mongoose = require('mongoose');

const savedMealModelSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  meals: [{
    type: String
  }]
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model('SavedMeals', savedMealModelSchema);