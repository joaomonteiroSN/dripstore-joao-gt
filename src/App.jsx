import Footer from './components/Footer'
import Header from './components/Header'
import ProductCard from './components/ProductCard';

const App = () => {
    return (
        <>
            <div className="">
                <Header />
                <div className='flex flex-wrap gap-2'>
                    <ProductCard name={'tenis rocheda'} price={100} priceDiscount={true} />
                    <ProductCard name={'tenis rocheda'} price={100} priceDiscount={true} />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;