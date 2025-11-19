import { createSlice } from '@reduxjs/toolkit'

export const notificationSlice = createSlice({
   name: 'notifications',
   initialState: { notifications: [] },
   reducers: {
      add_requests: (state, action) => {
         // console.log(action.payload)
         state.notifications = action.payload
         // console.log(state.notifications)
      },
   },
})

export const { add_requests } = notificationSlice.actions

export default notificationSlice.reducer
