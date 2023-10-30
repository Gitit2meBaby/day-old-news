import links from '../../links'
import { Link } from 'react-router-dom'
import { Weather } from './Weather'
import { useGlobalContext } from '../context';


export const MobileNav = () => {
    const { isMobileNavVisible, setDetailsArticles, detailsArticles, setCategoryColor, categoryName, setCategoryName } = useGlobalContext();

    const mapLinks = (keyword) => {
        return links[keyword].map((link, index) => (
            <p className={keyword}
                to={index}
                key={index}
                onClick={() => {
                    setDetailsArticles(link);
                    setCategoryName((prevCategoryName) => `${prevCategoryName} ${link}`);
                    console.log('Clicked:', detailsArticles);
                    console.log('Current:', link)
                    console.log('new name:', categoryName)
                }}
            >{link}</p>
        ));
    }

    const handleSearch = () => {
        const searchValue = document.querySelector('#mobSearch').value;
        setDetailsArticles(searchValue)
    }

    const handleNavClick = (e, color, title) => {
        const mobileDropdown = e.target.nextElementSibling;
        mobileDropdown.classList.toggle('hidden');
        const pElement = e.target.querySelector('p');
        pElement.classList.toggle('active-text');
        const chevron = e.target.querySelector('svg')
        chevron.classList.toggle('rotate')
        setCategoryColor(color);
        setCategoryName(title)
    }


    return (
        <nav className={`mobile-nav ${isMobileNavVisible ? 'slide-in' : ''}`}>
            <Weather />
            <div className="mob-search">
                <input type="text" id='mobSearch' placeholder='Search' />
                <button onClick={() => handleSearch()} className='mob-search-btn'>
                    <svg stroke="#fff" fill="#fff" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                </button>
            </div>
            <div className="mob-nav-item">
                <p>Home</p>
            </div>
            <div onClick={(e) => handleNavClick(e, '#ff0000', 'business')} className='mob-nav-item business'>
                <p>Business</p>
                <svg stroke="#ff0000" fill="#ff0000" strokeWidth="1" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path></svg>
            </div>
            <div className="mobile-dropdown business-mob hidden">
                {mapLinks('business')}
            </div>
            <div onClick={(e) => handleNavClick(e, '#ffa500', 'entertainment')} className='mob-nav-item entertainment'>
                <p>Entertainment</p>
                <svg stroke="#ffa500" fill="#ffa500" strokeWidth="1" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path></svg>
            </div>
            <div className="mobile-dropdown entertainment-mob hidden">
                {mapLinks('entertainment')}
            </div>
            <div onClick={(e) => handleNavClick(e, '#007bff', 'health')} className='mob-nav-item health'>
                <p>Health</p>
                <svg stroke="#007bff" fill="#007bff" strokeWidth="1" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path></svg>
            </div>
            <div className="mobile-dropdown health-mob hidden">
                {mapLinks('health')}
            </div>
            <div onClick={(e) => handleNavClick(e, '#008000', 'science')} className='mob-nav-item science'>
                <p>Science</p>
                <svg stroke="#008000" fill="#008000" strokeWidth="1" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path></svg>
            </div>
            <div className="mobile-dropdown science-mob hidden">
                {mapLinks('science')}
            </div>
            <div onClick={(e) => handleNavClick(e, '#4b0082', 'sports')} className='mob-nav-item sports'>
                <p>Sports</p>
                <svg stroke="#4b0082" fill="#4b0082" strokeWidth="1" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path></svg>
            </div>
            <div className="mobile-dropdown sports-mob hidden">
                {mapLinks('sports')}
            </div>
            <div onClick={(e) => handleNavClick(e, '#008279', 'technology')} className='mob-nav-item technology'>
                <p>Technology</p>
                <svg stroke="#008279" fill="#008279" strokeWidth="1" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path></svg>
            </div>
            <div className="mobile-dropdown technology-mob hidden">
                {mapLinks('technology')}
            </div>
        </nav>
    )
}
