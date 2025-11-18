import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import InputFieldIcon from '../../elements/Login/InputFieldIcon'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { motion_api_no_auth } from '../../axios/axiosBase'

const SignupForm = () => {
   const navigate = useNavigate()

   const [email, setEmail] = useState('')
   const [loginError, setLoginError] = useState(null)

   // =================================================================
   // FETCHING

   async function handleSignupSubmit(event) {
      console.log('checkpoint 1', email)
      event.preventDefault()
      try {
         const response = await motion_api_no_auth.post('auth/registration/', {
            email,
         })
         console.log('checkpoint 2 response is')
         localStorage.setItem('email', email)
         navigate('/auth/signup-code')
      } catch (error) {
         // todo - RH - add more cases to handle errors
         // todo - RH - improve error annoucement --> email is the sentence "this email already exists"??
         console.log(error)
         setEmail('')
         setLoginError(`${error}. Provide other email`)
      }
   }

   // =================================================================

   return (
      <div className="flex flex-col items-center h-full w-[60%]">
         <div className="flex w-full justify-end items-center gap-6 pr-10 pt-10">
            <h2>Already have an account?</h2>
            <Link to="/auth/login">
               <SecondaryButton label="SIGN IN" />
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
            <PrimaryButton
               label="SIGN UP"
               onClickHandler={(e) => handleSignupSubmit(e)}
            />
         </form>
         {/* todo - gs - the "3 progress dots" still need to be added */}
      </div>
   )
}

export default SignupForm
