import Tag from '../../elements/Tags/Tag'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import { addNewFollower } from '../../utils/followingandfriends.js'
import { sendFriendRequest } from '../../utils/followingandfriends.js'

const UserCard = ({
   first_name,
   last_name,
   location,
   about_me,
   things_user_likes,
   avatar,
   user_id,
}) => {
   return (
      <div className="bg-white flex flex-col items-center max-w-95 p-10 gap-4 rounded-lg">
         {avatar ? (
            <img width="85px" className="rounded-full" src={avatar} />
         ) : (
            <img width="85px" src="/noAvatarReplace.png" />
         )}
         <p className="text-2xl">
            {first_name} {last_name}
         </p>
         <p className="min-h-10">{location}</p>
         <div className="flex gap-5">
            {/* JTI todo add secondaryButtons */}
            <SecondaryButton
               label={'FOLLOW'}
               //The URL SEEMS TO BE CORRECT BUT I GET A GET REQUEST INSTEAD POST
               onClickHandler={() => addNewFollower(user_id)}
            />
            <SecondaryButton
               label={'ADD FRIEND'}
               onClickHandler={() => sendFriendRequest(user_id)}
            />
         </div>

         <div>
            <p className="text-center min-h-15">{about_me}</p>
         </div>

         <div className="flex items-center justify-center flex-wrap gap-2 ">
            {things_user_likes.map((item, index) => {
               return <Tag key={index} label={item} />
            })}
         </div>
      </div>
   )
}

export default UserCard
