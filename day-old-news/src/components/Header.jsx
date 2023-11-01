import { useGlobalContext } from '../context';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Weather } from './Weather';
import { DropdownMenu } from './DropdownMenu'
import links from '../../links';
import { MobileNav } from './MobileNav';


export const Header = () => {
    const { updateSearchKeyword, fetchHeadlines, toggleMobileNav, isMobileNavVisible, setCategoryName, setCategoryColor, formSubmitted, userName } = useGlobalContext();
    const [searchClick, setSearchClick] = useState(false)
    const [dropdownPosition, setDropdownPosition] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [isDropdownHovered, setIsDropdownHovered] = useState(false);
    const [mobileSignInBtn, setMobileSignInBtn] = useState(false)
    const [popUp, setPopUp] = useState(true)


    // Calculate the current date and time
    const currentDateTime = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    const formattedDateTime = currentDateTime.toLocaleDateString(undefined, options);

    // Sticky Header (change which header and reference point depending on screen size)
    useEffect(() => {
        let stickyHeader = document.querySelector(".header-nav");
        let stickyThreshold = 120;

        const updateStickyHeader = () => {
            if (window.innerWidth <= 700) {
                stickyHeader = document.querySelector(".header-main");
                stickyThreshold = 40;
            } else {
                stickyHeader = document.querySelector(".header-nav");
                stickyThreshold = 120;
            }
        };

        const stickyNav = () => {
            const mainArticles = document.querySelector('.main-articles');
            const signInToggle = document.querySelector('.sign-in-toggle');
            const detailsPage = document.querySelector('.details-page');

            if (window.pageYOffset > stickyThreshold) {
                stickyHeader.classList.add("sticky");
                if (mainArticles) {
                    mainArticles.style.paddingTop = '5.5rem';
                }
                if (detailsPage) {
                    detailsPage.style.paddingTop = '5.5rem';
                }
                signInToggle.style.opacity = '1';
            } else {
                stickyHeader.classList.remove("sticky");
                if (mainArticles) {
                    mainArticles.style.paddingTop = '2rem';
                }
                if (detailsPage) {
                    detailsPage.style.paddingTop = '2rem';
                }
                if (!mobileSignInBtn) {
                    signInToggle.style.opacity = '0';
                } else {
                    signInToggle.style.opacity = '1';
                }
            }
        };

        let stickyBanner = document.querySelector(".mobile-pop");
        let stickyBannerThreshold = 120;

        const stickyAd = () => {

            if (window.pageYOffset > stickyBannerThreshold) {
                stickyBanner.classList.add("sticky-ad");
            } else {
                stickyBanner.classList.remove("sticky-ad");
            }
        };

        window.addEventListener('resize', updateStickyHeader);
        updateStickyHeader();

        window.onscroll = function () {
            stickyNav();
            stickyAd();

        };

        return () => {
            window.removeEventListener('resize', updateStickyHeader);
        };
    }, []);

    // Search Button open modal function
    const handleSearchClick = (e) => {
        e.stopPropagation();
        setSearchClick(true)
    }

    //handle clicks outside of the modal
    window.addEventListener('click', (e) => {
        if (!e.target.classList.contains('search')) {
            setSearchClick(false)
        } else {
            null
        }
    })

    // Take search values and rerender the headlines component
    const handleSearch = () => {
        const searchInputValue = document.getElementById('search').value;
        updateSearchKeyword(searchInputValue);
        fetchHeadlines(searchInputValue);
        setSearchClick(false)
    }

    //Positioning for dropdowns under nav items
    const businessLinkRef = useRef(null);
    const entertainmentLinkRef = useRef(null);
    const healthLinkRef = useRef(null);
    const scienceLinkRef = useRef(null);
    const sportsLinkRef = useRef(null);
    const techLinkRef = useRef(null);

    const handleLinkHover = (category, ref, color) => {

        const linkPosition = ref.current.getBoundingClientRect();
        const dropdownPosition = {
            top: `calc(${linkPosition.bottom}px - 125px)`,
            left: `calc(${linkPosition.left}px - 490px)`,
        };

        setDropdownPosition(dropdownPosition);
        setCurrentCategory(category);
        setCategoryColor(color)
        setCategoryName(category)
        setIsDropdownHovered(true)
    };

    const handleMouseLeave = () => {
        setCurrentCategory(null);
    };

    // Mobile Menu toggle show/hide
    const handleMenuToggle = () => {
        toggleMobileNav()
    }

    return (
        <>
            <header>
                <div className="header-top">
                    <a href="https://www.amazon.com/Deal-Week/s?k=Deal+of+The+Week">Deals of the week</a>
                    <p>{formattedDateTime}</p>
                    {formSubmitted ?
                        <p>Signed in</p> :
                        <a href="#">Sources</a>}
                </div>

                <div className="gradient-border"></div>

                <div className="header-main">
                    <div className="toggle sign-in-toggle" onClick={() => setMobileSignInBtn(!mobileSignInBtn)}>
                        {!mobileSignInBtn ? (<>
                            <svg stroke="#8e8e8e" fill="#8e8e8e" strokeWidth="0" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                            <svg className='hidden' stroke="#8e8e8e" fill="#8e8e8e" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                        </>) : (
                            <svg stroke="#8e8e8e" fill="#8e8e8e" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                        )}
                    </div>

                    {mobileSignInBtn && <div className='sign-in-modal'>
                        <Link to='/signup'><p onClick={() => setMobileSignInBtn(false)}>Sign up</p></Link>
                        <Link to='/signup'><p onClick={() => setMobileSignInBtn(false)}>Log in</p></Link>
                    </div>}
                    <Weather />
                    <div className="logo">
                        <Link to='/'><img src="../../public/assets/logo.webp" alt="Day Old News logo" /></Link>
                    </div>

                    <div className="btn-container">
                        {formSubmitted ?
                            <>
                                <Link to='/signup'><button className='user-btn'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clipRule="evenodd"></path></svg>{userName}</button> </Link>
                            </> :
                            <Link to='/signup'><button className="primary-btn">Sign Up</button> </Link>
                        }
                    </div>

                    <div className="menu-toggle toggle" onClick={() => handleMenuToggle()}>
                        {!isMobileNavVisible ?
                            <svg stroke="#8e8e8e" fill="#8e8e8e" strokeWidth="0" viewBox="0 0 512 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
                            :
                            <svg stroke="#8e8e8e" fill="#8e8e8e" strokeWidth="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>
                        }
                    </div>
                </div>
                {isMobileNavVisible ?
                    < MobileNav /> : null}

                <div className="header-nav">
                    <a href="/"><svg stroke="currentColor" fill="#000" strokeWidth="0" viewBox="0 0 1024 1024" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path></svg></a>
                    <div className="header-links">
                        <div
                            onMouseOver={() => handleLinkHover('business', businessLinkRef, '#ff0000')}
                            className='business-nav'
                            ref={businessLinkRef}
                        >
                            <p>Business</p>
                        </div>
                        <div
                            onMouseOver={() => handleLinkHover('entertainment', entertainmentLinkRef, '#ffa500')}
                            className='entertainment-nav'
                            ref={entertainmentLinkRef}
                        >
                            <p>Entertainment</p>
                        </div>
                        <div
                            onMouseOver={() => handleLinkHover('health', healthLinkRef, '#007bff')}
                            className='health-nav'
                            ref={healthLinkRef}
                        >
                            <p>Health</p>
                        </div>
                        <div
                            onMouseOver={() => handleLinkHover('science', scienceLinkRef, '#008000')}
                            className='science-nav'
                            ref={scienceLinkRef}
                        >
                            <p>Science</p>
                        </div>
                        <div
                            onMouseOver={() => handleLinkHover('sports', sportsLinkRef, '#4b0082')}
                            className='sports-nav'
                            ref={sportsLinkRef}
                        >
                            <p>Sports</p>
                        </div>
                        <div
                            onMouseOver={() => handleLinkHover('technology', techLinkRef, '#008279')}
                            className='technology-nav'
                            ref={techLinkRef}
                        >
                            <p>Technology</p>
                        </div>
                        {Object.keys(links).map((category) => (
                            <DropdownMenu key={category}
                                category={category}
                                links={links[category]}
                                dropdownPosition={dropdownPosition}
                                currentCategory={currentCategory}
                                onMouseLeave={handleMouseLeave}

                            />
                        ))}
                    </div>
                    <div onClick={(e) => handleSearchClick(e)} className="search-container">
                        <svg stroke="currentColor" fill="#000" strokeWidth="0" viewBox="0 0 1024 1024" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>

                        {searchClick && <div className='searchbox'>
                            <input id='search' type="text" placeholder='search by keyword...' />
                            <button className='primary-btn' onClick={() => handleSearch()}>Search</button>
                        </div>}
                    </div>
                </div>
            </header>

            {popUp &&
                <div className="mobile-pop">
                    <svg onClick={() => setPopUp(false)} id="popClose" stroke="#fff" fill="#fff" strokeWidth="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>
                    <img src="../../public/assets/portfolio-mob.webp" alt="Just hire Dan image" />
                </div>
            }
        </>
    );
};