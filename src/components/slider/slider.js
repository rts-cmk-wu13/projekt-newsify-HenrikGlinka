import './slider.sass';

export default function Slider(...slides) {

    const BASE_CLASS = 'slider';
    const RANDOM_HASH = Math.random().toString(36).slice(2, 7);

    const sliderElement = document.createElement('div');
    const dotContainer = document.createElement('div');

    sliderElement.classList.add(BASE_CLASS);
    dotContainer.classList.add(`${BASE_CLASS}__dot-container`);

    sliderElement.append(dotContainer);

    slides.forEach((slideHTML, index) => {
        const slideElement = document.createElement('div');
        const dotElement = document.createElement('input');
        const dotLabelElement = document.createElement('label');

        slideElement.classList.add(`${BASE_CLASS}__slide`);
        slideElement.innerHTML = slideHTML;

        dotElement.type = 'radio';
        dotElement.name = `slide-${RANDOM_HASH}`;
        dotElement.classList.add(`${BASE_CLASS}__dot`);

        dotLabelElement.classList.add(`${BASE_CLASS}__dot-label`);

        if (index === 0) dotElement.defaultChecked = true;

        dotElement.addEventListener('change', () => slideElement.scrollIntoView());

        sliderElement.append(slideElement);
        dotLabelElement.append(dotElement);
        dotContainer.append(dotLabelElement);
    });

    sliderElement.next = () => {
        const dotArray = Array.from(dotContainer.children);
        const currentSlide = dotArray.findIndex(dotLabel => dotLabel.firstChild.checked);

        const nextSlide = currentSlide + 1 < dotArray.length ? currentSlide + 1 : 0;

        if (nextSlide === 0) {
            return false;
        } else {
            dotContainer.children[nextSlide].click();
            return true;
        }
    }

    sliderElement.previous = () => {
        const dotArray = Array.from(dotContainer.children);
        const currentSlide = dotArray.findIndex(dotLabel => dotLabel.firstChild.checked);
        const previousSlide = currentSlide - 1;

        if (previousSlide === -1) {
            return false;
        } else {
            dotContainer.children[previousSlide].click();
            return true;
        }
    }



    return sliderElement;
}