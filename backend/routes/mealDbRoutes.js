const express = require("express")

const router = express.Router()
const {
  getSavedMeals,
  saveMeal,
  setRating,
  setMeal,
  deleteMeal,
} = require("../controllers/mealDbController")

const { protect } = require("../middleware/authMiddleware")

router.route("/").get(protect, getSavedMeals).post(protect, saveMeal)
router.route("/:id").put(protect, setRating).delete(protect, deleteMeal)
router.route("/new").post(protect, setMeal)

module.exports = router
