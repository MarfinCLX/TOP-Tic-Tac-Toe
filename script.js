const form = document.querySelector('form');
const inputWrapper = document.querySelector('.input-wrapper');
const input = document.querySelector('.input');
const submitNameBtn = document.querySelector('.submit-btn');
const resetNameBtn = document.querySelector('.reset-name-btn');

const updateButtonState = (button, isDisabled) => {
    button.disabled = isDisabled;
    button.classList.toggle('disabled-btn', isDisabled);
};

resetNameBtn.disabled = true;
resetNameBtn.classList.toggle('disabled-btn', resetNameBtn.disabled);

form.addEventListener('submit', e => {
    e.preventDefault();

    const playerName = input.value;

    input.disabled = true;
    inputWrapper.classList.add('input-locked');

    updateButtonState(submitNameBtn, true);
    updateButtonState(resetNameBtn, false);

    //  if (input.validity.typeMismatch) {
    // input.setCustomValidity("I am expecting an email address!");
    // } else {
    // input.setCustomValidity("");
    // }

    console.log(playerName);
});

resetNameBtn.addEventListener('click', () => {
    console.clear();
    input.value = '';
    input.disabled = false;
    inputWrapper.classList.remove('input-locked');

    updateButtonState(submitNameBtn, false);
    updateButtonState(resetNameBtn, true);

    input.focus();
});

const resetGameBtn = document.querySelector('.reset-game-btn')
resetGameBtn.disabled = true;
resetGameBtn.classList.toggle('disabled-btn', resetGameBtn.disabled);