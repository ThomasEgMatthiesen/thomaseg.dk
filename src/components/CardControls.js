import Button from './Button';
import openIcon from '../assets/icons/open.svg'
import audioOffIcon from '../assets/icons/audio_off.svg'
import audioOnIcon from '../assets/icons/audio_on.svg'

function CardControls({ active, hasSound, sound, setSound }) {

    const handleSound = (e) => {
        e.preventDefault();
        setSound(prev => !prev);
    }

    return (
        <div className={`absolute flex right-1.5 sm:right-auto bottom-1.5 ${active ? 'sm:bottom-6' : 'sm:-bottom-14'} transition-all`}>
            
            {/* Sound button (based on work data) */}
            {hasSound.toLowerCase() === "true" && <Button icon={sound ? audioOnIcon : audioOffIcon} xStyle={'hidden sm:block'} onClick={handleSound}/>}
            
            {/* Open button */}
            <Button icon={openIcon} xStyle={'sm:hidden scale-75'}/>

        </div>
    );
}
  
export default CardControls;