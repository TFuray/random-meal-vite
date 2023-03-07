const axios = require('axios')
const asyncHandler = require("express-async-handler")


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
  return response.data
}

module.exports = {
  getRandomMeal
}