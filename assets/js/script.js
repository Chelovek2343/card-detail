const cardNumber = document.getElementById('cardNumber');
const cardUsername = document.getElementById('cardUsername');
const cardDate = document.getElementById('cardDate');
const cardCvc = document.getElementById('cardCvc');
const form = document.querySelector('form');
const cardholderInput = document.getElementById('cardholderInput');
const numberInput = document.getElementById('numberInput');
const mmInput = document.getElementById('mmInput');
const yyInput = document.getElementById('yyInput');
const cvcInput = document.getElementById('cvcInput');
const confrimBtn = document.getElementById('confrim');
const complete = document.getElementById('complete');
const mainForm = document.getElementById('mainForm');
const inputs = document.querySelectorAll('input');
const textUnderInputs = document.querySelectorAll('.subtitle');

console.log(textUnderInputs);

form.addEventListener('input', () => {
    cardUsername.textContent = cardholderInput.value;
    cardNumber.textContent = numberInput.value;
    cardCvc.textContent = cvcInput.value;
    cardDate.innerHTML = `${mmInput.value}/${yyInput.value}`;
});

confrimBtn.addEventListener('click', () => {
    inputs.forEach((input) => {
        if (input.value === '') {
            input.style.border = '1px solid red';
            textUnderInputs.forEach((text) => {
                text.style.display = 'block';
            });
        } else {
            mainForm.classList.add('hidden');
            mainForm.classList.remove('active');
            complete.classList.add('active');
            complete.classList.remove('hidden');

            textUnderInputs.forEach((text) => {
                text.style.display = 'none';
            });
        }
    });
});
