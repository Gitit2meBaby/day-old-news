import React from 'react';

export const Header = () => {
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

    return (
        <header>
            <div className="header-top">
                <a href="https://www.amazon.com/Deal-Week/s?k=Deal+of+The+Week">Deals of the week</a>
                <p>{formattedDateTime}</p>
                <a href="#">Sources</a>
            </div>

            <div className="gradient-border"></div>

            <div className="header-main">
                <div className="weather">
                    <p>Sydney</p>
                    <p>25/ 30</p>
                </div>
                <div className="logo">
                    <img src="../../public/assets/logo.webp" alt="Day Old News logo" />
                </div>

                <div className="btn-container">
                    <button>Sign Up</button>
                </div>
            </div>

            <div className="header-nav">
                <a href="/"><svg stroke="currentColor" fill="#000" strokeWidth="0" viewBox="0 0 1024 1024" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path></svg></a>
                <div className="header-links">
                    <a href="/">Business</a>
                    <a href="/">Entertainment</a>
                    <a href="/">Health</a>
                    <a href="/">Science</a>
                    <a href="/">Sports</a>
                    <a href="/">Technology</a>
                </div>
                <div className="search-container">
                    <svg stroke="currentColor" fill="#000" strokeWidth="0" viewBox="0 0 1024 1024" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path></svg>
                </div>
            </div>
        </header>
    );
};
