let x;
let y;
let z;
let operator;

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


