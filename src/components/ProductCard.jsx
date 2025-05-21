const ProductCard = ({ name, priceDiscount, price }) => {
    return (
        <>
            <div className="">
                <div className="max-w-[292px] max-h-[321px] drop-shadow"><img src="../../public/assets/product.svg"></img></div>
                <div className="bg-light-3 pt-[34px] pr-1">
                    <p>{name}</p>
                    {priceDiscount ?
                        <div>
                            <span className="text-light line-through">Price</span> <span className="text-dark">Price Discount</span>
                        </div>
                        :

                        <span className="text-dark">Price</span>}
                </div>
            </div>
        </>
    );
}

export default ProductCard;