import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name:"auth",
    initialState: {
        access_token: ""
    },
    reducers: {
        login: (state, action) => {
            console.log("create logic")
            //to be edited - just a reference 
            // state.access_token = action.payload
        },
        logout: (state, action) => {
            console.log("create logic")
            //to be edited - just a reference 
            // state.access_token = null
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer