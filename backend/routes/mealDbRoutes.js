const express = require('express')

const router = express.Router()
const { getSavedMeals, saveMeal, setMeal } = require('../controllers/mealDbController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getSavedMeals).post(protect, saveMeal)
router.route('/new').post(protect, setMeal)

module.exports = router