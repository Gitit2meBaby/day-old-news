import powell from '../../public/assets/powell.webp'
import ticToc from '../../public/assets/tic-toc.webp'
import expensiveHome from '../../public/assets/expensive-home.webp'

export const RealEstate = () => {
    return (

        <section className="real-estate">
            <header className='category-header black-header'>
                <div>
                    <h2>from realestate.com.au</h2>
                    <svg stroke="#040404" fill="#040404" strokeWidth="1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clipRule="evenodd"></path></svg>
                </div>
            </header>

            <article className='category-secondary'>
                <div className='type-title'>
                    <a href="https://www.realestate.com.au/news/?campaignType=external&campaignChannel=syndication&campaignName=ncacont&campaignContent=&campaignSource=newscomau&campaignPlacement=spa">
                        <p className='category-title'>REALESETATE.COM.AU</p>
                    </a>                </div>
                <a href='https://www.realestate.com.au/news/south-yarra-late-architect-allan-powells-house-rumoured-to-have-been-home-to-famous-racehorse-archer/?campaignType=external&campaignChannel=syndication&campaignName=ncacont&campaignContent=&campaignSource=newscomau&campaignPlacement=spa'>
                    <h2>Rumours swirl for $10m home listed after 30 years</h2>
                </a>
                <div className="secondary-content">
                    <a href='https://www.realestate.com.au/news/south-yarra-late-architect-allan-powells-house-rumoured-to-have-been-home-to-famous-racehorse-archer/?campaignType=external&campaignChannel=syndication&campaignName=ncacont&campaignContent=&campaignSource=newscomau&campaignPlacement=spa'>
                        <img className='secondary-img' src={powell} alt="Late architect Allan Powells property" />
                    </a>
                    <p>Late architect Allan Powell’s property has hit the market for the first time in 30 years, and there’s one big rumour attached to it.</p>
                </div>
            </article>

            <article className='category-secondary'>
                <div className='type-title'>
                    <a href="https://www.realestate.com.au/news/?campaignType=external&campaignChannel=syndication&campaignName=ncacont&campaignContent=&campaignSource=newscomau&campaignPlacement=spa">
                        <p className='category-title'>REALESETATE.COM.AU</p>
                    </a>
                </div>
                <a href='https://www.realestate.com.au/news/onlyfans-stars-family-retreat-in-southern-highlands-listed-for-12m/?campaignType=external&campaignChannel=syndication&campaignName=ncacont&campaignContent=&campaignSource=newscomau&campaignPlacement=spa'>
                    <h2>Troubled OnlyFans star’s $12m home for sale
                    </h2>
                </a>
                <div className="secondary-content">
                    <a href='https://www.realestate.com.au/news/onlyfans-stars-family-retreat-in-southern-highlands-listed-for-12m/?campaignType=external&campaignChannel=syndication&campaignName=ncacont&campaignContent=&campaignSource=newscomau&campaignPlacement=spa'>
                        <img className='secondary-img' src={ticToc} alt="Paris Ow-Yang" />
                    </a>
                    <p>The Aussie chateau owned by the family of troubled OnlyFans model Paris Ow-Yang is for sale, less than two years after it last changed hands.</p>
                </div>
            </article>

            <article className='category-secondary'>
                <div className='type-title'>
                    <a href="https://www.realestate.com.au/news/?campaignType=external&campaignChannel=syndication&campaignName=ncacont&campaignContent=&campaignSource=newscomau&campaignPlacement=spa">
                        <p className='category-title'>REALESETATE.COM.AU</p>
                    </a>
                </div>
                <a href='https://www.realestate.com.au/news/new-yorkbased-ad-man-david-droga-bought-45m-beachfront-as-his-holiday-home/?campaignType=external&campaignChannel=syndication&campaignName=ncacont&campaignContent=&campaignSource=newscomau&campaignPlacement=spa'>
                    <h2>Dad’s ‘irresponsible’ reason behind $45m buy
                    </h2>
                </a>
                <div className="secondary-content">
                    <a href='https://www.realestate.com.au/news/new-yorkbased-ad-man-david-droga-bought-45m-beachfront-as-his-holiday-home/?campaignType=external&campaignChannel=syndication&campaignName=ncacont&campaignContent=&campaignSource=newscomau&campaignPlacement=spa'>
                        <img className='secondary-img' src={expensiveHome} alt="$45 million bungalow" />
                    </a>
                    <p>The advertising guru who paid $45 million for the old bungalow that is Australia’s most expensive oceanfront home has revealed a candid confession behind the buy.</p>
                </div>
            </article>

        </section>

    )
}
