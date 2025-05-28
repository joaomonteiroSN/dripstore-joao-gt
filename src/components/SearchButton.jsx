// src/components/SearchToggleButton.jsx
import React from 'react';
import searchIcon from "../../public/assets/search.svg"

function SearchButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="p-2 focus:outline-none"
            aria-label="Abrir campo de busca"
        >
            <img
                src={searchIcon}
                alt="Ícone de busca"
                className="max-w-5 h-5"
            />
        </button>
    );
}

export default SearchButton;
