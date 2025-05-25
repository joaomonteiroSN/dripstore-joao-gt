import { useState } from "react";

const Dropdown = ({ onChange }) => {
    const [selected, setSelected] = useState("mais relevantes");

    const handleChange = (e) => {
        const value = e.target.value;
        setSelected(value);
        if (onChange) onChange(value);
    };

    return (
        <div className="relative w-full max-w-[265px] sm:max-w-[308px] h-[60px]">
            {/* Select invisível, mas funcional */}
            <select
                value={selected}
                onChange={handleChange}
                className="appearance-none w-full h-full border border-light rounded px-4 pr-10 text-transparent focus:outline-none"
            >
                <option value="mais relevantes">mais relevantes</option>
                <option value="menor preço">menor preço</option>
                <option value="maior preço">maior preço</option>
            </select>

            {/* Texto customizado do botão */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-sm">
                <span className="font-bold text-dark-gray-2">Ordenar por:</span>{" "}
                <span className="text-light-gray-3">{selected}</span>
            </div>

            {/* Ícone de seta (SVG inline) */}
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <svg
                    className="w-4 h-4 text-dark-gray-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    );
};

export default Dropdown;
