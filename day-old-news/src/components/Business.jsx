import { useEffect } from 'react'
import { useGlobalContext } from '../context';


export const Business = () => {
    const { fetchCategoryArticles, categoryArticles, truncateText, setLoading, timeAgo } = useGlobalContext();

    useEffect(() => {
        fetchCategoryArticles('business');
        setLoading(false);
    }, []);

    // check for API returns without a description
    const filteredArticles = (categoryArticles.articles || []).filter((article) => article.description !== null && article.description !== undefined);

    return (
        <section className='category-container'>
            <header className='category-header'>
                <h2>Business</h2>
                <div className="category-nav">
                    <ul>
                        <li>Economy</li>
                        <li>Corporate</li>
                        <li>Investment</li>
                        <li>Trade</li>
                        <li>Bitcoin</li>
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
                                    <img src={category.urlToImage} alt={category.title} />
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
                                            <img className='secondary-img' src={category.urlToImage} alt={category.title} />
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
