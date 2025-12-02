import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import work from '../assets/data/work.json';
import NoPage from './NoPage';
import audioOnIcon from '../assets/icons/audio_on.svg'
import audioOffIcon from '../assets/icons/audio_off.svg'
import backArrowIcon from '../assets/icons/arrow_back.svg'
import Button from './Button';

const WorkPage = () => {

    // Get id from URL and set project
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [sound, setSound] = useState(false);

    useEffect(() => {
        const selectedProject = work.find((item) => item.id === id);
        setProject(selectedProject);
    }, [id]);

    if (!project) { return <NoPage />; }
    
    const handleSound = () => {
        setSound(prev => !prev);
    }

    return (
        <main className="flex py-8 sm:py-12">
            
            {/* Back button */}
            <div className="fixed bottom-0 sm:relative">
                <Link to="/" >
                    <div className='flex flex-col p-4 sm:p-0 sm:sticky top-12'>
                        <button className="border-2 border-black p-2.5 bg-white sm:hover:shadow-lg">
                            <img src={backArrowIcon} alt="" className="size-6" />
                        </button>
                    </div>
                </Link>
            </div>

            {/* WorkPage content */}
            <div className="flex-1 sm:ml-4 lg:mx-12 sm:border-2 border-black">

                {/* Video */}
                <div className='relative flex justify-center border-y-2 border-black sm:border-t-0 mb-4 sm:mb-0 bg-black'>
                    <video className='w-full'
                    loop
                    muted={!sound}
                    autoPlay
                    playsInline>
                        <source src={project.longVideo} />
                    </video>
                    <div className='absolute bottom-4 lg:bottom-10'>
                        {project.hasSound.toLowerCase() === "true" && <Button icon={sound ? audioOnIcon : audioOffIcon} onClick={handleSound}/>}
                    </div>
                </div>


                <div className="p-4 sm:p-6 lg:p-12">

                    {/* Info */}
                    <h1 className="text-xl font-bold uppercase md:text-2xl xl:text-3xl">{project.title}</h1>
                    <p className='text-sm lg:text-base py-2 xl:w-5/6'>{project.text}</p>
                    <ul className="flex flex-wrap mt-4 gap-1 sm:gap-1.5">
                        {project.tags.flatMap(tagGroup =>
                            tagGroup.tags.split(', ').map((tag, i) => (
                                <li key={`${tagGroup.category}-${i}`} className="inline-block bg-slate-200 px-1 py-0.5 sm:px-2">
                                    <p className="text-xs sm:text-sm mt-0.5 text-slate-500 uppercase">{tag}</p>
                                </li>
                            ))
                        )}
                    </ul>

                    {/* Images */}
                    {project.images && project.images.length > 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 mt-8">
                            {project.images.map((image, index) => (
                                <div key={index} className="bg-green-100 overflow-hidden border-2 border-black">
                                    <img src={image} alt={`Project ${index + 1}`} className="size-full object-cover" />
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </main>
    )
}

export default WorkPage;