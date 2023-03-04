const mongoose = require('mongoose');

const savedMealsSchema = new mongoose.Schema({
  meals: [{
    type: String
  }]
})

module.exports = mongoose.model('SavedMeals', savedMealsSchema);