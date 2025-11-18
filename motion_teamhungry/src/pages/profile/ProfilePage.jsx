import ProfileSummary from "../../components/Profile/ProfileSummary"

const ProfilePage = () => {
  return (
    <div className="flex-flex-col h-full justify-center items center bg-amber-200">
      Profile Page
      <img src="/public/users/cloud_image.png" className=" max-w-full" />
      <div>
        <ProfileSummary />
      </div>
    </div>
  )
}

export default ProfilePage
