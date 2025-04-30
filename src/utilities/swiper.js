
const MINIMUM_SWIPE_DISTANCE = 100;

const pointer = {
    x: null,
    y: null,
    startX: null,
    startY: null,
    timeStamp: 0,
    down: false
};

export function addSwipeEvents(element) {
    element.addEventListener('touchstart', touchStartHandler);
    element.addEventListener('touchmove', touchMoveHandler);
    element.addEventListener('touchend', touchEndHandler);
}

function touchStartHandler(event) {
    pointer.startX = event.touches[0].clientX;
    pointer.startY = event.touches[0].clientY;
    pointer.timeStamp = event.timeStamp;
    pointer.down = true;
}

function touchMoveHandler(event) {
    if (!pointer.down) return;

    pointer.x = event.touches[0].clientX;
    pointer.y = event.touches[0].clientY;
}

function touchEndHandler(event) {
    const element = event.currentTarget;
    const deltaX = pointer.x - pointer.startX;
    const deltaY = pointer.y - pointer.startY;
    const deltaTime = event.timeStamp - pointer.timeStamp;

    const options = {
        detail: {
            x: deltaX,
            y: deltaY,
            time: deltaTime
        }
    }

    element.dispatchEvent(new CustomEvent('swipeend', options));

    if (Math.abs(deltaX) >= MINIMUM_SWIPE_DISTANCE) {
        element.dispatchEvent(new Event(deltaX < 0 ? 'swipeleft' : 'swiperight'));
    }
    
    if (Math.abs(deltaY) >= MINIMUM_SWIPE_DISTANCE) {
        element.dispatchEvent(new Event(deltaY < 0 ? 'swipeup' : 'swipedown'));
    } 
}

