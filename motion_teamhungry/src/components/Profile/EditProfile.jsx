import { useEffect, useRef, useState } from 'react'
import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import Tag from '../../elements/Tags/Tag'
import { motion_api_auth } from '../../axios/axiosBase'
import ProfileAvatarUpdateDropdown from './ProfileAvatarUpdateDropdown'
import DeleteAccountPopup from './DeleteAccountPopup'
import { useNavigate } from 'react-router'

const EditProfile = () => {
   const navigate = useNavigate()
   const handleRemoveAvatar = () => {
      setUser((prevUser) => ({
         ...prevUser,
         avatar: null,
      }))
      setAvatarFile(null)
      setShowDropdown(false)
   }

   useEffect(() => {
      const fetchUserMe = async () => {
         try {
            const response = await motion_api_auth.get('users/me/')
            const userData = response.data

            setUser(userData)
            setUserLikesTag(userData.things_user_likes)
         } catch (error) {
            console.error('Failed to load users', error)
         }
      }
      fetchUserMe()
   }, [])

   const handleSave = async () => {
      const dataToSend = {
         first_name: user.first_name || '',
         last_name: user.last_name || '',
         email: user.email || '',
         username: user.username || '',
         phone_number: user.phone_number || '',
         location: user.location || '',
         about_me: user.about_me || '',
         things_user_likes: userLikesTag,
      }

      if (user.avatar instanceof File) {
         formData.append('avatar', user.avatar)
      }

      try {
         const response = await motion_api_auth.patch('users/me/', dataToSend)
         navigate('/profile')
      } catch (error) {
         console.error('Failed to update profile', error)
      }
   }

   const handleDeleteMe = async () => {
      // succesfully deletes the user
      const dataToSend = {}

      try {
         const response = await motion_api_auth.delete('users/me/', dataToSend)
         navigate('/auth/login')
      } catch (error) {
         console.error('Failed to delete profile', error)
      }
   }

   const [previewURL, setPreviewURL] = useState(null)

   const handleAvatarSave = async (event) => {
      const file = event.target.files[0]

      if (file) {
         const objectURL = URL.createObjectURL(file)
         setPreviewURL(objectURL)

         const formData = new FormData()

         formData.append('avatar', file)

         try {
            const response = await motion_api_auth.patch(
               'users/me/',
               formData,
               {
                  headers: {
                     'Content-Type': 'multipart/form-data',
                  },
               }
            )
         } catch (error) {
            console.error('Failed to update avatar', error)
         }
      }
   }

   const [user, setUser] = useState({})
   const [newTag, setNewTag] = useState('')
   const [userLikesTag, setUserLikesTag] = useState([])
   const [showDropdown, setShowDropdown] = useState(false)
   const [showDeleteConfirmation, setDeleteConfirmation] = useState(false)
   const fileInputRef = useRef(null)
   const dropdownRef = useRef(null)
   const [avatarFile, setAvatarFile] = useState(null)

   const handleOnUserDataChange = (field, value) => {
      setUser((prev) => ({
         ...prev,
         [field]: value,
      }))
   }

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
               className="min-h-[10vh] flex  bg-white text-neutral-400 text-xs"
               key={user.id}
            >
               {/* left side of profile summary */}
               <div className="flex flex-col items-center justify-between gap-4 border-r border-neutral-400  text-xs w-1/3 p-4">
                  <div className="flex flex-col items-center">
                     <img
                        className="w-16 h-16 rounded-full object-cover"
                        src={previewURL ? previewURL : user.avatar}
                        alt={'Profile picture'}
                     />
                     <br />
                     <div className="relative" ref={dropdownRef}>
                        <SecondaryButton
                           className={'min-h-10'}
                           label="UPDATE IMAGE"
                           onClickHandler={() => setShowDropdown(!showDropdown)}
                        />

                        {showDropdown && (
                           <ProfileAvatarUpdateDropdown
                              onUpload={() => fileInputRef.current?.click()}
                              onRemove={handleRemoveAvatar}
                           />
                        )}

                        <input
                           ref={fileInputRef}
                           type="file"
                           id="theFileInput"
                           accept="image/*"
                           className="hidden"
                           onChange={handleAvatarSave}
                        />
                     </div>
                     <br />
                  </div>
                  <div>
                     <div>
                        <SecondaryButton
                           label="DELETE ACCOUNT"
                           className={'w-full min-h-10'}
                           onClickHandler={() =>
                              setDeleteConfirmation(!showDeleteConfirmation)
                           }
                        ></SecondaryButton>

                        {showDeleteConfirmation && (
                           <DeleteAccountPopup
                              onNotConfirmDelete={() =>
                                 setDeleteConfirmation(false)
                              }
                              onConfirmDelete={() => {
                                 handleDeleteMe()
                                 setDeleteConfirmation(false)
                              }}
                           />
                        )}
                     </div>
                     <div className="mt-4 text-center">
                        <PrimaryButton
                           label="SAVE"
                           className={'text-xs w-full max-h-10'}
                           onClickHandler={handleSave}
                        ></PrimaryButton>
                     </div>
                     <br />
                  </div>
               </div>
               {/*  right side of profile summary */}
               <div className="flex flex-col border-gray-300 w-2/3 h-full">
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
                              rows={3}
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
