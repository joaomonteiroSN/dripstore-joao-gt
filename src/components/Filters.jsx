// src/components/Filters.jsx
import { useState } from "react";
import FilterGroup from "./FilterGroup";

const Filters = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileFilter = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Botão visível apenas no mobile */}
            <button
                onClick={toggleMobileFilter}
                className="md:hidden fixed bottom-6 right-6 bg-primary text-white px-4 py-2 rounded shadow-lg z-40"
            >
                <img src="../../public/filter-icon.png" alt="" />
            </button>

            {/* Filtros - mobile e desktop */}
            <aside
                className={`bg-white w-[308px] p-4 border-r border-light-gray-2 md:static fixed top-0 left-0 h-full z-50 overflow-y-auto transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } md:translate-x-0 md:block`}
            >
                {/* Cabeçalho */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-base font-bold text-dark-gray-2">Filtrar por</h2>
                    <button
                        className="md:hidden text-xl text-dark-gray"
                        onClick={toggleMobileFilter}
                        aria-label="Fechar filtros"
                    >
                    </button>
                </div>
                <hr className="border-light-gray-2 mb-4" />

                {/* Grupos de filtro */}
                <FilterGroup
                    title="Marca"
                    inputType="checkbox"
                    options={[
                        { text: "Adiddas" },
                        { text: "Rebook" },
                        { text: "K-Swiss" },
                        { text: "Nike" },
                        { text: "Puma" },
                    ]}
                />
                <FilterGroup
                    title="Categoria"
                    inputType="checkbox"
                    options={[
                        { text: "Esporte e lazer" },
                        { text: "Casual" },
                        { text: "Utilitário" },
                        { text: "Corrida" },
                    ]}
                />
                <FilterGroup
                    title="Gênero"
                    inputType="checkbox"
                    options={[
                        { text: "Masculino" },
                        { text: "Feminino" },
                        { text: "Unisex" },
                    ]}
                />
                <FilterGroup
                    title="Estado"
                    inputType="radio"
                    options={[
                        { text: "Novo" },
                        { text: "Usado" },
                    ]}
                />
            </aside>
        </>
    );
};

export default Filters;
