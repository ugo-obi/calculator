const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        display.textContent = btn.textContent;

            if (!btn.classList.contains('operator') && !btn.classList.contains('equal') && !btn.classList.contains('misc')) {
                if (operator === '') {
                    firstNumber += btn.textContent;
                    display.textContent = firstNumber;
                } else {
                    secondNumber += btn.textContent;
                    display.textContent = secondNumber;
                }
            } else if (btn.classList.contains('operator')) {
                operator = btn.textContent;
                display.textContent = operator;
            }
            else if (btn.classList.contains('equal')) {
                if (firstNumber && operator && secondNumber) {
                    result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                    display.textContent = result;
                    firstNumber = result.toString();
                    secondNumber = '';
                    operator = '';
                }
            }
        });
    });

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}   

function divide(a, b) {
    if (b === 0) {
        return 'Error';
    }
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === '×') return multiply(a, b);
    if (operator === '÷') return divide(a, b);
}   