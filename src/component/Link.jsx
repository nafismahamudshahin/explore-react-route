
const Link = ({route}) => {
    return (
        <>
            <li className="p-4 duration-50 rounded-lg font-bold text-white hover:bg-orange-500" key={route.id}><a href={route.path}>{route.name}</a></li> 
        </>
    );
};

export default Link;