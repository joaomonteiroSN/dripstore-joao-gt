import Logo from "../components/Logo"
import MobileMenu from "./MenuBurger";
import SearchToggleInput from "./SearchInput";
// import Redirect from "./Redirect";

const Header = () => {
    return (
        <>
            <div className="flex justify-between p-5">
                <MobileMenu />
                <Logo color={true} />
                <div className="flex gap-4 max-w-32 items-center">
                    <SearchToggleInput />
                    <img className="max-h-6" src="../../public/assets/mini-cart.svg"></img>
                </div>
                {/* <input type="search" value="" placeholder="Pesquisar produto..." /> */}
            </div>
        </>
    );
}

export default Header;