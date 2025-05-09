import '../src/styles/style.sass';
import LogoHeader from '../src/components/logo-header/logo-header';
import NewsCard from '../src/components/news-card/news-card';
import NewsCategory from '../src/components/news-category/news-category';
import BottomMenu from '../src/components/bottom-menu/bottom-menu';
import BottomMenuButton from '../src/components/bottom-menu/bottom-menu-button';

import logoImage from '../src/assets/images/ui/newsify-logo.svg';
import homeIcon from '../src/assets/images/ui/icons/home.svg';
import archiveIcon from '../src/assets/images/ui/icons/archive.svg';
import popularIcon from '../src/assets/images/ui/icons/popular.svg';
import settingsIcon from '../src/assets/images/ui/icons/settings.svg';

import { getArchive } from '../src/utilities/archive';

const app = document.querySelector('#app');
const newsContainer = document.createElement('div');

app.append(
    LogoHeader('Newsify', logoImage),
    newsContainer,
    BottomMenu(
        BottomMenuButton('Home', '/', homeIcon),
        BottomMenuButton('Archive', '/archive/', archiveIcon),
        BottomMenuButton('Popular', '/popular/', popularIcon),
        BottomMenuButton('Settings', '/settings/', settingsIcon),
    )
)

const articles = Object.values(getArchive());

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

if (newsContainer.innerHTML === '') newsContainer.innerHTML = '<p style="text-align:center">The archive is empty.</p>';
