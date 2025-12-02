
const BorderHeader = ({ title, children, handleLabelClick}) => {

    return (
        <div className="sticky flex items-center px-4 md:px-6 xl:px-10 -top-2 sm:top-0 border-b-2 border-black bg-white z-10">
            <div className='relative flex justify-between h-12 w-full -bottom-6'>

                {/* Label */}
                <div className="flex justify-center items-center px-3 py-2 border-2 border-black bg-white cursor-pointer" onClick={handleLabelClick}>
                    <p className='mt-1 uppercase cursor-pointer'>{title}</p>
                </div>

                {/* Controls */}
                {children}
                
            </div>
        </div>
    );
};

export default BorderHeader;