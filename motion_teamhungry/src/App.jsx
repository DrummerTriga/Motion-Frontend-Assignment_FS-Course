import "./App.css"
import axios from "axios" //todo - RH - test to import axios
import AuthLayout from "./layouts/AuthLayout"
import { Navigate, Route, Routes } from "react-router"
import LoginPage from "./pages/authpages/LoginPage"
import MainLayout from "./layouts/MainLayout"
import SignupPage from "./pages/authpages/SignupPage"
import SignupCongratulationsPage from "./pages/authpages/SignupCongratulationsPage"
import VerificationPage from "./pages/authpages/VerificationPage"
import ForgotPasswordPage from "./pages/authpages/ForgotPasswordPage"
import ForgotPasswordEmailPage from "./pages/authpages/ForgotPasswordEmailPage"
import ResetPasswordPage from "./pages/authpages/ResetPasswordPage"
import FindFriendsPage from "./pages/findfriends/FindFriendsPage"

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="findfriends" element={<FindFriendsPage />} />
        {/* todo - RH- add none auth routes here */}
      </Route>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup-email" element={<SignupPage />} />
        <Route path="signup-code" element={<SignupCongratulationsPage />} />
        <Route path="signup-verification" element={<VerificationPage />} />
        <Route path="password-email" element={<ForgotPasswordPage />} />
        <Route path="password-code" element={<ForgotPasswordEmailPage />} />
        <Route path="password-reset" element={<ResetPasswordPage />} />
      </Route>
    </Routes>
  )
}

export default App
