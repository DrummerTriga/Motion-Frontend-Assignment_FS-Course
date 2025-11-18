import InputFieldIcon from '../../elements/Login/InputFieldIcon'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import PrimaryButton from '../../elements/Buttons/PrimaryButton'

const ResetPasswordForm = () => {
   return (
      <div className="flex flex-col items-center h-full w-[60%]">
         <div className="flex w-full justify-end items-center gap-6 pr-10 pt-10">
            <h2>Don't have an account?</h2>
            <SecondaryButton label={'SIGN UP'} />
         </div>
         <form className="flex flex-col justify-between items-center h-[467px] w- mt-auto mb-auto">
            <div className="flex flex-col items-center gap-10">
               <h1 className="text-[40px]">Reset Password</h1>
               <InputFieldIcon
                  icon="/password.svg"
                  type="password"
                  placeholder={'Password'}
               />
               <InputFieldIcon
                  icon="/password.svg"
                  type="password"
                  placeholder={'Confirm Password'}
               />
            </div>
            <PrimaryButton
               label="Complete"
               onClickHandler={() => console.log('Reset Button was clicked')}
            />
         </form>
      </div>
   )
}

export default ResetPasswordForm
