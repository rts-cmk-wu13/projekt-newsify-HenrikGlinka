/*
    There is no official endpoint for categories. These are stolen from:
    https://developer.nytimes.com/docs/top-stories-product/1/routes/%7Bsection%7D.json/get

    - Henrik
*/

export const getSettings = () => JSON.parse(localStorage.getItem('settings')) ?? {
    categories: [ 
        { name: 'arts', hidden: false },
        { name: 'automobiles', hidden: false },
        { name: 'books', hidden: false },
        { name: 'briefing', hidden: false },
        { name: 'business', hidden: false },
        { name: 'dining', hidden: false },
        { name: 'fashion', hidden: false },
        { name: 'food', hidden: false },
        { name: 'health', hidden: false },
        { name: 'home', hidden: false },
        { name: 'insider', hidden: false },
        { name: 'magazine', hidden: false },
        { name: 'movies', hidden: false },
        { name: 'nyregion', hidden: false },
        { name: 'obituaries', hidden: false },
        { name: 'opinion', hidden: false },
        { name: 'podcasts', hidden: false },
        { name: 'politics', hidden: false },
        { name: 'realestate', hidden: false },
        { name: 'science', hidden: false },
        { name: 'sports', hidden: false },
        { name: 'style', hidden: false },
        { name: 'sundayreview', hidden: false },
        { name: 'technology', hidden: false },
        { name: 'theater', hidden: false },
        { name: 't-magazine', hidden: false },
        { name: 'travel', hidden: false },
        { name: 'upshot', hidden: false },
        { name: 'us', hidden: false },
        { name: 'well', hidden: false },
        { name: 'world', hidden: false },
    ]
};


export const setSettings = content => localStorage.setItem('settings', JSON.stringify(content));

export const categoryIsHidden = categoryName => {
    const settings = getSettings();

    if (settings?.categories === undefined) return false;

    return settings.categories.find(category => category.name === categoryName)?.hidden ?? false;
}

export const isDarkMode = () => getSettings().darkMode;

export const toggleDarkMode = () => {
    const currentSettings = getSettings();

    if (!currentSettings.darkMode) {
        currentSettings.darkMode = true;
        document.body.classList.add('dark-mode');
    } else {
        currentSettings.darkMode = false;
        document.body.classList.remove('dark-mode');
    }

    setSettings(currentSettings);
}

export const initializeDarkMode = () => {
    if (isDarkMode()) document.body.classList.add('dark-mode');
}