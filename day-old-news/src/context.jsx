import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const AppContext = React.createContext();

// const topHeadlinesUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=c3f070d7c3164d759829cccd6c7308f0';

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

    const categoryUrl = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=c3f070d7c3164d759829cccd6c7308f0';

    // https://newsapi.org/v2/everything?q=bitcoin&

    const fetchCategoryArticles = useCallback(async () => {
        try {
            const response = await fetch(categoryUrl);
            const categoryData = await response.json();
            setCategoryArticles(categoryData);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        const fetchAllData = async () => {
            await Promise.all([fetchHeadlines(), fetchCategoryArticles()]);
            setLoading(false);
        };

        fetchAllData();
    }, []);

    return (
        <AppContext.Provider value={{ loading, headlines, categoryArticles }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext };
