import { useState } from "react";
import Redirect from "./Redirect";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Botão hamburguer */}
            <button
                onClick={() => setIsOpen(true)}
                className="text-dark-gray-2 text-2xl p-2"
            >
                ☰
            </button>

            {/* Sobreposição escura + Menu lateral */}
            {isOpen && (
                <>
                    {/* Fundo escuro clicável */}
                    <div
                        className="fixed inset-0 bg-black/30 z-40 w-screen"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu lateral */}
                    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col gap-4">
                        <nav className="flex flex-col gap-3 text-dark-gray-2">
                            <a href="#" className="text-primary font-bold underline underline-offset-4">
                                Home
                            </a>
                            <a href="#">Produtos</a>
                            <a href="#">Categorias</a>
                            <a href="#">Meus Pedidos</a>
                        </nav>

                        <hr className="my-4 border-light-gray-2" />

                        <Redirect />
                    </div>
                </>
            )}
        </div>
    );
}
