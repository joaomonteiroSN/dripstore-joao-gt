// src/components/SearchInput.tsx
import React from 'react';
import searchIcon from "../../public/assets/search.svg"

const InputSearch = () => {
    return (
        <input
            type="text"
            placeholder="Pesquisar produto..."
            className="w-full p-2 rounded-lg bg-light-3 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
        />
    );
};

export default InputSearch;
