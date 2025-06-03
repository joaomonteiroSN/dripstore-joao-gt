import starIcon from "/assets/star-icon.svg";
import ProductOptions from "./ProductOptions";

const BuyBox = ({
    name,
    reference,
    stars,
    rating,
    price,
    priceDiscount,
    description,
    children,
}) => {
    return (
        <div className="w-full bg-light-3 rounded flex flex-col gap-4">
            {/* Nome e Referência */}
            <div>
                <h1 className="text-[32px] text-dark font-bold leading-tight">{name}</h1>
                <p className="text-[12px] text-dark-3">Ref: {reference}</p>
            </div>

            {/* Estrelas e Avaliações */}
            <div className="flex items-center gap-2">
                <img src="../../public/stars.png" alt="stars-rate" />
                <span className="text-[14px] bg-warning font-bold text-white rounded-[4px] px-2 py-1 flex items-center gap-1">
                    {stars}
                    <img src={starIcon} alt="Estrela" className="w-4 h-4 fill-white stroke-white" />
                </span>
                <span className="text-[14px] text-light">({rating} avaliações)</span>
            </div>

            {/* Preços */}
            <div className="flex items-baseline gap-2">
                {priceDiscount ? (
                    <>
                        <span className="text-[32px] text-dark-2 font-semibold">
                            R$ {priceDiscount}
                        </span>
                        <span className="text-[16px] text-light-2 line-through">
                            R$ {price}
                        </span>
                    </>
                ) : (
                    <span className="text-[32px] text-dark-2 font-semibold">R$ {price}</span>
                )}
            </div>

            {/* Descrição */}
            <p className="text-[13px] text-light font-bold">Descricao do produto</p>
            <p className="text-[14px] text-dark-2 leading-relaxed">{description}</p>

            {/* Variações do Produto */}
            {children && <div>{children}</div>}

            {/* Botão Comprar */}
            <button className="w-full bg-warning mt-12 mb-20 text-white text-[16px] font-bold py-3 rounded-lg hover:bg-primary transition sm:max-w-[220px] sm:m-0">
                COMPRAR
            </button>
        </div>
    );
};

export default BuyBox;
