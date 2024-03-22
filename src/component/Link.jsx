
const Link = () => {
    const routes = [
        {id: 1,name: 'Home',path: '/'},
        {id: 2,name: 'About',path: '/about'},
        {id: 3,name: 'Services',path: '/services'},
        { id: 4, name: 'Products', path: '/products'},
        { id: 5, name: 'Contact', path: '/contact'}
      ];
      
    return (
        <div>
            <ul className=" lg:flex gap-2  font-semibold font-sans">
                {routes.map(route => (
                    <li className="hover:bg-orange-400 p-2 duration-300" key={route.id}>{route.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Link;