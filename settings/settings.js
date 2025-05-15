import '../src/styles/style.sass';

import { getSettings, initializeDarkMode, isDarkMode, setSettings, toggleDarkMode } from '../src/utilities/settings-manager';
import LogoHeader from '../src/components/logo-header/logo-header';
import BottomMenu from '../src/components/bottom-menu/bottom-menu';
import BottomMenuButton from '../src/components/bottom-menu/bottom-menu-button';

import logoImage from '../src/assets/images/ui/newsify-logo.svg';
import homeIcon from '../src/assets/images/ui/icons/home.svg?raw';
import archiveIcon from '../src/assets/images/ui/icons/archive.svg?raw';
import popularIcon from '../src/assets/images/ui/icons/popular.svg?raw';
import settingsIcon from '../src/assets/images/ui/icons/settings.svg?raw';
import SwtichButton from '../src/components/switch-button/switch-button';
import NewsCategory from '../src/components/news-category/news-category';

initializeDarkMode();

const app = document.querySelector('#app');
const settingContainer = document.createElement('div');
const primaryHeading = document.createElement('h1');
const darkmodeButton = document.createElement('button');

const settings = getSettings();

const switchButtons = settings.categories.map(category => SwtichButton(category.name, !category.hidden));

primaryHeading.textContent = 'Settings';
darkmodeButton.textContent = 'Toggle dark mode'

switchButtons.forEach(switchButton => switchButton.addEventListener('change', event => {
    const setting = settings.categories.find(category => category.name === switchButton.textContent);

    console.log(event.target.checked);
    
    setting.hidden = !event.target.checked;
    
    setSettings(settings);
}));

darkmodeButton.addEventListener('click', toggleDarkMode);

app.append(
    LogoHeader('Newsify', logoImage),
    primaryHeading,
    settingContainer,
    NewsCategory('Categories', switchButtons),
    darkmodeButton,
    BottomMenu(
        BottomMenuButton('Home', '../', homeIcon),
        BottomMenuButton('Archive', '../archive/', archiveIcon),
        BottomMenuButton('Popular', '../popular/', popularIcon),
        BottomMenuButton('Settings', '../settings/', settingsIcon, true),
    )
)
