import { useEffect, useState } from 'react'
import ProfileSummary from '../../components/Profile/ProfileSummary'
import SocialWallPage from '../feed/SocialWallPage'
import { motion_api_auth } from '../../axios/axiosBase'
import FindFriendsPage from '../findfriends/FindFriendsPage'
import { useSelector } from 'react-redux'
import { profileSlice } from '../../store/slices/profileSlice'
import { useParams } from 'react-router'

const ProfilePage = () => {
   //    Possibe code to help switch between profile and edit profile page. Commenting it out - JM
   // const [isEditingMyself, setIsEditingMyself] = useState(false)
   const [user, setUser] = useState({})
   const [things_user_likes, setThings_user_likes] = useState([])
   const filterState = useSelector((state) => state.profile.clickedFilter)

   const loggedin_profile_user_id = useSelector(
      (state) => state.auth.user_data.user.id
   )
   const { userId } = useParams()

   console.log('friend id from Param', userId)
   console.log('user id from slice', loggedin_profile_user_id)

   useEffect(() => {
      const fetchUserData = async () => {
         if (userId) {
            try {
               const response = await motion_api_auth.get(`users/${userId}/`)
               setUser(response.data)
               setThings_user_likes(response.data.things_user_likes)
               console.log(response.data)
            } catch (error) {
               console.error('failed to load users', error)
            }
         } else {
            try {
               const response = await motion_api_auth.get(`users/me/`)
               setUser(response.data)
               setThings_user_likes(response.data.things_user_likes)
               console.log(response.data)
            } catch (error) {
               console.error('failed to load users', error)
            }
         }
      }
      fetchUserData()
   }, [userId])

   return (
      <div className="flex flex-col h-full justify-center items-center bg-gray-100">
         <img src="/public/users/cloud_image.png" className=" w-full" />
         <div className=" -mt-24 m-15">
            {/* Possible start of code to switch between pages, but I'm commenting it out - JM */}
            {/* {isEditing ? (
               <EditProfile onCancel={() => setIsEditing(false)} />
            ) : (
               <ProfileSummary onEdit={() => setIsEditing(true)} />
            )}
            <ProfileSummary */}
            id={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            avatar={user.avatar}
            location={user.location}
            about_me={user.about_me}
            email={user.email}
            phone_number={user.phone_number}
            things_user_likes={things_user_likes}
            amount_of_posts={user.amount_of_posts}
            amount_of_likes={user.amount_of_likes}
            amount_of_friends={user.amount_of_friends}
            amount_of_followers={user.amount_of_followers}
            amount_of_following={user.amount_following}
            
         </div>
         <div className=" -mt-8 w-[85%]">
            {filterState === 'me' || filterState === 'likes' ? (
               <SocialWallPage
                  hide_create_post={true}
                  filterfromProfile={filterState}
               />
            ) : null}

            {filterState === 'friends' ||
            filterState === 'followers/followers' ||
            filterState === 'followers/following' ? (
               <FindFriendsPage filterfromProfile={filterState} />
            ) : null}
         </div>
      </div>
   )
}

export default ProfilePage
