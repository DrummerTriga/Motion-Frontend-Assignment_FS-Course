import DeletePost from './DeletePost'

const DeletePostDropdown = ({
   hideEditMenu,
   hideDetailPost,
   showDeletePostModal,
}) => {
   const editSVG = (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 492.49284 492"
         class="w-6 h-6 text-neutral-400"
         fill="currentColor"
      >
         <path d="M304.140625 82.472656 33.164062 353.46875c-1.363281 1.367188-2.347656 3.09375-2.816406 4.949219L.3125 479.0c-.898438 3.628906.167969 7.488282 2.816406 10.136719 2.003906 2.003906 4.734375 3.113281 7.527344 3.113281.855469 0 1.730469-.105468 2.582031-.320312l120.554688-30.039063c1.878906-.46875 3.585937-1.449219 4.949219-2.8125l271-270.976562z" />
         <path d="M476.875 45.523438 446.710938 15.359375c-20.160157-20.160156-55.296876-20.140625-75.433594 0l-36.949219 36.949219 105.597656 105.597656 36.949219-36.949219c10.070312-10.066406 15.617188-23.464843 15.617188-37.714843s-5.546876-27.648438-15.617188-37.71875z" />
      </svg>
   )

   const deleteSVG = (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 384 384"
         class="w-6 h-6 text-neutral-400"
         fill="currentColor"
      >
         <path d="M64 341.333C64 364.907 83.093 384 106.667 384h170.667C300.907 384 320 364.907 320 341.333v-256H64v256z" />
         <path d="M266.667 21.333 245.333 0h-106.666L117.333 21.333H42.667V64h298.666V21.333z" />
      </svg>
   )

   const onClickHandlerEdit = () => {
      console.log('I react on edit click')
   }

   const onClickHandlerDelete = () => {
      hideEditMenu(false)
      hideDetailPost(false)
      showDeletePostModal(true)
   }

   return (
      <div className="dropdownwrapper w-[230px] bg-white rounded-lg absolute top-7 mt-2 shadow-[0_8px_24px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.08)]">
         <button
            onClick={onClickHandlerEdit}
            className="flex w-full items-center justify-start text-xl pl-4 py-3 gap-2 hover:bg-neutral-200 cursor-pointer"
         >
            {editSVG}
            <p>Edit</p>
         </button>

         <button
            className="flex w-full items-center justify-start text-xl pl-4 rounded-b-lg py-3 gap-2 hover:bg-neutral-200 cursor-pointer"
            onClick={onClickHandlerDelete}
         >
            {deleteSVG}
            <p>Delete</p>
         </button>
      </div>
   )
}

export default DeletePostDropdown
