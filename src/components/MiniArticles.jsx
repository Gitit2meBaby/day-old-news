import { useGlobalContext } from '../context';

export const MiniArticles = () => {
    const { categoryArticles, timeAgo } = useGlobalContext();

    // check for API returns without a description
    const filteredArticles = (categoryArticles.articles || []).filter((article) => article.description !== null && article.description !== undefined);

    return (
        <section className='mini-articles'>
            <div className="mini-article-title">
                <h2>In Tech</h2>
            </div>
            <div className="heading-articles-container">
                {filteredArticles &&
                    filteredArticles.slice(0, 3).map((category) => {
                        return (
                            <article className='heading-article' key={category.id}>
                                <div className='type-title'>
                                    <p className='time-text'>{timeAgo(category.publishedAt)}</p>
                                </div>
                                <a href={category.url}>
                                    <h2>{category.title}</h2>
                                </a>
                            </article>
                        );
                    })}
            </div>

            <div className="featured-container">
                <div className="mini-article-title">
                    <h2>Featured</h2>
                </div>
                {filteredArticles && filteredArticles[4] && (
                    <article key={filteredArticles[4].id} className='mini-article'>
                        <a href={filteredArticles[4].url}>
                            <img className='secondary-img' src={filteredArticles[4].image} alt={filteredArticles[4].title} />
                            <h2>{filteredArticles[4].title}</h2>
                        </a>
                    </article>
                )}
            </div>

            <div className="mini-article-title">
                <h2>Popular</h2>
            </div>
            {filteredArticles &&
                filteredArticles.slice(5, 10).map((category) => {
                    return (
                        <article key={category.id} className='img-title-article'>
                            <a href={category.url}>
                                <img className='secondary-img' src={category.image} alt={category.title} />
                                <h2>{category.title}</h2>
                            </a>
                        </article>
                    );
                })}
        </section >
    );
};
