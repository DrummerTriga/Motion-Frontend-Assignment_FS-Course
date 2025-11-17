import { Outlet } from "react-router"
import VerticalHero from "../components/Auth/VerticalHero"

const AuthLayout = () => {
  return (
    <div className="flex w-full h-screen">
      <VerticalHero />
      <Outlet />
    </div>
  )
}

export default AuthLayout
