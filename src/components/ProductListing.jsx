import { Children } from "react";
import products from "../../public/data";
import ProductCard from "./ProductCard";

{/* <ProductCard name={'tenis rocheda'} price={100} priceDiscount={true} />
<ProductCard name={'tenis rocheda'} price={100} priceDiscount={true} /> */}



const ProductListing = () => {
    return (
        <>
            <div className="bg-light-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[9px] md:gap-[13px] lg:gap-[24px] place-items-center max-w-[1240px]">
                {products.map(product => (
                    <ProductCard name={product.name} price={product.price} priceDiscount={product.priceDiscount}/>
                ))}
            </div>
        </>
    );
}

export default ProductListing;