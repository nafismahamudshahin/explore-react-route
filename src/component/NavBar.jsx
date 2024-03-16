import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
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
  const [open ,setOpen] = useState(true)
  return (
    <nav className="flex justify-between items-center px-6">
      {/* meno open and close icons */}
      <div onClick={()=>setOpen(!open)} className="duration-700 p-2 hover:bg-fuchsia-500 delay-100 rounded-full">
        {
          open?<IoMdMenu className="text-3xl" />:<IoCloseSharp className="text-3xl"/>
        }
     
        
      </div>
        {/* all services buttons */}
      <ul className="flex sm:hidden md:hidden lg:block sm:flex-col lg:flex-row sm:gap-2 sm:p-5 gap-5">
        {
          routes.map(route => <li className="p-4 duration-50 rounded-lg font-bold text-white hover:bg-orange-500" key={route.id}><a href={route.path}>{route.name}</a></li>)
        }
      </ul>
      {/* search bar and notifications icon */}
      <div className="flex justify-center items-center">
        <div className=" duration-700 p-2 hover:bg-fuchsia-500 delay-100 rounded-full">
          <IoMdSearch className="text-3xl " />
        </div>
        <div className=" duration-700 p-2 hover:bg-fuchsia-500 rounded-full">
          <IoIosNotifications className="text-3xl " />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;