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
import { useParams } from 'react-router'
import { addNewFollower } from '../../utils/followingandfriends.js'
import { sendFriendRequest } from '../../utils/followingandfriends.js'
import { useSelector } from 'react-redux'

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
   logged_in_user_is_following,
   logged_in_user_is_friends,
   logged_in_user_is_rejected,
   logged_in_user_received_friend_request,
   logged_in_user_sent_friend_request,
}) => {
   // todo - RH - make loading logic
   // const [isloading, setIsLoading] = useState(true)
   const loggedin_profile_user_id = useSelector(
      (state) => state.auth.user_data.user.id
   )
   let { userId } = useParams()
   userId = userId ? userId : loggedin_profile_user_id

   const filterState = useSelector((state) => state.profile.clickedFilter)

   console.log('which filter is selected?', filterState)

   const dispatch = useDispatch()

   const [posts, setPosts] = useState({})
   const [likes, setLikes] = useState({})
   const [friends, setFriends] = useState({})
   const [followers, setFollowers] = useState({})
   const [following, setFollowing] = useState({})

   useEffect(() => {
      return () => {
         dispatch(filterSelected(`user/${userId}`))
      }
   }, [])

   const handleDisplayPosts = async () => {
      console.log(
         'click for post',
         'userId:',
         userId,
         'logged in user id',
         loggedin_profile_user_id
      )
      // loading
      if (userId) {
         try {
            console.log('userId was called')
            const posts = await displayPosts(userId)
            setPosts(posts)
            dispatch(filterSelected(`user/${userId}`))
         } catch {
            ;(error) => console.error('fail', error)
         } finally {
            // setIsLoading(false)
         }
      } else {
         try {
            console.log('loggedin user called')
            const posts = await displayPosts(loggedin_profile_user_id)
            setPosts(posts)
            dispatch(filterSelected(`user/${userId}`))
         } catch {
            ;(error) => console.error('fail', error)
         } finally {
            // setIsLoading(false)
         }
      }
   }

   const handleDisplayLikes = async () => {
      console.log('click for likes')
      // loading

      // if (userId) {
      // } else {
      // }

      try {
         const likes = await displayLikes()
         setLikes(likes)
         dispatch(filterSelected(`likes/user/${userId}`))
      } catch {
         ;(error) => console.error('fail', error)
      } finally {
         // setIsLoading(false)
      }
   }

   const handleDisplayFriends = async () => {
      console.log('click for friends')
      // loading

      // if (userId) {
      // } else {
      // }

      try {
         const friends = await displayFriends(loggedin_profile_user_id)
         setFriends(friends)
         dispatch(filterSelected(`friends/user/${userId}`))
      } catch {
         ;(error) => console.error('fail', error)
      } finally {
         // setIsLoading(false)
      }
   }

   const handleDisplayFollowers = async () => {
      console.log('click for followers')
      // loading

      // if (userId) {
      // } else {
      // }

      try {
         const followers = await displayFollowers(loggedin_profile_user_id)
         setFollowers(followers)
         dispatch(filterSelected(`followers/followers/user/${userId}`))
      } catch {
         ;(error) => console.error('fail', error)
      } finally {
         // setIsLoading(false)
      }
   }

   const handleDisplayFollowing = async () => {
      console.log('click for following')
      // loading

      // if (userId) {
      // } else {
      // }

      try {
         const followings = await displayFollowing(loggedin_profile_user_id)
         setFollowing(followings)
         dispatch(filterSelected(`followers/following/user/${userId}`))
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

               {userId !== loggedin_profile_user_id ? (
                  <div className="flex flex-col items-center pt-5 gap-3">
                     {logged_in_user_is_following && (
                        // JTI todo probably refine the primary button because of padding
                        <PrimaryButton
                           label={'FOLLOWING'}
                           className={'!px-4 !py-2 !text-sm'}
                        />
                     )}
                     {!logged_in_user_is_following && (
                        <SecondaryButton
                           label={'FOLLOW'}
                           className={'!px-4 !py-2 !text-sm'}
                           onClickHandler={() =>
                              addNewFollower(loggedin_profile_user_id)
                           }
                        />
                     )}
                     {/* JTI todo add the check as svg inside of the button */}
                     {logged_in_user_is_friends && (
                        <SecondaryButton
                           label={'✓ FRIEND'}
                           className={'!px-4 !py-2 !text-sm'}
                        />
                     )}
                     {logged_in_user_sent_friend_request && (
                        <SecondaryButton
                           label={'PENDING'}
                           className={
                              'hover:cursor-progress !px-4 !py-2 !text-sm'
                           }
                        />
                     )}
                     {!logged_in_user_is_friends &&
                        !logged_in_user_sent_friend_request && (
                           <SecondaryButton
                              label={'ADD FRIEND'}
                              className={'!px-4 !py-2 !text-sm'}
                              onClickHandler={() =>
                                 sendFriendRequest(loggedin_profile_user_id)
                              }
                           />
                        )}
                  </div>
               ) : (
                  <div className="pt-10">
                     <Link to="/edit-profile">
                        <SecondaryButton label="EDIT PROFILE"></SecondaryButton>
                     </Link>
                  </div>
               )}
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
                  {/* ======================== */}

                  {filterState === `user/${userId}` ? (
                     <>
                        <div
                           className="text-left border-transparent transition duration-300 ease-in-out border-4 border-b-purple-600 p-5 cursor-pointer border"
                           onClick={handleDisplayPosts}
                        >
                           {amount_of_posts}
                           <div className="text-sm text-gray-500">Posts</div>
                        </div>
                     </>
                  ) : (
                     <>
                        <div
                           className="text-left border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                           onClick={handleDisplayPosts}
                        >
                           {amount_of_posts}
                           <div className="text-sm text-gray-500">Posts</div>
                        </div>
                     </>
                  )}

                  {/* ======================== */}

                  {filterState === `likes/user/${userId}` ? (
                     <>
                        <div
                           className="text-left border-4 border-b-purple-600 border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                           onClick={handleDisplayLikes}
                        >
                           {amount_of_likes}
                           <div className="text-sm  text-gray-500">Likes</div>
                        </div>
                     </>
                  ) : (
                     <>
                        <div
                           className="text-left border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                           onClick={handleDisplayLikes}
                        >
                           {amount_of_likes}
                           <div className="text-sm  text-gray-500">Likes</div>
                        </div>
                     </>
                  )}

                  {/* ======================== */}

                  {filterState === `friends/user/${userId}` ? (
                     <>
                        <div
                           className="text-left border-4 border-b-purple-600 border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                           onClick={handleDisplayFriends}
                        >
                           {amount_of_friends}
                           <div className="text-sm  text-gray-500">Friends</div>
                        </div>
                     </>
                  ) : (
                     <>
                        <div
                           className="text-left border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                           onClick={handleDisplayFriends}
                        >
                           {amount_of_friends}
                           <div className="text-sm  text-gray-500">Friends</div>
                        </div>
                     </>
                  )}

                  {/* ======================== */}

                  {filterState === `followers/followers/user/${userId}` ? (
                     <>
                        <div
                           className="text-left border-4 border-b-purple-600 border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                           onClick={handleDisplayFollowers}
                        >
                           {amount_of_followers}
                           <div className="text-sm  text-gray-500">
                              Followers
                           </div>
                        </div>
                     </>
                  ) : (
                     <>
                        <div
                           className="text-left border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                           onClick={handleDisplayFollowers}
                        >
                           {amount_of_followers}
                           <div className="text-sm  text-gray-500">
                              Followers
                           </div>
                        </div>
                     </>
                  )}

                  {/* ======================== */}

                  {filterState === `followers/following/user/${userId}` ? (
                     <>
                        <div
                           className="text-left border-4 border-b-purple-600 border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                           onClick={handleDisplayFollowing}
                        >
                           {amount_of_following}
                           <div className="text-sm  text-gray-500">
                              Following
                           </div>
                        </div>
                     </>
                  ) : (
                     <>
                        <div
                           className="text-left border-transparent transition duration-300 ease-in-out hover:border-b-purple-600 p-5 cursor-pointer border"
                           onClick={handleDisplayFollowing}
                        >
                           {amount_of_following}
                           <div className="text-sm  text-gray-500">
                              Following
                           </div>
                        </div>
                     </>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProfileSummary
