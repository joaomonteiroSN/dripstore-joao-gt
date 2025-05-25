import React from 'react';
import Dropdown from '../components/DropDown';
import Filters from '../components/Filters';
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard';
import ProductListing from '../components/ProductListing';
import Section from '../components/Section';
import Gallery from '../components/Gallery';

// Definindo o componente de layout
const Layout = ({ children }) => {

    return (
        <div className="bg-light-3">
            {/* Componente do cabeçalho */}
            <Header />
            {/* Conteúdo dinâmico das páginas */}
            {children}
            {/* Componente do rodapé */}
            <Footer />
        </div>
    );
};

export default Layout;