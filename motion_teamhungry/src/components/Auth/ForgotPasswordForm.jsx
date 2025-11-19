import { useState } from 'react'
import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import InputFieldIcon from '../../elements/Login/InputFieldIcon'
import { motion_api_no_auth } from '../../axios/axiosBase'
import { Link, useNavigate } from 'react-router'

const ForgotPasswordForm = () => {
   const [email, setEmail] = useState('')
   const [errorMessage, setErrorMessage] = useState('')
   const navigate = useNavigate()

   const handleEmailChange = (event) => {
      setEmail(event.target.value)
   }

   const handleForgotPasswordSubmit = async (event) => {
      event.preventDefault()
      try {
         const response = await motion_api_no_auth.post(
            'auth/password-reset/',
            {
               email: email,
            }
         )
         localStorage.setItem('email', email)
         navigate('/auth/password-code')
      } catch (error) {
         setErrorMessage('User does not exist. Please Sign Up.')
      }
   }

   return (
      <div className="flex flex-col items-center h-full w-[60%]">
         <div className="flex w-full justify-end items-center gap-6 pr-10 pt-10">
            <Link to="/auth/signup-email">
               <h2>Don't have an account?</h2>
            </Link>
            <Link to="/auth/signup-email">
               <SecondaryButton label="SIGN UP" />
            </Link>
         </div>
         <form
            onSubmit={(event) => handleForgotPasswordSubmit(event)}
            className="flex flex-col justify-between items-center h-[467px] w- mt-auto mb-auto"
         >
            <div className="flex flex-col items-center">
               <h1 className="text-[40px] mb-15">Forgot Password</h1>
               <InputFieldIcon
                  icon="/email.png"
                  type="email"
                  placeholder={'Email'}
                  handleInputChange={(event) => handleEmailChange(event)}
                  value={email}
               />
               {errorMessage && (
                  <p className="text-red-500 mt-4">{errorMessage}</p>
               )}
            </div>
            {/* todo - future improvement - could be handled in the fetch instead  of here */}
            {errorMessage ? (
               <PrimaryButton
                  onClickHandler={(event) => handleForgotPasswordSubmit(event)}
                  label="SEND CODE"
                  type={'submit'}
               />
            ) : (
               <Link to="/auth/password-code">
                  <PrimaryButton
                     onClickHandler={(event) =>
                        handleForgotPasswordSubmit(event)
                     }
                     label="SEND CODE"
                     type={'submit'}
                  />
               </Link>
            )}
         </form>
         <img src="/progressDotes-1.png" className="h-15 flex align-top" />
      </div>
   )
}

export default ForgotPasswordForm
