import React from 'react';

const Books = ({ setHoveredBook, setIsHoveringBook, handleBookClick }) => {
    const bookList = [
        { "title": "Speculative Everything", "author": "Anthony Dunne & Fiona Raby", "width": "w-14", "height": "h-80" },
        { "title": "Universal Principles of UX", "author": "Irene Pereyra", "width": "w-11", "height": "h-72" },
        { "title": "SCRUM", "author": "Jeff Sutherland", "width": "w-9", "height": "h-60" },
        { "title": "The Reflective Practitioner", "author": "Donald Schön", "width": "w-10", "height": "h-64" },
        { "title": "Sound Business", "author": "Julian Treasure", "width": "w-11", "height": "h-72" },
        { "title": "Design of Everyday Things", "author": "Donald Norman", "width": "w-8", "height": "h-52" },
        { "title": "Change by Design", "author": "Tim Brown", "width": "w-10", "height": "h-64" },
        { "title": "The Soundscape", "author": "R. Murray Schafer", "width": "w-8", "height": "h-56" },
        { "title": "Thoughtful Interaction Design", "author": "Jonas Löwgren", "width": "w-12", "height": "h-72" },
        { "title": "Behavior in Public Places", "author": "Erving Goffman", "width": "w-14", "height": "h-64" }
    ];

    return (
        <div className="flex justify-end items-end pl-1">
            {bookList.map((book, index) => (
                <div
                    key={`book-${index}`}
                    className={`${book.height} ${book.width} border-2 border-white cursor-pointer hover:bg-black transition-all`}
                    onMouseEnter={() => {
                        setHoveredBook({ title: book.title, author: book.author });
                        setIsHoveringBook(true);
                    }}
                    onMouseLeave={() => {
                        setHoveredBook({ title: '', author: '' });
                        setIsHoveringBook(false);
                    }}
                    onClick={() => handleBookClick(book.title, book.author)}
                >
                    <div className="h-full border-2 border-black"></div>
                </div>
            ))}
        </div>
    );
};

export default Books;