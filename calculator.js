 const display = document.querySelector('.display');
 const buttons = document.querySelectorAll('button');
const clearButton = document.querySelector('.clear');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');   


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            firstNumber = '';
            secondNumber = '';
            operator = '';
            display.textContent = '0';
         } else if (button.classList.contains('misc')) {
            return; 
         } else if (button.classList.contains('operator')) {
            firstNumber = display.textContent;
            operator = button.textContent;
            display.textContent = firstNumber + ' ' + operator + ' ';
        } else if (button.classList.contains('equal')) {
            const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)).toFixed(5);
             display.textContent = result;
            firstNumber = String(result);
            secondNumber = '';
            operator = '';
            resetDisplay = true;  
        } else {
            if (operator === '') {
            if (button.textContent === '.' && display.textContent.includes('.'))
                return; 
            if (resetDisplay) {
                display.textContent = button.textContent;
                firstNumber = button.textContent;
                resetDisplay = false;
                } 
         else if (display.textContent === '0' ){
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
        }
    } else {
        if (button.textContent === '.' && secondNumber.includes('.'))
            return;
        secondNumber += button.textContent;
        display.textContent = firstNumber + ' ' + operator + ' ' + secondNumber;    
      }
     }
    });
});


 let firstNumber = '';
 let secondNumber = '';
 let operator = '';
 let resetDisplay = false;

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
     if (b === 0) return 'Error: Division by zero';
     return a / b;
 }
 
 function operate(op, a, b) {
    if (op === '+') return add(a, b);
    if (op === '-') return subtract(a, b);
    if (op === '*') return multiply(a, b);
    if (op === '/') return divide(a, b);
 }


    