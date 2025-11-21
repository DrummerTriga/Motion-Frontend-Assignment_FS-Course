import { useEffect, useState } from 'react'
import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import Tag from '../../elements/Tags/Tag'
import { Link } from 'react-router'
import {
   displayPosts,
   displayLikes,
   displayFriends,
   displayFollowers,
   displayFollowing,
} from '../../utils/profile.js'
import { useDispatch } from 'react-redux'
import { filterSelected } from '../../store/slices/profileSlice.js'

const ProfileSummary = ({
   id,
   first_name,
   last_name,
   avatar,
   location,
   about_me,
   email,
   phone_number,
   things_user_likes,
   amount_of_posts,
   amount_of_likes,
   amount_of_friends,
   amount_of_followers,
   amount_of_following,
}) => {
   // todo - RH - make loading logic
   // const [isloading, setIsLoading] = useState(true)
   const user_id = localStorage.getItem('user_id')
   const dispatch = useDispatch()

   const [posts, setPosts] = useState({})
   const [likes, setLikes] = useState({})
   const [friends, setFriends] = useState({})
   const [followers, setFollowers] = useState({})
   const [following, setFollowing] = useState({})

   const handleDisplayPosts = async () => {
      console.log('click for post')
      // loading
      try {
         const posts = await displayPosts(user_id)
         setPosts(posts)
         dispatch(filterSelected(`user/${user_id}`))
      } catch {
         ;(error) => console.error('fail', error)
      } finally {
         // setIsLoading(false)
      }
   }

   const handleDisplayLikes = async () => {
      console.log('click for likes')
      // loading
      try {
         const likes = await displayLikes()
         setLikes(likes)
         dispatch(filterSelected(`likes/user/${user_id}`))
      } catch {
         ;(error) => console.error('fail', error)
      } finally {
         // setIsLoading(false)
      }
   }

   const handleDisplayFriends = async () => {
      console.log('click for friends')
      // loading
      try {
         const friends = await displayFriends(user_id)
         setFriends(friends)
         dispatch(filterSelected(`friends/user/${user_id}`))
      } catch {
         ;(error) => console.error('fail', error)
      } finally {
         // setIsLoading(false)
      }
   }

   const handleDisplayFollowers = async () => {
      console.log('click for followers')
      // loading
      try {
         const followers = await displayFollowers(user_id)
         setFollowers(followers)
         dispatch(filterSelected(`followers/followers/user/${user_id}`))
      } catch {
         ;(error) => console.error('fail', error)
      } finally {
         // setIsLoading(false)
      }
   }

   const handleDisplayFollowing = async () => {
      console.log('click for following')
      // loading
      try {
         const followings = await displayFollowing(user_id)
         setFollowing(followings)
         dispatch(filterSelected(`followers/following/user/${user_id}`))
      } catch {
         ;(error) => console.error('fail', error)
      } finally {
         // setIsLoading(false)
      }
   }

   return (
      <div>
         <div className="min-h-[30vh] flex  bg-white w-[60vw]" key={id}>
            {/* left side of profile summary */}
            <div className=" w-[30%] flex flex-col justify-center text align-middle items-center border-r border-gray-300">
               <img className="size-15" src={avatar} />
               <div className="text-lg">
                  {first_name} {last_name}
               </div>
               <div className="text-xs">{location}</div>
               <br />
               <div>
                  {' '}
                  <Link to="/edit-profile">
                     <SecondaryButton label="Edit Profile"></SecondaryButton>
                  </Link>
               </div>
            </div>
            {/*  right side of profile summary */}
            <div className=" w-[70%] flex flex-col border-gray-300">
               {/*  top right side of profile summary */}
               <div className="flex flex-row text-sm h-[60%] border-gray-600">
                  {/*  top right (left) side of profile summary */}
                  <div className="flex flex-col text-xs w-[60%] p-4">
                     <div className="h-[50%] mb-4">
                        About
                        <br />
                        <div className="text-sm">{about_me}</div>
                        <br />
                        <br />
                     </div>
                     <div className="h-[50%] flex flex-row justify-start items-center w-full">
                        <div className="flex-1">
                           Email
                           <br />
                           <div className="text-sm">{email}</div>
                        </div>
                        <div className="flex-1">
                           Phone
                           <br />
                           <div className="text-sm">{phone_number}</div>
                        </div>
                     </div>
                  </div>
                  {/*  top right (right) side of profile summary */}
                  <div className="text-xs w-[40%] p-4">
                     Things I like
                     <br />
                     <br />
                     <div className="flex items-center  flex-wrap gap-2 ">
                        {things_user_likes.map((item, index) => {
                           return <Tag key={index} label={item} />
                        })}
                     </div>
                  </div>
               </div>

               {/* bottom right side of profile summary */}
               <div className="flex flex-row text-lg h-[40%] border-t border-gray-300 items-center justify-between  w-full p-4 ">
                  <div
                     className="text-left border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                     onClick={handleDisplayPosts}
                  >
                     {amount_of_posts}
                     <br></br>
                     <div className="text-sm text-gray-500">Posts</div>
                  </div>

                  <div
                     className="text-left border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                     onClick={handleDisplayLikes}
                  >
                     {amount_of_likes}
                     <br></br>
                     <div className="text-sm  text-gray-500">Likes</div>
                  </div>

                  <div
                     className="text-left border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                     onClick={handleDisplayFriends}
                  >
                     {amount_of_friends}
                     <br></br>
                     <div className="text-sm  text-gray-500">Friends</div>
                  </div>

                  <div
                     className="text-left border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                     onClick={handleDisplayFollowers}
                  >
                     {amount_of_followers}
                     <br></br>
                     <div className="text-sm  text-gray-500">Followers</div>
                  </div>

                  <div
                     className="text-left border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                     onClick={handleDisplayFollowing}
                  >
                     {amount_of_following}
                     <br></br>
                     <div className="text-sm  text-gray-500">Following</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProfileSummary
