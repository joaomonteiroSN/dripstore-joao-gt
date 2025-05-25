// src/components/Gallery.jsx
import { useState } from "react";
import PropTypes from "prop-types";

const Gallery = ({ className = "", width = "100%", height = "400px", radius = "0px", showThumbs, images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const goToNext = () => {
        if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
    };

    const goToImage = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={`${className}`} style={{ width }}>
            {/* Slide de imagem principal */}
            <div
                className="relative overflow-hidden"
                style={{
                    width: "100%",
                    height,
                    borderRadius: radius,
                }}
            >
                <img
                    src={images[currentIndex]?.src}
                    alt={`Imagem ${currentIndex + 1}`}
                    className="object-cover w-full h-full"
                    style={{ borderRadius: radius }}
                />

                {/* Seta esquerda */}
                <button
                    onClick={goToPrevious}
                    disabled={currentIndex === 0}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 disabled:opacity-50"
                >
                    <img src="/assets/icons/arrow-left.svg" alt="Anterior" />
                </button>

                {/* Seta direita */}
                <button
                    onClick={goToNext}
                    disabled={currentIndex === images.length - 1}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 disabled:opacity-50"
                >
                    <img src="/assets/icons/arrow-right.svg" alt="Próximo" />
                </button>
            </div>

            {/* Thumbnails */}
            {showThumbs && (
                <div className="flex gap-4 mt-4 overflow-x-auto">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`w-[117px] h-[95px] flex-shrink-0 border-2 ${index === currentIndex ? "border-primary" : "border-transparent"
                                }`}
                            style={{ borderRadius: radius }}
                        >
                            <img
                                src={image.src}
                                alt={`Miniatura ${index + 1}`}
                                className="object-cover w-full h-full"
                                style={{ borderRadius: radius }}
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

Gallery.propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    radius: PropTypes.string,
    showThumbs: PropTypes.bool,
    images: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Gallery;
