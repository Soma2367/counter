const $count = document.getElementById('counter-js');
const $plus = document.getElementById('plus');
const $minu = document.getElementById('minus');
const $reset = document.getElementById('reset');


const getCurrentCount = () => parseInt($count.textContent);

const updateCount = (newCount) => {
    $count.textContent = newCount;
    if(newCount % 10 === 0 && newCount !== 0) {
        shakeAnimation();
    }
};

const shakeAnimation = () => {
    $count.classList.add('shake');
    setTimeout(() => {
        $count.classList.remove('shake');
    }, 400);
}

$plus.addEventListener('click', (e) => {
    e.preventDefault();
    updateCount(getCurrentCount() + 1);
});

$minu.addEventListener('click', (e) => {
    e.preventDefault();
    updateCount(getCurrentCount() - 1);
});

$reset.addEventListener('click', (e) => {
    e.preventDefault();
    updateCount(0);
});