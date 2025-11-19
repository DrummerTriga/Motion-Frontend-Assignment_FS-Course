import { Link } from 'react-router'

const VerticalHero = () => {
   return (
      <div className="flex flex-col bg-[linear-gradient(315deg,rgba(0,0,255,0.55),rgba(75,0,130,0.55)),url('/background_image.png')] bg-cover bg-no-repeat h-full w-[40%]">
         {/* upper */}
         <div className="flex flex-col items-center justify-end h-[60%]">
            <Link to={'/auth/login'}>
               <img
                  src="../../../public/logo_white.png"
                  className="h-20 w-20"
                  alt="Motion Logo"
               />
            </Link>
            <h1 className="text-3xl text-white mt-2">Motion</h1>
            <h2 className="text-center w-65 text-[16px] text-gray-200 opacity-90 mt-6 mb-7">
               Connect with friends and the world around you with Motion.
            </h2>
            <div className="flex gap-4">
               <a
                  href="https://www.apple.com/chde/app-store/"
                  className="p-1.5 border border-gray-400 rounded-3xl"
                  target="_blank"
               >
                  <img src="../../../public/apple.svg" />
               </a>
               <a
                  href="https://play.google.com/"
                  className="p-1.5 border border-gray-400 rounded-3xl"
                  target="_blank"
               >
                  <img src="../../../public/google.svg" />
               </a>
            </div>
         </div>
         {/* Lower */}
         <div className="flex flex-col items-center justify-end h-[40%] mb-">
            <div className="flex justify-center items-center opacity-60 gap-3">
               <a href="https://www.twitter.com/" target="_blank">
                  <img
                     className="h-11 w-11"
                     src="../../../public/twitter_icon.svg"
                  />
               </a>
               <a href="https://www.facebook.com/" target="_blank">
                  <img
                     className="h-10 w-10"
                     src="../../../public/facebook_icon.svg"
                  />
               </a>
               <a href="https://www.instagram.com/" target="_blank">
                  <img
                     className="h-10 w-10"
                     src="../../../public/instagram_icon.svg"
                  />
               </a>
            </div>
            <p className="text-center w-65 text-[12px] text-white mt-15 mb-10">
               © Motion 2025. All rights reserved.
            </p>
         </div>
      </div>
   )
}

export default VerticalHero
