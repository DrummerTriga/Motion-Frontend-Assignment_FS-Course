import InputFieldIcon from '../../elements/Login/InputFieldIcon'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'
import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import { useState } from 'react'
import { motion_api_no_auth } from '../../axios/axiosBase'
import { Link, useNavigate } from 'react-router'

const ResetPasswordForm = () => {
   const [code, setCode] = useState('')
   const [email, setEmail] = useState(localStorage.getItem('email'))
   const [password, setPassword] = useState('')
   const [passwordRepeat, setpasswordRepeat] = useState('')

   const [passwordsNotMatching, setPasswordNotMatching] = useState(null)
   const [loginError, setLoginError] = useState(null)
   const navigate = useNavigate()

   const handleResetPasswordSubmit = (event) => {
      setPasswordNotMatching(null)
      setLoginError(null)
      console.log('confimation was clicked', password, passwordRepeat)
      if (password !== passwordRepeat) {
         setPasswordNotMatching(true)
         setPassword('')
         setpasswordRepeat('')
         return
      } else {
         fetchReset(event)
      }
   }

   // FETCHING =============================

   const fetchReset = async (event) => {
      event.preventDefault()
      try {
         const response = await motion_api_no_auth.patch(
            'auth/password-reset/validation',
            {
               code: code,
               email: email,
               password: password,
               password_repeat: passwordRepeat,
            }
         )
         localStorage.clear('email')
         navigate('/auth/login')
      } catch (error) {
         console.log(error)
         if (error.response) {
            console.log('error response is!!!', error.response.data)
            setLoginError(error.response.data)
         }
      }
   }

   // =========================================================

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
            className="flex flex-col justify-between items-center h-[467px] w- mt-auto mb-auto"
            onSubmit={handleResetPasswordSubmit}
         >
            <div className="flex flex-col items-center mb-10">
               <h1 className="text-[40px] mb-10">Reset Password</h1>

               {loginError?.code ? (
                  <div>
                     <InputFieldIcon
                        icon="/password.svg"
                        type="text"
                        placeholder={'Code'}
                        handleInputChange={(e) => setCode(e.target.value)}
                        value={code}
                     />
                     <div className="h-10">
                        <p className="text-red-500">{loginError.code[0]}</p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputFieldIcon
                        icon="/password.svg"
                        type="text"
                        placeholder={'Code'}
                        handleInputChange={(e) => setCode(e.target.value)}
                        value={code}
                        className={`mb-10`}
                     />
                  </div>
               )}

               {loginError?.email ? (
                  <div>
                     <InputFieldIcon
                        icon="/email.png"
                        type="email"
                        placeholder={'Email'}
                        handleInputChange={(e) => setEmail(e.target.value)}
                        value={email}
                     />
                     <div className="h-10">
                        <p className="text-red-500">{loginError.email[0]}</p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputFieldIcon
                        icon="/email.png"
                        type="email"
                        placeholder={'Email'}
                        handleInputChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className={`mb-10`}
                     />
                  </div>
               )}
               {loginError?.password ? (
                  <div>
                     <InputFieldIcon
                        icon="/password.svg"
                        type="password"
                        placeholder={'Password'}
                        handleInputChange={(e) => setPassword(e.target.value)}
                        value={password}
                     />
                     <div className="h-10">
                        <p className="text-red-500">{loginError.password[0]}</p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputFieldIcon
                        icon="/password.svg"
                        type="password"
                        placeholder={'Password'}
                        handleInputChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className={`mb-10`}
                     />
                  </div>
               )}
               {loginError?.password_repeat ? (
                  <div>
                     <InputFieldIcon
                        icon="/password.svg"
                        type="password"
                        placeholder={'Confirm Password'}
                        handleInputChange={(e) =>
                           setpasswordRepeat(e.target.value)
                        }
                        value={passwordRepeat}
                     />
                     <div className="h-10">
                        <p className="text-red-500">
                           {loginError.password_repeat[0]}
                        </p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputFieldIcon
                        icon="/password.svg"
                        type="password"
                        placeholder={'Confirm Password'}
                        handleInputChange={(e) =>
                           setpasswordRepeat(e.target.value)
                        }
                        value={passwordRepeat}
                        className={`mb-10`}
                     />
                  </div>
               )}
               {passwordsNotMatching && (
                  <p className="text-red-500">
                     Passwords don't match. Re-enter.
                  </p>
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
