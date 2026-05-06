 const display = document.querySelector('.display');
 const buttons = document.querySelectorAll('button');
const clearButton = document.querySelector('.clear');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');   


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === '0' ){
            display.textContent = button.textContent;
        } else {
            display.textContent += button.textContent;
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
     if (b === 0) {
         alert("error");
         return null;
     }
     return a / b;
 }
 
 function operate(op, a, b) {
    if (op === '+') return add(a, b);
    if (op === '-') return subtract(a, b);
    if (op === '*') return multiply(a, b);
    if (op === '/') return divide(a, b);
 }


    