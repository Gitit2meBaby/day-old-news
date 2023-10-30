import { useGlobalContext } from '../context';

export const DropdownMenu = ({ category, links, dropdownPosition, currentCategory, }) => {
    const { setDetailsArticles, detailsArticles, setCategoryName } = useGlobalContext();
    return (
        <div
            className={`dropdown ${category}`}
            style={category === currentCategory ? dropdownPosition : { display: 'none' }}
        >
            {links.map((link, index) => (
                <p key={index}
                    onClick={() => {
                        setDetailsArticles(link);
                        setCategoryName((prevCategoryName) => `${prevCategoryName} ${link}`); console.log('Clicked:', detailsArticles);
                        console.log('Current:', link)
                    }}>
                    {link}
                </p>
            ))}
        </div>
    );
};
