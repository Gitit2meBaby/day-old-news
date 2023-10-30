import { useCallback, useEffect, useState } from "react";
import { useGlobalContext } from '../context';

export const InDetail = () => {
    const { detailsArticles, setDetailsArticles } = useGlobalContext();
    const [apiCallMade, setApiCallMade] = useState(false);

    const fetchPageArticles = useCallback(async () => {
        if (!apiCallMade && detailsArticles) { // Check if detailsArticles is not falsy
            try {
                const url = `https://newsapi.org/v2/everything?q=${detailsArticles}&apiKey=c3f070d7c3164d759829cccd6c7308f0`;
                const response = await fetch(url);
                const categoryData = await response.json();
                // Check if the response data is not empty or an error
                if (categoryData.articles && categoryData.articles.length > 0) {
                    setDetailsArticles(categoryData);
                }
                setApiCallMade(true);
                console.log('details-fetched', categoryData);
            } catch (error) {
                console.log(error);
            }
        }
    }, [detailsArticles, apiCallMade, setDetailsArticles]);

    // Call fetchPageArticles when the component renders
    useEffect(() => {
        setApiCallMade(false);
        fetchPageArticles();
    }, [detailsArticles]);

    // check for API returns without a description
    const filteredArticles = (detailsArticles.articles || []).filter((article) => article.description !== null && article.description !== undefined);

    return (
        <section className="details-page">
            {filteredArticles &&
                filteredArticles.map((category) => {
                    return (
                        <article className='details-article' key={category.id}>
                            <a href={category.url}>
                                <img src={category.urlToImage} alt={category.title} />
                            </a>
                            <div className='details-content'>
                                <p>{category.source.name}</p>
                                <a href={category.url}>
                                    <h2>{category.title}</h2>
                                </a>
                                <p>{category.description}</p>
                            </div>
                        </article>
                    );
                })
            }
        </section>
    )

}
