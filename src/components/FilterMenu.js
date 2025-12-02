import { usePortfolio } from '../contexts/PortfolioContext';
import Button from './Button';
import filterIcon from '../assets/icons/filter.svg'
import closeIcon from '../assets/icons/close.svg'
import developmentIcon from '../assets/icons/development.svg'
import audioIcon from '../assets/icons/audio.svg'
import designIcon from '../assets/icons/design.svg'

function FilterMenu({ }) {
  const { filter, handleFilter, openFilterMenu, setOpenFilterMenu } = usePortfolio();
  const handleFilterMenu = () => setOpenFilterMenu(prev => !prev);

  return (
    <div className={`relative flex flex-col justify-between items-center gap-4 ${openFilterMenu ? 'h-52' : 'h-12'} sm:h-fit transition-all`}>
      
      {/* Line */}
      <div className="absolute w-0.5 h-full bg-black sm:hidden"></div>
      
      {/* Toggle button */}
      <Button 
      icon={openFilterMenu ? closeIcon : filterIcon} 
      onClick={handleFilterMenu} 
      xStyle={'sm:hidden'} />

      {/* Filter buttons */}
      <div className={`flex flex-col sm:flex-row gap-2 sm:gap-4 ${openFilterMenu ? 'scale-100' : 'scale-0'} transition-all origin-top sm:transform-none`}>
        <Button 
        icon={developmentIcon} 
        label={'udvikling'} 
        labelPos={'right-14 sm:right-auto sm:-top-5'} 
        onClick={() => handleFilter('development')}
        active={filter.development} />
        <Button 
        icon={audioIcon} 
        label={'audio'} 
        labelPos={'right-14 sm:right-auto sm:-top-5'} 
        onClick={() => handleFilter('audio')} 
        active={filter.audio} />
        <Button 
        icon={designIcon} 
        label={'design'} 
        labelPos={'right-14 sm:right-auto sm:-top-5'} 
        onClick={() => handleFilter('design')} 
        active={filter.design} />
      </div>

    </div>
  );
}
  
export default FilterMenu;