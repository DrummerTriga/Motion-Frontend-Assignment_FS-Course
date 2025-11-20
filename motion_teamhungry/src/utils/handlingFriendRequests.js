import { motion_api_auth } from '../axios/axiosBase.js'
import { add_requests } from '../store/slices/notificationSlice'

// export const acceptFriendRequest = (friendRequestId) => async (dispatch) => {
//    await motion_api_auth.patch(`social/friends/requests/${friendRequestId}/`, {
//       status: 'A',
//    })
//    const response = await motion_api_auth.get('social/friends/requests/')
//    dispatch(add_requests(response.data.results))
// }

// export const rejectFriendRequest = async (friend_request_id) => {
//    try {
//       const response = await motion_api_auth.patch(
//          `social/friends/requests/${friend_request_id}/`,
//          { status: 'R' }
//       )
//       return response.data
//    } catch (error) {
//       console.error('Failed to toggle follower', error)
//       throw error
//    }
// }
