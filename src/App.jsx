import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage'

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/produtos" element={<ProductListingPage />} />
                    <Route path="/produtos/:id" element={<ProductViewPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;