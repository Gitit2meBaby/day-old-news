import { useState, useCallback, useRef } from 'react'
import { useGlobalContext } from '../context';


export const Health = () => {
    const { truncateText, timeAgo, useIntersectionObserver } = useGlobalContext();
    const [healthHeadlines, setHealthHeadlines] = useState([]);
    const [apiCallMade, setApiCallMade] = useState(false);

    const targetElement = useRef(null);

    // observe proximity to fetch before category appears
    const onIntersect = () => {
        if (!apiCallMade) {
            fetchCategoryArticles('health');
            setApiCallMade(true);
        }
    };

    useIntersectionObserver(targetElement, onIntersect);

    // check for API returns without a description
    const filteredArticles = (healthHeadlines.articles || []).filter((article) => article.description !== null && article.description !== undefined);

    // call API according to keyword (hardcoded health initially)
    const fetchCategoryArticles = useCallback(async (keyword) => {
        try {
            const url = `https://gnews.io/api/v4/search?q=${keyword}&lang=en&country=au&max=10&apikey=8511c44e5027a4261d0d4304f5dab076`
            const response = await fetch(url);
            const categoryData = await response.json();
            setHealthHeadlines(categoryData);
            console.log('health-fetched')

        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <section ref={targetElement} className='category-container'>
            <header className='category-header blue-header'>
                <div>
                    <h2>Health</h2>
                    <svg stroke="#007bff" fill="#007bff" strokeWidth="1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clipRule="evenodd"></path></svg>
                </div>
                <div className="category-nav">
                    <ul>
                        <li onClick={() => fetchCategoryArticles('fitness')}>Fitness</li>
                        <li onClick={() => fetchCategoryArticles('lifestyle')}>Lifestyle</li>
                        <li onClick={() => fetchCategoryArticles('diet')}>Diet</li>
                        <li onClick={() => fetchCategoryArticles('beauty')}>Beauty</li>
                        <li onClick={() => fetchCategoryArticles('relationships')}>Relationships</li>
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