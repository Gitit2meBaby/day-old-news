export const Footer = () => {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer>
            <div className="footer-top" onClick={() => scrollToTop()}>
                <button className="scroll-btn"><svg stroke="#fff" fill="currentColor" strokeWidth="1" viewBox="0 0 16 16" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clipRule="evenodd"></path></svg></button>
                <img src="../../public/assets/logo.webp" alt="day old news logo" />

                <div className="social">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path></svg>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35 25.1-4.7 49.1-14.1 70.5-26.7-8.3 25.7-25.7 47.4-48.8 61.1 22.4-2.4 44-8.6 64-17.3-15.1 22.2-34 41.9-55.7 57.6z"></path></svg>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path></svg>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path></svg>
                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line></svg>

                    <button className="primary-btn">Sign Up</button>
                </div>
            </div>

            <div className="footer-nav">
                <div className="nav-item">
                    <h3>Sign Up</h3>
                    <ul>
                        <li>Registration</li>
                        <li>Connect</li>
                        <li>In the Know Quiz</li>
                        <li>Newsletters</li>
                        <li>Competitions</li>
                    </ul>
                </div>
                <div className="nav-item">
                    <h3>About Us</h3>
                    <ul>
                        <li>Welcome to dayoldnews.com</li>
                        <li>The Team</li>
                        <li>Our values</li>
                        <li>Code of Conduct</li>
                        <li>Shopping</li>
                        <li>Coupons</li>
                    </ul>
                </div>
                <div className="nav-item">
                    <h3>Help and Support</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>General Feedback</li>
                        <li>Advertise with us</li>
                        <li>Site map</li>
                        <li>Licensing and reprints</li>
                    </ul>
                </div>
                <div className="nav-item">
                    <h3>Our News Network</h3>
                    <ul>
                        <li>Kids News</li>
                        <li>The Daily Telegraph</li>
                        <li>Herald Sun</li>
                        <li>The Courier Mail</li>
                    </ul>
                </div>
                <div className="nav-item">
                    <h3>Our Partners</h3>
                    <ul>
                        <li>Kidspot</li>
                        <li>Body+Soul</li>
                        <li>realestate.com.au</li>
                        <li>FoxSports</li>
                        <li>CODE Sports</li>
                    </ul>
                </div>
                <div className="nav-item">
                    <h3>Our Apps</h3>
                    <img src="../../public/assets/apple-app-store.webp" alt="apple app store download link" />
                    <img src="../../public/assets/google-play.png" alt="get it on google play app download link" />
                </div>
            </div>

            <div className="fine-print">
                <p><span>A NOTE ABOUT RELEVANT ADVERTISING:</span>We collect information about the content (including ads) you use across this site and use it to make both advertising and content more relevant to you on our network and other sites. <a href="#">Find out more about our policy and your choices, including how to opt-out.</a>Sometimes our articles will try to help you find the right product at the right price. We may receive payment from third parties for publishing this content or when you make a purchase through the links on our sites.</p>
            </div>

            <div className="footer-links">
                <div>
                    <a href="#">Privacy Policy</a>
                </div>
                <div>
                    <a href="#">Relevant ads opt-out</a>
                </div>
                <div>
                    <a href="#">Cookie policy</a>
                </div>
                <div>
                    <a href="#">Terms of use</a>
                </div>
            </div>

            <div className="disclosure">
                <p>This is a portfolio project designed to mimic <a href="https://www.news.com.au/">News.com.au</a> Powered by Dan - thisworldofdans@gmail.com</p>
            </div>

        </footer>
    )
}
