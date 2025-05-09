import './news-category.sass';

export default function NewsCategory(title, articles) {

    const BASE_CLASS = 'news-category';

    const detailsElement = document.createElement('details');
    const summaryElement = document.createElement('summary');

    const contentHeight = () => [...detailsElement.children].reduce((sum, element) => sum += element.getBoundingClientRect().height, 0);
    const updateHeight = () => detailsElement.style.height = detailsElement.open ? `${contentHeight()}px` : '';

    const observer = new MutationObserver(updateHeight);

    observer.observe(detailsElement, { childList: true, subtree: true, characterData: true });

    detailsElement.classList.add(`${BASE_CLASS}`);
    summaryElement.classList.add(`${BASE_CLASS}__summary`);

    summaryElement.textContent = title;

    detailsElement.append(summaryElement, ...articles);

    detailsElement.addEventListener('toggle', event => {
        if (event.newState === 'open') {
            const otherInstances = document.querySelectorAll(`.${BASE_CLASS}`);

            updateHeight();

            for (let instance of otherInstances) {
                if (instance !== detailsElement) instance.open = false;
            }
        } else {
            detailsElement.style.height = '';
        }
    })

    return detailsElement;
}