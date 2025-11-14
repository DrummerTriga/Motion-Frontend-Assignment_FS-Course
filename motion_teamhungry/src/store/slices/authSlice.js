import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState: {
        access_token: ""
    },
    reducers: {
        login: (state, action) => {
            state.access_token = action.payload
            //to be edited - just a reference 
        },
        logout: (state, action) => {
            state.access_token = null
            //to be edited - just a reference 
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer