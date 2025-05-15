import '../src/styles/style.sass';
import LogoHeader from '../src/components/logo-header/logo-header';
import NewsCard from '../src/components/news-card/news-card';
import NewsCategory from '../src/components/news-category/news-category';
import BottomMenu from '../src/components/bottom-menu/bottom-menu';
import BottomMenuButton from '../src/components/bottom-menu/bottom-menu-button';

import logoImage from '../src/assets/images/ui/newsify-logo.svg';
import homeIcon from '../src/assets/images/ui/icons/home.svg?raw';
import archiveIcon from '../src/assets/images/ui/icons/archive.svg?raw';
import popularIcon from '../src/assets/images/ui/icons/popular.svg?raw';
import settingsIcon from '../src/assets/images/ui/icons/settings.svg?raw';

import { getArchive } from '../src/utilities/archive';
import SearchBox from '../src/components/search-box/search-box';
import { initializeDarkMode } from '../src/utilities/settings-manager';

initializeDarkMode();

const app = document.querySelector('#app');
const newsContainer = document.createElement('div');

const newsData = Object.values(getArchive());
const searchbox = SearchBox();

app.append(
    LogoHeader('Newsify', logoImage, searchbox),
    newsContainer,
    BottomMenu(
        BottomMenuButton('Home', '../', homeIcon),
        BottomMenuButton('Archive', '../archive/', archiveIcon, true),
        BottomMenuButton('Popular', '../popular/', popularIcon),
        BottomMenuButton('Settings', '../settings/', settingsIcon),
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
        const newsCards = categoryArticles.map(article => NewsCard(article, true));

        newsCards.forEach(card => card.addEventListener('removed', () => {
            const parent = card.parentElement;

            card.remove();

            if (parent.children.length === 1) parent.remove();
        }));

        newsContainer.append(NewsCategory(category, newsCards));
    });

    if (newsContainer.innerHTML === '') {
        const isSearching = searchbox?.dataset?.value?.length > 0 ?? false;
        const message = isSearching ? 'No search results found.' : 'The archive is empty.'
        
        newsContainer.innerHTML = /* html */ `<p style="text-align:center; margin-top:2rem;">${message}</p>`;
    }
}

updateNews(newsData);