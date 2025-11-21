import './App.css'
import AuthLayout from './layouts/AuthLayout'
import { Route, Routes } from 'react-router'
import LoginPage from './pages/authpages/LoginPage'
import MainLayout from './layouts/MainLayout'
import SignupPage from './pages/authpages/SignupPage'
import SignupCongratulationsPage from './pages/authpages/SignupCongratulationsPage'
import SignupVerificationPage from './pages/authpages/SignupVerificationPage'
import ForgotPasswordCodePage from './pages/authpages/ForgotPasswordCodePage'
import ForgotPasswordEmailPage from './pages/authpages/ForgotPasswordEmailPage'
import ForgotPasswordResetPage from './pages/authpages/ForgotPasswordResetPage'
import FindFriendsPage from './pages/findfriends/FindFriendsPage'
import SocialWallPage from './pages/feed/SocialWallPage'
import ProfilePage from './pages/profile/ProfilePage'
import PageNotFoundPage from './pages/PageNotFoundPage'
import ProtectedRoutes from './ProtectedRoutes'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { motion_api_auth } from './axios/axiosBase.js'
import { add_requests } from './store/slices/notificationSlice'
import EditProfile from './components/Profile/EditProfile.jsx'
import ProfileEditPage from './pages/profile/ProfileEditPage.jsx'

function App() {
   const dispatch = useDispatch()

   useEffect(() => {
      const fetchNotifications = async () => {
         try {
            const response = await motion_api_auth.get(
               'social/friends/requests/'
            )
            dispatch(add_requests(response.data.results))
         } catch (error) {
            console.error('Failed to load users', error)
         }
      }
      fetchNotifications()
   }, [])

   return (
      <Routes>
         <Route path="" element={<MainLayout />}>
            <Route path="" element={<ProtectedRoutes />}>
               <Route path="profile" element={<ProfilePage />} />
               <Route path="profile/:userId" element={<ProfilePage />} />
               <Route path="edit-profile" element={<ProfileEditPage />} />
               <Route path="posts" element={<SocialWallPage />} />
               <Route path="findfriends" element={<FindFriendsPage />} />
            </Route>
         </Route>
         <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup-email" element={<SignupPage />} />
            <Route path="signup-code" element={<SignupCongratulationsPage />} />
            <Route
               path="signup-verification"
               element={<SignupVerificationPage />}
            />
            <Route
               path="password-email"
               element={<ForgotPasswordEmailPage />}
            />
            <Route path="password-code" element={<ForgotPasswordCodePage />} />
            <Route
               path="password-reset"
               element={<ForgotPasswordResetPage />}
            />
         </Route>
         <Route path="/*" element={<PageNotFoundPage />} />
      </Routes>
   )
}

export default App
