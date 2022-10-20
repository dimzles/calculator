let displayValue = 0;
const display = document.getElementById('display-main');
const btns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');

for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            if (btns[i].id === 'btn-num') {
                if(displayValue === 0){
                    displayValue = btns[i].textContent;
                    updateDisplay();
                } else
                    displayValue += btns[i].textContent;
                    updateDisplay();
                    console.log(displayValue);
            }
        })
    };

clearBtn.addEventListener('click', () => {
    clearDisplay();
})

deleteBtn.addEventListener('click', () => {
    deleteDigit();
})

function deleteDigit() {
    if(displayValue.length <= 1) {
        displayValue = 0;
        display.textContent = displayValue;
        updateDisplay();
    } else
        display.textContent = display.textContent.toString().slice(0, -1);
        displayValue = display.textContent;
        updateDisplay();
        console.log(displayValue)
}

function clearDisplay() {
    displayValue = 0;
    updateDisplay();
    console.log(displayValue)
}

function updateDisplay() {
    display.textContent = displayValue;
    if (displayValue.length > 14) {
        display.textContent = displayValue.substring(0,14);
        displayValue = displayValue.substring(0, 14);
    }

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
    if (operator === add) return add(num1, num2);
    if (operator === subtract) return subtract(num1, num2);
    if (operator === multiply) return multiply(num1, num2);
    if (operator === divide) {
        if (num2 === 0) return `Nope lol`;
        return divide(num1, num2);
    }
};