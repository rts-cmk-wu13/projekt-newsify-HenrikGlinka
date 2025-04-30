import './news-card.sass';

export default function NewsCard(title, content, imageUrl) {

    const BASE_CLASS = 'news-card';
    
    const containerElement = document.createElement('div');
    const titleElement = document.createElement('h2');
    const contentElement = document.createElement('p');
    const imageElement = document.createElement('img');

    containerElement.classList.add(`${BASE_CLASS}`);
    titleElement.classList.add(`${BASE_CLASS}__title`);
    contentElement.classList.add(`${BASE_CLASS}__content`);
    imageElement.classList.add(`${BASE_CLASS}__image`);

    titleElement.textContent = title;
    contentElement.textContent = content;

    imageElement.src = imageUrl;

    containerElement.append(imageElement, titleElement, contentElement);

    return containerElement;
}