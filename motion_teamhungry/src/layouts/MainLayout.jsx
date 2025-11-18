import { Outlet } from "react-router"
import Header from "../components/Header/Header"

const MainLayout = () => {
  return (
    <> 
      <Header/>
      <div>MainLayout</div>
      <Outlet />
    </>
  )
}

export default MainLayout
