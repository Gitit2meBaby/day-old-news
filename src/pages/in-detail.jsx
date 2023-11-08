import { useEffect } from "react";
import { useGlobalContext } from '../context';

export const InDetail = () => {
    const { detailsArticles, fetchPageArticles, setApiDetailsCallMade, categoryColor, categoryName } = useGlobalContext();

    // Call fetchPageArticles when the state changes
    useEffect(() => {
        setApiDetailsCallMade(false);
        fetchPageArticles();
    }, [detailsArticles]);

    //Split string from categoryName for heading styling
    const inputString = categoryName;
    const words = inputString.split(' ');
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const categoryTitle = capitalizeFirstLetter(words[0]);
    const subCategoryTitle = words.slice(1).join(' ');


    // check for API returns without a description
    const filteredArticles = (detailsArticles.articles || []).filter((article) => article.description !== null && article.description !== undefined);

    return (
        <section className="details-page">
            <h1 style={{ color: categoryColor }}>{categoryTitle}</h1>
            <h2 style={{ color: categoryColor }}>{subCategoryTitle}</h2>
            {filteredArticles &&
                filteredArticles.map((category) => {
                    return (
                        <article className='details-article' key={category.id}>
                            <p className="mob-details-src" style={{ color: categoryColor }}>{category.source.name}</p>
                            <a href={category.url}>
                                <img src={category.image} alt={category.title} />
                            </a>
                            <div className='details-content'>
                                <p style={{ color: categoryColor }}>{category.source.name}</p>
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