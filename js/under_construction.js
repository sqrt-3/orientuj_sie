const dots = [...document.querySelectorAll('.dots span')];
let intervalIndex = 0;

const time = 1000;
let active = 0;

const changeDot = () => {
    active++;
    if (active === dots.length) {
        active = 0;
    }
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

setInterval(changeDot, time);