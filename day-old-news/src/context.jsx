import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext();

const topHeadlinesUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c3f070d7c3164d759829cccd6c7308f0';

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [headlines, setHeadlines] = useState([]);
    const [categoryArticles, setCategoryArticles] = useState([]);

    const fetchHeadlines = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(topHeadlinesUrl);
            const headlineData = await response.json();
            setHeadlines(headlineData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, []);

    const fetchCategoryArticles = useCallback(async (keyword) => {
        try {
            const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=c3f070d7c3164d759829cccd6c7308f0`
            const response = await fetch(url);
            const categoryData = await response.json();
            setCategoryArticles(categoryData);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        const fetchAllData = async () => {
            await Promise.all([fetchHeadlines(), fetchCategoryArticles('technology')]);
            setLoading(false);
        };

        fetchAllData();
    }, []);

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
        <AppContext.Provider value={{ loading, setLoading, headlines, categoryArticles, setCategoryArticles, timeAgo, truncateText, fetchCategoryArticles }}>
            {children}
        </AppContext.Provider>
    );
};



export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext };
