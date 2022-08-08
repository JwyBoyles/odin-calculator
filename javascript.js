let x;
let y;
let z;
let operator = null;
let displayValue= [];

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
    displayValue.push(1);
    display.textContent = displayValue.join("");
    if (x != undefined) {
        y = displayValue;
    }
  });

two.addEventListener('click', () => {
    displayValue.push(2);
    display.textContent = displayValue.join("");
    if (x != undefined) {
        y = displayValue;
    }
  });

three.addEventListener('click', () => {
    displayValue.push(3);
    display.textContent = displayValue.join("");
    if (x != undefined) {
        y = displayValue;
    }
});

four.addEventListener('click', () => {
    displayValue.push(4);
    display.textContent = displayValue.join("");
    if (x != undefined) {
        y = displayValue;
    }
});

five.addEventListener('click', () => {
    displayValue.push(5);
    display.textContent = displayValue.join("");
    if (x != undefined) {
        y = displayValue;
    }
});

six.addEventListener('click', () => {
    displayValue.push(6);
    display.textContent = displayValue.join("");
    if (x != undefined) {
        y = displayValue;
    }
});

seven.addEventListener('click', () => {
    displayValue.push(7);
    display.textContent = displayValue.join("");
    if (x != undefined) {
        y = displayValue;
    }
});

eight.addEventListener('click', () => {
    displayValue.push(8);
    display.textContent = displayValue.join("");
    if (x != undefined) {
        y = displayValue;
    }
});

nine.addEventListener('click', () => {
    displayValue.push(9);
    display.textContent = displayValue.join("");
    if (x != undefined) {
        y = displayValue;
    }
});

zero.addEventListener('click', () => {
    displayValue.push(0);
    display.textContent = displayValue.join("");
    if (x != undefined) {
        y = displayValue;
    }
});

plus.addEventListener('click', () => {
    if (operator != null){
        equate ()
    }
    newValue = displayValue.toString();
    x = newValue.replaceAll(',','')
    displayValue= [];
    operator = "+";
});

minus.addEventListener('click', () => {
    if (operator != null){
        equate ()
    }
    newValue = displayValue.toString();
    x = newValue.replaceAll(',','')
    displayValue= [];
    operator = "-";
});

times.addEventListener('click', () => {
    if (operator != null){
        equate ()
    }
    newValue = displayValue.toString();
    x = newValue.replaceAll(',','');
    displayValue= [];
    operator = "*";
});

division.addEventListener('click', () => {
    if (operator != null){
        equate ()
    }
    newValue = displayValue.toString();
    x = newValue.replaceAll(',','')
    displayValue= [];
    operator = "/";
});

clear.addEventListener('click', () => {
    displayValue= [];
    display.textContent = "";
    x = null;
    y = null;
    z = null;
    operator = null;
});



equal.addEventListener('click', () => {
    equate ();
    operator = null;
});

function equate () {
    if (z != undefined) {
        x = z
    };
    newValue = displayValue.toString();
    y = newValue.replaceAll(',','')
    x = Number(x);
    y = Number(y);
    operate();
    display.textContent = z;
    x = z;
    y = 0;
}