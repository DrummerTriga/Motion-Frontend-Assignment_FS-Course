import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import InputFieldIcon from '../../elements/Login/InputFieldIcon'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { motion_api_no_auth } from '../../axios/axiosBase'

const SignupForm = () => {
   const [email, setEmail] = useState('')

   const [loginError, setLoginError] = useState(null)
   const navigate = useNavigate()

   // =================================================================
   // FETCHING

   async function handleSignupSubmit(event) {
      event.preventDefault()
      try {
         const response = await motion_api_no_auth.post('auth/registration/', {
            email,
         })
         localStorage.setItem('email', email)
         navigate('/auth/signup-code')
      } catch (error) {
         setEmail('')
         setLoginError(error.response.data.email[0])
      }
   }

   // =================================================================

   return (
      <div className="flex flex-col items-center h-full w-[60%]">
         <div className="flex w-full justify-end items-center gap-6 pr-10 pt-10">
            <Link to="/auth/login">
               <h2>Already have an account?</h2>
            </Link>
            <Link to="/auth/login">
               <SecondaryButton label={'SIGN IN'} />
            </Link>
         </div>
         <form
            className="flex flex-col justify-between items-center h-[467px] w- mt-auto mb-auto"
            onSubmit={(e) => handleSignupSubmit(e)}
         >
            <div className="flex flex-col items-center">
               <h1 className="text-[40px] mb-10">Sign Up</h1>
               <InputFieldIcon
                  icon="/email.png"
                  placeholder="Email"
                  type="email"
                  id="email"
                  value={email}
                  handleInputChange={(e) => {
                     setEmail(e.target.value)
                  }}
               />
               {
                  <div>
                     {loginError && (
                        <p className="text-red-500">{loginError}</p>
                     )}
                  </div>
               }
            </div>
            <Link to="/auth/signup-verification">
               Got a verification code? Go straight to registration
            </Link>
            <PrimaryButton
               label="SIGN UP"
               onClickHandler={(e) => handleSignupSubmit(e)}
            />
               <img src='/progressDotes-1.png' className='h-15 flex align-top'/>
         </form>
      </div>
   )
}

export default SignupForm
