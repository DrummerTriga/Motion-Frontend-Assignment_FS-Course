import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import { notificationSlice } from './slices/notificationSlice'
import profileReducer from './slices/profileSlice'

export const store = configureStore({
   reducer: {
      auth: authReducer,
      notifications: notificationSlice.reducer,
      profile: profileReducer,
   },
})
