import { useState, useCallback, useRef } from 'react'
import { useGlobalContext } from '../context';

export const Sports = () => {
    const { truncateText, timeAgo, useIntersectionObserver } = useGlobalContext();
    const [sportsHeadlines, setSportsHeadlines] = useState([]);
    const [apiCallMade, setApiCallMade] = useState(false);
    const targetElement = useRef(null);

    // observe proximity to make API call
    const onIntersect = () => {
        if (!apiCallMade) {
            fetchCategoryArticles('sports');
            setApiCallMade(true);
        }
    };

    useIntersectionObserver(targetElement, onIntersect);

    // check for API returns without a description
    const filteredArticles = (sportsHeadlines.articles || []).filter((article) => article.description !== null && article.description !== undefined);

    // make API call according to link keyword (initially hardcoded to sports)
    const fetchCategoryArticles = useCallback(async (keyword) => {
        try {
            const url = `https://gnews.io/api/v4/search?q=${keyword}&lang=en&country=au&max=10&apikey=8511c44e5027a4261d0d4304f5dab076`
            const response = await fetch(url);
            const categoryData = await response.json();
            setSportsHeadlines(categoryData);
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <section ref={targetElement} className='category-container'>
            <header className='category-header green-header'>
                <div>
                    <h2>Sports</h2>
                    <svg stroke="#ba1313" fill="#ba1313" strokeWidth="1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clipRule="evenodd"></path></svg>
                </div>
                <div className="category-nav">
                    <ul>
                        <li onClick={() => fetchCategoryArticles('movies')}>Movies</li>
                        <li onClick={() => fetchCategoryArticles('celebrity')}>Celebrity</li>
                        <li onClick={() => fetchCategoryArticles('music')}>Music</li>
                        <li onClick={() => fetchCategoryArticles('books')}>Books</li>
                        <li onClick={() => fetchCategoryArticles('awards')}>Awards</li>
                    </ul>
                </div>
            </header>

            <section className='category-articles'>
                {filteredArticles &&
                    filteredArticles.map((category, index) => {

                        if (index === 0) {
                            return (
                                <article className='category-featured' key={category.id}>
                                    <div className='type-title'>
                                        <p className='category-title'>{category.source.name}</p>
                                        <p className='time-text'>{timeAgo(category.publishedAt)}</p>
                                    </div>
                                    <img src={category.image} alt={category.title} />
                                    <a href={category.url}>
                                        <h2>{category.title}</h2>
                                    </a>
                                </article>
                            );
                        } else if (index >= 1 && index <= 4) {
                            return (
                                <article key={category.id} className='category-secondary'>
                                    <div className='type-title'>
                                        <p className='category-title'>{category.source.name}</p>
                                        <p className='time-text'>{timeAgo(category.publishedAt)}</p>
                                    </div>
                                    <a href={category.url}>
                                        <h2>{category.title}</h2>
                                    </a>
                                    <div className="secondary-content">
                                        <a href={category.url}>
                                            <img className='secondary-img' src={category.image} alt={category.title} />
                                        </a>
                                        <p>{truncateText(category.description, 90)}</p>
                                    </div>
                                </article>
                            );
                        } else
                            return null;
                    })}
            </section>
        </section>
    )
}
