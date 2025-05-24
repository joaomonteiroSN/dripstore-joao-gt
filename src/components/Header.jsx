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
            <div className="w-full bg-white flex justify-between">
                <div className="xl:max-w-[1447px] xl:pl-[104px] xl:pr-[104px] md:gap-7 md:pl-[20px] md:pr-[20px]">
                    <div className="flex pt-9 pb-5 items-center justify-between">
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
                        <div className="flex gap-16 items-center justify-end md:gap-8">
                            <Redirect />
                            <img className="h-6" src="../../public/assets/mini-cart.svg"></img>
                        </div>
                    </div>
                    <DesktopMenu />
                </div>
            </div>
        </>
    );
}

export default Header;