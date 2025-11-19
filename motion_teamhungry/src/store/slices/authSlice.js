import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user_data: {},
      auth_is_loading: true,
   },
   reducers: {
      login: (state, action) => {
         state.user_data = action.payload
         state.auth_is_loading = false
      },
      logout: (state, action) => {
         state.user_data = {}
         localStorage.clear()
      },
   },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
