import bannerimage from "/assets/banner-img.svg"

const HomeBanner = () => {
    return (
        <>
            <div className="w-full bg-white">
                <div className="m-auto flex flex-col md:flex-row bg-white pt-[87px] gap-[67px] lg:max-w-[1240px]">
                    <img src={bannerimage} className="m-auto mt-10 w-[281px] lg:w-[573px]" alt="air jordam edição especial" />
                    <div className="m-5">
                        <span className="text-primary font-bold">Oferta especial</span>
                        <h2 className="my-5 font-bold text-dark-2">Air Jordan edição de colecionador</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        <button className="bg-primary text-white font-bold w-full max-w-[200px] h-10 mt-7 mb-12 rounded">Ver Orferta</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeBanner;