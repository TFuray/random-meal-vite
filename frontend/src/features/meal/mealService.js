import axios from 'axios'
const API_URL = '/api/meal/'

// Get random Meal
const getSavedMeals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.get(API_URL, config)
  return response.data
}

// Save Meal
const saveMeal = async (mealData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.post(API_URL, mealData, config)
  return response.data
}

const mealService = {
  getSavedMeals,
  saveMeal
}

export default mealService