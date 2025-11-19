import { useState } from 'react'
import DeletePostDropdown from './DeletePostDropdown'
const ViewPost = ({ id, setDetailPostToggle, showDeletePostModal }) => {
   const crossIconSVG = (
      <svg
         height="25"
         viewBox="0 0 329.26933 329"
         width="25"
         xmlns="http://www.w3.org/2000/svg"
         id="fi_1828778"
      >
         <path
            d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
            fill="grey"
         ></path>
      </svg>
   )
   const [showEditMenu, setShowEditMenu] = useState(false)

   const formatTimeStamp = (timestamp) => {
      const now = new Date()
      const postDate = new Date(timestamp)
      const diffMilliseconds = now - postDate
      const diffHours = Math.floor(diffMilliseconds / (1000 * 60 * 60))

      if (diffHours < 1) {
         return 'Just now'
      } else if (diffHours < 24) {
         return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`
      } else {
         return postDate.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
         })
      }
   }

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
   const heartSVG = (
      <svg
         viewBox="0 0 512 512"
         className="w-6 h-6"
         fill="currentColor"
         aria-hidden="true"
      >
         <path
            d="M376,30c-27.783,0-53.255,8.804-75.707,26.168c-21.525,16.647-35.856,37.85-44.293,53.268
      c-8.437-15.419-22.768-36.621-44.293-53.268C189.255,38.804,163.783,30,136,30C58.468,30,0,93.417,0,177.514
      c0,90.854,72.943,153.015,183.369,247.118c18.752,15.981,40.007,34.095,62.099,53.414C248.38,480.596,252.12,482,256,482
      s7.62-1.404,10.532-3.953c22.094-19.322,43.348-37.435,62.111-53.425C439.057,330.529,512,268.368,512,177.514
      C512,93.417,453.532,30,376,30z"
         />
      </svg>
   )

   const shareSVG = (
      <svg
         id="fi_18472875"
         viewBox="0 0 32 32"
         xmlns="http://www.w3.org/2000/svg"
         class="w-6 h-6"
         fill="currentColor"
      >
         <path d="m11.9 6.71v-3.68c0-.41-.24-.77-.62-.93-.37-.15-.8-.07-1.09.22l-7.87 7.87c-.39.39-.39 1.03 0 1.42l7.87 7.88c.29.29.72.37 1.09.22.38-.16.62-.52.62-.92v-3.9c3.09-.73 6.14.05 8.86 2.28 3.08 2.5 5.58 6.69 7.25 12.1.14.42.53.7.96.7.05 0 .1 0 .15-.01.49-.08.85-.5.85-.99 0-13.5-6.73-21.75-18.07-22.26z"></path>
      </svg>
   )

   const [detailPost, setDetailPost] = useState({
      id: 502,
      user: {
         id: 21,
         email: 'marco.stern@example.com',
         first_name: 'Marco',
         last_name: 'Stern',
         username: 'marcost',
         job: 'Software Engineer',
         avatar: 'https://picsum.photos/seed/marco/200',
         banner: 'https://picsum.photos/seed/marco-banner/600/200',
         location: 'Munich, Germany',
         phone_number: '+49 176 99887766',
         about_me: 'Full-stack developer with passion for TypeScript.',
         things_user_likes: [
            { keyword: 'TypeScript' },
            { keyword: 'Gaming' },
            { keyword: 'Hiking' },
         ],
         logged_in_user_is_following: 'true',
         logged_in_user_is_friends: 'true',
         logged_in_user_is_rejected: 'false',
         logged_in_user_received_fr: 'false',
         logged_in_user_sent_fr: 'true',
         amount_of_posts: '34',
         amount_of_likes: '421',
         amount_of_friends: '58',
         amount_of_followers: '120',
         amount_following: '80',
      },

      images: [
         {
            id: 9002,
            image: 'https://picsum.photos/seed/marco-setup/800',
            post: 502,
         },
      ],

      logged_in_user_liked: 'true',
      is_from_logged_in_user: 'false',
      amount_of_likes: '23',

      shared: null,

      content: 'Neue Dev-Setup-Ecke fertig. Was sagt ihr? 👨‍💻🔥',
      created: '2025-01-20T18:30:00Z',
   })

   return (
      <div className="flex items-center justify-center absolute w-full h-full bg-[rgba(25,25,25,0.87)] top-0 z-20 left-0">
         <div
            onClick={() => {
               setDetailPostToggle(false)
            }}
            className="absolute top-50 right-60"
         >
            {/* JTI todo fix problem with smaller screens and the crossIcon */}
            {crossIconSVG}
         </div>
         <div className="grid grid-cols-2 Cardwrapper w-[70%] bg-white">
            <div className="Left">
               <img className="h-full" src={detailPost.images[0].image} />
            </div>
            <div className="Right w-1/3 w-full">
               <div className="postwrapper bg-white rounded-lg h-full flex flex-col">
                  <div className="PostHeader flex gap-4 px-5 py-5 items-center">
                     <div className="pic">
                        <img className="h-10" src={detailPost.user.avatar} />
                     </div>

                     <div className="Name und Zeit">
                        <p className="text-lg">
                           {detailPost.user.first_name}{' '}
                           {detailPost.user.last_name}
                        </p>
                        <p className="text-neutral-400 text-sm">
                           {formatTimeStamp(detailPost.created)}
                        </p>
                     </div>

                     <div className="relative ml-auto text-neutral-400">
                        <button
                           onClick={() =>
                              !showEditMenu
                                 ? setShowEditMenu(true)
                                 : setShowEditMenu(false)
                           }
                           className=" hover:cursor-pointer"
                        >
                           {dotMenuSvg}
                        </button>
                        {showEditMenu && (
                           <DeletePostDropdown hideEditMenu={setShowEditMenu} hideDetailPost={setDetailPostToggle} showDeletePostModal={showDeletePostModal}/>
                        )}
                     </div>
                  </div>
                  <div className="postbody px-5 py-5 flex flex-col h-full">
                     <div>{detailPost.content}</div>
                     <div className=" text-neutral-400 mt-auto self-end">
                        <p>{detailPost.amount_of_likes} likes</p>
                     </div>
                  </div>

                  <div className="postfooter flex gap-4 px-5 py-10 mt-auto border-t-2 border-neutral-200">
                     <div className="interaction flex gap-4 items-center justify-center">
                        <button className="text-neutral-400 hover:cursor-pointer hover:text-red-600 hover:scale-115">
                           {heartSVG}
                        </button>
                        <p>Like</p>
                        <button className="text-neutral-400 hover:cursor-pointer hover:rotate-350 hover:scale-115 hover:text-blue-700">
                           {shareSVG}
                        </button>
                        <p>Share</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ViewPost
