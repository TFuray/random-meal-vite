const asyncHandler = require("express-async-handler")
const axios = require("axios")

//@desc      Get random meal
//@route     GET /api/meals/random
// const getRandomMeal = asyncHandler (axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
//   .then(response => {
//     console.log(response.data)
//   }, err => {
//     console.log(err)
//   }))


const getRandomMeal = asyncHandler(async (req, res) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
      let meal = data.meals[0]
      
    })
})

//@desc      Set Meal
//@route     POST /api/meals
const setMeal = asyncHandler(async (req, res) => {
  
})


module.exports = {
  getRandomMeal
}