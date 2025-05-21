const ProductCard = (props) => {
    return (
        <>
            <div className="block">
                <img src="../../public/assets/logo-header.svg"></img>
                <span>{props.name}</span>
                {props.priceDiscount} ? <span className="text-dark">Price discount</span> && <span className="text-dark line-through">Price</span> ? <span className="text-dark">Price</span>
            </div>
        </>
    );
}

export default ProductCard;