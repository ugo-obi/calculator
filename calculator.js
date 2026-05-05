const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

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
        return 'Error: Division by zero';
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Error: Invalid operator';
    }
}

function calculate() {
    if (currentOperator === null || shouldResetScreen) return;
    const secondNum = parseFloat(display.textContent);
    const result = operate(currentOperator, parseFloat(firstNumber), secondNum);
    display.textContent = result;
    firstNumber = result;
    currentOperator = null;
    shouldResetScreen = true;
}

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetScreen = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (button.classList.contains('operator')) {
            inputOperator(value);
        } else if (button.classList.contains('equal')) {
            calculate();
        } else {
            inputNumber(value);
        }
    });
});

function inputNumber(number) {
    if (shouldResetScreen) {
        display.textContent = '';
        shouldResetScreen = false;
    }
    if (display.textContent === '0') {
        display.textContent = number;
    } else {
        display.textContent += number;
    }
}
