import { useState, useRef } from 'react';
import { useInView } from "framer-motion"
import { Link } from 'react-router-dom';
import CardMedia from './CardMedia';
import CardControls from './CardControls';
import CardTags from './CardTags'

function Card({ work }) {
    const [hover, setHover] = useState(false);
    const [sound, setSound] = useState(false);

    // References for card fade in on view
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true });

    // Activate video and sound
    const handleHover = () => {
        setHover(prev => !prev);
        hover && setSound(false);
    }

    return (
        <Link to={`/${work.id}`} className="flex">
            <article 
            ref={cardRef}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className={`flex flex-1 flex-col border-2 border-black shadow-md sm:hover:shadow-lg cursor-pointer ${isInView ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>

                {/* Card media and controls */}
                <CardMedia work={work} active={hover} sound={sound}>
                    <CardControls active={hover} hasSound={work.hasSound} sound={sound} setSound={setSound}/>
                </CardMedia>

                {/* Card info */}
                <figcaption className="flex flex-1 flex-col p-4 sm:p-6 md:p-8">
                    <h2 className="text-md sm:text-lg font-bold uppercase cursor-pointer">{work.title}</h2>
                    <p className="text-xs sm:text-sm line-clamp-3 cursor-pointer">{work.text}</p>
                    {work.tags.length > 0 && <CardTags tags={work.tags} />}
                </figcaption>

            </article>
        </Link>
    );
}
  
export default Card;