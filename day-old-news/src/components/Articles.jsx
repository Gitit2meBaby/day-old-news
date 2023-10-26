import React from 'react';
import { useGlobalContext } from '../context';

export const Articles = () => {
    const { headlines } = useGlobalContext();
    console.log(headlines);

    // limit the amount of characters in the descriptions
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
            return text;
        } else {
            return text.slice(0, maxLength) + '...';
        }
    }

    // check for API returns without a description
    const filteredArticles = (headlines.articles || []).filter((article) => article.description !== null && article.description !== undefined);

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


    return (
        <div>
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
                                        <img className='featured-img' src={headline.urlToImage} alt={headline.title} />
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
                                                <img className='secondary-img' src={headline.urlToImage} alt={headline.title} />
                                            </a>
                                            <p>{truncatedText}</p>
                                        </div>
                                    </article>
                                );
                            }

                            return null;
                        })}
                </section>

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
                                            <img className='secondary-img' src={headline.urlToImage} alt={headline.title} />
                                        </a>
                                        <p>{truncatedText}</p>
                                    </div>
                                </article>
                            );
                        })}
                </section>
            </section>
        </div>
    );

};
