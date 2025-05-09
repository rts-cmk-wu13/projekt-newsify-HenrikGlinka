import './news-card.sass';
import noImageUrl from './no-image.svg';
import { addSwipeEvents } from '../../utilities/swiper';
import archiveIcon from './archive.svg';
import archiveFilledIcon from './archive-fill.svg';
import deleteIcon from './delete.svg';
import deleteFilledIcon from './delete-fill.svg';
import { addToArchive, isArchived, removeFromArchive } from '../../utilities/archive';

export default function NewsCard(article, buttonTypeDelete = false) {

    const BASE_CLASS = 'news-card';

    const articleTitle = article.title;
    const articleContent = article.abstract;
    const articleImageUrl = article.media[0]?.['media-metadata'][0].url;
    const articleUrl = article.url;

    const containerElement = document.createElement('div');
    const articleElement = document.createElement('article');
    const titleElement = document.createElement('h2');
    const contentElement = document.createElement('p');
    const imageElement = document.createElement('img');
    const actionButton = document.createElement('button');
    const actionButtonIcon = document.createElement('img');

    containerElement.classList.add(`${BASE_CLASS}`);
    articleElement.classList.add(`${BASE_CLASS}__article`);
    titleElement.classList.add(`${BASE_CLASS}__title`);
    contentElement.classList.add(`${BASE_CLASS}__content`);
    imageElement.classList.add(`${BASE_CLASS}__image`);
    actionButton.classList.add(`${BASE_CLASS}__button`);
    actionButtonIcon.classList.add(`${BASE_CLASS}__button-icon`);

    if (buttonTypeDelete) actionButton.classList.add(`${BASE_CLASS}__button--delete`);

    addSwipeEvents(articleElement);

    titleElement.textContent = articleTitle;
    contentElement.textContent = articleContent;

    imageElement.src = articleImageUrl ?? noImageUrl;

    actionButtonIcon.src = buttonTypeDelete ? deleteIcon : (isArchived(article.url) ? archiveFilledIcon : archiveIcon);


    articleElement.addEventListener('swipemove', event => {

        const MIN_MOVE_DISTANCE = 2;
        const ELEMENT_WIDTH = articleElement.getBoundingClientRect().width;
        const CURRENT_X = Number(articleElement.style.translate.match(/[-\d\.]+/)?.[0] ?? 0);

        if (Math.abs(event.detail.x) < MIN_MOVE_DISTANCE) return;

        let newXPosition = CURRENT_X + event.detail.x;

        if (newXPosition > 0) newXPosition = 0
        else if (Math.abs(newXPosition) > ELEMENT_WIDTH) newXPosition = -ELEMENT_WIDTH;

        articleElement.style.translate = `${newXPosition}px`;
        actionButton.style.width = `${Math.abs(newXPosition)}px`;
    });

    articleElement.addEventListener('swipeend', () => {

        const ELEMENT_WIDTH = articleElement.getBoundingClientRect().width;
        const ELEMENT_HEIGHT = articleElement.getBoundingClientRect().height;
        const OPEN_SWIPE_DISTANCE = ELEMENT_WIDTH / 4;
        const ACTIVATION_SWIPE_DISTANCE = ELEMENT_WIDTH / 1.5;
        const CURRENT_X = Number(articleElement.style.translate.match(/[-\d\.]+/)?.[0] ?? 0);

        if (Math.abs(CURRENT_X) >= ACTIVATION_SWIPE_DISTANCE) {
            const isRemovingArticle = buttonTypeDelete || isArchived(article.url);

            articleElement.style.translate = `${-ELEMENT_WIDTH}px`;
            actionButton.style.width = `${ELEMENT_WIDTH}px`;

            setTimeout(() => {
                if (isRemovingArticle) {
                    removeFromArchive(article);
                    actionButtonIcon.src = buttonTypeDelete ? deleteFilledIcon : archiveIcon;
                } else {
                    addToArchive(article);
                    actionButtonIcon.src = buttonTypeDelete ? deleteIcon : archiveFilledIcon;
                }
            }, 400);

            setTimeout(() => {
                articleElement.style.translate = '';
                actionButton.style.width = '';
                containerElement.dispatchEvent(new Event(isRemovingArticle ? 'removed' : 'added'));

            }, 1000);

        } else if (Math.abs(CURRENT_X) >= OPEN_SWIPE_DISTANCE) {
            const openElements = document.querySelectorAll(`.${BASE_CLASS}__article.open`);

            articleElement.style.translate = `${-ELEMENT_HEIGHT}px`;
            actionButton.style.width = `${Math.abs(ELEMENT_HEIGHT)}px`;
        } else {
            articleElement.style.translate = '';
            actionButton.style.width = '';
        }
    });

    articleElement.addEventListener('click', () => window.open(articleUrl, '_blank'));

    actionButton.addEventListener('click', () => {

        const isRemovingArticle = buttonTypeDelete || isArchived(article.url);

        if (isRemovingArticle) {
            removeFromArchive(article);
            actionButtonIcon.src = buttonTypeDelete ? deleteFilledIcon : archiveIcon;
        } else {
            addToArchive(article);
            actionButtonIcon.src = buttonTypeDelete ? deleteIcon : archiveFilledIcon;
        }

        setTimeout(() => {
            articleElement.style.translate = '';
            actionButton.style.width = '';

            containerElement.dispatchEvent(new Event(isRemovingArticle ? 'removed' : 'added'));
        }, 400);
    })

    articleElement.append(imageElement, titleElement, contentElement);
    actionButton.append(actionButtonIcon);
    containerElement.append(articleElement, actionButton);

    return containerElement;
}