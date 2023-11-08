import { useGlobalContext } from '../context';
import { MiniArticles } from '../components/MiniArticles'

export const Articles = () => {
    const { headlines, timeAgo, truncateText } = useGlobalContext();

    // check for API returns without a description
    const filteredArticles = (headlines.articles || []).filter((article) => article.description !== null && article.description !== undefined);

    return (
        <section className='main-articles'>
            <section className='top-articles'>
                {filteredArticles &&
                    filteredArticles.map((headline, index) => {
                        let originalText = headline.description;
                        let maxLength = 90;
                        let truncatedText = truncateText(originalText, maxLength);
                        let formattedTime = timeAgo(headline.publishedAt);

                        if (index === 0) {
                            return (
                                <article className='featured' key={headline.id}>
                                    <p className='bold-red'>BREAKING</p>
                                    <img className='featured-img' src={headline.image} alt={headline.title} />
                                    <a href={headline.url}>
                                        <h2>{headline.title}</h2>
                                    </a>
                                    <p>{headline.description}</p>
                                    <a href={headline.url}>
                                        <button className='text-btn'>Learn more</button>
                                    </a>
                                </article>
                            );
                        } else if (index >= 1 && index <= 3) {
                            return (
                                <article key={headline.id} className='secondary'>
                                    <div className='type-title'>
                                        <p className='category-title'>{headline.source.name}</p>
                                        <p className='time-text'>{formattedTime}</p>
                                    </div>
                                    <a href={headline.url}>
                                        <h2>{headline.title}</h2>
                                    </a>
                                    <div className="secondary-content">
                                        <a href={headline.url}>
                                            <img className='secondary-img' src={headline.image} alt={headline.title} />
                                        </a>
                                        <p>{truncatedText}</p>
                                    </div>
                                </article>
                            );
                        }

                        return null;
                    })}
            </section>

            <MiniArticles />

            <section className="grid-articles">
                {filteredArticles &&
                    filteredArticles.slice(4, 14).map((headline) => {
                        let originalText = headline.description;
                        let maxLength = 90;
                        let truncatedText = truncateText(originalText, maxLength);
                        let formattedTime = timeAgo(headline.publishedAt);


                        return (
                            <article key={headline.id} className='secondary'>
                                <div className='type-title'>
                                    <p className='category-title'>{headline.source.name}</p>
                                    <p className='time-text'>{formattedTime}</p>
                                </div>
                                <a href={headline.url}>
                                    <h2>{headline.title}</h2>
                                </a>
                                <div className="secondary-content">
                                    <a href={headline.url}>
                                        <img className='secondary-img' src={headline.image} alt={headline.title} />
                                    </a>
                                    <p>{truncatedText}</p>
                                </div>
                            </article>
                        );
                    })}
            </section>
        </section>
    );

};