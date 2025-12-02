import React, { useState } from 'react';
import film from '../../assets/svg/film.svg';
import profileImage from '../../assets/images/profile.jpeg';
import imageOne from '../../assets/images/foto_01.jpeg';
import imageTwo from '../../assets/images/foto_02.JPG';
import imageThree from '../../assets/images/foto_03.jpg';
import imageFour from '../../assets/images/foto_04.JPG';

const FilmReel = ({ onImageHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onImageHover(profileImage);
  };

  return (
    <div className="absolute hidden lg:flex items-center py-5 bottom-14 left-44">
      <div 
        className="flex flex-col items-center cursor-pointer" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-14 border-t-2 border-black"></div>
        <div className="h-20 w-12 border-x-2 border-black bg-white"></div>
        <div className="w-14 border-b-2 border-black"></div>
      </div>
      <div className="overflow-hidden -ml-1">
        <div 
          className={`relative cursor-pointer transition-all duration-500 ${isHovered ? 'left-0' : '-left-72'}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src={film} alt="" className="h-16" />
          <div className="absolute flex top-0 size-full pl-0.5 pr-1.5 py-2.5 gap-1">
            <div className="flex-auto bg-white rounded-sm cursor-pointer hover:bg-slate-200" 
              onMouseEnter={() => onImageHover(imageOne)}
            ></div>
            <div className="flex-auto bg-white rounded-sm cursor-pointer hover:bg-slate-200"
              onMouseEnter={() => onImageHover(imageTwo)}
            ></div>
            <div className="flex-auto bg-white rounded-sm cursor-pointer hover:bg-slate-200"
              onMouseEnter={() => onImageHover(imageThree)}
            ></div>
            <div className="flex-auto bg-white rounded-sm cursor-pointer hover:bg-slate-200"
              onMouseEnter={() => onImageHover(imageFour)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmReel;
