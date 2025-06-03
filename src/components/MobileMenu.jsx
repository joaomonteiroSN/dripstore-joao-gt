import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Redirect from './Redirect';

const menuItems = [
    { option: 'Home', path: '/' },
    { option: 'Produtos', path: '/produtos' },
    { option: 'Categorias', path: '/categorias' }, // não funcional
    { option: 'Meus Pedidos', path: '/meus-pedidos' }, // não funcional
];

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden relative z-50">
            {/* Botão do menu sempre visível */}
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="p-4 text-2xl"
                aria-label="Abrir menu"
            >
                ☰
            </button>

            {/* Menu lateral */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <nav className="p-4 space-y-2">
                    <p className="text-sm font-bold text-dark">Páginas</p>
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `block py-1 border-b-4 pl-2 text-sm font-medium ${isActive
                                    ? 'border-primary text-primary font-semibold'
                                    : 'border-transparent text-dark-2 hover:text-primary'
                                }`
                            }
                            onClick={() => setIsOpen(false)} // fecha menu ao clicar
                        >
                            {item.option}
                        </NavLink>
                    ))}
                </nav>
            <Redirect className="mx-8" mobile/>
            </div>


            {/* Fundo escurecido */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default MobileMenu;
