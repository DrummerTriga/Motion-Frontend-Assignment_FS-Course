import ViewPost from './ViewPost'
import { useState } from 'react'
import { Link } from 'react-router'
import { likingPost } from '../../utils/likingPost'

const Post = ({
   id,
   author_id,
   author_first_name,
   author_last_name,
   author_avatar,
   created,
   content,
   images,
   shared_post,
   likes,
   comments,
   showDeletePostModal,
}) => {
   //formats the posted date to show Just now, hours or dates
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
         className="w-6 h-6"
         fill="currentColor"
      >
         <path d="m11.9 6.71v-3.68c0-.41-.24-.77-.62-.93-.37-.15-.8-.07-1.09.22l-7.87 7.87c-.39.39-.39 1.03 0 1.42l7.87 7.88c.29.29.72.37 1.09.22.38-.16.62-.52.62-.92v-3.9c3.09-.73 6.14.05 8.86 2.28 3.08 2.5 5.58 6.69 7.25 12.1.14.42.53.7.96.7.05 0 .1 0 .15-.01.49-.08.85-.5.85-.99 0-13.5-6.73-21.75-18.07-22.26z"></path>
      </svg>
   )
   const [viewDetailPost, setViewDetailPost] = useState()

   const viewPostFunction = (id) => {
      setViewDetailPost(
         <ViewPost
            id={id}
            setDetailPostToggle={setViewDetailPost}
            showDeletePostModal={showDeletePostModal}
         />
      )
   }
   return (
      <div className="postwrapper bg-white  w-[580px] rounded-lg">
         <div className="PostHeader flex gap-4 px-5 py-5 items-center">
            <div className="pic">
               {author_avatar ? (
                  <Link to={`/profile/?id=${author_id}`}>
                     <img className="rounded-full h-10" src={author_avatar} />
                  </Link>
               ) : (
                  <Link to={`/profile/?id=${author_id}`}>
                     <img className="h-8" src="/noAvatarReplace.png" />
                  </Link>
               )}
            </div>

            <div className="Name und Zeit">
               <Link to={`/profile/?id=${author_id}`}>
                  {' '}
                  <p className="text-lg">
                     {author_first_name} {author_last_name}
                  </p>
               </Link>
               <p className="text-neutral-400 text-sm">
                  {formatTimeStamp(created)}
               </p>
            </div>

            <div className="menu ml-auto text-neutral-400">
               <button className="hover:cursor-pointer">{dotMenuSvg}</button>
            </div>
         </div>
         <div className="postbody px-5 py-5 ">
            <p>{content}</p>
            {images.length === 1 && (
               <img
                  className="mt-5 rounded-sm hover:cursor-pointer"
                  src={images[0].image}
                  onClick={() => {
                     viewPostFunction(id)
                  }}
               />
            )}
            {images.length > 1 && images.length <= 4 && (
               <div className="grid grid-cols-2 gap-2 grid-rows-2">
                  {images.slice(0, 4).map((src, index) => (
                     <div
                        key={index}
                        className="h-55 w-full overflow-hidden rounded-sm hover:cursor-pointer"
                     >
                        <img
                           onClick={() => {
                              viewPostFunction(id)
                           }}
                           className="rounded-sm h-full w-full object-cover"
                           src={src.image}
                           alt=""
                        />
                     </div>
                  ))}
               </div>
            )}
            {images.length > 4 && (
               <div
                  onClick={() => {
                     viewPostFunction(id)
                  }}
                  className="grid grid-cols-2 gap-2 grid-rows-2 relative"
               >
                  {images.slice(0, 3).map((src, index) => (
                     <div
                        key={index}
                        className="h-55 w-full overflow-hidden rounded-sm hover:cursor-pointer"
                     >
                        <img
                           className="rounded-sm h-full w-full object-cover"
                           key={index}
                           src={src.image}
                           alt=""
                        />{' '}
                     </div>
                  ))}
                  <img
                     className="h-55 w-full overflow-hidden rounded-sm brightness-20 h-full w-full object-cover"
                     src={images[3].image}
                     alt=""
                  />
                  <p className="absolute top-80 left-94 text-5xl text-white">
                     +{images.length - 4}
                  </p>
               </div>
            )}
         </div>

         <div className="postfooter flex gap-4 px-5 py-5 ">
            <div className="interaction flex gap-4 items-center justify-center">
               <button
                  className="text-neutral-400 hover:cursor-pointer hover:text-red-600 hover:scale-115"
                  onClick={() => likingPost(id)}
               >
                  {heartSVG}
               </button>
               <p>Like</p>
               <button className="text-neutral-400 hover:cursor-pointer hover:rotate-350 hover:scale-115 hover:text-blue-700">
                  {shareSVG}
               </button>
               <p>Share</p>
            </div>

            <div className="likes ml-auto text-neutral-400">
               <p>{likes} likes</p>
            </div>
         </div>
         <div>{viewDetailPost}</div>
      </div>
   )
}

export default Post
