import { useState } from 'react'
import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import InputField from '../../elements/Login/InputField'
import { motion_api_auth } from '../../axios/axiosBase'
import { useNavigate } from 'react-router'

const VerificationForm = () => {
   const [code, setCode] = useState('')
   const [email, setEmail] = useState(localStorage.getItem('email'))
   const [firstName, setFirstName] = useState('')
   const [lastName, setLastName] = useState('')
   const [username, setUsername] = useState('')
   const [password, setPassword] = useState('')
   const [passwordRepeat, setpasswordRepeat] = useState('')

   const [passwordsNotMatching, setPasswordNotMatching] = useState(null)
   const [loginError, setLoginError] = useState(null)
   const navigate = useNavigate()

   const handleVerificationSubmit = (event) => {
      setPasswordNotMatching(null)
      setLoginError(null)
      console.log('confimation was clicked', username, password, passwordRepeat)
      if (password !== passwordRepeat) {
         setPasswordNotMatching(true)
         setPassword('')
         setpasswordRepeat('')
         return
      } else {
         fetchVerification(event)
      }
   }

   // =================================================================
   // FETCHING
   async function fetchVerification(event) {
      event.preventDefault()
      console.log('checkpoint 1', email, password, code, username)
      try {
         const response = await motion_api_auth.patch(
            'auth/registration/validation/',
            {
               username: username,
               code: code,
               email: email,
               first_name: firstName,
               last_name: lastName,
               password: password,
               password_repeat: passwordRepeat,
            }
         )
         console.log('checkpoint 2 response is', response)
         localStorage.clear('email')
         navigate('/auth/login')
      } catch (error) {
         if (error.response) {
            console.log('error response is!!!', error.response.data)
            setLoginError(error.response.data)
         }
      }
   }

   // =================================================================

   return (
      <div className="flex flex-col items-center h-full w-[60%]">
         <form
            className="flex flex-col justify-between items-center h-[467px] w- mt-auto mb-auto"
            onSubmit={handleVerificationSubmit}
         >
            <h1 className="text-[40px] mb-10">Verification</h1>

            {/* // ==================================================== */}

            {loginError?.code ? (
               <div>
                  <InputField
                     wrapperClassName={'w-full mb-40 mt-8'}
                     type="text"
                     placeholder={'Validation code'}
                     id="code"
                     value={code}
                     handleInputChange={(e) => setCode(e.target.value)}
                  />
                  <div className="h-10">
                     <p className="text-red-500">{loginError.code[0]}</p>
                  </div>
               </div>
            ) : (
               <div>
                  <InputField
                     wrapperClassName={'w-full mb-10 mt-8'}
                     type="text"
                     placeholder={'Validation code'}
                     id="code"
                     value={code}
                     handleInputChange={(e) => setCode(e.target.value)}
                  />
               </div>
            )}

            {/* // ==================================================== */}

            <div className="grid grid-cols-2 gap-15 items-center mb-20">
               {/* // ==================================================== */}

               {loginError?.email ? (
                  <div>
                     <InputField
                        type="email"
                        placeholder={email ? email : 'Email'}
                        id="email"
                        value={email}
                        handleInputChange={(e) => setEmail(e.target.value)}
                     />
                     <div className="h-10">
                        <p className="text-red-500">{loginError.email[0]}</p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputField
                        type="email"
                        placeholder={email ? email : 'Email'}
                        id="email"
                        value={email}
                        handleInputChange={(e) => setEmail(e.target.value)}
                     />
                  </div>
               )}

               {/* // ==================================================== */}

               {loginError?.username ? (
                  <div>
                     <InputField
                        type="text"
                        placeholder={'Username'}
                        id="username"
                        value={username}
                        handleInputChange={(e) => setUsername(e.target.value)}
                     />
                     <div className="h-10">
                        <p className="text-red-500">{loginError.username[0]}</p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputField
                        type="text"
                        placeholder={'Username'}
                        id="username"
                        value={username}
                        handleInputChange={(e) => setUsername(e.target.value)}
                     />
                  </div>
               )}

               {/* // ==================================================== */}

               {loginError?.first_name ? (
                  <div>
                     <InputField
                        type="text"
                        placeholder={'First name'}
                        id="firstName"
                        value={firstName}
                        handleInputChange={(e) => setFirstName(e.target.value)}
                     />
                     <div className="h-10">
                        <p className="text-red-500">
                           {loginError.first_name[0]}
                        </p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputField
                        type="text"
                        placeholder={'First name'}
                        id="firstName"
                        value={firstName}
                        handleInputChange={(e) => setFirstName(e.target.value)}
                     />
                  </div>
               )}

               {/* // ==================================================== */}

               {loginError?.last_name ? (
                  <div>
                     <InputField
                        type="text"
                        placeholder={'Last name'}
                        id="lastName"
                        value={lastName}
                        handleInputChange={(e) => setLastName(e.target.value)}
                     />
                     <div className="h-10">
                        <p className="text-red-500">
                           {loginError.last_name[0]}
                        </p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputField
                        type="text"
                        placeholder={'Last name'}
                        id="lastName"
                        value={lastName}
                        handleInputChange={(e) => setLastName(e.target.value)}
                     />
                  </div>
               )}

               {/* // ==================================================== */}

               {loginError?.password ? (
                  <div>
                     <InputField
                        type="password"
                        placeholder={'Password'}
                        id="password"
                        value={password}
                        handleInputChange={(e) => setPassword(e.target.value)}
                     />
                     <div className="h-10">
                        <p className="text-red-500">{loginError.password[0]}</p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputField
                        type="password"
                        placeholder={'Password'}
                        id="password"
                        value={password}
                        handleInputChange={(e) => setPassword(e.target.value)}
                     />
                  </div>
               )}

               {/* // ==================================================== */}

               {loginError?.password_repeat ? (
                  <div>
                     <InputField
                        type="password"
                        placeholder={'Password repeat'}
                        id="password"
                        value={passwordRepeat}
                        handleInputChange={(e) =>
                           setpasswordRepeat(e.target.value)
                        }
                     />
                     <div className="h-10">
                        <p className="text-red-500">
                           {loginError.password_repeat[0]}
                        </p>
                     </div>
                  </div>
               ) : (
                  <div>
                     <InputField
                        type="password"
                        placeholder={'Password repeat'}
                        id="password"
                        value={passwordRepeat}
                        handleInputChange={(e) =>
                           setpasswordRepeat(e.target.value)
                        }
                     />
                  </div>
               )}

               {/* // ==================================================== */}

               {passwordsNotMatching && (
                  <p className="text-red-500">
                     Passwords don't match. Re-enter.
                  </p>
               )}
            </div>
            <PrimaryButton
               label="COMPLETE"
               onClickHandler={(e) => {
                  handleVerificationSubmit(e)
               }}
            />
         </form>
         {/* todo - gs - the "3 progress dots" still need to be added */}
      </div>
   )
}

export default VerificationForm
