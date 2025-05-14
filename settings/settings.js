import '../src/styles/style.sass';

import { getSettings, setSettings } from '../src/utilities/settings';
import LogoHeader from '../src/components/logo-header/logo-header';
import BottomMenu from '../src/components/bottom-menu/bottom-menu';
import BottomMenuButton from '../src/components/bottom-menu/bottom-menu-button';

import logoImage from '../src/assets/images/ui/newsify-logo.svg';
import homeIcon from '../src/assets/images/ui/icons/home.svg';
import archiveIcon from '../src/assets/images/ui/icons/archive.svg';
import popularIcon from '../src/assets/images/ui/icons/popular.svg';
import settingsIcon from '../src/assets/images/ui/icons/settings.svg';
import SwtichButton from '../src/components/switch-button/switch-button';

const app = document.querySelector('#app');
const settingContainer = document.createElement('div');
const primaryHeading = document.createElement('h1');
const secondaryHeading = document.createElement('h2');

const switchButton = SwtichButton('Business');

// https://developer.nytimes.com/docs/top-stories-product/1/routes/%7Bsection%7D.json/get

const settings = getSettings();

const switchButtons = settings.categories.map(category => SwtichButton(category.name, !category.hidden));

primaryHeading.textContent = 'Settings';
secondaryHeading.textContent = 'Categories';

switchButtons.forEach(switchButton => switchButton.addEventListener('change', () => {
    const setting = settings.categories.find(category => category.name === switchButton.textContent);

    setting.hidden = !switchButton.checked;
    
    setCategories(settings);
}));

app.append(
    LogoHeader('Newsify', logoImage),
    primaryHeading,
    secondaryHeading,
    settingContainer,
    ...switchButtons,
    BottomMenu(
        BottomMenuButton('Home', '../', homeIcon),
        BottomMenuButton('Archive', '../archive/', archiveIcon),
        BottomMenuButton('Popular', '../popular/', popularIcon),
        BottomMenuButton('Settings', '../settings/', settingsIcon, false),
    )
)
