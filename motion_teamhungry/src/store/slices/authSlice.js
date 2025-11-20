import { createSlice } from '@reduxjs/toolkit'

const initialUserData = JSON.parse(localStorage.getItem('user_data')) || {}

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user_data: initialUserData,
      auth_is_loading: !initialUserData,
   },
   reducers: {
      login: (state, action) => {
         state.user_data = action.payload
         console.log(action.payload)
         state.auth_is_loading = false
         localStorage.setItem('user_data', JSON.stringify(action.payload))
      },
      logout: (state, action) => {
         state.user_data = {}
         localStorage.clear()
      },
   },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
