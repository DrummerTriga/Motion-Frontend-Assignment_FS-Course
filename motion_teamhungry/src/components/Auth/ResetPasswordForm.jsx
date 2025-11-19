import InputFieldIcon from '../../elements/Login/InputFieldIcon'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import { useState } from 'react'
import { motion_api_no_auth } from '../../axios/axiosBase'
import { Link } from 'react-router'

const ResetPasswordForm = () => {
   const [code, setCode] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [errorMessage, setErrorMessage] = useState({})

   const handleCodeChange = (event) => {
      setCode(event.target.value)
   }
   const handleEmailChange = (event) => {
      setEmail(event.target.value)
   }
   const handlePasswordChange = (event) => {
      setPassword(event.target.value)
   }
   const handleConfirmPasswordChange = (event) => {
      setConfirmPassword(event.target.value)
   }

   const handleResetPasswordSubmit = async (event) => {
      event.preventDefault()
      console.log(errorMessage)
      try {
         // console.log('Sending payload:', { email })
         const response = await motion_api_no_auth.patch(
            'auth/password-reset/validation',
            {
               code: code,
               email: email,
               password: password,
               password_repeat: confirmPassword,
            }
         )
         localStorage.setItem('code', code)
         localStorage.setItem('password', password)
         localStorage.setItem('confirmedpassword', confirmPassword)
         navigate('/auth/password-code')
         // navigate('/auth/login')
      } catch (error) {
         // console.log(error)
         // Error is splitted in many options depending on how it fails (code or email for ex.)
         // need correction for all scenarios - TODO
         setErrorMessage(error.response.data)
      }
   }

   return (
      <div className="flex flex-col items-center h-full w-[60%]">
         <div className="flex w-full justify-end items-center gap-6 pr-10 pt-10">
            <h2>Don't have an account?</h2>
            <Link to="/auth/signup-email">
               <SecondaryButton label="SIGN UP" />
            </Link>
         </div>
         <form
            onSubmit={(event) => handleResetPasswordSubmit(event)}
            className="flex flex-col justify-between items-center h-[467px] w- mt-auto mb-auto"
         >
            <div className="flex flex-col items-center mb-10">
               <h1 className="text-[40px] mb-10">Reset Password</h1>
               {errorMessage.code ? (
                  <div>
                     <InputFieldIcon
                        icon="/password.svg"
                        type="text"
                        placeholder={'Code'}
                        handleInputChange={(event) => handleCodeChange(event)}
                        value={code}
                     />
                     <div className="h-10">
                        <p className="text-red-500">{errorMessage.code[0]}</p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputFieldIcon
                        icon="/password.svg"
                        type="text"
                        placeholder={'Code'}
                        handleInputChange={(event) => handleCodeChange(event)}
                        value={code}
                        className={`mb-10`}
                     />
                  </div>
               )}
               {errorMessage.code ? (
                  <div>
                     <InputFieldIcon
                        icon="/email.png"
                        type="email"
                        placeholder={'Email'}
                        handleInputChange={(event) => handleEmailChange(event)}
                        value={email}
                     />
                     <div className="h-10">
                        <p className="text-red-500">{errorMessage.email[0]}</p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputFieldIcon
                        icon="/email.png"
                        type="email"
                        placeholder={'Email'}
                        handleInputChange={(event) => handleEmailChange(event)}
                        value={email}
                        className={`mb-10`}
                     />
                  </div>
               )}
               {errorMessage.code ? (
                  <div>
                     <InputFieldIcon
                        icon="/password.svg"
                        type="password"
                        placeholder={'Password'}
                        handleInputChange={(event) =>
                           handlePasswordChange(event)
                        }
                        value={password}
                     />
                     <div className="h-10">
                        <p className="text-red-500">
                           {errorMessage.password[0]}
                        </p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputFieldIcon
                        icon="/password.svg"
                        type="password"
                        placeholder={'Password'}
                        handleInputChange={(event) =>
                           handlePasswordChange(event)
                        }
                        value={password}
                        className={`mb-10`}
                     />
                  </div>
               )}
               {errorMessage.code ? (
                  <div>
                     <InputFieldIcon
                        icon="/password.svg"
                        type="password"
                        placeholder={'Confirm Password'}
                        handleInputChange={(event) =>
                           handleConfirmPasswordChange(event)
                        }
                        value={confirmPassword}
                     />
                     <div className="h-10">
                        <p className="text-red-500">
                           {errorMessage.password_repeat[0]}
                        </p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputFieldIcon
                        icon="/password.svg"
                        type="password"
                        placeholder={'Confirm Password'}
                        handleInputChange={(event) =>
                           handleConfirmPasswordChange(event)
                        }
                        value={confirmPassword}
                        className={`mb-10`}
                     />
                  </div>
               )}
            </div>
            <PrimaryButton
               label="COMPLETE"
               onClickHandler={(event) => handleResetPasswordSubmit(event)}
            />
         </form>
      </div>
   )
}

export default ResetPasswordForm
