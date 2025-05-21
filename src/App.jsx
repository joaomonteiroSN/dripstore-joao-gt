import Footer from './components/Footer'
import Header from './components/Header'
import ProductCard from './components/ProductCard';

const App = () => {
    return (
        <>
            <div className="">
                <Header />
                <ProductCard name={'tenis rocheda'} price={100}/>
                <Footer />
            </div>
        </>
    );
}

export default App;