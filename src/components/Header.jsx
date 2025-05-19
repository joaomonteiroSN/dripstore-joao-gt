import Logo from "../components/Logo"

const Header = () => {
    return (
        <>
            <div>
                <Logo />
                <input type="search" value="" placeholder="Pesquisar produto..."/>
                <a href="http://">Cadastre-se</a>
                <button>Entrar</button>
            </div>

            <ul className="flex text-[#1F1F1F]">
                <li>Home</li>
                <li>Produtos</li>
                <li>Categorias</li>
                <li>Meus Pedidos</li>
            </ul>
        </>
    );
}

export default Header;