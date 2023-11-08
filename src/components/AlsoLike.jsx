import { useState, useCallback, useRef } from 'react'
import { useGlobalContext } from '../context';

export const AlsoLike = () => {
    const { useIntersectionObserver } = useGlobalContext();
    const [popularHeadlines, setPopularHeadlines] = useState([]);
    const [apiCallMade, setApiCallMade] = useState(false);
    const targetElement = useRef(null);

    // observe when getting close to make API call
    const onIntersect = () => {
        if (!apiCallMade) {
            fetchCategoryArticles('popular');
            setApiCallMade(true);
        }
    };

    useIntersectionObserver(targetElement, onIntersect);

    // check for API returns without a description
    const filteredArticles = (popularHeadlines.articles || []).filter((article) => article.description !== null && article.description !== undefined);

    // Api call using keyword (hardcoded as popular initially)
    const fetchCategoryArticles = useCallback(async (keyword) => {
        try {
            const url = `https://gnews.io/api/v4/search?q=${keyword}&lang=en&country=au&max=10&apikey=8511c44e5027a4261d0d4304f5dab076`
            const response = await fetch(url);
            const categoryData = await response.json();
            setPopularHeadlines(categoryData);
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

                <h3 className='mob-title'>TRENDING TOPICS</h3>

                <div className="hot-topics">
                    <div onClick={() => fetchCategoryArticles('bushfires')}>
                        <p>Australian Bushfires</p>
                    </div>
                    <div onClick={() => fetchCategoryArticles('living-cost')}>
                        <p>Cost of Living</p>
                    </div>
                    <div onClick={() => fetchCategoryArticles('bank')}>
                        <p>Reserve Bank</p>
                    </div>
                    <div onClick={() => fetchCategoryArticles('cricket')}>
                        <p>Cricket Live Scores</p>
                    </div>
                    <div onClick={() => fetchCategoryArticles('tennis')}>
                        <p>Tennis Live Scores</p>
                    </div>
                    <div onClick={() => fetchCategoryArticles('taylor')}>
                        <p>Taylor Swift</p>
                    </div>
                    <div onClick={() => fetchCategoryArticles('bunnings')}>
                        <p>Bunnings</p>
                    </div>
                    <div onClick={() => fetchCategoryArticles('kayo')}>
                        <p>Kayo</p>
                    </div>
                </div>

                <h3 className='mob-title'>MOST COMMENTS</h3>

                <div className="popular-thumbs-container">
                    {filteredArticles &&
                        filteredArticles.map((category, index) => {
                            if (index >= 6 && index <= 7) {
                                return (
                                    <article key={category.id} className='popular-thumbnail'>
                                        <a href={category.url}>
                                            <img className='secondary-img' src={category.image} alt={category.title} />
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