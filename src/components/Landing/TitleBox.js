import React from 'react';

const TitleBox = () => {
    return (
    <>
        <div className="inline-block absolute -top-6 sm:top-4 sm:-left-6 px-3 py-2 border-2 border-solid border-black bg-white">
            <p className="mt-1 uppercase text-xl">Thomas Eg Matthiesen</p>
        </div>
        <div className="inline-block absolute -bottom-4 sm:-bottom-6 sm:-right-20 px-3 py-2 border-2 border-solid border-black bg-white z-10 sm:z-0">
            <p className="mt-1 uppercase whitespace-nowrap text-xs sm:text-base">Digital designer - udvikling, audio og ux</p>
        </div>
    </>
    );
};

export default TitleBox;