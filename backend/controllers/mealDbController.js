const asyncHandler = require("express-async-handler")
const SavedMeal = require('../models/savedMealModel')
const NewMeal = require('../models/newMealModel')
const User = require('../models/userModel')

// @desc      Set Meal
// @route     POST /api/meals/new
const setMeal = asyncHandler(async (req, res) => {
  const { title, instructions, ingredients, description, photo } = req.body
  if (!title || !instructions || !ingredients) {
    res.status(400)
    throw new Error('Please add title, instructions and ingredients')
  }
  const meal = await NewMeal.create({
    title,
    ingredients,
    instructions,
    description,
    photo,
    user: req.user._id
  })

  res.status(201).json(meal)
})


// @desc      Get saved meals
// @route     GET /api/meals/
const getSavedMeals = asyncHandler(async (req, res) => {
  console.log(req.user.id)
  const meals = await SavedMeal.find({ user: req.user.id})
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
  getSavedMeals,
  setMeal
}