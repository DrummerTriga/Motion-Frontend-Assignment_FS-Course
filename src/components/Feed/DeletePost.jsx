import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'

const DeletePost = ({ showDeletePostModal }) => {
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
   return (
      <div className="flex items-center justify-center absolute w-full h-full bg-[rgba(25,25,25,0.87)] top-0 z-30 left-0">
         <div className="popupwrapper bg-white w-200 p-20 flex flex-col items-center justify-center gap-8 rounded-2xl">
            <div className="icon bg-neutral-200 p-5 rounded-4xl">
               {deleteSVG}
            </div>
            <div className="headline text-3xl">
               Are you sure you want to do this?
            </div>
            <div className="buttons flex gap-4 items-center">
               <SecondaryButton
                  className="py-4 px-15"
                  label={'NO'}
                  onClickHandler={() => showDeletePostModal(false)}
               />
               <PrimaryButton
                  label={'Yes'}
                  onClickHandler={() => console.log('No im deleting stuff')}
               />
            </div>
         </div>
      </div>
   )
}

export default DeletePost
