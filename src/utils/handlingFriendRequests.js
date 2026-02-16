import { motion_api_auth } from '../axios/axiosBase.js'
import { add_requests } from '../store/slices/notificationSlice'

export const acceptFriendRequest = (friendRequestId) => async (dispatch) => {
   await motion_api_auth.patch(`social/friends/requests/${friendRequestId}/`, {
      status: 'A',
   })
   const response = await motion_api_auth.get('social/friends/requests/')
   dispatch(add_requests(response.data.results))
}

export const rejectFriendRequest = (friendRequestId) => async (dispatch) => {
   await motion_api_auth.patch(`social/friends/requests/${friendRequestId}/`, {
      status: 'R',
   })
   const response = await motion_api_auth.get('social/friends/requests/')
   dispatch(add_requests(response.data.results))
}
