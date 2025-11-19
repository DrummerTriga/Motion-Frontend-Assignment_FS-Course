import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user_data: {},
      auth_is_loading: true,
   },
   reducers: {
      login: (state, action) => {
         console.log('authSlice is used during login')
         state.user_data = action.payload
         state.auth_is_loading = false
      },
      logout: (state, action) => {
         //todo - RH -  is this working? Check when we have a logout button --> Question: does it navigate directly to login because of the protected routes? or do I need to do a navigate here?
         console.log('logout is performed by the Slice')
         state.user_data = null
         localStorage.clear
      },
   },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
