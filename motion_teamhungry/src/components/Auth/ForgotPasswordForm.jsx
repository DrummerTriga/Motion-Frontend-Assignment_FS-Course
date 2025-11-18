import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import InputFieldIcon from '../../elements/Login/InputFieldIcon'

const ForgotPasswordForm = () => {
   return (
      <div className="flex flex-col items-center h-full w-[60%]">
         <div className="flex w-full justify-end items-center gap-6 pr-10 pt-10">
            <h2>Don't have an account?</h2>
            <SecondaryButton label={'SIGN UP'} />
         </div>
         <form className="flex flex-col justify-between items-center h-[467px] w- mt-auto mb-auto">
            <div className="flex flex-col items-center">
               <h1 className="text-[40px] mb-15">Forgot Password</h1>
               <InputFieldIcon
                  icon="/email.png"
                  type="email"
                  placeholder={'Email'}
               />
            </div>
            <PrimaryButton
               label="Send Code"
               onClickHandler={() => console.log('Sign Code was clicked')}
            />
         </form>
         {/* the dots still need to be added */}
      </div>
   )
}

export default ForgotPasswordForm
