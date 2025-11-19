import { useEffect, useState } from 'react'
import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import { Link } from 'react-router'

const ForgotPasswordCodeForm = () => {
   const [email, setEmail] = useState('')

   useEffect(() => {
      const storedEmail = localStorage.getItem('email')
      storedEmail && setEmail(storedEmail)
   }, [])

   return (
      <div className="flex flex-col items-center h-full w-[60%]">
         <div className="flex flex-col justify-between items-center h-[467px] w- mt-auto mb-auto">
            <div className="flex flex-col w-[390px] items-center">
               <h1 className="text-[40px] mb-10">Code sent!</h1>
               <div className="flex justify-center items-center border-4 border-purple-400 rounded-full h-20 w-20">
                  <img className="fill-purple-500" src="/check.svg" />
               </div>
               <p className="text-center mt-15  text-[16px] text-gray-900 opacity-90">
                  We’ve sent a reset code to your email
                  <br />
                  {`${email}`} {/*Login to be added here*/}
               </p>
            </div>
            <Link to="/auth/password-reset">
               <PrimaryButton
                  label="CONTINUE"
                  onClickHandler={() => console.log('CONTINUE was clicked')}
               />
            </Link>
         </div>
         {/* the dots still need to be added */}
      </div>
   )
}

export default ForgotPasswordCodeForm
