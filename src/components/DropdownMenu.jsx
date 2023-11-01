import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

export const DropdownMenu = ({ category, links, dropdownPosition, currentCategory, onMouseLeave }) => {
    const { setDetailsArticles, detailsArticles, setCategoryName } = useGlobalContext();
    return (
        <div
            className={`dropdown ${category}`}
            style={category === currentCategory ? dropdownPosition : { display: 'none' }}
            onMouseLeave={onMouseLeave}
        >
            {links.map((link, index) => (
                <Link to='/indetail' key={index}>
                    <p onClick={() => {
                        setDetailsArticles(link);
                        setCategoryName((prevCategoryName) => `${prevCategoryName} ${link}`);
                        console.log('Clicked:', detailsArticles);
                        console.log('Current:', link)
                    }}>
                        {link}
                    </p>
                </Link>
            ))}
        </div>
    );
};
