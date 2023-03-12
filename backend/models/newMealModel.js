const mongoose = require('mongoose');

const newMealModelSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  title: {
    type: String,
    required: true,
  },
  ingredietns: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  description: {
    type: String
  },
  photo: {
    type: String
  },
  cloudinaryId: {
    type: String,
  }
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model('NewMeal', newMealModelSchema)