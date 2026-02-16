import axios from 'axios'

const MOTION_URL = 'https://motion.propulsion-home.ch/backend/api/'

export const motion_api_no_auth = axios.create({
   baseURL: MOTION_URL,
   timeout: 10000,
   headers: {
      'Content-Type': 'application/json',
   },
})

// For simplicity we have decided to save access_token in localStorage. We acknowledge this is not best practice.
export const motion_api_auth = axios.create({
   baseURL: MOTION_URL,
   timeout: 10000,
   headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
   },
})
