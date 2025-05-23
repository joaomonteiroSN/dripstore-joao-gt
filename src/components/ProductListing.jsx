import { Children } from "react";
import products from "../../public/data";
import ProductCard from "./ProductCard";

{/* <ProductCard name={'tenis rocheda'} price={100} priceDiscount={true} />
<ProductCard name={'tenis rocheda'} price={100} priceDiscount={true} /> */}



const ProductListing = () => {
    return (
        <>
            <div className="flex flex-wrap gap-3 bg-light-3 justify-center sm:grid grid-cols-4">
                {products.map(product => (
                    <ProductCard name={product.name} price={product.price} priceDiscount={product.priceDiscount}/>
                ))}
            </div>
        </>
    );
}

export default ProductListing;