import bannerimage from "../../public/assets/banner-img.svg"

const HomeBanner = () => {
    return ( 
        <>
        <div className="flex bg-white pt-[87px] gap-[67px]">
            <img src={bannerimage} className="max-w-[573px]" alt="" srcset="" />
            <div>
                <span className="text-primary font-bold">Oferta especial</span>
                <h4>Air Jordan edição de colecionador</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <button className="bg-primary text-white w-full max-w-[200px] h-10">Ver orferta</button>
            </div>
        </div>
        </>
     );
}
 
export default HomeBanner;