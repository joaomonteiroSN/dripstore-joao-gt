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
            <Layout>
                <Gallery
                    width="700px"
                    height="570px"
                    radius="4px"
                    images={images}
                    showThumbs
                />
                <BuyBox
                    name={"Tênis Nike Revolution 6 Next Nature Masculino"}
                    reference={"Casual | Nike | REF:38416711"}
                    stars={4.7}
                    rating={90}
                    price={"219,00"}
                    priceDiscount={"219,00"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."}
                />
            </Layout>
        </>
    );
}

export default ProductViewPage;