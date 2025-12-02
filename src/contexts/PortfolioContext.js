import { createContext, useState, useContext } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
    // Show more or less Cards -> Portfolio
    const [showAll, setShowAll] = useState(false);

    // Open filter menu state -> Filtermenu and Borderbox
    const [openFilterMenu, setOpenFilterMenu] = useState(false);

    // Filter state -> Filtermenu, Portfolio and CardTags
    const [filter, setFilter] = useState({
        development: false,
        audio: false,
        design: false
    });

    // Set filter state based on category input
    const handleFilter = (filterName) => {
        setFilter(prevState => {
            const newState = { ...prevState, [filterName]: !prevState[filterName] };
            const allActive = Object.values(newState).every(value => value === true);
            return allActive ? { development: false, audio: false, design: false } : newState;
        });
    };

    return (
        <PortfolioContext.Provider value={{ filter, handleFilter, openFilterMenu, setOpenFilterMenu, showAll, setShowAll }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    return useContext(PortfolioContext);
};
