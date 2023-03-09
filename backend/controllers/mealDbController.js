const axios = require('axios')
const asyncHandler = require("express-async-handler")
const SavedMeal = require('../models/savedMealModel')


// @desc      Get saved meals
// @route     GET /api/meals/
const getSavedMeals = asyncHandler(async (req, res) => {
  const meals = await SavedMeal.find()
  console.log(meals)
  res.status(200).json(meals)
})


// @desc  set saved meal
// @route POST /api/meals/
const saveMeal = asyncHandler(async (req, res) => {
  const meal = await SavedMeal.create({
    user: req.user._id,
    meal: req.body.meal
  })
  res.status(200).json(meal)
})

module.exports = {
  saveMeal,
  getSavedMeals
}