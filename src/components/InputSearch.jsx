import React from 'react';
import searchIcon from '/assets/search.svg';

const InputSearch = () => {
    return (
        <div className="relative w-full">
            <img
                src={searchIcon}
                alt="Ícone de busca"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none"
            />
            <input
                type="text"
                placeholder="Pesquisar produto..."
                className="w-full pr-10 p-2 rounded-lg bg-light-3 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
        </div>
    );
};

export default InputSearch;
