const asyncHandler = require("express-async-handler")
const axios = require("axios")

//@desc      Get random meal
//@route     GET /api/meals/random
const getRandomMeal = axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
  .then(response => {
    console.log(response.data)
  }, err => {
    console.log(err)
  })


// const getRandomMeal = asyncHandler(async (req, res) => {
//   fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//     })
// })


module.exports = {
  getRandomMeal
}