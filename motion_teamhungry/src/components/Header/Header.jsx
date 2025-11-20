import logo from '/logo.png'
import HeaderDropdown from './HeaderDropdown'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import NotificationDropdown from './NotificationDropdown'
//JTI InformationYou can override the color of all the icons via text-color

const Header = () => {
   const profileClickHandler = () => {
      console.log('I react to profileClickHandler')
   }

   const [showHeaderDropdown, setShowHeaderDropdown] = useState(false)
   const [showNotificationDropdown, setShowNotificationDropdown] =
      useState(false)

   const findFriendsSvg = (
      <svg
         id="fi_17561655"
         enableBackground="new 0 0 512 512"
         width="30"
         height="30"
         viewBox="0 0 512 512"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g fill="currentColor">
            <path d="m232.3 217.3c8.2-13.1 12.6-28.2 12.7-43.7.1-22.3-8.5-43.4-24.3-59.3-15.8-16-36.7-24.8-59-25-.2 0-.3 0-.5 0-22.3 0-43.2 8.6-59.1 24.4s-24.7 36.9-24.7 59.4c0 15.7 4.4 31 12.7 44.3 10.8 17.3 27 29.6 45.7 35.5.2.1.4.1.5.2 4 1.2 8 2.2 12.1 2.8.2 0 .3 0 .5.1l2.4.3c.3 0 .5.1.8.1.7.1 1.4.1 2.1.2.3 0 .6.1.9.1.7 0 1.4.1 2.1.1h.9c1 0 2 .1 3 .1s2 0 3-.1h.9c.7 0 1.4-.1 2.1-.1.3 0 .6-.1 1-.1.7-.1 1.4-.1 2.1-.2.3 0 .6-.1.9-.1.8-.1 1.6-.2 2.4-.3.2 0 .4 0 .5-.1 4.1-.6 8.1-1.5 12.1-2.8.2-.1.3-.1.5-.1 18.7-6.1 34.9-18.4 45.7-35.7z"></path>
            <path d="m195.5 283.4c-11.1 3.4-22.6 5.2-34.3 5.2s-23.2-1.7-34.3-5.2c-9.6-3-19.4-4.4-29-4.4-32.3 0-62.8 16.3-79.8 44.6-7.9 13.2-13.9 27.3-17.9 42.1-.6 2.3.2 4.7 2 6 46.5 33.4 101.5 51.1 159 51.1 50.6 0 99.2-13.7 141.8-39.7h.1c2.9-1.8 5.8-3.6 8.7-5.5 1.4-.9 2.8-1.9 4.2-2.8 1.4-1 2.8-2 4.2-3 1.6-1.1 2.4-3.1 2.2-5.1 0-.3-.1-.6-.2-.9-4-14.8-10-28.9-17.9-42.1-.6-1-1.2-2-1.9-3-.2-.3-.5-.7-.7-1-.4-.6-.9-1.2-1.3-1.9-.3-.4-.6-.8-.9-1.2-.4-.5-.8-1-1.1-1.5-.7-1-1.5-1.9-2.3-2.9-.2-.2-.3-.4-.5-.6-.5-.6-1.1-1.3-1.7-1.9-.1-.1-.3-.3-.4-.4-6.6-7.2-14.3-13.3-22.8-18.1-.1-.1-.2-.1-.3-.2-22-12.4-49-15.6-74.9-7.6z"></path>
            <path d="m437.9 222.5c6.5-10.4 10-22.4 10.1-34.7.1-17.7-6.7-34.4-19.3-47.1-12.5-12.7-29.2-19.7-46.8-19.8-.1 0-.3 0-.4 0-17.7 0-34.3 6.9-46.9 19.3-12.6 12.6-19.6 29.3-19.6 47.2 0 12.5 3.5 24.6 10 35.2 8.5 13.7 21.4 23.5 36.2 28.2.2.1.4.1.5.2 12.7 3.9 26.7 3.9 39.4 0 .1 0 .2-.1.4-.1 14.9-4.8 27.8-14.6 36.4-28.4z"></path>
            <path d="m497.4 313.3c-17.6-29.2-53.2-42.4-86.8-32-9.4 2.9-19.2 4.4-29.1 4.4s-19.7-1.5-29.2-4.4c-14.2-4.4-28.9-4.7-42.6-1 8.5 7.9 15.9 16.9 21.8 26.8 9.4 15.7 16.6 32.6 21.4 50.2 2.9 10.8.8 22.3-5.4 31.2 11.2 1.7 22.5 2.6 33.9 2.6 46.9 0 91.8-14.4 129.8-41.7.6-.4.8-1.2.6-2-3.1-12-8-23.5-14.4-34.1z"></path>
         </g>
      </svg>
   )

   const socialWallSvg = (
      <svg
         id="fi_14106019"
         viewBox="0 0 100 100"
         width="30"
         height="27"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g fill="currentColor">
            <path d="m46.667 50c0 1.833-1.501 3.333-3.334 3.333h-30c-1.832 0-3.333-1.5-3.333-3.333v-36.667c0-1.832 1.501-3.333 3.333-3.333h30c1.833 0 3.334 1.501 3.334 3.333z" />
            <path d="m90 86.667c0 1.832-1.501 3.333-3.333 3.333h-30c-1.833 0-3.334-1.501-3.334-3.333v-36.667c0-1.833 1.501-3.333 3.334-3.333h30c1.832 0 3.333 1.5 3.333 3.333z" />
            <path d="m46.667 86.667c0 1.832-1.501 3.333-3.334 3.333h-30c-1.832 0-3.333-1.501-3.333-3.333v-23.334c0-1.832 1.501-3.333 3.333-3.333h30c1.833 0 3.334 1.501 3.334 3.333z" />
            <path d="m90 36.667c0 1.832-1.501 3.333-3.333 3.333h-30c-1.833 0-3.334-1.501-3.334-3.333v-23.334c0-1.832 1.501-3.333 3.334-3.333h30c1.832 0 3.333 1.501 3.333 3.333z" />
         </g>
      </svg>
   )

   const notificationSvg = (
      <svg
         id="fi_8509088"
         viewBox="0 0 512 512"
         width="30"
         height="30"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g fill="currentColor">
            <path d="m440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67c-8.69-29.1-32.47-48.59-59.29-48.59s-50.59 19.49-59.28 48.56a3.13 3.13 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07h308.89c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66z" />
            <path d="m256 480a80.06 80.06 0 0 0 70.44-42.13 4 4 0 0 0-3.54-5.87h-133.78a4 4 0 0 0-3.55 5.87 80.06 80.06 0 0 0 70.43 42.13z" />
         </g>
      </svg>
   )

   const dotMenuSvg = (
      <svg
         id="fi_2311524"
         viewBox="0 0 32 32"
         width="30"
         height="30"
         xmlns="http://www.w3.org/2000/svg"
      >
         <g fill="currentColor">
            <path
               id="XMLID_294_"
               d="m13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
            />
            <path
               id="XMLID_295_"
               d="m13 26c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
            />
            <path
               id="XMLID_297_"
               d="m13 6c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"
            />
         </g>
      </svg>
   )

   return (
      <div className="flex w-full bg-white h-20 shadow-[0_10px_15px_-10px_rgba(0,0,0,0.25)]">
         <div className="flex gap-2 items-center pl-10 hover:cursor-pointer">
            <NavLink to="posts">
               <img src={logo} />
            </NavLink>
            <p className="text-xl">Motion</p>
         </div>
         <div className="flex w-full items-center justify-between">
            <div className="flex justify-center lg:pl-40 lg:gap-15 md:pl-10 md:gap-10 sm:pl-10 sm:gap-1  ">
               <NavLink
                  className={({ isActive }) =>
                     `inline-flex items-center py-7 gap-2  border-b-2 text-neutral-400 ${isActive ? 'border-b-purple-400 text-purple-400' : 'text-neutral-400 border-b-transparent'}`
                  }
                  to="posts"
               >
                  {socialWallSvg}
                  <p className="text-black">Posts</p>
               </NavLink>

               <NavLink
                  className={({ isActive }) =>
                     `inline-flex items-center py-7 gap-2  border-b-2 text-neutral-400 ${isActive ? 'border-b-purple-400 text-purple-400' : 'text-neutral-400 border-b-transparent'}`
                  }
                  to="findfriends"
               >
                  {findFriendsSvg}
                  <p className="text-black">Find Friends</p>
               </NavLink>
            </div>
            <div className="flex gap-4 items-center pr-10">
               <div className="flex">
                  <button
                     className="text-neutral-400 hover:cursor-pointer"
                     onClick={() =>
                        !showNotificationDropdown
                           ? setShowNotificationDropdown(true)
                           : setShowNotificationDropdown(false)
                     }
                  >
                     {notificationSvg}
                  </button>
                  {showNotificationDropdown && <NotificationDropdown />}
                  {/* The number 4 is the placeholder for the amount of notifications */}
                  <p className="rounded-4xl w-6 h-6 text-s text-center mb-5 text-white bg-gradient-to-r from-purple-400 to-indigo-400">
                     3
                  </p>
               </div>
               {/* I decided to not use import for this one because we probably get it directly from the API */}
               <img
                  className="hover:cursor-pointer"
                  src="/src/assets/users/leticia.png"
                  onClick={profileClickHandler}
               />
               <div
                  className="relative hover:cursor-pointer"
                  onClick={() =>
                     !showHeaderDropdown
                        ? setShowHeaderDropdown(true)
                        : setShowHeaderDropdown(false)
                  }
               >
                  {dotMenuSvg}
                  {showHeaderDropdown && <HeaderDropdown />}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Header
