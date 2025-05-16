import './switch-button.sass';

export default function SwtichButton(label = '', checked = false) {

    const BASE_CLASS = 'switch-button';

    const containerElement = document.createElement('label');
    const textElement = document.createElement('span');
    const checkboxElement = document.createElement('input');

    containerElement.classList.add(BASE_CLASS);
    textElement.classList.add(`${BASE_CLASS}__text`);
    checkboxElement.classList.add(`${BASE_CLASS}__checkbox`);

    textElement.textContent = label;
    checkboxElement.type = 'checkbox';
    checkboxElement.defaultChecked = checked;

    checkboxElement.addEventListener('change', () => {
        containerElement.dataset.checked = checkboxElement.checked;
    });

    containerElement.append(textElement, checkboxElement);

    return containerElement;
}