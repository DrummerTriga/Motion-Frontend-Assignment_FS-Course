import { Link } from 'react-router'

const HeaderDropdown = () => {
   const profileSVG = (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         aria-hidden="true"
         class="w-6 h-6 text-blue-500"
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
         version="1.1"
         id="fi_565503"
         xmlns="http://www.w3.org/2000/svg"
         xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 384 384"
         class="w-6 h-6 text-blue-500"
      >
         <g fill="currentColor">
            <path
               d="M341.333,0H42.667C19.093,0,0,19.093,0,42.667V128h42.667V42.667h298.667v298.667H42.667V256H0v85.333
        C0,364.907,19.093,384,42.667,384h298.667C364.907,384,384,364.907,384,341.333V42.667C384,19.093,364.907,0,341.333,0z"
            ></path>

            <polygon
               points="151.147,268.48 181.333,298.667 288,192 181.333,85.333 151.147,115.52 
        206.293,170.667 0,170.667 0,213.333 206.293,213.333"
            ></polygon>
         </g>
      </svg>
   )
   return (
      <div className="dropdownwrapper bg-white rounded-2xl">
         <Link to="profile">
            <button className="flex items-center hover:bg-neutral-400">
               {profileSVG}
               <p>Profile</p>
            </button>
         </Link>

         <div className="logout"></div>
      </div>
   )
}

export default HeaderDropdown
