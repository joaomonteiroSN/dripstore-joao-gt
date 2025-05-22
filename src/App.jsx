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
                <Section title="Colecoes em destaque">
                </Section>
                <div className="flex flex-col gap-3 max-w-[338px]" >
                    <img className="rounded" src="../../public/collection-1.png" alt="" />
                    <img className="rounded" src="../../public/collection-2.png" alt="" />
                    <img className="rounded" src="../../public/collection-3.png" alt="" />
                </div>
                <ProductListing className='flex flex-wrap gap-2'>
                </ProductListing>
                <Footer />
            </div>
        </>
    );
}

export default App;