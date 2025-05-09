import './logo-header.sass';

export default function LogoHeader(title, logoUrl, ...children) {
    const BASE_CLASS = 'logo-header';
    
    const containerElement = document.createElement('header');
    const logoElement = document.createElement('img');
    const titleElement = document.createElement('h1');
    const childrenContainerElement = document.createElement('div');

    containerElement.classList.add(`${BASE_CLASS}`);
    logoElement.classList.add(`${BASE_CLASS}__logo`);
    titleElement.classList.add(`${BASE_CLASS}__title`);
    childrenContainerElement.classList.add(`${BASE_CLASS}__children`);

    logoElement.src = logoUrl;
    titleElement.textContent = title;

    childrenContainerElement.append(...children);
    containerElement.append(logoElement, titleElement, childrenContainerElement);

    return containerElement;
}