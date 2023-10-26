import React from 'react'
import { useGlobalContext } from '../context';


export const MiniArticles = () => {
    const { categoryArticles } = useGlobalContext();

    return (
        <section>
            {categoryArticles.article &&
                categoryArticles.article.map((headline, index) => {

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
                    )
                }
                )}

        </section>
    )
}
