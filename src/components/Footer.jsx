import Logo from "./Logo";

const date = new Date().getFullYear();

//lembrar de deixar a logo branca
const Footer = () => {
    return (
        <>
            <div className="bg-dark">
                <div className="bg-dark text-white xl:flex flex-col max-w-[1240px] m-auto">
                    <div className="xl:flex pt-10 pb-9">
                        <section>
                            <Logo color={false} />
                            <p className="pt-5 pr-[48px] pb-[30px] leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                            <div className="flex gap-[35px]">
                                <img src="../../public/assets/facebook.svg" alt="facebook-logo"></img>
                                <img src="../../public/assets/instagram.svg" alt="instagram-logo"></img>
                                <img src="../../public/assets/twitter.svg" alt="twitter-logo"></img>
                            </div>
                        </section>
                        <section className="flex xl:gap-24 xl:pr-40 xl:pl-52">
                            {/* criar o componente informacao */}
                            <div className="leading-[38px]">
                                <h6 className="font-bold text-base pb-7">Informação</h6>
                                <ul className="truncate whitespace-nowrap overflow-hidden max-w-[200px]">
                                    <li>Sobre Drip Store</li>
                                    <li>Segurança</li>
                                    <li>Wishlist</li>
                                    <li>Blog</li>
                                    <li>Trabalhe conosco</li>
                                    <li>Meus Pedidos</li>
                                </ul>
                            </div>
                            <div className="leading-[38px]">
                                <h6 className="font-bold text-base pb-7">Informação</h6>
                                <ul className="truncate whitespace-nowrap overflow-hidden max-w-[200px]">
                                    <li>Camisetas</li>
                                    <li>Calças</li>
                                    <li>Bonés</li>
                                    <li>Headphones</li>
                                    <li>Tênis</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <h6 className="font-bold pb-7">Contato</h6>
                            <p className="pr-[48px] pb-[25px]">
                                Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                            </p>
                            <span className="block pb-[40px]">(85) 3051-3411</span>
                        </section>
                    </div>
                    <div>
                        <hr></hr>
                        <p className="text-center pt-[20px] pb-[40px]">@ {date} Digital College</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;