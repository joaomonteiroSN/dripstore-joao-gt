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
        <div className="bg-white md:pl-[104px] md:pr-[104px] md:gap-7">
            <div className="flex pt-9 pl-5 pr-5 pb-5 items-center justify-between">
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
                <div className="flex gap-16 items-center justify-end">
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