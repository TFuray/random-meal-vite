import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import mealService from './mealService'
import { extractErrorMessage } from '../../../utils'

const initialState = {
  meal: null,
}

// Save meal
export const saveMeal = createAsyncThunk(
  'meal/saved',
  async (mealData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
     return await mealService.saveMeal(mealData, token) 
    } catch (error) {
     return thunkAPI.rejectWithValue(extractErrorMessage(error)) 
    }
  }
)

// Get random meal
export const getRandomMeal = createAsyncThunk(
  'meal/getRandomMeal',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await mealService.getRandomMeal(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
  }
)

export const mealSlice = createSlice({
  name: 'meal',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRandomMeal.pending, (state) => {
        state.meal = null
      })
      .addCase(getRandomMeal.fulfilled, (state, action) => {
        state.meal = action.payload
      })
      .addCase(getRandomMeal.rejected, (state, action) => {
        state.meal = null
      })
      .addCase(saveMeal.fulfilled, (state, action) => {
        state.meal.push(action.payload)
      })
  }
})

export default mealSlice.reducer