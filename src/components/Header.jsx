import Logo from "../components/Logo"
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import SearchBar from "./SearchInput";
import Redirect from "./Redirect";
// import Redirect from "./Redirect";

const Header = () => {
    return (
        <>
        <div className="bg-white">
            <div className="flex pt-9 pl-5 pr-5 pb-5 items-center">
                <MobileMenu />
                <div className="flex sm:flex flex-col-reverse">
                    <Routes>
                        <Route path="/" />
                        <Route path="/produtos" />
                        <Route path="/categorias" />
                        <Route path="/meus-pedidos" />
                    </Routes>
                    <Logo color={true} />
                </div>
                <SearchBar />
                <div className="flex gap-4 items-center justify-end w-full max-w-[349px]">
                    <Redirect />
                    <img className="max-h-6" src="../../public/assets/mini-cart.svg"></img>
                </div>
            </div>
            <DesktopMenu />
        </div>
        </>
    );
}

export default Header;