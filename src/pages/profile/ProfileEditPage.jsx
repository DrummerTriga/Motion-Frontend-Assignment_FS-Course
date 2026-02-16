import EditProfile from '../../components/Profile/EditProfile'

const ProfileEditPage = () => {
   return (
      <div className="flex flex-col  justify-center items-center bg-gray-100">
         <img src="/public/users/cloud_image.png" className=" w-full" />
         <div className=" -mt-24 m-15">
            <EditProfile />
         </div>
         <div className="bg-gray-100 min-h-80"></div>
      </div>
   )
}

export default ProfileEditPage
