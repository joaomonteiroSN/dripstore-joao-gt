import { NavLink } from 'react-router-dom';

const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Produtos', path: '/produtos' },
    { label: 'Categorias', path: '/categorias' },
    { label: 'Meus Pedidos', path: '/meus-pedidos' },
];

const DesktopMenu = () => {
    return (
        <nav className="hidden md:flex gap-8 text-sm font-medium">
            {menuItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `relative pb-1 ${isActive
                            ? 'text-pink-600 font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-pink-600'
                            : 'text-gray-600 hover:text-pink-600'
                        }`
                    }
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
};

export default DesktopMenu;
