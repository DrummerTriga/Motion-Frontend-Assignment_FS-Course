import Tag from '../../elements/Tags/Tag'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import { addNewFollower } from '../../utils/followingandfriends.js'
import { sendFriendRequest } from '../../utils/followingandfriends.js'
import PrimaryButton from '../../elements/Buttons/PrimaryButton.jsx'
import { Link } from 'react-router'

const UserCard = ({
   first_name,
   last_name,
   location,
   about_me,
   things_user_likes,
   avatar,
   user_id,
   logged_in_user_is_following,
   logged_in_user_is_friends,
   logged_in_user_is_rejected,
   logged_in_user_received_friend_request,
   logged_in_user_sent_friend_request,
}) => {
   return (
      <div className="bg-white flex flex-col items-center max-w-95 p-10 gap-4 rounded-lg">
         {avatar ? (
            <Link to={`/profile/${user_id}`}>
               <img width="85px" className="rounded-full" src={avatar} />
            </Link>
         ) : (
            <Link to={`/profile/${user_id}`}>
               <img width="85px" src="/noAvatarReplace.png" />{' '}
            </Link>
         )}
         <Link to={`/profile/${user_id}`}>
            <p className="text-2xl">
               {first_name} {last_name}
            </p>
         </Link>
         <p className="min-h-10">{location}</p>
         <div className="flex gap-5">
            {logged_in_user_is_following && (
               // JTI todo probably refine the primary button because of padding
               <PrimaryButton
                  label={'FOLLOWING'}
                  className={'!px-4 !py-2 !text-sm'}
               />
            )}
            {!logged_in_user_is_following && (
               <SecondaryButton
                  label={'FOLLOW'}
                  className={'!px-4 !py-2 !text-sm'}
                  onClickHandler={() => addNewFollower(user_id)}
               />
            )}
            {/* JTI todo add the check as svg inside of the button */}
            {logged_in_user_is_friends && (
               <SecondaryButton
                  label={'✓ FRIEND'}
                  className={'!px-4 !py-2 !text-sm'}
               />
            )}
            {logged_in_user_sent_friend_request && (
               <SecondaryButton
                  label={'PENDING'}
                  className={'hover:cursor-progress !px-4 !py-2 !text-sm'}
               />
            )}
            {!logged_in_user_is_friends &&
               !logged_in_user_sent_friend_request && (
                  <SecondaryButton
                     label={'ADD FRIEND'}
                     className={'!px-4 !py-2 !text-sm'}
                     onClickHandler={() => sendFriendRequest(user_id)}
                  />
               )}
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
