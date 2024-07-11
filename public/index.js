let action;
let prevNumber;
let calculatorValue = document.getElementById('calculator-Value')

function onclickAdd() {
    action = "+";
    prevNumber = calculatorValue.value;
    calculatorValue.value = "0"
}

function onclickMinus() {
    action = "-";
    prevNumber = calculatorValue.value;
    calculatorValue.value = "0"
}

function onclickMultiply() {
    action = "*";
    prevNumber = calculatorValue.value;
    calculatorValue.value = "0"
}

function onclickDivide() {
    action = "/";
    prevNumber = calculatorValue.value;
    calculatorValue.value = "0"
}

function calculate() {
    if (action === "+") {
        calculatorValue.value = Number(prevNumber) + Number(prevNumber)
    }

    if (action === "-") {
        calculatorValue.value = Number(prevNumber) - (calculatorValue.value)
    }
    if (action === "*") {
        calculatorValue.value = Number(prevNumber) * (calculatorValue.value)
    }
    if (action === "/") {
        calculatorValue.value = Number(prevNumber) / (calculatorValue.value)
    }
}

function onclickButtonNine() {
    calculatorValue.value = "9"
}
function onclickButtonEight() {
    calculatorValue.value = "8"
}
function onclickButtonSeven() {
    calculatorValue.value = "7"
}
function onclickButtonSix() {
    calculatorValue.value = "6"
}
function onclickButtonFive() {
    calculatorValue.value = "5"
}
function onclickButtonFour() {
    calculatorValue.value = "4"
}
function onclickButtonThree() {
    calculatorValue.value = "3"
}
function onclickButtonTwo() {
    calculatorValue.value = "2"
}
function onclickButtonOne() {
    calculatorValue.value = "1"
}
function onclickButtonZero() {
    calculatorValue.value = "0"
}


