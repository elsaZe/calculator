let temp;
let currentNumber='';
let operation = ''
const display = document.getElementById('display');

function updateDisplay(num) {
    if (currentNumber.length<11) {
        display.textContent = num
    }
}

const zero = document.getElementById('zero')
zero.addEventListener('click', () => {
    currentNumber = currentNumber+'0';
    updateDisplay(currentNumber)})

const one = document.getElementById('one')
one.addEventListener('click', () => {
    currentNumber = currentNumber+'1';
    updateDisplay(currentNumber)})

const two = document.getElementById('two')
two.addEventListener('click', () => {
    currentNumber = currentNumber+'2';
    updateDisplay(currentNumber)})

const three = document.getElementById('three')
three.addEventListener('click', () => {
    currentNumber = currentNumber+'3';
    updateDisplay(currentNumber)})

const four = document.getElementById('four')
four.addEventListener('click', () => {
    currentNumber = currentNumber+'4';
    updateDisplay(currentNumber)})

const five = document.getElementById('five')
five.addEventListener('click', () => {
    currentNumber = currentNumber+'5';
    updateDisplay(currentNumber)})

const six = document.getElementById('six')
six.addEventListener('click', () => {
    currentNumber = currentNumber+'6';
    updateDisplay(currentNumber)})

const seven = document.getElementById('seven')
seven.addEventListener('click', () => {
    currentNumber = currentNumber+'7';
    updateDisplay(currentNumber)})

const eight = document.getElementById('eight')
eight.addEventListener('click', () => {
    currentNumber = currentNumber+'8';
    updateDisplay(currentNumber)})
        
const nine = document.getElementById('nine')
nine.addEventListener('click', () => {
    currentNumber = currentNumber+'9';
    updateDisplay(currentNumber)})

const decimal = document.getElementById('decimal')
decimal.addEventListener('click', () => {
    currentNumber = currentNumber+'.';
    updateDisplay(currentNumber)})

const addition = document.getElementById('add')
addition.addEventListener('click', () => {
        if(temp == undefined) {
            temp = currentNumber;
            currentNumber = ''
            operation = 'add'}
        else {
            operation = 'add'
            operate()
        }
 })

const subtraction = document.getElementById('subtract')
subtraction.addEventListener('click', () => {
    if(temp == undefined){
        temp = currentNumber;
        currentNumber = '';
        operation = 'subtract';
    } else {
        operation ='subract';
        operate();
    }
})

const multiplication = document.getElementById('multiply')
multiplication.addEventListener('click', () => {
    if(temp == undefined) {
        temp = currentNumber;
        currentNumber = '';
        operation = 'multiply';
    } else {
        operation = 'multiply'
        operate();
    }
})

const division = document.getElementById('divide')
division.addEventListener('click', () => {
    if(temp == undefined){
        temp = currentNumber;
        currentNumber = ''
        operation = 'divide'
    } else {
        operation = 'divide'
        operate();
    }
})

const percentage = document.getElementById('percent')
percentage.addEventListener('click', () => {
        operation = 'percent'
        operate();
    })

const changeSign = document.getElementById('posOrNeg')
changeSign.addEventListener('click', () => {
        if (temp == undefined) {
            temp = currentNumber
            operation = 'changeSign'
            operate();
        } else {
            operation = 'changeSign'
            operate();
        }
    })

const exponentiation = document.getElementById('exponent')
exponentiation.addEventListener('click', () => {
    if(temp == undefined){
        temp = currentNumber;
        currentNumber = ''
        operation = 'exponent'
    } else {
        operation = 'exponent'
        operate();
    }
})

const equals = document.getElementById('equals');
equals.addEventListener('click', operate)

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    temp = undefined;
    currentNumber = ''
    updateDisplay(currentNumber)})


function operate() {
    console.log("start CN " +currentNumber)
    console.log("start temp: "+temp)
    currentNumber = Number(currentNumber);
    temp = Number(temp);
    if(operation == 'add') {
        sum = add(currentNumber, temp)
        display.textContent = sum;
        temp = sum;
        currentNumber = ''
    } else if (operation == 'subtract'){
        difference = subtract(currentNumber, temp)
        display.textContent = difference;
        temp = difference;
        currentNumber = ''
    } else if (operation == 'multiply'){
        product = multiply(currentNumber, temp)
        display.textContent = product;
        temp = product;
        currentNumber = ''
    } else if (operation == 'divide'){
        quotient = divide(currentNumber, temp);
        display.textContent = quotient;
        temp = quotient;
        currentNumber = ''
    } else if (operation == 'percent') {
        numToPercent = percent(currentNumber)
        display.textContent = numToPercent+'%'
        temp = numToPercent;
        currentNumber = ''
    } else if (operation == 'exponent'){
        power = exponent(temp, currentNumber)
        display.textContent = power;
        temp = power;
        currentNumber = ''
    } else if (operation == 'changeSign'){
        opposite = sign(temp);
        display.textContent = opposite;
        temp = '';
        currentNumber = opposite;
    }
    console.log('temp: ' + temp);
    console.log('currentNumber: ' + currentNumber)
    return temp;
}

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num2 - num1;
}

function multiply(num1, num2) {
    return num1*num2;
}

function divide(num1, num2){
    return Math.round(num2/num1 * 10000)/10000;
}

function percent(num){
    return num*100
}

function exponent(num1, num2) {
    return num1**num2;
}

function sign(num) {
    return -num;
}

