const express = require('express')

const router = express.Router()
const { getRandomMeal } = require('../controllers/mealDbController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getRandomMeal)

module.exports = router