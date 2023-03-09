const express = require('express')

const router = express.Router()
const { getSavedMeals, saveMeal } = require('../controllers/mealDbController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getSavedMeals).post(protect, saveMeal)

module.exports = router