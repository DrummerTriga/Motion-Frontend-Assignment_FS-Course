import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
   name: 'profile',
   initialState: { clickedFilter: '' },
   reducers: {
      filterSelected: (state, action) => {
         state.clickedFilter = action.payload
      },
   },
})

export const { filterSelected } = profileSlice.actions

export default profileSlice.reducer
