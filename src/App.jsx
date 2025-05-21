import Footer from './components/Footer'
import Header from './components/Header'
import ProductCard from './components/ProductCard';
import ProductListing from './components/ProductListing';

const App = () => {
    return (
        <>
            <div className="">
                <Header />
                <ProductListing className='flex flex-wrap gap-2'>
                    
                </ProductListing>
                <Footer />
            </div>
        </>
    );
}

export default App;