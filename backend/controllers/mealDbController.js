const asyncHandler = require("express-async-handler")
const SavedMeal = require('../models/savedMealModel')
const NewMeal = require('../models/newMealModel')
const cloudinary = require('../middleware/cloudinary')

// @desc      Set Meal
// @route     POST /api/meals/new
const setMeal = asyncHandler(async (req, res) => {
  const { title, instructions, ingredietns, description } = req.body
  const result = await cloudinary.uploader.upload(req.file.path)
  console.log(result)
  console.log(req.body)
  if (!title || !instructions || !ingredietns) {
    res.status(400)
    throw new Error('Please add title, instructions and ingredietns')
  }
  const meal = await NewMeal.create({
    title,
    ingredietns,
    instructions,
    description,
    photo: result.secure_url,
    cloudinaryId: result.public_id,
    user: req.user.id
  })

  res.status(201).json(meal)
})


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
  getSavedMeals,
  setMeal
}