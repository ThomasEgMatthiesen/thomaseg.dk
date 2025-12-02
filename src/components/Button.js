import { useState } from "react";

function Button({ icon, label, labelPos, onClick, xStyle, active }) {
  const [hover, setHover] = useState(false);
  const handleHover = () => setHover(prev => !prev);

  return (
    <div className={`relative flex justify-center items-center ${xStyle}`}>

      {/* Button */}
      <button 
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={`p-2.5 border-2 border-black rounded-full bg-white ${hover && 'sm:shadow-md' } ${active && 'invert border-white'}`} 
        onClick={onClick}
      >

        {/* Icon */}
        <img src={icon} className="size-6" />
      
      </button>

      {/* Label */}
      {label && <div className={`absolute px-0.5 border-2 border-black sm:border-0 bg-white ${labelPos}`}>
          <p className={`whitespace-nowrap text-xs mt-0.5 ${hover ? '' : 'sm:hidden'}`}>{label}</p>
      </div>}

    </div>
  );
}
  
export default Button;
  