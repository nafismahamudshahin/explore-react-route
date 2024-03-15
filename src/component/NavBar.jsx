
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
    return (
        <nav>
           <ul className="flex  sm:flex-col lg:flex-row sm:gap-2 sm:p-5 gap-5">
            {
              routes.map(route=><li className="p-4 bg-orange-400 rounded-lg font-bold text-white hover:bg-orange-500" key={route.id}><a href={route.path}>{route.name}</a></li>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;