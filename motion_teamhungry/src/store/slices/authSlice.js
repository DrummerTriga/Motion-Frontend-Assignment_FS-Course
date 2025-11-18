import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user_data: {},
    auth_is_loading: true,
  },
  reducers: {
    login: (state, action) => {
      console.log("authSlice is used during login")
      state.user_data = action.payload
      state.auth_is_loading = false
    },
    logout: (state, action) => {
      //todo - RH -  is this working? Check when we have a login button
      console.log("create logic")
      state.user_data = null
      localStorage.clear
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
