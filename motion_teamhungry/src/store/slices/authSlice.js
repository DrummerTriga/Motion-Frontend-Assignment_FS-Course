import { createSlice } from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user_data: {},
  },
  reducers: {
    login: (state, action) => {
      state.user_data = action.payload
      console.log("authSlice is being used", state.user_data)
    },
    logout: (state, action) => {
      console.log("create logic")
      //to be edited - just a reference
      // state.access_token = null
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
