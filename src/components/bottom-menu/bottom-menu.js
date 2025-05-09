import './bottom-menu.sass';

export default function ButtomMenu(...buttomMenuButtons) {

    const BASE_CLASS = 'bottom-menu';

    const currentPath = location.pathname;

    const menuElement = document.createElement('nav');
    const listElement = document.createElement('ul');

    menuElement.classList.add(`${BASE_CLASS}`);
    listElement.classList.add(`${BASE_CLASS}__list`);

    buttomMenuButtons.forEach(button => {
        const listItemElement = document.createElement('li');

        listItemElement.classList.add(`${BASE_CLASS}__list-item`);

        if (button.pathname === currentPath) {
            button.classList.add(`bottom-menu-button--active`);
        }

        listItemElement.append(button);
        listElement.append(listItemElement);
    });

    menuElement.append(listElement);

    return menuElement;

}