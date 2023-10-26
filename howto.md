copy UI from https://www.news.com.au/

fetch first the users IP address, set up a modal for them to choose a different country.
ChooseCountryModal - component

While this is happening background load all the news Articles.
Use top headlines endpoint, filter for most recent and create the main article

Load weather data for the capital city of the IP address, await fetch reques until after content has loaded to not slow down page speed loading times.
Weather - component

create email signup and legit send them an email
SignupModal - component

Header can have these categories...
Possible options: businessentertainmentgeneralhealthsciencesportstechnology.
!Pages - each with their own fetch request
Header - component (weather logo and signup)
Nav - component

Also should include the search icon and link to the search by keyword endpoint, this could use the same page, conditionally render 'just in' to something else

Main page hero has 3 component types.
FeatureArticle
Article
JustIn

would be cool for just in to calculate time since the article went live using the published at reference

provide links to the main url with learn more buttons.
be sure to filter out ones without an image for main display

ON scroll find a point to begin fetching data for each category
These would be a single component
Category - component

Each category would require a header, we dont have enough info in the api to give much, but could instead use the search endpoint and just hard code specific search term endpoints using, ie..
All articles about Bitcoin
Definition
GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=c3f070

Within each of these category section looks like just two components that could be reused from the hero section
FeatureArticle - reuse component
Article - reuse component

if the category headers are used we would just have to repopulate the same section rather than redirecting to another page


