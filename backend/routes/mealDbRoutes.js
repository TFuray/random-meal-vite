const express = require("express")

const router = express.Router()
const {
  getSavedMeals,
  saveMeal,
  setMeal,
  deleteMeal,
} = require("../controllers/mealDbController")

const { protect } = require("../middleware/authMiddleware")

router.route("/").get(protect, getSavedMeals).post(protect, saveMeal)
router.route("/:id").delete(protect, deleteMeal)
router.route("/new").post(protect, setMeal)

module.exports = router
