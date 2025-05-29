import { useState } from "react";

const ProductOptions = ({ options, radius, shape, type }) => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => {
        setSelected(option);
    };

    return (
        <>
            <p className="text-light py-3">Tamanho</p>
            <div className="flex gap-2 flex-wrap">
                {options.map((option, index) => {
                    const isSelected = selected === option;

                    let classNames = "flex items-center justify-center cursor-pointer border ";

                    if (isSelected) {
                        classNames += "border-primary border-2 ";
                    } else {
                        classNames += "border-light-gray-2 ";
                    }

                    if (shape === "circle") {
                        classNames += "w-[31px] h-[31px] rounded-full ";
                    } else if (shape === "square") {
                        classNames += "h-[46px] px-4 bg-white hover:bg-primary hover:text-white";
                    }

                    const styleInline = {
                        borderRadius: shape === "square" ? radius : undefined,
                        backgroundColor: type === "color" ? option : undefined,
                    };

                    return (
                        <div
                            key={index}
                            className={classNames}
                            style={styleInline}
                            onClick={() => handleSelect(option)}
                        >
                            {type === "text" && (
                                <span className="text-[24px] text-dark-gray-2 font-bold">{option}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ProductOptions;

