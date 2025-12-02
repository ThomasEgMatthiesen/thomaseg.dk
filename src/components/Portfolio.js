import { useRef } from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import work from "../assets/data/work.json"
import BorderBox from './BorderBox';
import BorderHeader from './BorderHeader';
import FilterMenu from './FilterMenu'
import Button from './Button';
import ArrowDownIcon from '../assets/icons/arrow_down.svg';
import ArrowUpIcon from '../assets/icons/arrow_up.svg';
import Card from "./Card";

const Portfolio = () => {
    const { filter, showAll, setShowAll } = usePortfolio();
    const boxRef = useRef(null);

    // Filter work elements based on filter category
    const filteredWork = work.filter(workItem => {
        const { categories } = workItem;
        const matchesFilter = Object.keys(filter).some(filterKey => filter[filterKey] && categories.includes(filterKey));
        return Object.values(filter).every(value => !value) || matchesFilter;
    });

    // Show and hide all cards
    const handleShowAll = () => {
        const newShowAll = !showAll;
        setShowAll(newShowAll);

        // Scroll to bottom of portfolio on 'show less' (delay to match new element size)
        if (boxRef.current && !newShowAll) {
            setTimeout(() => { boxRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' }); }, 1);
        }
    }

    // Scroll to top of portfolio on label click
    const handleLabelClick = () => {
        boxRef.current && boxRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });;
    }

    return (
        <div className="scroll-mb-14" ref={boxRef}>
            {/* Portfolio sticky header */}
            <BorderHeader title={'portfolio'} handleLabelClick={handleLabelClick} >
                <FilterMenu />
            </BorderHeader>

            {/* Portfolio content */}
            <BorderBox>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
                    {filteredWork.slice(0, showAll ? work.length : 4).map((workItem) => (
                        <Card key={workItem.id} work={workItem} />
                    ))}
                </div>

                {/* Show more or less button */}
                <div className="relative flex justify-center bg-green-300">
                    <div className="absolute flex gap-4 -bottom-16 sm:-bottom-14 md:-bottom-16 lg:-bottom-20 z-20">
                        <Button icon={showAll ? ArrowUpIcon : ArrowDownIcon} label={showAll ? 'vis færre' : 'vis alle'} labelPos={'-bottom-6'} onClick={handleShowAll}/>
                    </div>
                </div>
            </BorderBox>
        </div>
    );
};

export default Portfolio;