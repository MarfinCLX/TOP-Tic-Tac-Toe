const form = document.querySelector('form');
const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit-btn');

form.addEventListener('submit', e => {
    e.preventDefault();

    input.disabled = true;
    submitBtn.disabled = true;

    const playerName = input.value;

    if (input.disabled) {
        input.classList.add('input-locked');
    } else {
        input.classList.remove('input-locked');
    }

    if (submitBtn.disabled) {
        submitBtn.classList.add('disabled-btn');
    } else {
        submitBtn.classList.remove('disabled-btn');
    }

    console.log(playerName)
})