import { useState, useRef, useEffect } from 'react';

export default function SearchBarToggle() {
    const [showInput, setShowInput] = useState(false);
    const containerRef = useRef(null);

    // Fecha ao clicar fora
    useEffect(() => {
        function handleClickOutside(event) {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowInput(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="relative flex items-center">
            {/* Ícone de lupa */}
            <button
                onClick={() => setShowInput(true)}
                className="p-2 rounded-full hover:bg-gray-100 transition"
            >
                <img src="../../public/assets/search.svg"></img>
            </button>

            {/* Input de busca (extensão do header) */}
            {showInput && (
                <input
                    type="text"
                    placeholder="Pesquisar produto..."
                    className="ml-2 bg-gray-100 px-4 py-2 rounded-lg text-gray-700 placeholder-gray-400 outline-none w-64 transition-all duration-300"
                    autoFocus
                />
            )}
        </div>
    );
}
