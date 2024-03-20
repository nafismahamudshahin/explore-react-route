import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Link from "./Link";
const NavBar = () => {
  const routes = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'About',
      path: '/about'
    },
    {
      id: 3,
      name: 'Services',
      path: '/services'
    },
    {
      id: 4,
      name: 'Products',
      path: '/products'
    },
    {
      id: 5,
      name: 'Contact',
      path: '/contact'
    }
  ];
  const [open, setOpen] = useState(true)
  return (
    <nav className="flex justify-between items-center px-6">
      {/* meno open and close icons */}
      <div onClick={() => setOpen(!open)} className="duration-700 p-2 hover:bg-fuchsia-500 delay-100 rounded-full">
        {
          open ? <IoMdMenu className="text-3xl scale-75" /> : <IoCloseSharp className="text-3xl" />
        }
      </div>
      {/* all services buttons */}
      <div className="mx-auto bg-green-800">
        <ul className="bg-green-200 w-2/6  text-gray-950 flex absolute top-8 lg:left-2/4 lg:right-2/4 justify-center items-center us lg:top-0  sm:flex-col lg:flex-row">
          {
            routes.map(route => <Link key={route.id} route={route}/> )
          }
        </ul>
      </div>

      {/* search bar and notifications icon */}
      <div className="flex justify-center items-center">
        <div className=" duration-700 p-2 hover:bg-fuchsia-500 delay-100 rounded-full">
          <IoMdSearch className={`text-3xl`} />
        </div>
        <div className=" duration-700 p-2 hover:bg-fuchsia-500 rounded-full">
          <IoIosNotifications className="text-3xl scale-75 " />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;