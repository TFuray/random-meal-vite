const asyncHandler = require("express-async-handler")


//@desc      Get random meal
//@route     GET /api/meals/random
// const getRandomMeal = asyncHandler (axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
//   .then(response => {
//     console.log(response.data)
//   }, err => {
//     console.log(err)
//   }))


const getRandomMeal = async () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => res.status(200).json(data.meals))
}

// const getRandomMeal = 
//   axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
//     .then(response => console.log(response.data))

//@desc      Set Meal
//@route     POST /api/meals
// const setMeal = asyncHandler(async (req, res) => {
  
// })


module.exports = {
  getRandomMeal
}