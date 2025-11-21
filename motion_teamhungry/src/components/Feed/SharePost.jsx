import { useState } from 'react'
import { motion_api_auth } from '../../axios/axiosBase'
import sendButton from '../../../public/send_button.svg'
import { useNavigate } from 'react-router'

const SharePost = ({
   originalPostId,
   originalPostData,
   closeShare,
   shared,
}) => {
   const [message, setMessage] = useState('')
   const [error, setError] = useState(null)

   const navigate = useNavigate()

   const handleShare = async () => {
      try {
         const response = await motion_api_auth.post('social/posts/', {
            content: message,
            shared: originalPostId,
         })
         console.log(response)
         closeShare()
         // window.location.reload()
      } catch (error) {
         console.log(error)
         setError('Error')
      }
   }

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

   return (
      <div className="flex items-center justify-center fixed w-full h-full bg-[rgba(25,25,25,0.87)] top-0 z-20 left-0">
         <div
            onClick={closeShare}
            className="absolute top-6 right-8 cursor-pointer"
         >
            {crossIconSVG}
         </div>
         <div className="flex flex-col justify-between relative bg-white w-[30%] h-[65%] rounded-sm p-6">
            <div className="flex flex-col">
               <h2 className="text-xl mb-4">Share this Post</h2>
               <div className="flex flex-col items-center w-full gap-4">
                  <textarea
                     className="w-full flex-1 border-b border-gray-200 focus:outline-0 resize-none p-4"
                     placeholder="Add a message..."
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                  />
                  <div className=" flex flex-col bg-gray-200 w-[75%] p-4 rounded mb-4">
                     <p className="font-semibold">
                        {originalPostData.author_first_name}{' '}
                        {originalPostData.author_last_name}
                     </p>
                     <p className="italic">{originalPostData.content}</p>

                     {originalPostData.images.length > 0 && (
                        <img
                           src={originalPostData.images[0].image}
                           className="rounded mt-3 h-auto w-full object-contain"
                        />
                     )}
                  </div>
               </div>

               <div className="flex justify-end gap-3 mt-4 ">
                  <div
                     onClick={async () => {
                        await handleShare()
                        navigate(0)
                     }}
                     className="flex justify-center items-center bg-linear-to-r from-purple-400 to-indigo-400 border-0 rounded-4xl h-[60px] w-[60px] cursor-pointer"
                  >
                     <img src={sendButton} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SharePost
