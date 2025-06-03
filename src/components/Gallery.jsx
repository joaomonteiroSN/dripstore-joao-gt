// src/components/Gallery.jsx
import React, { useState } from 'react';
import arrowLeft from '/assets/icons/arrow-left.svg';
import arrowRight from '/assets/icons/arrow-right.svg';

const Gallery = ({
    className = '',
    radius = '4px',
    showThumbs,
    images = [],
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const handleNext = () => {
        if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
    };

    const handleThumbClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={`flex flex-col items-center ${className}`}>
            {/* Slide principal */}
            <div
                className="
                    relative 
                    w-full 
                    h-[200px] 
                    sm:h-[300px] 
                    md:h-[400px] 
                    lg:h-[500px] 
                    xl:h-[600px]
                    "
            >
                <img
                    src={images[currentIndex]?.src}
                    alt={`Imagem ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                    style={{ borderRadius: radius }}
                />

                {/* Setas de navegação */}
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full disabled:opacity-50"
                >
                    <img src={arrowLeft} alt="Anterior" className="w-5 h-5" />
                </button>

                <button
                    onClick={handleNext}
                    disabled={currentIndex === images.length - 1}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full disabled:opacity-50"
                >
                    <img src={arrowRight} alt="Próxima" className="w-5 h-5" />
                </button>
            </div>

            {/* Thumbnails */}
            {showThumbs && (
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {images.map((img, index) => (
                        <button
                            key={index}
                            onClick={() => handleThumbClick(index)}
                            className={`border-2 ${index === currentIndex ? 'border-primary' : 'border-transparent'
                                } rounded`}
                            style={{ borderRadius: radius }}
                        >
                            <img
                                src={img.src}
                                alt={`Thumbnail ${index + 1}`}
                                className="
                                    object-cover
                                    w-[60px] h-[45px]
                                    sm:w-[80px] sm:h-[60px]
                                    md:w-[100px] md:h-[75px]
                                    lg:w-[117px] lg:h-[95px]
                                    "
                                style={{ borderRadius: radius }}
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Gallery;
