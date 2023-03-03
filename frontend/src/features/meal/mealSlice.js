import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import mealService from './mealService'
import { extractErrorMessage } from '../../../utils'

const initialState = {
  meal: null,
}

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
  }
})

export default mealSlice.reducer