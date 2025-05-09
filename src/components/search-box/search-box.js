import './search-box.sass';

export default function SearchBox() {

    const BASE_CLASS = 'search-box';

    const containerElement = document.createElement('form');
    const searchInput = document.createElement('input');

    containerElement.classList.add(`${BASE_CLASS}`);
    searchInput.classList.add(`${BASE_CLASS}__search`);

    searchInput.type = 'search';
    searchInput.placeholder = 'Search news';

    containerElement.append(searchInput);

    return containerElement;
}