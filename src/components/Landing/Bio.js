import { useState } from 'react';

const Bio = () => {
    const [bioHover, setBioHover] = useState(false);

    const handleMouseEnter = () => {
        setBioHover(true);
    };

    const handleMouseLeave = () => {
        setBioHover(false);
    };

    return (
        <div 
            className="relative lg:absolute sm:mt-24 lg:mt-0 lg:w-1/2 xl:w-1/3 lg:left-40 xl:left-60 lg:top-40 cursor-pointer "
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className={`lg:absolute p-8 pt-10 sm:px-16 lg:px-8 sm:border-2 border-t-0 sm:border-t-2 border-solid border-black ${bioHover ? '' : 'lg:hidden'} bg-white`}>
                <p className="cursor-pointer text-sm text-center sm:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="hidden sm:inline-block absolute left-10 -top-6 px-3 py-2 border-2 border-solid border-black bg-white">
                <p className="mt-1 uppercase whitespace-nowrap cursor-pointer">Bio</p>
            </div>
        </div>
    )
};

export default Bio;