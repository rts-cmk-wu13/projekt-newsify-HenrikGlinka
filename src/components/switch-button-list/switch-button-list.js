import './switch-button-list.sass';

export default function SwtichButtonList(...labels) {

    const BASE_CLASS = 'switch-button-list';

    const containerElement = document.createElement('ul');
    
    containerElement.classList.add(BASE_CLASS);

    buttons.forEach(button => {
        const itemElement = document.createElement('li');

        itemElement.classList.add(`${BASE_CLASS}__list-item`);

        itemElement.append(button);

        containerElement.append(itemElement);
    });

    return containerElement;
}