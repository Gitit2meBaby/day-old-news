import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext();

const topHeadlinesUrl = 'https://gnews.io/api/v4/search?q=general&lang=en&country=au&max=10&apikey=8511c44e5027a4261d0d4304f5dab076'

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [headlines, setHeadlines] = useState([]);
    const [categoryArticles, setCategoryArticles] = useState([]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const [detailsArticles, setDetailsArticles] = useState('')
    const [apiDetailsCallMade, setApiDetailsCallMade] = useState(false);
    const [categoryColor, setCategoryColor] = useState('')
    const [categoryName, setCategoryName] = useState('')
    const [userName, setUserName] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [userLocation, setUserLocation] = useState('')

    // check for local Storage
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUserName(storedUser);
        const storedLocation = JSON.parse(localStorage.getItem("location"));
        setUserLocation(storedLocation)
        const existingUser = JSON.parse(localStorage.getItem("existingUser"))
        setFormSubmitted(existingUser)
    }, []);

    // mobile menu toggle
    const toggleMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible);
    };

    //searchbar in header function to pass state
    const updateSearchKeyword = (keyword) => {
        setSearchKeyword(keyword);
    };

    useEffect(() => {
        if (searchKeyword) {
            fetchHeadlines(searchKeyword);
        }
    }, [searchKeyword]);

    //API call for latest news to be displayed top of page
    const fetchHeadlines = useCallback(async (searchKeyword) => {
        setLoading(true);
        try {
            const response = await fetch(searchKeyword ? `https://gnews.io/api/v4/search?q=${searchKeyword}&lang=en&country=us&max=10&apikey=8511c44e5027a4261d0d4304f5dab076`
                : topHeadlinesUrl);

            const headlineData = await response.json();
            setHeadlines(headlineData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, []);

    //API call for the miniArticles that start at top of page (try to reuse this function throughout as it works from a keyword)
    const fetchCategoryArticles = useCallback(async (keyword) => {
        try {
            const url = `https://gnews.io/api/v4/search?q=${keyword}&lang=en&country=au&max=10&apikey=8511c44e5027a4261d0d4304f5dab076`
            const response = await fetch(url);
            const categoryData = await response.json();
            setCategoryArticles(categoryData);
        } catch (error) {
            console.log(error);
        }
    }, []);

    //Wait for both to load before showing content
    useEffect(() => {
        const fetchAllData = async () => {
            await Promise.all([fetchHeadlines(), fetchCategoryArticles('technology')]);
            setLoading(false);
        };

        fetchAllData();
    }, [searchKeyword]);

    //reusable interaction observer to put on subsequent API loads lower on the page
    const useIntersectionObserver = (targetElement, onIntersect, rootMargin = '-100px') => {
        useEffect(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            onIntersect();
                            observer.unobserve(entry.target);
                        }
                    });
                },
                { rootMargin }
            );

            if (targetElement.current) {
                observer.observe(targetElement.current);
            }

            return () => {
                if (targetElement.current) {
                    observer.unobserve(targetElement.current);
                }
            };
        }, [targetElement, onIntersect, rootMargin]);
    }

    // Api call for details page render
    const fetchPageArticles = useCallback(async () => {
        if (!apiDetailsCallMade && detailsArticles) {
            try {
                const url = `https://gnews.io/api/v4/search?q=${detailsArticles}&lang=en&country=au&max=10&apikey=8511c44e5027a4261d0d4304f5dab076`;
                const response = await fetch(url);
                const categoryData = await response.json();
                if (categoryData.articles && categoryData.articles.length > 0) {
                    setDetailsArticles(categoryData);
                }
                setApiDetailsCallMade(true);
                console.log('details-fetched', categoryData);
            } catch (error) {
                console.log(error);
            }
        }
    }, [detailsArticles, apiDetailsCallMade, setDetailsArticles]);

    // change the publishedAt integer into something nice
    function timeAgo(publishedDate) {
        const currentDate = new Date();
        const publishedDateObj = new Date(publishedDate);
        const timeDifference = currentDate - publishedDateObj;

        // Define time units
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (seconds < 60) {
            return seconds + " seconds ago";
        } else if (minutes < 60) {
            return minutes + " minutes ago";
        } else if (hours < 24) {
            return hours + " hours ago";
        } else if (days < 2) {
            return days + " day ago";
        }
        else {
            return days + " days ago";
        }
    }

    // limit the amount of characters in the descriptions
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength) + '...';
        }
    }

    return (
        <AppContext.Provider value={{
            loading, setLoading,
            headlines, setHeadlines, fetchHeadlines,
            categoryArticles, setCategoryArticles,
            timeAgo, truncateText,
            fetchCategoryArticles,
            useIntersectionObserver,
            searchKeyword, updateSearchKeyword,
            toggleMobileNav,
            isMobileNavVisible,
            detailsArticles, setDetailsArticles,
            apiDetailsCallMade, setApiDetailsCallMade,
            fetchPageArticles, categoryColor, setCategoryColor,
            categoryName, setCategoryName,
            userName, setUserName,
            formSubmitted, setFormSubmitted,
            userLocation, setUserLocation
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext };
