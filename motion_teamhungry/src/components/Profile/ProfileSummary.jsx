import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import Tag from '../../elements/Tags/Tag'

const ProfileSummary = () => {
   const thisUser = [
      {
         id: 3,
         first_name: 'Jennifer',
         last_name: 'Aniston',
         avatar: '/users/jennifer.png',
         location: 'Zurich, Switzerland',
         about_me:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore',
         email: 'test@email.com',
         phone_number: '+ 1 234 456',
         things_user_likes: ['Cooking', 'Football', 'Swimming'],
         amount_of_posts: '34',
         amount_of_likes: '35',
         amount_of_friends: '36',
         amount_of_followers: '37',
         amount_of_following: '38',
      },
   ]

   return (
      <div>
         <div
            className="min-h-[30vh] flex  bg-white "
            key={thisUser.id}
         >
            {/* left side of profile summary */}
            <div className=" w-[30%] flex flex-col justify-center text align-middle items-center border-r border-gray-300">
               <img className="size-15" src={thisUser[0].avatar} />
               <div className="text-lg">
                  {thisUser[0].first_name} {thisUser[0].last_name}
               </div>
               <div className="text-xs">{thisUser[0].location}</div>
               <br />
               <div>
                  {' '}
                  <SecondaryButton label="Edit Profile"></SecondaryButton>
               </div>
            </div>
            {/*  right side of profile summary */}
            <div className=" w-[70%] flex flex-col border-gray-300">
               {/*  top right side of profile summary */}
               <div className="flex flex-row text-sm h-[60%] border-gray-600">
                  {/*  top right (left) side of profile summary */}
                  <div className="flex flex-col text-xs w-[60%] p-4">
                     <div className="h-[50%] mb-4">
                        About
                        <br />
                        <div className="text-sm">{thisUser[0].about_me}</div>
                        <br />
                        <br />
                     </div>
                     <div className="h-[50%] flex flex-row justify-start items-center w-full">
                        <div className="flex-1">
                           Email
                           <br />
                           <div className="text-sm">{thisUser[0].email}</div>
                        </div>
                        <div className="flex-1">
                           Phone
                           <br />
                           <div className="text-sm">
                              {thisUser[0].phone_number}
                           </div>
                        </div>
                     </div>
                  </div>
                  {/*  top right (right) side of profile summary */}
                  <div className="text-xs w-[40%] p-4">
                     Things I like
                     <br />
                     <br />
                     <div className="flex items-center  flex-wrap gap-2 ">
                        {thisUser[0].things_user_likes.map((item, index) => {
                           return <Tag key={index} label={item} />
                        })}
                     </div>
                  </div>
               </div>

               {/* bottom right side of profile summary */}
               <div className="flex flex-row text-lg h-[40%] border-t border-gray-300 items-center justify-between  w-full p-4">
                  <div className="text-left">
                     {thisUser[0].amount_of_posts}
                     <br></br>
                     <div className="text-sm text-gray-500">Posts</div>
                  </div>
                  <div className="text-left">
                     {thisUser[0].amount_of_likes}
                     <br></br>
                     <div className="text-sm  text-gray-500">Likes</div>
                  </div>
                  <div className="text-left">
                     {thisUser[0].amount_of_friends}
                     <br></br>
                     <div className="text-sm  text-gray-500">Friends</div>
                  </div>
                  <div className="text-left">
                     {thisUser[0].amount_of_followers}
                     <br></br>
                     <div className="text-sm  text-gray-500">Followers</div>
                  </div>
                  <div className="text-left">
                     {thisUser[0].amount_of_following}
                     <br></br>
                     <div className="text-sm  text-gray-500">Following</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProfileSummary
