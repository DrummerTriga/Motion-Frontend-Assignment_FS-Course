import jenniferpic from '../../assets/users/jennifer.png'
import sendButton from '../../../public/send_button.svg'
import { useState } from 'react'
import { motion_api_auth, motion_api_no_auth } from '../../axios/axiosBase'

const CreatePost = ({ userFirstName }) => {
   const [createPost, setCreatePost] = useState(false)
   const [selectedFile, setSelectedFile] = useState(null)
   const [previewURL, setPreviewURL] = useState(null)
   const [postMessage, setPostMessage] = useState('')
   // const [errorMessage, setErrorMessage] = useState({})

   const handleFileChange = (event) => {
      const file = event.target.files[0]
      setSelectedFile(file)

      if (file) {
         const url = URL.createObjectURL(file)
         setPreviewURL(url)
      }
   }

   const handlePostSubmit = async (event) => {
      event.preventDefault()
      // console.log(errorMessage)
      try {
         const response = await motion_api_auth.post('social/posts', {
            content: postMessage,
         })
      } catch (error) {
         console.log(error.response.data.detail)
         // setErrorMessage(error.response.data)
      }
   }

   const uploadPhotoSVG = (
      <svg
         fill="none"
         height="35"
         viewBox="0 0 512 512"
         width="35"
         xmlns="http://www.w3.org/2000/svg"
      >
         <clipPath id="clip0_8_547">
            <path d="M0 0h512v512H0z" />
         </clipPath>
         <g clipPath="url(#clip0_8_547)">
            <path
               d="m469.331 313.651v29.515c0 4.898-.213 9.839-.641 14.736-5.985 67.394-52.799 111.432-120.347 111.432h-184.69c-34.201 0-63.059-11.101-83.794-31.227-8.123-7.464-14.963-16.233-20.307-26.286 7.054-8.576 14.963-17.965 22.659-27.376 13.039-15.613 25.652-31.034 33.561-41.065 11.757-14.544 42.752-52.828 85.718-34.862 8.764 3.635 16.46 8.769 23.514 13.26 17.314 11.55 24.582 14.972 36.767 8.341 13.466-7.272 22.231-21.601 31.422-36.573 4.917-7.935 9.833-15.613 15.177-22.671 23.3-30.371 59.212-38.499 89.139-20.533 14.963 8.983 27.789 20.319 39.759 31.847 2.565 2.566 5.13 4.941 7.482 7.293 3.206 3.208 13.894 13.902 24.582 24.169"
               fill="#a4a4a4"
            />
            <path
               d="m348.559 42.667h-184.903c-72.465 0-120.989 50.689-120.989 126.168v174.333c0 26.286 5.985 49.62 16.887 68.656 7.054-8.577 14.963-17.966 22.659-27.398 13.039-15.592 25.651-31.013 33.56-41.044 11.757-14.544 42.752-52.828 85.718-34.862 8.765 3.636 16.46 8.769 23.514 13.26 17.315 11.55 24.583 14.972 36.767 8.32 13.467-7.25 22.231-21.58 31.423-36.573 4.916-7.914 9.833-15.592 15.177-22.65 23.3-30.371 59.212-38.499 89.138-20.533 14.963 8.983 27.789 20.319 39.76 31.847 2.565 2.567 5.13 4.941 7.481 7.293 3.207 3.187 13.895 13.881 24.583 24.169v-144.818c0-75.478-48.524-126.168-120.775-126.168"
               fill="#dbdbdb"
            />
            <path
               d="m244.361 187.663c0 30.05-25.031 55.074-55.065 55.074-30.012 0-55.043-25.024-55.043-55.074 0-30.029 25.031-55.074 55.043-55.074 30.034 0 55.065 25.045 55.065 55.074"
               fill="#a4a4a4"
            />
         </g>
      </svg>
   )

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
      <div
         onClick={() => setCreatePost(true)}
         className="flex justify-between items-center bg-white w-[580px] h-[120px] p-5 rounded-lg"
      >
         <div className="flex gap-8 w-[80%]">
            <img className="h-16" src={jenniferpic} />
            <p className="flex items-center w-full">
               {`What's on your mind, ${userFirstName}?`}{' '}
            </p>
         </div>
         <div className="flex justify-center items-center bg-linear-to-r from-purple-400 to-indigo-400 border-0 rounded-4xl h-[60px] w-[60px]">
            <img src={sendButton} />
         </div>
         {createPost && (
            <div className="flex items-center justify-center absolute w-full h-full bg-[rgba(25,25,25,0.87)] top-0 z-20 left-0">
               <div
                  onClick={(event) => {
                     event.stopPropagation()
                     setCreatePost(false)
                     setPreviewURL(null)
                     setSelectedFile(null)
                  }}
                  className="relative bottom-54 left-147 cursor-pointer"
               >
                  {crossIconSVG}
               </div>
               <div className="flex flex-col justify-between relative bg-white w-[560px] h-[406px] rounded-sm">
                  <div className="flex gap-10 p-10 pb-2 h-[70%]">
                     <img className="h-16" src={jenniferpic} />
                     <div className="flex flex-col justify-between w-full h-full">
                        <textarea
                           className="w-full h-full focus:outline-0 resize-none"
                           placeholder={`What's on your mind, ${userFirstName}?`}
                           onChange={(event) =>
                              setPostMessage(event.target.value)
                           }
                        />
                        <div>
                           {previewURL && (
                              <div className="relative inline-block">
                                 <img
                                    className="h-22 w-20 border border-white rounded-sm"
                                    src={previewURL}
                                 />

                                 <div
                                    onClick={() => {
                                       ;(setPreviewURL(null),
                                          setSelectedFile(null))
                                    }}
                                    className="absolute top-1 right-1 bg-white text-gray-400 font-bold w-6 h-6 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-200"
                                 >
                                    X
                                 </div>
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-200 p-10 h-[30%]">
                     <div className="h-10 w-10">
                        <input
                           type="file"
                           id="fileUpload"
                           className="hidden"
                           onChange={handleFileChange}
                        />
                        <label
                           htmlFor="fileUpload"
                           className="flex items-center py-2 rounded cursor-pointer"
                        >
                           {uploadPhotoSVG}
                        </label>
                     </div>
                     <div
                        onClick={(event) => handlePostSubmit(event)}
                        className="flex justify-center items-center bg-linear-to-r from-purple-400 to-indigo-400 border-0 rounded-4xl h-[60px] w-[60px]"
                     >
                        <img src={sendButton} />
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

export default CreatePost
