import './bottom-menu-button.sass';

export default function ButtomMenuButton(text, url, icon, isCurrentPage = false) {

    const BASE_CLASS = 'bottom-menu-button';

    const buttonElement = document.createElement('a');
    const iconElement = document.createElement('img');
    const textElement = document.createElement('span');

    buttonElement.classList.add(`${BASE_CLASS}`);
    if (isCurrentPage) buttonElement.classList.add(`${BASE_CLASS}--active`);
    iconElement.classList.add(`${BASE_CLASS}__icon`);
    textElement.classList.add(`${BASE_CLASS}__text`);

    iconElement.src = icon;
    textElement.textContent = text;
    buttonElement.href = url;

    buttonElement.append(iconElement, textElement);


    return buttonElement;
}
