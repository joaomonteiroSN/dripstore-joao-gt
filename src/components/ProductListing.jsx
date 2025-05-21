import { Children } from "react";
import products from "../../public/data";
import ProductCard from "./ProductCard";

{/* <ProductCard name={'tenis rocheda'} price={100} priceDiscount={true} />
<ProductCard name={'tenis rocheda'} price={100} priceDiscount={true} /> */}



const ProductListing = () => {
    return (
        <>
            {products.map(product => (
                <ProductCard name={product.name} price={product.price} />
            ))}
        </>
    );
}

export default ProductListing;