import Navbar from "./components/Navbar"
import Sidebar from "./pages/Sidebar"
import { Outlet } from "react-router-dom"
const Root = () => {
  return (
     <>
       <div className="flex">
            <div className="w-1/5">
                <Sidebar/>
            </div>
            <div className="w-4/5">
                <Navbar/>
                <Outlet />
            </div>
       </div>
     </>
  )
}

export default Root