import Logo from "./Logo";
import "tailwindcss";

//lembrar de deixar a logo branca
const Footer = () => {
    return (
        <>
            <section>
                <Logo />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <div>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </section>
            <section className="flex">
                <div>
                    <h6>Informação</h6>
                    <ul>
                        <li>Sobre Drip Store</li>
                        <li>Segurança</li>
                        <li>Wishlist</li>
                        <li>Blog</li>
                        <li>Trabalhe conosco</li>
                        <li>Meus Pedidos</li>
                    </ul>
                </div>
                <div>
                    <h6>Informação</h6>
                    <ul>
                        <li>Camisetas</li>
                        <li>Calças</li>
                        <li>Bonés</li>
                        <li>Headphones</li>
                        <li>Tênis</li>
                    </ul>
                </div>
            </section>
            <section>
                <h6>Contato</h6>
                <p>
                    Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                </p>
                <span>(85) 3051-3411</span>
            </section>
            <hr></hr>
            <p>@ 2022 Digital College</p>
        </>
    );
}

export default Footer;