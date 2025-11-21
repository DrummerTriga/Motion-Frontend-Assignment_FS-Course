import EditProfile from '../../components/Profile/EditProfile'

const ProfileEditPage = () => {
   return (
      <>
         <div className="flex flex-col justify-center items-center bg-gray-100">
            <img src="/public/users/cloud_image.png" className=" w-full" />
            <EditProfile />
         </div>
      </>
   )
}

export default ProfileEditPage
