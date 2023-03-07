const axios = require('axios')
const asyncHandler = require("express-async-handler")
const SavedMeal = require('../models/savedMealModel')


// @desc      Get random meal
// @route     GET /api/meals/random
// const getRandomMeal = asyncHandler (axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
//   .then(response => {
//     console.log(response.data)
//   }, err => {
//     console.log(err)
//   }))

const mealApi = axios.create({
  baseURL: "http://www.themealdb.com/api/json/v1/1/"
})

const getRandomMeal = async () => {
  const response = await mealApi.get("/random.php")
  console.log(response.data)
  return response.data
}

// @desc  set saved meal
// @route POST /api/meals/saved
const setSavedMeal = asyncHandler(async (req, res) => {
  const meal = await SavedMeal.create({
    user: req.user.id,
    meal: req.body.meal
  })
  res.status(200).json(meal)
})

module.exports = {
  getRandomMeal,
  setSavedMeal
}