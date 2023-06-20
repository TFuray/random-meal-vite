const express = require("express")

const router = express.Router()
const { searchMeal } = require("../controllers/bbcGoodFoodController")

router.route("/").get(searchMeal)

module.exports = router
