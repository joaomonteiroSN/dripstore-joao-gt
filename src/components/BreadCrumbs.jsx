import React from 'react';

const Breadcrumbs = ({ path = [], current = '' }) => {
    return (
        <div className="w-full px-4 py-3 bg-light-3">
            <div className="max-w-[1240px] m-auto text-sm text-dark-2">
                <div className="flex flex-wrap items-center space-x-1 align-baseline">
                    {path.map((item, index) => (
                        <div className="flex items-center" key={index}>
                            <span className={index === 0 ? 'font-semibold' : ''}>
                                {item}
                            </span>
                            {index < path.length - 1 && (
                                <span className="px-1 text-dark-2">/</span>
                            )}
                        </div>
                    ))}
                {current && (
                    <div className=" text-sm text-dark-2 break-words">
                        / {current}
                    </div>
                )}
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;
