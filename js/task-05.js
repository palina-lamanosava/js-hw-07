// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
//  подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputName = document.querySelector('#name-input');

const outputName = document.querySelector('#name-output');


function input(event) {
    if (event.currentTarget.value.length > 0) {
            return outputName.textContent = event.currentTarget.value;
    } return outputName.textContent = 'незнакомец';
    
}

inputName.addEventListener('input', input);
