import './bottom-menu-button.sass';

export default function ButtomMenuButton(text, url, icon, isCurrentPage = false) {

    const BASE_CLASS = 'bottom-menu-button';

    const buttonElement = document.createElement('a');
    const textElement = document.createElement('span');
    const iconElement = new DOMParser().parseFromString(icon, 'image/svg+xml').documentElement;


    buttonElement.classList.add(`${BASE_CLASS}`);
    if (isCurrentPage) buttonElement.classList.add(`${BASE_CLASS}--active`);
    iconElement.classList.add(`${BASE_CLASS}__icon`);
    textElement.classList.add(`${BASE_CLASS}__text`);

    textElement.textContent = text;
    buttonElement.href = url;

    buttonElement.append(iconElement, textElement);


    return buttonElement;
}
