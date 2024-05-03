let numberBtn = document.querySelectorAll("[data-number]");
let operatorBtn = document.querySelectorAll("[data-operator]");
let decimalBtn = document.getElementById("decimalbtn");
let equalBtn = document.getElementById("equalsbtn");
let clearButton = document.getElementById("clearbtn");
let deleteBtn = document.getElementById("delete-btn");
let screenText = document.querySelector(".screen-text");

let firstOperand = '';
let secondOperand = '';
let curOperator = null;


numberBtn.forEach((button) => 
    button.addEventListener("click", () => appendNumber(button.textContent))
)
operatorBtn.forEach((button) =>
    button.addEventListener("click", () => setOperation(button.textContent))
)

equalBtn.addEventListener("click", evaluate);
decimalBtn.addEventListener("click", appendDecimal);
clearButton.addEventListener('click', clearScreen);
deleteBtn.addEventListener('click', deleteNum);

function setOperation(operator) {
    if(curOperator !== null) evaluate();
    firstOperand = screenText.innerText;
    curOperator = operator;
    screenText.innerText = "";
}

function evaluate() {
    secondOperand = screenText.innerText;
    screenText.innerText = roundResult(operate(curOperator, firstOperand, secondOperand));
}

function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }

function deleteNum() {
    screenText.innerText = screenText.innerText.toString().slice(0, -1)
    if(screenText.innerText === "") {
        screenText.innerText = '0'
    }
}   

function appendNumber(number) {
    if(screenText.innerText === '0') {
        resetScreen();
    }
    screenText.innerText += number;
}

function appendDecimal() {
    if (screenText.textContent === '')
    screenText.textContent = '0'
    if (screenText.textContent.includes('.')) return
    screenText.textContent += '.'
}

function resetScreen() {
    screenText.innerText = '';
}

function clearScreen() {
    firstOperand = '';
    secondOperand = '';
    curOperator = null;
    screenText.innerText = '0';
}








function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '÷':   
            if (b === 0) return null 
            else return divide(a,b);
        default:
            return null;
    }
}

