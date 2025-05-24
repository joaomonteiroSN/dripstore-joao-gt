import { useState } from 'react';

const SearchBar = () => {
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    return (
        <div className="w-[600px]">
            {/* Ícone da lupa visível apenas no mobile */}
            <div className="flex justify-end">

                <button
                    className="md:hidden p-2 text-pink-600 text-xl"
                    onClick={() => setShowMobileSearch(!showMobileSearch)}
                    aria-label="Abrir busca"
                >
                    <img src="../../public/assets/search.svg" alt="icone de lupa" />
                </button>
            </div>

            {/* Input visível no desktop ou quando ativado no mobile */}
            <div
                className={`w-full m-auto px-4 md:px-0 mt-2 md:mt-0 ${showMobileSearch ? 'block' : 'hidden'
                    } md:block`}
            >
                <div className="flex items-center  bg-gray-100 rounded-md px-3 py-2">
                    <input
                        type="text"
                        placeholder="Pesquisar produto..."
                        className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder:text-gray-400"
                    />
                    <img src="../../public/assets/search.svg" alt="icone de lupa" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;

