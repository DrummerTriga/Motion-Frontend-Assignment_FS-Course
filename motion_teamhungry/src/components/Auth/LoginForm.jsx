import { Link, useNavigate } from 'react-router'
import { motion_api_no_auth } from '../../axios/axiosBase'
import InputFieldIcon from '../../elements/Login/InputFieldIcon'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../store/slices/authSlice'
import PrimaryButton from '../../elements/Buttons/PrimaryButton'
import SecondaryButton from '../../elements/Buttons/SecondaryButton'

const LoginForm = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const userData = useSelector((state) => state.auth.user_data)

   console.log('Data coming from redux', userData.access)

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [loginError, setLoginError] = useState(null)

   // =================================================================
   // FETCHING
   async function handleLoginSubmit(event) {
      event.preventDefault()
      console.log('checkpoint 1', email, password)
      try {
         const response = await motion_api_no_auth.post('auth/token/', {
            email,
            password,
         })
         console.log('checkpoint 2 response is', response)
         localStorage.setItem('access_token', response.data.access)
         dispatch(login(response.data))
         navigate('/profile')
      } catch (error) {
         console.log(error)
         // todo - RH - add more cases to handle errors
         if (error.response) {
            console.log(error)
            setLoginError('Login failed. Please check your email and password')
         }
      }
   }

   // =================================================================

   return (
      <div className="flex flex-col items-center h-full w-[60%]">
         <div className="flex w-full justify-end items-center gap-8 pr-10 pt-10">
            <h2>Don't have an account?</h2>
            <SecondaryButton label="SIGN UP" type="button" />
         </div>
         <h1 className="text-[40px] mt-auto">Sign In</h1>
         {
            <div>
               {loginError && <p className="text-red-500">{loginError}</p>}
            </div>
         }
         <form
            className="flex flex-col justify-center gap-10 items-center h-[467px] mb-auto"
            onSubmit={handleLoginSubmit}
         >
            <InputFieldIcon
               icon="../avatar.svg"
               placeholder="Email"
               type="email"
               id="email"
               value={email}
               handleInputChange={(e) => setEmail(e.target.value)}
            />
            <InputFieldIcon
               icon={'../password.svg'}
               placeholder={'Password'}
               type={'password'}
               id={'password'}
               value={password}
               handleInputChange={(e) => setPassword(e.target.value)}
            />
            {
               <div>
                  {loginError && <p className="text-red-500">{loginError}</p>}
               </div>
            }
            <Link to="/auth/password-email">Forgot Password?</Link>
            <PrimaryButton className="mt-10" label="SIGN IN" type="submit" />
         </form>
      </div>
   )
}

export default LoginForm
