import Navbar from "../_components/dashboard/navbar/Navbar"
import Sidebar from "../_components/dashboard/sidebar/Sidebar"

const layout = ({children}) => {
  return (
    <div className="flex bg-blue-900">
        <div className="flex-1 bg-slate-900 p-[20px]">
            <Sidebar/>
        </div>
        <div className="flex-[4]  bg-slate-950 p-[20px]">
            <Navbar/>
            {children}
        </div>
    </div>
  )
}

export default layout