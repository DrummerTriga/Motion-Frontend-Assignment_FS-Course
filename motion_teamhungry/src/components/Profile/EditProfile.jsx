import { useState } from 'react'
import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import Tag from '../../elements/Tags/Tag'

const EditProfile = () => {
   const thisUser = [
      {
         id: 3,
         first_name: 'Jennifer',
         last_name: 'Aniston',
         avatar: '/users/jennifer.png',
         location: 'Zurich, Switzerland',
         about_me:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
         email: 'test@email.com',
         phone_number: '+ 1 234 456',
         things_user_likes: [
            { keyword: 'Cooking' },
            { keyword: 'Football' },
            { keyword: 'Swimming' },
            { keyword: 'Tennis' },
            { keyword: 'Boardgames' },
         ],
         username: 'user5',
         job: 'Architect',
         banner: '/users/cloud_image.png',
      },
   ]

   const handleAvatarChange = (e) => {
      const file = e.target.files[0]
      if (file) {
         setAvatarFile(file)
         const previewUrl = URL.createObjectURL(file)
         setUser((previewUrl) => ({
            ...prevUser,
            avatar: previewUrl,
         }))
      }
   }

   const handleSave = async () => {
      const formData = new FormData()
   }

   const [user, setUser] = useState(thisUser[0])
   const [newTag, setNewTag] = useState('')

   const handleOnUserDataChange = (field, value) => {
      setUser((prevUser) => ({
         ...prevUser,
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

   const handleAddTag = () => {
      if (newTag.trim() !== '') {
         setUser((prevUser) => ({
            ...prevUser,
            things_user_likes: [
               ...prevUser.things_user_likes,
               { keyword: newTag.trim() },
            ],
         }))
         setNewTag('')
      }
   }

   return (
      <div>
         <div
            className="min-h-[10vh] flex  bg-amber-100 text-neutral-400 text-xs"
            key={thisUser.id}
         >
            {/* left side of profile summary */}
            <div className="flex flex-col items-center justify-between gap-4 border-r border-neutral-400  text-xs w-1/3 p-4">
               <div className="flex flex-col items-center">
                  <img
                     className="w-16 h-16 rounded-full object-cover"
                     src={thisUser[0].avatar}
                     alt={'Profile picture'}
                  />
                  <br />
                  <div>
                     {' '}
                     <SecondaryButton label="UPDATE IMAGE">
                        Put code below to onClickHandler={}
                     </SecondaryButton>
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
                              handleOnUserDataChange('location', e.target.value)
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
                              handleOnUserDataChange('about_me', e.target.value)
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
                              handleOnUserDataChange('username', e.target.value)
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
                        {user.things_user_likes.map((item, index) => (
                           <Tag
                              key={index}
                              label={
                                 <span className="flex items-center gap-2">
                                    {item.keyword}
                                    <button
                                       onClick={() => handleRemoveTag(index)}
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
                                    handleAddTag()
                                 }
                              }}
                              placeholder="Type something..."
                           />
                           <hr className="mt-2" />
                        </div>
                        <SecondaryButton
                           label="ADD"
                           onClickHandler={handleAddTag}
                           className="text-xs"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default EditProfile
