const VerticalHero = () => {
  return (
    <div className="flex flex-col bg-[linear-gradient(315deg,rgba(0,0,255,0.55),rgba(75,0,130,0.55)),url('/background_image.png')] bg-cover bg-no-repeat h-full w-[40%]">
      {/* upper */}
      <div className="flex flex-col items-center justify-end h-[60%]">
        <img
          src="../../../public/logo_white.png"
          className="h-20 w-20"
          alt="Motion Logo"
        />
        <h1 className="text-3xl text-white mt-2">Motion</h1>
        <h2 className="text-center w-65 text-[16px] text-gray-200 opacity-90 mt-6 mb-7">
          Connect with friends and the world around you with Motion.
        </h2>
        <div className="flex gap-4">
          <button className="p-1.5 border border-gray-400 rounded-3xl">
            <img src="../../../public/apple.svg" />
          </button>
          <button className="p-1.5 border border-gray-400 rounded-3xl">
            <img src="../../../public/google.svg" />
          </button>
        </div>
      </div>
      {/* Lower */}
      <div className="flex flex-col items-center justify-end h-[40%] mb-">
        <div className="flex justify-center items-center opacity-60 gap-3">
          <img className="h-11 w-11" src="../../../public/twitter_icon.svg" />
          <img className="h-10 w-10" src="../../../public/facebook_icon.svg" />
          <img className="h-10 w-10" src="../../../public/instagram_icon.svg" />
        </div>
        <p className="text-center w-65 text-[12px] text-white mt-15 mb-10">
          © Motion 2025. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default VerticalHero
