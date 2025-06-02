import React from 'react';
import Footer from './Footer'   
import Header from './Header'

// Definindo o componente de layout
const Layout = ({ children, className }) => {

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