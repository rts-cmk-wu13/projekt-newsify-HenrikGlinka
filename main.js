import './src/styles/style.sass';
import LogoHeader from './src/components/logo-header/logo-header';
import SearchBox from './src/components/search-box/search-box';
import NewsCard from './src/components/news-card/news-card';
import NewsCategory from './src/components/news-category/news-category';
import BottomMenu from './src/components/bottom-menu/bottom-menu';
import BottomMenuButton from './src/components/bottom-menu/bottom-menu-button';

import logoImage from './src/assets/images/ui/newsify-logo.svg';
import homeIcon from './src/assets/images/ui/icons/home.svg';
import archiveIcon from './src/assets/images/ui/icons/archive.svg';
import popularIcon from './src/assets/images/ui/icons/popular.svg';
import settingsIcon from './src/assets/images/ui/icons/settings.svg';

import { getMostPopular } from './src/utilities/new-york-times-api';

const app = document.querySelector('#app');
const newsContainer = document.createElement('div');

const newsData = await getMostPopular('viewed', 7);

console.log(newsData);


const searchbox = SearchBox();

app.append(
    LogoHeader('Newsify', logoImage, searchbox),
    newsContainer,
    BottomMenu(
        BottomMenuButton('Home', './', homeIcon),
        BottomMenuButton('Archive', './archive/', archiveIcon),
        BottomMenuButton('Popular', './popular/', popularIcon),
        BottomMenuButton('Settings', './settings/', settingsIcon),
    )
)

searchbox.addEventListener('input', event => {
    const query = event.target.value.toLowerCase();

    const filteredData = newsData.filter(article => {
        return (
            article.section.toLowerCase().includes(query) ||
            article.title.toLowerCase().includes(query) ||
            article.abstract.toLowerCase().includes(query)
        )
    })

    updateNews(filteredData);
})

function updateNews(articles) {
    newsContainer.innerHTML = '';

    const categories = articles.map(article => article.section);
    const uniqueCategories = [...new Set(categories)].sort();

    uniqueCategories.forEach(category => {
        const categoryArticles = articles.filter(article => article.section === category);
        const newsCards = categoryArticles.map(article => NewsCard(article))

        newsContainer.append(NewsCategory(category, newsCards));
    });
}

updateNews(newsData);
