const asyncHandler = require("express-async-handler")
const SavedMeal = require("../models/savedMealModel")
const NewMeal = require("../models/newMealModel")
const User = require("../models/userModel")

// @desc      Set Meal
// @route     POST /api/meals/new
const setMeal = asyncHandler(async (req, res) => {
  const { title, instructions, ingredients, description, photo } = req.body
  if (!title || !instructions || !ingredients) {
    res.status(400)
    throw new Error("Please add title, instructions and ingredients")
  }
  const meal = await NewMeal.create({
    title,
    ingredients,
    instructions,
    description,
    photo,
    user: req.user._id,
  })

  res.status(201).json(meal)
})

// @desc      Get saved meals
// @route     GET /api/meals/
const getSavedMeals = asyncHandler(async (req, res) => {
  const meals = await SavedMeal.find({ user: req.user.id })
  res.status(200).json(meals)
})

//@desc ...... Get User meals
//@rout ...... GET /api/meals/users
const getUserMeals = asyncHandler(async (req, res) => {
  const meals = await NewMeal.find()
  res.status(200).json(meals)
})

// @desc  set saved meal
// @route POST /api/meals/
const saveMeal = asyncHandler(async (req, res) => {
  const meal = await SavedMeal.create({
    user: req.user._id,
    meal: req.body.meal,
  })
  res.status(200).json(meal)
})

// @desc    update meal rating
// @route   Put /api/meals/:id
const setRating = asyncHandler(async (req, res) => {
  const filter = req.params.id
  const update = { rating: req.body.rating }

  const updateRating = await SavedMeal.findByIdAndUpdate(filter, update, {
    new: true,
  })
  res.status(200).json(updateRating)
})

// @desc      Delete saved meal
// @route     DELETE /api/meal/:id
const deleteMeal = asyncHandler(async (req, res) => {
  const meal = await SavedMeal.findById(req.params.id)
  console.log(meal)

  await meal.deleteOne({ _id: req.params.id })
  res.status(200).json({ id: req.params.id })
})

module.exports = {
  saveMeal,
  getSavedMeals,
  setMeal,
  deleteMeal,
  setRating,
  getUserMeals
}
