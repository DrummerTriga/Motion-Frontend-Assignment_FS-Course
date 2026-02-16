import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'

const DeleteAccountPopup = ({ onNotConfirmDelete, onConfirmDelete }) => {
   return (
      <div className="flex items-center justify-center absolute w-full h-full bg-[rgba(25,25,25,0.87)] top-0 z-30 left-0">
<div className="popupwrapper bg-white w-200 p-10 flex flex-col items-center justify-center gap-4 rounded-xl">            <div className="icon bg-neutral-200 p-5 rounded-4xl"></div>
            <div className="headline text-xl">
               Are you sure you want to delete your account? This action cannot
               be undone.
            </div>
            <div className="buttons flex gap-4 items-center">
               <button
                  onClick={onNotConfirmDelete}
                  className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white text-xl rounded-4xl inline-flex w-fit py-4 px-15 hover:cursor-pointer whitespace-nowrap"
               >
                  <p>No, keep my profile</p>
               </button>

               {/* <SecondaryButton
                  className="py-4 px-20 text-[16px]"
                  label={'NO'}
                  onClick={onNotConfirmDelete}
               /> */}

               
               <button
                  onClick={onConfirmDelete}
                  className="flex w-full items-center justify-start text-xl rounded-4xl inline-flex w-fit py-4 px-15 hover:bg-neutral-200 cursor-pointer whitespace-nowrap"
               >
                  <p>Yes, Confirm Delete</p>
               </button> 
               {/* <PrimaryButton
                  className="text-[16px] !px-12"
                  label={'Yes, Confirm Delete'}
                  onClick={onConfirmDelete}
               /> */}
            </div>
         </div>
      </div>
   )
}

export default DeleteAccountPopup
