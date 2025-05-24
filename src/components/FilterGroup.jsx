// src/components/FilterGroup.jsx
const FilterGroup = ({ title, inputType = "checkbox", options = [] }) => {
    return (
        <div className="mb-4">
            <h3 className="text-sm text-dark-gray-2 font-bold mb-2">{title}</h3>
            <div className="flex flex-col gap-2">
                {options.map((option, index) => {
                    const id = `${title}-${index}`;
                    const value = option.value || option.text;
                    return (
                        <label key={id} htmlFor={id} className="flex items-center gap-2 text-dark-gray text-sm">
                            <input
                                id={id}
                                type={inputType}
                                name={title}
                                value={value}
                                className="w-[22px] h-[22px] accent-primary cursor-pointer"
                            />
                            {option.text}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default FilterGroup;
