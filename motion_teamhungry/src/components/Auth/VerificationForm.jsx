import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import InputField from '../../elements/Login/InputField'

const VerificationForm = () => {
   return (
      <div className="flex flex-col items-center h-full w-[60%]">
         <form className="flex flex-col justify-between items-center h-[467px] w- mt-auto mb-auto">
            <h1 className="text-[40px] mb-10">Verification</h1>
            <InputField
               wrapperClassName={'w-full mb-10 mt-8'}
               type="text"
               placeholder={'Validation code'}
            />
            <div className="grid grid-cols-2 gap-15 items-center mb-20">
               <InputField type="email" placeholder={'Email'} />
               <InputField type="text" placeholder={'Username'} />
               <InputField type="text" placeholder={'First name'} />
               <InputField type="text" placeholder={'Last name'} />
               <InputField type="password" placeholder={'Password'} />
               <InputField type="password" placeholder={'Password repeat'} />
            </div>
            <PrimaryButton
               label="COMPLETE"
               onClickHandler={() => console.log('Sign Up was clicked')}
            />
         </form>
         {/* the dots still need to be added */}
      </div>
   )
}

export default VerificationForm
