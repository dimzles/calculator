let displayValue = 0;
let firstNumber = null;
let secondNumber = null;
let operator = null;

const display = document.getElementById('display-main');
const btns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const equalsBtn = document.getElementById('equalsBtn');
const decimalBtn = document.getElementById('decimalBtn');

for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            if (btns[i].id === 'btn-num') {
                if(displayValue === 0 && btns[i].textContent === "0") {
                    displayValue = 0;
                    updateDisplay();
                } else if (displayValue === 0 || displayValue === '0') {
                        displayValue = btns[i].textContent;
                        updateDisplay();
                } else {
                    display.textContent += btns[i].textContent;
                }
                
            }
            if (btns[i].id === 'btn-op') {
                handleOperator(btns[i].textContent);
            }
        })
    };

decimalBtn.addEventListener('click', () => {
    inputDecimal();
})

equalsBtn.addEventListener('click', () => {
    evaluate();
    
});

clearBtn.addEventListener('click', () => {
    decimalBtn.removeAttribute('disabled');
    clearDisplay();
});

deleteBtn.addEventListener('click', () => {
    deleteDigit();
});

function handleOperator(input) {
    if (operator !== null) evaluate();
    firstNumber = display.textContent;
    operator = input;
    
    displayValue = 0;
    updateDisplay();
}

function evaluate() {
    if (operator === null) return;
    if (operator === '÷' && display.textContent === '0') {
        alert('Dividing by zero is bad.')
        return;
    }
    secondNumber = display.textContent;
    display.textContent = roundNumber(operate(operator, firstNumber, secondNumber));
    operator = null;
    
}

function inputDecimal() {
    displayValue += decimalBtn.textContent;
    updateDisplay();
    decimalBtn.setAttribute('disabled', '1');
}

function deleteDigit() {
    if(displayValue.length <= 1) {
        displayValue = 0;
        updateDisplay();
    } else
        display.textContent = display.textContent.toString().slice(0, -1);
        displayValue = display.textContent;
        console.log(displayValue)
}

function clearDisplay() {
    displayValue = 0;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = displayValue;
    if (displayValue.length > 14) {
        display.textContent = displayValue.substring(0,14);
        displayValue = displayValue.substring(0, 14);
    }

}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}

//Operation functions
function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(operator, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    if (operator === '+') return add(num1, num2);
    if (operator === '−') return subtract(num1, num2);
    if (operator === '×') return multiply(num1, num2);
    if (operator === '÷') {
        if (num2 === 0) return `Nope lol`;
        return divide(num1, num2);
    }
};