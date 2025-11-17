import axios from "axios"

const MOTION_URL = "https://motion.propulsion-home.ch/backend/api/"

export const motion_api_no_auth = axios.create({
  baseURL: MOTION_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

//    //todo - RH - fix accesstoken variable
// export const motion_api_auth = axios.create({
//   baseURL: MOTION_URL,
//   timeout: 10000,
//   headers: {
//     "Content-Type": "application/json",
//     "Bearer Token": access_token,
//   },
// })
