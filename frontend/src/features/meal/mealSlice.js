import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import mealService from '../meal/mealService'
import { extractErrorMessage } from '../../../utils'

const initialState = {
  meal: '',
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

// Get saved meals
export const getSavedMeals = createAsyncThunk(
  'meal/getRandomMeal',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await mealService.getSavedMeals(token)
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
      .addCase(getSavedMeals.pending, (state) => {
        state.meal = null
      })
      .addCase(getSavedMeals.fulfilled, (state, action) => {
        state.meal = action.payload
      })
      // .addCase(getSavedMeals.rejected, (state, action) => {
      //   state.meal = null
      // })
      .addCase(saveMeal.fulfilled, (state, action) => {
        state.meal = (action.payload)
      })
  }
})

export default mealSlice.reducer