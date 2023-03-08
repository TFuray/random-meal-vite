const express = require('express')

const router = express.Router()
const { getRandomMeal, saveMeal } = require('../controllers/mealDbController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').post(protect, saveMeal)

module.exports = router