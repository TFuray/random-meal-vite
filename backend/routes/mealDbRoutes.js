const express = require('express')

const router = express.Router()
const { getRandomMeal, setSavedMeal } = require('../controllers/mealDbController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getRandomMeal).post(setSavedMeal)

module.exports = router