import Footer from './components/Footer'
import Header from './components/Header'
import ProductCard from './components/ProductCard';
import ProductListing from './components/ProductListing';
import Section from './components/Section';

const App = () => {
    return (
        <>
            <div className="">
                <Header />
                <Section title="Colecoes em destaque" titleAlign="center">
                    <div className="flex flex-wrap gap-3 justify-center" >
                        <img className="collections" src="../../public/collection-1.png" alt="" />
                        <img className="collections" src="../../public/collection-2.png" alt="" />
                        <img className="collections" src="../../public/collection-3.png" alt="" />
                    </div>
                </Section>
                <Section title="Colecoes em destaque">
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
                <Section title={"Produtos em alta"}>
                    <ProductListing className='flex flex-wrap gap-2'>
                    </ProductListing>
                </Section>
                <Footer />
            </div>
        </>
    );
}

export default App;