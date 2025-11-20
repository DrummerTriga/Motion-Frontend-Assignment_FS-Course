import { motion_api_auth } from '../axios/axiosBase.js'

export const displayPosts = async (user_id) => {
   try {
      const response = await motion_api_auth.get(
         `social/posts/user/${user_id}/?limit=25&offset=0`,
         {}
      )
      console.log('posts', response.data)
      return response.data
   } catch (error) {
      console.error('Failed to get posts', error)
      throw error
   }
}
