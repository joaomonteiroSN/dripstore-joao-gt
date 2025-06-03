const ProductCard = ({ name, priceDiscount, price }) => {
    return (
        <>
            <div className="">
                <div className="max-w-[292px] shadow-md bg-white sm:max-w-[292px] max-h-[321px] grid-cols-4"><img src="/assets/product.svg"></img></div>
                <div className="bg-light-3 pt-[34px] pl-1">
                    <p>{name}</p>
                    {priceDiscount ?
                        <div>
                            <span className="text-light line-through">${price}</span> <span className="text-dark">${priceDiscount}</span>
                        </div>
                        :

                        <span className="text-dark">${price}</span>}
                </div>
            </div>
        </>
    );
}

export default ProductCard;