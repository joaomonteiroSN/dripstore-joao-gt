import Logo from "../components/Logo"
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Redirect from "./Redirect";
import { useState } from "react";

import miniCart from "../../public/assets/mini-cart.svg"
import SearchButton from "./SearchButton";
import InputSearch from "./InputSearch";

const Header = () => {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <div className="w-full bg-white mx-auto">
                <div className="w-full xl:max-w-[1447px] mx-auto xl:px-[104px] md:px-[20px] md:gap-7">
                    <div className="flex pt-9 pb-5 items-center justify-between">
                        <MobileMenu />
                        <div className="flex justify-between sm:flex flex-col-reverse">
                            <Routes>
                                <Route path="/" />
                                <Route path="/produtos" />
                                <Route path="/categorias" />
                                <Route path="/meus-pedidos" />
                            </Routes>
                            <Logo className="w-[138px] md:w-auto h-auto" color={true} />
                        </div>
                        <div className="hidden md:block max-w-[600px] w-full">
                            <InputSearch  />
                        </div>
                        {/* <SearchBar /> */}
                        <div className="flex gap-2 items-center md:gap-8">
                            <SearchButton onClick={() => setShowSearch(prev => !prev)} />
                            <Redirect />
                            <img className="h-6 max-w-6 mr-5" src={miniCart}></img>
                        </div>
                    </div>
                    <div className="max-w-[315px] m-auto pb-7">
                        {
                            showSearch && (
                                <InputSearch />
                            )
                        }
                    </div>
                    <DesktopMenu />
                </div>
            </div>
        </>
    );
}

export default Header;