const $count = document.getElementById('counter-js');
const $plus = document.getElementById('plus');
const $minu = document.getElementById('minus');
const $reset = document.getElementById('reset');


$plus.addEventListener('click', (e) => {
    e.preventDefault();

    let currentCount = parseInt($count.textContent);

    const newCount = currentCount + 1;
    $count.textContent = newCount;
    if (newCount % 10 === 0) {
        $count.classList.add('shake');

        setTimeout(() => {
            $count.classList.remove('shake');
        }, 400);
    }
});

$minu.addEventListener('click', (e) => {
    e.preventDefault();
    let currentCount = parseInt($count.textContent);
    $count.textContent = currentCount - 1;
});

$reset.addEventListener('click', (e) => {
    e.preventDefault();
    let currentCount = parseInt($count.textContent);
    $count.textContent = 0
});