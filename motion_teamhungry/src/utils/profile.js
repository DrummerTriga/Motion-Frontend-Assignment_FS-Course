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

export const displayLikes = async () => {
   try {
      const response = await motion_api_auth.get(`social/posts/likes/`, {})
      console.log('likes', response.data)
      return response.data
   } catch (error) {
      console.error('Failed to get posts', error)
      throw error
   }
}

export const displayFriends = async (user_id) => {
   try {
      const response = await motion_api_auth.get(
         `/social/friends/user/${user_id}`,
         {}
      )
      console.log('friends', response.data)
      return response.data
   } catch (error) {
      console.error('Failed to get posts', error)
      throw error
   }
}

export const displayFollowers = async (user_id) => {
   try {
      const response = await motion_api_auth.get(
         `/social/followers/followers/user/${user_id}`,
         {}
      )
      console.log('followers', response.data)
      return response.data
   } catch (error) {
      console.error('Failed to get posts', error)
      throw error
   }
}

export const displayFollowing = async (user_id) => {
   try {
      const response = await motion_api_auth.get(
         `/social/followers/following/user/${user_id}`,
         {}
      )
      console.log('following', response.data)
      return response.data
   } catch (error) {
      console.error('Failed to get posts', error)
      throw error
   }
}
