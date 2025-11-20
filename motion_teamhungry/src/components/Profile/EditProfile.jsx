import { useEffect, useState } from 'react'
import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import Tag from '../../elements/Tags/Tag'
import { motion_api_auth } from '../../axios/axiosBase'
import axios from 'axios'

const EditProfile = () => {
   //    const thisUser = [
   //       {
   //          id: 3,
   //          first_name: 'Jennifer',
   //          last_name: 'Aniston',
   //          avatar: '/users/jennifer.png',
   //          location: 'Zurich, Switzerland',
   //          about_me:
   //             'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
   //          email: 'test@email.com',
   //          phone_number: '+ 1 234 456',
   //          things_user_likes: [
   //           'Cooking',
   //           'Football' ,
   //            'Swimming' ,
   //            'Tennis' ,
   //            'Boardgames' ,
   //          ],
   //          username: 'user5',
   //          job: 'Architect',
   //          banner: '/users/cloud_image.png',
   //       },
   //    ]

   const handleAvatarChange = (e) => {
      const file = e.target.files[0]
      if (file) {
         setAvatarFile(file)
         const previewUrl = URL.createObjectURL(file)
         setUser((prevUser) => ({
            ...prevUser,
            avatar: previewUrl,
         }))
      }
   }

   useEffect(() => {
      const fetchUserMe = async () => {
         try {
            const response = await motion_api_auth.get('users/me/')
            console.log('Raw response:', response.data)
            const userData = response.data
            console.log(
               'things_user_likes type:',
               typeof userData.things_user_likes
            )

            setUser(userData)
            setUserLikesTag(userData.things_user_likes)
         } catch (error) {
            console.error('Failed to load users', error)
         }
      }
      fetchUserMe()
   }, [])

   const handleSave = async () => {
      const formData = new FormData()

      formData.append('first_name', user.first_name || '')
      formData.append('last_name', user.last_name || '')
      formData.append('email', user.email || '')
      formData.append('username', user.username || '')
      formData.append('phone_number', user.phone_number || '')
      formData.append('location', user.location || '')
      formData.append('about_me', user.about_me || '')
      formData.append('things_user_likes', JSON.stringify(userLikesTag))

      const dataToSend = {
         first_name: user.first_name || '',
         last_name: user.last_name || '',
         email: user.email || '',
         username: user.username || '',
         phone_number: user.phone_number || '',
         location: user.location || '',
         about_me: user.about_me || '',
         things_user_likes: userLikesTag, // Array sent as-is
      }

      console.log('changed data: ', [...formData.getAll('things_user_likes')])

      // Avatar only if updated
      if (user.avatar instanceof File) {
         formData.append('avatar', user.avatar)
      }

      try {
         const response = await motion_api_auth.patch('users/me/', dataToSend)
         console.log('Profile updated', response.data)
      } catch (error) {
         console.error('Failed to update profile', error)
      }
   }

   const [user, setUser] = useState({})
   const [newTag, setNewTag] = useState('')
   const [userLikesTag, setUserLikesTag] = useState([])

   console.log(userLikesTag)

   const [avatarFile, setAvatarFile] = useState(null)

   const handleOnUserDataChange = (field, value) => {
      setUser((prev) => ({
         ...prev,
         [field]: value,
      }))
   }

   const handleRemoveTag = (indexToRemove) => {
      setUser((prevUser) => ({
         ...prevUser,
         things_user_likes: prevUser.things_user_likes.filter(
            (_, index) => index !== indexToRemove
         ),
      }))
   }

   //    const handleAddTag = () => {
   //       if (newTag.trim() !== '') {
   //          setUser((prevUser) => ({
   //             ...prevUser,
   //             things_user_likes: [...prevUser.things_user_likes, newTag],
   //          }))
   //          setNewTag('')
   //       }
   //       console.log(newTag)
   //    }

   const handleAddNewTag = () => {
      setUserLikesTag([...userLikesTag, newTag])
      setNewTag('')
   }

   const handleDeleteTag = (item) => {
      setUserLikesTag(userLikesTag.filter((i) => i !== item))
   }

   const handleUpdateImageClick = () => {
      fileInputRef.current?.click()
   }

   return (
      <div>
         {user && (
            <div
               className="min-h-[10vh] flex  bg-amber-100 text-neutral-400 text-xs"
               key={user.id}
            >
               {/* left side of profile summary */}
               <div className="flex flex-col items-center justify-between gap-4 border-r border-neutral-400  text-xs w-1/3 p-4">
                  <div className="flex flex-col items-center">
                     <img
                        className="w-16 h-16 rounded-full object-cover"
                        src={user.avatar}
                        alt={'Profile picture'}
                     />
                     <br />
                     <div>
                        {' '}
                        <SecondaryButton label="UPDATE IMAGE" for="file_input">
                           <label
                              class="block mb-2.5 text-sm font-medium text-heading"
                              for="file_input"
                           >
                              Upload file
                           </label>
                           <input
                              class="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body"
                              id="file_input"
                              type="file"
                           />
                        </SecondaryButton>
                        <input
                           class="cursor-pointer bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full shadow-xs placeholder:text-body"
                           id="file_input"
                           type="file"
                        />
                     </div>
                     <br />
                  </div>
                  <div>
                     <div>
                        {' '}
                        <SecondaryButton
                           label="DELETE ACCOUNT"
                           className={'w-full'}
                        ></SecondaryButton>
                     </div>
                     <div className="mt-4">
                        <PrimaryButton
                           label="SAVE"
                           className={'text-xs w-full'}
                           onClickHandler={handleSave}
                        ></PrimaryButton>
                     </div>
                     <br />
                  </div>
               </div>
               {/*  right side of profile summary */}
               <div className="flex flex-col border-gray-300 w-2/3">
                  {/*  top right side of profile summary */}
                  <div className="flex flex-row text-sm h-[60%] border-gray-600">
                     {/*  top right (left) side of profile summary */}
                     <div className="flex flex-col text-xs w-[50%] p-4 gap-4 text">
                        <div className="flex flex-col gap-2">
                           First name
                           <br />
                           <input
                              className="text-black"
                              type="text"
                              value={user.first_name}
                              onChange={(e) =>
                                 handleOnUserDataChange(
                                    'first_name',
                                    e.target.value
                                 )
                              }
                           />
                           <hr></hr>
                        </div>
                        <div className="flex flex-col gap-2">
                           Email
                           <br />
                           <input
                              className="text-black"
                              type="text"
                              value={user.email}
                              onChange={(e) =>
                                 handleOnUserDataChange('email', e.target.value)
                              }
                           />
                           <hr></hr>
                        </div>
                        <div className="flex flex-col gap-2">
                           Location
                           <br />
                           <input
                              className="text-black"
                              type="text"
                              value={user.location}
                              onChange={(e) =>
                                 handleOnUserDataChange(
                                    'location',
                                    e.target.value
                                 )
                              }
                           />
                           <hr></hr>
                        </div>
                        <div className="flex flex-col gap-2">
                           About
                           <br />
                           <textarea
                              className="text-black"
                              value={user.about_me}
                              onChange={(e) =>
                                 handleOnUserDataChange(
                                    'about_me',
                                    e.target.value
                                 )
                              }
                              rows={4}
                           />
                           <hr></hr>
                        </div>
                     </div>
                     {/*  top right (right) side of profile summary */}
                     <div className="flex flex-col text-xs w-[50%] p-4 gap-4">
                        <div className="flex flex-col">
                           Last name
                           <br />
                           <input
                              className="text-black"
                              type="text"
                              value={user.last_name}
                              onChange={(e) =>
                                 handleOnUserDataChange(
                                    'last_name',
                                    e.target.value
                                 )
                              }
                           />
                        </div>
                        <div className="flex flex-col">
                           Username
                           <br />
                           <input
                              className="text-black"
                              type="text"
                              value={user.username}
                              onChange={(e) =>
                                 handleOnUserDataChange(
                                    'username',
                                    e.target.value
                                 )
                              }
                           />
                        </div>
                        <div className="flex flex-col">
                           Phone
                           <br />
                           <input
                              className="text-black"
                              type="text"
                              value={user.phone_number}
                              onChange={(e) =>
                                 handleOnUserDataChange(
                                    'phone_number',
                                    e.target.value
                                 )
                              }
                           />
                        </div>
                     </div>
                  </div>

                  {/* bottom right side of profile summary */}
                  <div className="text-xs w-full p-4 align-middle items-start">
                     <div className="flex flex-col gap-4">
                        Things I like
                        <br />
                        <br />
                        <div className="flex items-center flex-wrap gap-2 mb-4 text-black">
                           {userLikesTag &&
                              userLikesTag.map((item, index) => (
                                 <Tag
                                    key={index}
                                    label={
                                       <span className="flex items-center gap-2">
                                          {item}
                                          <button
                                             onClick={() =>
                                                handleDeleteTag(item)
                                             }
                                             className="hover:opacity-70 text-base"
                                          >
                                             <div className="text-neutral-400 text-xs">
                                                ✕
                                             </div>
                                          </button>
                                       </span>
                                    }
                                 />
                              ))}
                        </div>
                        <div className="flex flex-row items-center gap-2">
                           <div className="flex flex-col flex-1">
                              <input
                                 className="text-black px-2 py-1 rounded placeholder:text-neutral-400"
                                 type="text"
                                 value={newTag}
                                 onChange={(e) => setNewTag(e.target.value)}
                                 onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                       handleAddNewTag()
                                    }
                                 }}
                                 placeholder="Type something..."
                              />
                              <hr className="mt-2" />
                           </div>
                           <SecondaryButton
                              label="ADD"
                              onClickHandler={handleAddNewTag}
                              className="text-xs"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

export default EditProfile
