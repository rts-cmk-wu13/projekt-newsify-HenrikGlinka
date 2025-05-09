
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
    element.addEventListener('pointerdown', pointerDownHandler);
    element.addEventListener('pointermove', pointerMoveHandler);
    element.addEventListener('pointerup', pointerUpHandler);
    //element.addEventListener('pointercancel', pointerCancelHandler);

    element.style.touchAction = 'none';
}

function pointerDownHandler(event) {
    event.target.style.touchAction = 'none';
    pointer.startX = event.clientX;
    pointer.startY = event.clientY;
    pointer.timeStamp = event.timeStamp;
    pointer.down = true;
}

function pointerMoveHandler(event) {
    if (!pointer.down) return;

    const element = event.currentTarget;

    pointer.x = event.clientX;
    pointer.y = event.clientY;

    if (Math.abs(event.movementY) > Math.abs(event.movementX) - MINIMUM_SWIPE_DISTANCE) {

        window.scrollBy(0, -event.movementY);
    }

    element.dispatchEvent(new CustomEvent('swipemove', { detail: { x: event.movementX, y: event.movementY } }));
}

function pointerUpHandler(event) {
    const element = event.currentTarget;
    const deltaX = pointer.x - pointer.startX;
    const deltaY = pointer.y - pointer.startY;
    const deltaTime = event.timeStamp - pointer.timeStamp;

    console.log('BAM');

    event.target.style.touchAction = '';

    pointer.down = false;

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

function pointerCancelHandler(event) {
    event.target.style.touchAction = '';
}

