import UserCard from '../../components/Feed/UserCard'
import { useEffect, useState } from 'react'
import { motion_api_auth } from '../../axios/axiosBase.js'
import ProfileAvatarUpdateDropdown from '../../components/Profile/ProfileAvatarUpdateDropdown.jsx'

const FindFriendsPage = ({ filterfromProfile }) => {
   const [filter, setFilter] = useState('')
   const [users, setUsers] = useState([])

   //Runs when filterformProfile is set. By returning directly, it skips the function and otherwise goes to the default fallback.
   useEffect(() => {
      if (!filterfromProfile) return
      setFilter(filterfromProfile)

      const fetchFilteredUsers = async () => {
         try {
            const response = await motion_api_auth.get(
               `social/${filterfromProfile}/`
            )
            setUsers(response.data.results)
         } catch (error) {
            console.error('Failed to load users', error)
         }
      }
      fetchFilteredUsers()
   }, [filterfromProfile])

   useEffect(() => {
      if (filterfromProfile) return

      const fetchUsers = async () => {
         try {
            const response = await motion_api_auth.get(`users`)
            setUsers(response.data.results)
         } catch (error) {
            console.error('Failed to load users', error)
         }
      }
      fetchUsers()
   }, [filterfromProfile])

   return (
      <div className="Pagewrapper bg-zinc-100 py-15 flex justify-center">
         <div className="  grid sm:grid-cols-3 gap-6">
            {users.length >= 1 ? (
               users.map((user) => {
                  return (
                     <UserCard
                        key={user.id}
                        user_id={user.id}
                        first_name={user.first_name}
                        last_name={user.last_name}
                        location={user.location}
                        about_me={user.about_me}
                        things_user_likes={user.things_user_likes}
                        avatar={user.avatar}
                        logged_in_user_is_following={
                           user.logged_in_user_is_following
                        }
                        logged_in_user_is_friends={
                           user.logged_in_user_is_friends
                        }
                        logged_in_user_is_rejected={
                           user.logged_in_user_is_rejected
                        }
                        logged_in_user_received_friend_request={
                           user.logged_in_user_received_fr
                        }
                        logged_in_user_sent_friend_request={
                           user.logged_in_user_sent_fr
                        }
                     />
                  )
               })
            ) : (
               <p>WAITING</p>
            )}
         </div>
      </div>
   )
}

export default FindFriendsPage
