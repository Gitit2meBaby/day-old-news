import { useState, useCallback, useRef } from 'react'
import { useGlobalContext } from '../context';

export const AlsoLike = () => {
    const { useIntersectionObserver } = useGlobalContext();
    const [popularHeadlines, setPopularHeadlines] = useState([]);
    const [apiCallMade, setApiCallMade] = useState(false);
    const targetElement = useRef(null);

    const onIntersect = () => {
        if (!apiCallMade) {
            fetchCategoryArticles('popular');
            setApiCallMade(true);
        }
    };

    useIntersectionObserver(targetElement, onIntersect);

    // check for API returns without a description
    const filteredArticles = (popularHeadlines.articles || []).filter((article) => article.description !== null && article.description !== undefined);

    const handleClick = (keyword) => {
        fetchCategoryArticles(keyword)
    }

    const fetchCategoryArticles = useCallback(async (keyword) => {
        try {
            const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=c3f070d7c3164d759829cccd6c7308f0`
            const response = await fetch(url);
            const categoryData = await response.json();
            setPopularHeadlines(categoryData);
            console.log('popular-fetched')
        } catch (error) {
            console.log(error);
        }

    }, []);

    return (
        <section ref={targetElement} className='popular-container'>
            <header className='category-header black-header'>
                <div>
                    <h2>You may also like</h2>
                </div>
            </header>



            <section className='popular-articles'>
                <h3>MOST READ</h3>
                <h3>TRENDING TOPICS</h3>
                <h3>MOST COMMENTS</h3>
                <div className="headlines-container">
                    {filteredArticles &&
                        filteredArticles.map((category, index) => {
                            const articleCount = index;
                            if (index >= 1 && index <= 5) {
                                return (
                                    <article className='popular-headlines' key={category.id}>
                                        <p className='count'>{articleCount}</p>
                                        <a href={category.url}>
                                            <p>{category.title}</p>
                                        </a>
                                    </article>
                                );
                            }
                            return null;
                        })}
                </div>

                <div className="hot-topics">
                    <div onClick={() => handleClick('bushfires')}>
                        <p>Australian Bushfires</p>
                    </div>
                    <div onClick={() => handleClick('living-cost')}>
                        <p>Cost of Living</p>
                    </div>
                    <div onClick={() => handleClick('bank')}>
                        <p>Reserve Bank</p>
                    </div>
                    <div onClick={() => handleClick('cricket')}>
                        <p>Cricket Live Scores</p>
                    </div>
                    <div onClick={() => handleClick('tennis')}>
                        <p>Tennis Live Scores</p>
                    </div>
                    <div onClick={() => handleClick('taylor')}>
                        <p>Taylor Swift</p>
                    </div>
                    <div onClick={() => handleClick('bunnings')}>
                        <p>Bunnings</p>
                    </div>
                    <div onClick={() => handleClick('kayo')}>
                        <p>Kayo</p>
                    </div>
                </div>

                <div className="popular-thumbs-container">
                    {filteredArticles &&
                        filteredArticles.map((category, index) => {
                            if (index >= 6 && index <= 7) {
                                return (
                                    <article key={category.id} className='popular-thumbnail'>
                                        <a href={category.url}>
                                            <img className='secondary-img' src={category.urlToImage} alt={category.title} />
                                            <h2>{category.title}</h2>
                                        </a>
                                    </article>
                                );
                            }
                            return null;
                        })}
                </div>
            </section>
        </section>
    );

}
