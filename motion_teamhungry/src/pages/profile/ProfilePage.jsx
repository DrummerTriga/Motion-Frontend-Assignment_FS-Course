import ProfileSummary from '../../components/Profile/ProfileSummary'
import SocialWallPage from '../feed/SocialWallPage'

const ProfilePage = () => {
   const [isEditingMyself, setIsEditingMyself] = useState(false)

   return (
      <div className="flex flex-col h-full justify-center items-center bg-gray-100">
         <img src="/public/users/cloud_image.png" className=" w-full" />
         <div className=" -mt-24 m-15">
            {isEditing ? (
               <EditProfile onCancel={() => setIsEditing(false)} />
            ) : (
               <ProfileSummary onEdit={() => setIsEditing(true)} />
            )}
         </div>
         <div className=" -mt-8 w-[85%]">
            <SocialWallPage />
         </div>
      </div>
   )
}

export default ProfilePage
