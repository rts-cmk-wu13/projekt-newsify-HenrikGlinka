import './bottom-menu-button.sass';

export default function ButtomMenuButton(text, url, icon) {

    const BASE_CLASS = 'bottom-menu-button';
    const BASE_URL = import.meta.env.BASE_URL;

    const buttonElement = document.createElement('a');
    const iconElement = document.createElement('img');
    const textElement = document.createElement('span');

    buttonElement.classList.add(`${BASE_CLASS}`);
    iconElement.classList.add(`${BASE_CLASS}__icon`);
    textElement.classList.add(`${BASE_CLASS}__text`);

    iconElement.src = icon;
    textElement.textContent = text;
    buttonElement.href = BASE_URL + url;

    buttonElement.append(iconElement, textElement);


    return buttonElement;
}
