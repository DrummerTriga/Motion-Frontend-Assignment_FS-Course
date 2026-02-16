import { motion_api_auth } from '../axios/axiosBase.js'

export const addNewFollower = async (user_id) => {
   try {
      const response = await motion_api_auth.post(
         `social/followers/toggle-follow/${user_id}/`,
         {}
      )
      return response.data
   } catch (error) {
      console.error('Failed to toggle follower', error)
      throw error
   }
}

export const sendFriendRequest = async (user_id) => {
   try {
      const response = await motion_api_auth.post(
         `social/friends/request/${user_id}/`,
         {}
      )
      return response.data
   } catch (error) {
      console.error('Failed to send friend request', error)
      throw error
   }
}
