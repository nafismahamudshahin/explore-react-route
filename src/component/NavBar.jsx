import { useState } from "react";
import { IoMdMenu,IoIosNotifications } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import Link from "./Link";
const NavBar = () => {

  const [open, setOpen] = useState(true)
  return (
    <nav className="px-5 bg-orange-600 grid grid-cols-[75%,25%] lg:grid-cols-[65%,35%] justify-between items-center">
      <div className=" lg:flex justify-between items-center ">
        <div className="lg:hidden text-4xl" onClick={() => setOpen(!open)}>
          {
            open ? <IoMdMenu className=" hover:bg-blue-800 rounded-full p-1" /> : <IoCloseSharp className=" hover:bg-blue-800 rounded-full p-1" />
          }
        </div>
        <div className="sm:hidden lg:block">
          <h3 className="text-3xl font-serif font-bold">Learn React</h3>
        </div>
        <div className={`absolute lg:static  bg-green-800 lg:bg-transparent sm:top-10 lg:top-0 lg:right-4 duration-1000 lg:block ${open ? "" : "hidden"}`}>
          <Link />
        </div>
      </div>
        <div className="flex justify-end text-4xl">
          <IoIosNotifications className="hover:bg-blue-800 rounded-full p-1"/>
          <CgProfile className="hover:bg-blue-800 rounded-full p-1"/>
        </div>
    </nav>
  )
}
export default NavBar;