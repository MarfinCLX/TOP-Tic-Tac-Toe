const form = document.querySelector('form');
const inputWrapper = document.querySelector('.input-wrapper');
const input = document.querySelector('.input');
const submitBtn = document.querySelector('.submit-btn');

form.addEventListener('submit', e => {
    e.preventDefault();

    input.disabled = true;
    submitBtn.disabled = true;

    const playerName = input.value;

    if (input.disabled) {
        inputWrapper.classList.add('input-locked');
    } else {
        inputWrapper.classList.remove('input-locked');
    }

    if (submitBtn.disabled) {
        submitBtn.classList.add('disabled-btn');
    } else {
        submitBtn.classList.remove('disabled-btn');
    }

    //  if (input.validity.typeMismatch) {
    // input.setCustomValidity("I am expecting an email address!");
    // } else {
    // input.setCustomValidity("");
    // }
    
    console.log(playerName)
})