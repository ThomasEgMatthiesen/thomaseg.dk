import { useState, useRef } from 'react';
import HoverDisplay from './HoverDisplay';
import Books from './Books';

const Bookshelf = () => {
    const [hoveredBook, setHoveredBook] = useState({ title: '', author: '' });
    const [mousePosition, setMousePosition] = useState({ y: 0 });
    const [isHoveringBook, setIsHoveringBook] = useState(false);
    const parentRef = useRef(null);
    const childRef = useRef(null);

    const handleBookClick = (title, author) => {
        const query = `${title} ${author}`;
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleSearchUrl, '_blank');
    };

    const handleMouseMove = (e) => {
        if (isHoveringBook && parentRef.current) {
            const parentRect = parentRef.current.getBoundingClientRect();
            const childRect = childRef.current.getBoundingClientRect();
            let relativeY = e.clientY - parentRect.top - (parentRect.height / 2) - (childRect.height / 4);
            
            // Keep between -100 and 100
            relativeY = Math.max(-100, Math.min(100, relativeY));
            
            setMousePosition({ y: relativeY });
        }
    };

    return (
        <section 
            className="hidden lg:flex justify-end items-center pt-32 pb-20" 
            onMouseMove={handleMouseMove}
            ref={parentRef}
        >
            <HoverDisplay 
                hoveredBook={hoveredBook} 
                mousePosition={mousePosition}
                isHoveringBook={isHoveringBook}
                childRef={childRef}
            />
            <Books 
                setHoveredBook={setHoveredBook}
                setIsHoveringBook={setIsHoveringBook}
                handleBookClick={handleBookClick}
            />
        </section>
    );
};

export default Bookshelf;