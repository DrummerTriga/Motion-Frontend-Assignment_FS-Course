import { useSelector } from 'react-redux'
import { Outlet, Navigate, useLocation } from 'react-router'

const ProtectedRoutes = () => {
   const authIsLoading = useSelector((state) => state.auth.auth_is_loading)
   const accessToken = localStorage.getItem('access_token')
   const location = useLocation()

   console.log('Protected route check: here is the token', accessToken)

   if (authIsLoading) {
      ;(console.log('loading page!!!'), (<div>Loading...</div>))
   }

   if (accessToken) {
      console.log('person is logged in')
      return <Outlet />
   } else {
      console.log('person NOT logged in')
      return (
         <Navigate
            to={'/auth/signup-email'}
            replace
            state={{ from: location }}
         />
      )
   }
}

export default ProtectedRoutes
