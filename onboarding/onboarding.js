import '../src/styles/style.sass';
import './onboarding.sass';
import Slider from '../src/components/slider/slider';
import slideImage1 from '../src/assets/images/onboarding/slide1.png';
import slideImage2 from '../src/assets/images/onboarding/slide2.png';
import slideImage3 from '../src/assets/images/onboarding/slide3.png';
import slideImage1DarkMode from '../src/assets/images/onboarding/slide1-dark-mode.png';
import slideImage2DarkMode from '../src/assets/images/onboarding/slide2-dark-mode.png';
import slideImage3DarkMode from '../src/assets/images/onboarding/slide3-dark-mode.png';
import { addSwipeEvents } from '../src/utilities/swiper';
import { initializeDarkMode, isDarkMode } from '../src/utilities/settings-manager';

if (localStorage.getItem('skipOnboarding') === 'true') location.href = '../';

initializeDarkMode();

const app = document.querySelector('#app');

const slider = Slider(
    /* HTML */`
        <img src="${isDarkMode() ? slideImage1DarkMode : slideImage1}" alt="">
        <h2>Stay Connected,<br>Everywhere, Anytime</h2>
        <p>Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.<p>
    `,
    /* HTML */`
        <img src="${isDarkMode() ? slideImage2DarkMode : slideImage2}" alt="">
        <h2>Become a Savvy<br>Global Citizen.</h2>
        <p>Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!<p>
    `,
    /* HTML */`
        <img src="${isDarkMode() ? slideImage3DarkMode : slideImage3}" alt="">
        <h2>Enhance your News<br>Journey Now!</h2>
        <p>Be part of our dynamic community and contribute your insights and participate in enriching conversations.<p>
    `
)

const skipButton = document.createElement('button');
const continueButton = document.createElement('button');

addSwipeEvents(slider);

slider.addEventListener('swipeleft', slider.next);
slider.addEventListener('swiperight', slider.previous);


skipButton.innerText = 'Skip';
continueButton.innerText = 'Continue';

continueButton.classList.add('highlight')
continueButton.addEventListener('click', () => {
    localStorage.setItem('skipOnboarding', 'true');
    if (!slider.next()) location.href = '../';
});

skipButton.addEventListener('click', () => {
    localStorage.setItem('skipOnboarding', 'true');
    location.href = '../';
});

app.append(slider, skipButton, continueButton);

