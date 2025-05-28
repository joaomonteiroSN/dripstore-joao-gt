import { NavLink } from 'react-router-dom';

const menuItems = [
    { option: 'Home', path: '/' },
    { option: 'Produtos', path: '/produtos' },
    { option: 'Categorias', path: '/categorias' },
    { option: 'Meus Pedidos', path: '/meus-pedidos' },
];

const DesktopMenu = () => {
    return (
        <nav className="hidden pb-7 md:flex gap-8 text-sm font-medium">
            {menuItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `relative pb-1 ${isActive
                            ? 'text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary'
                            : 'text-dark-2 hover:text-primary'
                        }`
                    }
                >
                    {item.option}
                </NavLink>
            ))}
        </nav>
    );
};

export default DesktopMenu;
