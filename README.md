This project design is based on www.news.com.au, Taking the design element out of the picture allowed me to focus more on the functionality and sharpen some sass skills to achieve the same layout on all screen sizes.

I used the free News API to fetch the news data. WeatherAPI for the ..weather.
- Some endpoints did not seem to work, including country specific searches.
- weather API says that it has SSL but only gives http urls, roling with the cert at the moment, could be my downfall.

Would be nice on a future iteration of this project to use the IP address of the user to set the relevant news and weather on page load.

Currently the user data is stored in local storage it would be much better to implement firebase or MongoDB.

Each category component is currently reusing a fair chunk of code, would be nice to do a major refactor and store all the possible categories in a seperate JS file and map over to create categories.
- I had issues doing this due to layout discrepencies in each category, placement in the DOM and a variety of other excuses as to why i am currently too inexperienced to pull this off.

I learnt some good sass tricks along the way, first time for a legitimate use of functions. Still unsure as to the stylesheet being to big, in future could be better to have a stylesheet containing the core styles for 1st render and defer loading of the rest.
- also tried to have less classnames and instead use pseudo selectors like :last-of-type etc. Not sure if this was a win in the end, I do think it makes the stylings more versatile for future changes in layout, but also could be hard to follow for someone fresh to the codebase.

Finally I now realise I was completely overusing useContext through a global provider, trying to avoid prop drilling it seemed legit when i started, but compiled to something that is a bit ugly due to some unneccesary rerendering on state changes. Not really that big of a deal in this circumstance, but will try to avoid that in the future.

As with any project there is lots of little improvements that could be done, but i feel that last 20% will take 80% of the time, and i am happy with the state thats in.. 

const [doneEnough, setdoneEnough] = useState(true)