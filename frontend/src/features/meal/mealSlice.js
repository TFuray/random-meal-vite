import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { extractErrorMessage } from "../../../utils"
import mealService from "../meal/mealService"

const initialState = {
  meal: "",
}

// Save meal
export const saveMeal = createAsyncThunk(
  "meal/saved",
  async (mealData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await mealService.saveMeal(mealData, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// New meal
export const newMeal = createAsyncThunk(
  "meal/newMeal",
  async (mealData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await mealService.newMeal(mealData, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Get saved meals
export const getSavedMeals = createAsyncThunk(
  "meal/getRandomMeal",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await mealService.getSavedMeals(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Delete meal
export const deleteMeal = createAsyncThunk(
  "meal/deleteMeal",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await mealService.deleteMeal(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

// Update Rating
export const updateRating = createAsyncThunk(
  "meal/updateRating",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await mealService.updateRating(id, token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

export const mealSlice = createSlice({
  name: "meal",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSavedMeals.pending, (state) => {
        state.meal = null
      })
      .addCase(getSavedMeals.fulfilled, (state, action) => {
        state.meal = action.payload
      })
      .addCase(saveMeal.fulfilled, (state, action) => {
        state.meal = action.payload
      })
      .addCase(newMeal.fulfilled, (state, action) => {
        state.meal = action.payload
      })
      .addCase(deleteMeal.fulfilled, (state, action) => {
        state.meal = state.meal.filter((meal) => meal._id !== action.payload.id)
      })
      .addCase(updateRating.fulfilled, (state, action) => {
        state.meal = action.payload
      })
  },
})

export default mealSlice.reducer
