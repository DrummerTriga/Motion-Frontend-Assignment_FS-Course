import { Link } from 'react-router'

const HeaderDropdown = () => {
   const iconWrapper = 'w-8 h-8 text-neutral-400 mr-5'

   const profileSVG = (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={iconWrapper}
      >
         <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="4"
            ry="4"
            fill="currentColor"
            opacity="0.25"
         />
         <g fill="currentColor">
            <circle cx="12" cy="9" r="4" />
            <path d="M5 20a7 7 0 0 1 14 0z" />
         </g>
      </svg>
   )

   const logoutSVG = (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={iconWrapper}
      >
         <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="4"
            ry="4"
            fill="currentColor"
            opacity="0.25"
         />
         <g fill="currentColor" transform="translate(2.5 3) scale(0.05)">
            <path d="M341.333,0H42.667C19.093,0,0,19.093,0,42.667V128h42.667V42.667h298.667v298.667H42.667V256H0v85.333 C0,364.907,19.093,384,42.667,384h298.667C364.907,384,384,364.907,384,341.333V42.667C384,19.093,364.907,0,341.333,0z" />
            <polygon points="151.147,268.48 181.333,298.667 288,192 181.333,85.333 151.147,115.52 206.293,170.667 0,170.667 0,213.333 206.293,213.333" />
         </g>
      </svg>
   )

   const onClickHandler = () => {
      //JTI todo add function for logout
      console.log('I react on logout click')
   }

   return (
      <div className="dropdownwrapper w-[230px] bg-white rounded-b-lg absolute right-5 top-12 mt-2 ">
         <Link to="profile">
            <button className="flex w-full items-center justify-start text-xl pl-4 py-3  hover:bg-neutral-200 cursor-pointer">
               {profileSVG}
               <p>Profile</p>
            </button>
         </Link>

         <button
            className="flex w-full items-center justify-start text-xl pl-4 rounded-b-lg py-3  hover:bg-neutral-200 cursor-pointer"
            onClick={onClickHandler}
         >
            {logoutSVG}
            <p>Logout</p>
         </button>
      </div>
   )
}

export default HeaderDropdown
