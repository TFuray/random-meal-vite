import axios from 'axios'
import { token } from 'morgan'
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

// post new meal
const newMeal = async (mealData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.post(`${API_URL}new/`, mealData, config)
  return response.data
}

// update meal rating
const updateRating = async (mealId, rating, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.put(API_URL + mealId, rating, config)
  return response.data
}

// Delete saved meal
const deleteMeal = async (mealId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.delete(API_URL + mealId, config)

  return response.data
}

const mealService = {
  getSavedMeals,
  saveMeal,
  newMeal,
  deleteMeal,
  updateRating
}

export default mealService