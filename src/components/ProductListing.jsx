import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import products from "/data";
import ProductCard from "./ProductCard";

const ProductListing = ({ mobileShowItens, desktopShowitens, maxShowItens = 15 }) => {
    const [visibleCount, setVisibleCount] = useState(products.length); // mostra tudo inicialmente

    useEffect(() => {
        const updateVisibleCount = () => {
            const width = window.innerWidth;

            if (width < 640) {
                setVisibleCount(mobileShowItens); // 2 colunas × 1 linha
            } else if (width < 1024) {
                setVisibleCount(desktopShowitens); // 3 colunas × 2 linhas
            } else {
                setVisibleCount(maxShowItens); // 4 colunas × 2 linhas
            }
        };

        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    //Rota para ProductListingPage é global para todo os itens que são renderizados
    return (
        <div className="bg-light-3 grid grid-cols-2 md:grid-cols-4 gap-[9px] md:gap-[13px] lg:gap-[24px] place-items-center max-w-[1240px] mx-auto">
            {products.slice(0, visibleCount).map((product, index) => (
                <Link to={`/produtos/${product.id}`}>
                    <ProductCard
                        key={index}
                        name={product.name}
                        price={product.price}
                        priceDiscount={product.priceDiscount}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ProductListing;
