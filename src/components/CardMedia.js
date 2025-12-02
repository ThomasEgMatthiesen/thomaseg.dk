import { useRef, useEffect, useState } from "react";

function CardMedia({ work, active, sound, children }) {
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    // Play and pause video
    useEffect(() => {
        if (videoRef.current && videoLoaded) {
            active ? videoRef.current.play() : videoRef.current.pause();
        }
    }, [active, videoLoaded]);

    return (
        
        <figure className="relative flex justify-center aspect-video border-b-2 border-black bg-black overflow-hidden">

            {/* Video */}
            <video 
                ref={videoRef}
                muted={!sound}
                loop
                playsInline 
                className={`absolute max-w-none size-full object-cover transition-all hidden sm:block ${!active && 'grayscale'}`}
                onLoadedData={() => setVideoLoaded(true)}
            >
                <source src={work.shortVideo} />
            </video>

            {/* Media overlay */}
            <div className={`absolute size-full bg-slate-300 opacity-50 ${active && 'sm:opacity-0'} transition-all`}></div>

            {/* Image */}
            <img src={work.image} alt="" className="sm:hidden size-full object-cover"/>

            {children}
        </figure>
    );
}
  
export default CardMedia;