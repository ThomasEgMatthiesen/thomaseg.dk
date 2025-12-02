import { usePortfolio } from '../contexts/PortfolioContext';

const BorderBox = ({ children }) => {
    const { openFilterMenu, setOpenFilterMenu } = usePortfolio();

    const handleFilterMenu = () => setOpenFilterMenu(prev => !prev);

    return (
        <section className="relative px-2 py-10 sm:p-8 md:p-10 lg:p-12 xl:p-14 sm:border-x-2 border-b-2 mb-16 border-black">
            
            {/* Content */}
            {children}

            {/* Box filter overlay */}
            <div 
                className={`absolute top-0 right-0 ${openFilterMenu ? 'opacity-80 size-full' : 'opacity-0 size-0'} sm:hidden bg-white transition-opacity`} 
                onClick={handleFilterMenu}>
            </div>

        </section>
    );
};

export default BorderBox;