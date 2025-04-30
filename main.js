import NewsCard from './src/components/news-card/news-card';
import './src/styles/style.sass';
import { getMostPopular } from './src/utilities/new-york-times-api';

const app = document.querySelector('#app');

const newsArticles = await getMostPopular('viewed', 7);

const newsCardElements = newsArticles.map(article => 
    NewsCard(article.title, article.abstract, article.media[0]['media-metadata'][0].url)
)

console.log(newsArticles);

app.append(...newsCardElements);