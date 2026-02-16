import { motion_api_auth } from '../axios/axiosBase.js'

export const likingPost = async (post_id) => {
   try {
      const response = await motion_api_auth.post(
         `social/posts/toggle-like/${post_id}/`,
         {}
      )
      return response.data
   } catch (error) {
      console.error('Failed to toggle follower', error)
      throw error
   }
}
