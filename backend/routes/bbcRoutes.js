const express = require("express")

const router = express.Router()
const {
  searchMeal
} = require("../controllers/bbcGoodFoodController")

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(searchMeal)

module.exports = router