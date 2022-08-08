let x;
let y;
let z;
let operator;
let displayValue;

const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const times = document.querySelector('#times');
const division = document.querySelector('#division');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const display = document.querySelector('#display');


function addition() {
    z = x + y;
    return z;
}

function subtract() {
    z = x - y;
    return z;
}

function multiply() {
    z = x * y;
    return z;
}

function divide() {
    z = x / y;
    return z;
}

function operate() {
    if (operator == '+'){
        addition()
    }  
    if (operator == '-'){
        subtract()
    }
    if (operator == '*'){
        multiply()
    }
    if (operator == '/'){
        divide()
    }
}

one.addEventListener('click', () => {
    display.textContent = '1';
    displayValue = 1;
    if (x != undefined) {
        y = displayValue;
    }
  });

two.addEventListener('click', () => {
    display.textContent = '2';
    displayValue = 2;
    if (x != undefined) {
        y = displayValue;
    }
  });

three.addEventListener('click', () => {
    display.textContent = '3';
    displayValue = 3;
    if (x != undefined) {
        y = displayValue;
    }
});

four.addEventListener('click', () => {
    display.textContent = '4';
    displayValue = 4;
    if (x != undefined) {
        y = displayValue;
    }
});

five.addEventListener('click', () => {
    display.textContent = '5';
    displayValue = 5;
    if (x != undefined) {
        y = displayValue;
    }
});

six.addEventListener('click', () => {
    display.textContent = '6';
    displayValue = 6;
    if (x != undefined) {
        y = displayValue;
    }
});

seven.addEventListener('click', () => {
    display.textContent = '7';
    displayValue = 7;
    if (x != undefined) {
        y = displayValue;
    }
});

eight.addEventListener('click', () => {
    display.textContent = '8';
    displayValue = 8;
    if (x != undefined) {
        y = displayValue;
    }
});

nine.addEventListener('click', () => {
    display.textContent = '9';
    displayValue = 9;
    if (x != undefined) {
        y = displayValue;
    }
});

plus.addEventListener('click', () => {
    x = displayValue;
    operator = "+";
});

minus.addEventListener('click', () => {
    x = displayValue;
    operator = "-";
});

times.addEventListener('click', () => {
    x = displayValue;
    operator = "*";
});

division.addEventListener('click', () => {
    x = displayValue;
    operator = "/";
});


equal.addEventListener('click', () => {
    operate();
    display.textContent = z;
});