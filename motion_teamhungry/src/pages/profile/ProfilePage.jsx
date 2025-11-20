import { useEffect, useState } from 'react'
import ProfileSummary from '../../components/Profile/ProfileSummary'
import SocialWallPage from '../feed/SocialWallPage'
import { motion_api_auth } from '../../axios/axiosBase'
import FindFriendsPage from '../findfriends/FindFriendsPage'
import { useSelector } from 'react-redux'
import { profileSlice } from '../../store/slices/profileSlice'

const ProfilePage = () => {
   const [user, setUser] = useState({})
   const [things_user_likes, setThings_user_likes] = useState([])
   const filterState = useSelector((state) => state.profile.clickedFilter)

   useEffect(() => {
      const fetchUserData = async () => {
         // todo - RH - make the localStorage active again
         // todo i think we need a switch. If there is a profile id in the URL Parameter it needs so set user_id to this param
         const user_id = localStorage.getItem('user_id')
         // console.log(user_id)
         // const user_id = 4662
         try {
            const response = await motion_api_auth.get(`users/${user_id}/`)
            setUser(response.data)
            setThings_user_likes(response.data.things_user_likes)
         } catch (error) {
            console.error('failed to load users', error)
         }
      }
      fetchUserData()
   }, [])

   return (
      <div className="flex flex-col h-full justify-center items-center bg-gray-100">
         <img src="/public/users/cloud_image.png" className=" w-full" />
         <div className=" -mt-24 m-15">
            <ProfileSummary
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
            />
         </div>
         <div className=" -mt-8 w-[85%]">
            {filter === 'me' || filter === 'posts/likes' ? (
               <SocialWallPage
                  hide_create_post={true}
                  filterfromProfile={filter}
               />
            ) : null}

            {filter === 'friends' ||
            filter === 'followers/followers' ||
            filter === 'followers/following' ? (
               <FindFriendsPage filterfromProfile={filter} />
            ) : null}
         </div>
      </div>
   )
}

export default ProfilePage
