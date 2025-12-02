import { usePortfolio } from '../contexts/PortfolioContext';

const CardTags = ({ tags }) => {
    const { filter } = usePortfolio();

    // Filter tags based on filter category
    const filteredTags = filter && Object.values(filter).some(f => f)
        ? tags.filter(tagGroup => filter[tagGroup.category])
        : tags;

    return (
        <ul className="flex flex-wrap mt-4 gap-1 max-h-12 overflow-hidden">
            {filteredTags.flatMap(tagGroup =>
                tagGroup.tags.split(', ').map((tag, i) => (
                    <li key={`${tagGroup.category}-${i}`} className="inline-block bg-slate-200 px-1 py-0.5">
                        <p className="text-xs mt-0.5 text-slate-500 uppercase cursor-pointer">{tag}</p>
                    </li>
                ))
            )}
        </ul>
    );
};

export default CardTags;



