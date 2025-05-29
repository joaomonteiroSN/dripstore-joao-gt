import BuyBox from "../components/BuyBox";
import Gallery from "../components/Gallery";
import ProductOptions from "../components/ProductOptions";
import Layout from "./Layout";

const ProductViewPage = () => {
    const images = [
        { src: "../../public/assets/home-slide-1.jpeg" },
        { src: "../../public/assets/home-slide-2.jpeg" },
        { src: "../../public/assets/home-slide-3.jpeg" },
        { src: "../../public/assets/home-slide-4.jpeg" },
        { src: "../../public/assets/home-slide-5.jpeg" },
    ];
    return (
        <>
            <Layout className="md:flex">
                <div className="m-auto px-5 pt-6 md:flex md:px-0 sm:gap-10 sm:align-top sm:max-w-[1245px] sm:mb-20">
                    <Gallery
                        images={images}
                        radius="4px"
                        width="500px"
                        height="272px"
                        showThumbs
                        className="m-auto"
                    />
                    <BuyBox
                        name={"Tênis Nike Revolution 6 Next Nature Masculino"}
                        reference={"Casual | Nike | REF:38416711"}
                        stars={4.7}
                        rating={90}
                        price={"219,00"}
                        priceDiscount={"219,00"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}
                    >

                        <ProductOptions options={["39", "40", "41", "42", "43"]} radius={4} shape={"square"} type={"text"} />
                        <ProductOptions options={["#6FEEFF", "#C92071", "#5E5E5E", "#6D70B7"]} radius={4} shape={"circle"} type={"color"} />
                    </BuyBox>
                </div>
            </Layout>
        </>
    );
}

export default ProductViewPage;