import Layout from "../components/Layout";
import ProductListing from '../components/ProductListing';
import Section from '../components/Section';
import Gallery from '../components/Gallery';
import HomeBanner from "../components/HomeBanner";


const HomePage = () => {

    const images = [
        { src: "/assets/home-slide-1.jpeg" },
        { src: "/assets/home-slide-2.jpeg" },
        { src: "/assets/home-slide-3.jpeg" },
        { src: "/assets/home-slide-4.jpeg" },
        { src: "/assets/home-slide-5.jpeg" },
    ];

    return (
        <>
            <Layout>
                <div className="flex justify-center">
                    <Gallery
                        width="1440px"
                        height="681px"
                        className="max-w-[1440px] p-0"
                        radius="0px"
                        images={images}
                    />
                </div>
                <Section title="Coleções em destaque" titleAlign="left" className="mt-10">
                    <div className="flex flex-wrap gap-3 justify-center lg:max-w-[1240px]" >
                        <img className="collections" src="/collection-1.png" alt="" />
                        <img className="collections" src="/collection-2.png" alt="" />
                        <img className="collections" src="/collection-3.png" alt="" />
                    </div>
                </Section>
                <Section title="Coleções em destaque" titleAlign="center" className="mt-[100px]">
                    <div className="overflow-x-auto whitespace-nowrap px-4 sm:px-0">
                        <div className="overflow-x-auto sm:overflow-x-visible whitespace-nowrap sm:whitespace-normal px-4 sm:px-0">
                            <div className="flex gap-4 justify-start sm:justify-center">
                                <figure className="collections-2 inline-flex flex-col items-center min-w-[80px]">
                                    <img src="/Frame 10.png" alt="Camisetas" />
                                    <figcaption className="mt-2 text-sm">Camisetas</figcaption>
                                </figure>

                                <figure className="collections-2 inline-flex flex-col items-center min-w-[80px]">
                                    <img src="/Frame 10.png" alt="Calças" />
                                    <figcaption className="mt-2 text-sm">Calças</figcaption>
                                </figure>

                                <figure className="collections-2 inline-flex flex-col items-center min-w-[80px]">
                                    <img src="/Frame 10.png" alt="Bonés" />
                                    <figcaption className="mt-2 text-sm">Bonés</figcaption>
                                </figure>

                                <figure className="collections-2 inline-flex flex-col items-center min-w-[80px]">
                                    <img src="/Frame 10.png" alt="Headphones" />
                                    <figcaption className="mt-2 text-sm">Headphones</figcaption>
                                </figure>

                                <figure className="collections-2 inline-flex flex-col items-center min-w-[80px]">
                                    <img src="/Frame 10.png" alt="Tênis" />
                                    <figcaption className="mt-2 text-sm">Tênis</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </Section>
                <Section title={"Produtos em alta"} className="mt-[123px] mb-10 max-w-[1240px]">
                    <ProductListing mobileShowItens={2} desktopShowitens={8} maxShowItens={8}/>
                </Section>
                <HomeBanner />
            </Layout>
        </>
    );
}

export default HomePage;