import { createSlice } from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
   name: 'notifications',
   initialState: { notifications: [] },
   reducers: {
      add_requests: (state, action) => {
         state.notifications = action.payload
      },
   },
})

export const { add_requests } = notificationSlice.actions

export default notificationSlice.reducer
