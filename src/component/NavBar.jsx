import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Link from "./Link";
const NavBar = () => {
  
  const [open, setOpen] = useState(true)
  return(
    <nav className="px-5 bg-orange-600 lg:flex justify-between items-center h-10">
        <div className="lg:hidden" onClick={()=>setOpen(!open)}>
          {
            open? <IoMdMenu className="text-3xl" /> : <IoCloseSharp className="text-3xl" />
          }
        </div>
        <div className="sm:hidden lg:block">
          <h3 className="text-3xl font-serif font-bold">Learn React</h3>
        </div>
        <div className={`absolute lg:static  bg-green-800 lg:bg-transparent sm:top-10 lg:top-0 lg:right-4 duration-1000 lg:block ${open?"": "hidden"}`}>
            <Link/>
        </div>
    </nav>
  )
}
export default NavBar;