import React from 'react';

const HoverDisplay = ({ hoveredBook, mousePosition, isHoveringBook, childRef }) => {
    const translateY = isHoveringBook ? `translateY(${mousePosition.y}px)` : 'translateY(0)';

    return (
        <>
            <div
                className="flex flex-col items-center px-3 py-2 border-2 border-black mr-1 transition duration-200 ease-out"
                ref={childRef}
                style={{ transform: translateY }}
            >
                <p className="mt-1">{hoveredBook.title ? `'${hoveredBook.title}'` : 'BOGREOL'}</p>
                <p>{hoveredBook.author ? `af ${hoveredBook.author}` : ''}</p>
            </div>
            <div
                className="h-0.5 w-1/12 xl:w-2/12 bg-black transition duration-200 ease-out"
                style={{ transform: translateY }}
            ></div>
        </>
    );
};

export default HoverDisplay;