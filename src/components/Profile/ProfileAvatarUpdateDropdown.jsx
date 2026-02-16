const ProfileAvatarUpdateDropdown = ({onUpload, onRemove }) => {
   const uploadSVG = (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 512 512"
         className="w-6 h-6 text-neutral-400"
         fill="currentColor"
      >
         <path d="M512 480c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.326 32 32zm-369.377-302.622c8.189 0 16.379-3.124 22.627-9.373l58.75-58.75v246.746c0 17.673 14.327 32 32 32s32-14.327 32-32V109.255l58.75 58.75c12.497 12.497 32.758 12.497 45.255 0s12.497-32.758 0-45.255L278.374 9.373c-12.497-12.497-32.758-12.497-45.255 0L119.742 122.75c-12.497 12.497-12.497 32.758 0 45.255 6.249 6.249 14.438 9.373 22.628 9.373z" />
      </svg>
   )

   const removeSVG = (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 384 384"
         className="w-6 h-6 text-neutral-400"
         fill="currentColor"
      >
         <path d="M64 341.333C64 364.907 83.093 384 106.667 384h170.667C300.907 384 320 364.907 320 341.333v-256H64v256z" />
         <path d="M266.667 21.333 245.333 0h-106.666L117.333 21.333H42.667V64h298.666V21.333z" />
      </svg>
   )

   // const onClickHandlerUpload = () => {
   //    console.log('I react on Upload click')

   // }

   // const onClickHandlerRemove = () => {
   //    console.log('I react on Remove click')
   // }

   return (
      <div className="dropdownwrapper w-[230px] bg-white rounded-lg absolute top-7 mt-2 shadow-[0_8px_24px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.08)]">
         <button
            onClick={onUpload}
            className="flex w-full items-center justify-start text-xl pl-4 py-3 gap-2 hover:bg-neutral-200 cursor-pointer"
         >
            {uploadSVG}
            <p>Upload</p>
         </button>


         <button
            className="flex w-full items-center justify-start text-xl pl-4 rounded-b-lg py-3 gap-2 hover:bg-neutral-200 cursor-pointer"
            onClick={onRemove}
         >
            {removeSVG}
            <p>Remove</p>
         </button>
      </div>
   )
}

export default ProfileAvatarUpdateDropdown
