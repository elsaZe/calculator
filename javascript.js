let temp;
let currentNumber='';
let operation = ''
const display = document.getElementById('display');

function updateDisplay(num) {
    let length = num.toString().length
    if (length>10) {
        display.textContent = "ERR 2 LRG"
    } else {
        display.textContent = num
    }
}

const zero = document.getElementById('zero')
zero.addEventListener('click', () => {
    currentNumber = currentNumber+'0'
    updateDisplay(currentNumber)})

const one = document.getElementById('one')
one.addEventListener('click', () => {
    if (temp != undefined && currentNumber == '' && operation == '') {
        temp = undefined
        currentNumber = "1";
        updateDisplay(currentNumber)
    } else {
        currentNumber = currentNumber+'1'
        updateDisplay(currentNumber)
    }
})

const two = document.getElementById('two')
two.addEventListener('click', () => {
    if (temp != undefined && currentNumber == '' && operation == ''){
        temp = undefined
        currentNumber = '2'
        updateDisplay(currentNumber)
    } else {
        currentNumber = currentNumber+'2'
        updateDisplay(currentNumber)}
})

const three = document.getElementById('three')
three.addEventListener('click', () => {
    if (temp != undefined && currentNumber == '' && operation == ''){
        temp = undefined;
        currentNumber = '3';
        updateDisplay(currentNumber)
    } else {
    currentNumber = currentNumber+'3';
    updateDisplay(currentNumber)}
})

const four = document.getElementById('four')
four.addEventListener('click', () => {
    if (temp != undefined && currentNumber == '' && operation == ''){
        temp = undefined;
        currentNumber = '4';
        updateDisplay(currentNumber)
    } else {
    currentNumber = currentNumber+'4';
    updateDisplay(currentNumber)}
})

const five = document.getElementById('five')
five.addEventListener('click', () => {
    if (temp != undefined && currentNumber == ''&& operation == ''){
        temp = undefined;
        currentNumber = '5';
        updateDisplay(currentNumber)
    } else {
        currentNumber = currentNumber+'5';
         updateDisplay(currentNumber)}
})

const six = document.getElementById('six')
six.addEventListener('click', () => {
    if (temp != undefined && currentNumber == '' && operation == ''){
        temp = undefined;
        currentNumber = '6';
        updateDisplay(currentNumber)
    } else {
        currentNumber = currentNumber+'6';
        updateDisplay(currentNumber)}
})

const seven = document.getElementById('seven')
seven.addEventListener('click', () => {
    if (temp != undefined && currentNumber == ''&& operation == ''){
        temp = undefined;
        currentNumber = '7';
        updateDisplay(currentNumber)
    } else {
    currentNumber = currentNumber+'7';
    updateDisplay(currentNumber)}
})

const eight = document.getElementById('eight')
eight.addEventListener('click', () => {
    if (temp != undefined && currentNumber == ''&& operation == ''){
        temp = undefined;
        currentNumber = '8';
        updateDisplay(currentNumber)
    } else {
    currentNumber = currentNumber+'8';
    updateDisplay(currentNumber)}
})
        
const nine = document.getElementById('nine')
nine.addEventListener('click', () => {
    if (temp != undefined && currentNumber == ''&& operation == ''){
        temp = undefined;
        currentNumber = '3';
        updateDisplay(currentNumber)
    } else {
    currentNumber = currentNumber+'9';
    updateDisplay(currentNumber)}
})

const decimal = document.getElementById('decimal')
decimal.addEventListener('click', () => {
    if (temp != undefined && currentNumber == ''&& operation == ''){
        temp = undefined;
        currentNumber = '.';
        updateDisplay(currentNumber)
    } else {
    currentNumber = currentNumber+'.';
    updateDisplay(currentNumber)}
})

const addition = document.getElementById('add')
addition.addEventListener('click', () => {
        console.log("temp :"+ temp+ "CN: " + currentNumber)
        if(temp == undefined && currentNumber != '') {
            temp = currentNumber;
            currentNumber = ''
            operation = 'add'
        } else if (temp !== undefined && currentNumber == ''){
            operation = 'add'
        } else if (temp != undefined && currentNumber != '') {
            operate();
            operation = 'add'
        }
        return temp;
 })

const subtraction = document.getElementById('subtract')
subtraction.addEventListener('click', () => {
    if(temp == undefined && currentNumber != ''){
        temp = currentNumber;
        currentNumber = '';
        operation = 'subtract';
    } else if (temp !== undefined && currentNumber == '') {
        operation = 'subtract'
    } else if (temp != undefined && currentNumber != ''){
        operate();
        operation ='subtract';
    }
    console.log("end temp " + temp)
    console.log("end CN " + currentNumber)
})

const multiplication = document.getElementById('multiply')
multiplication.addEventListener('click', () => {
    if(temp == undefined && currentNumber != ''){
        temp = currentNumber;
        currentNumber = '';
        operation = 'multiply';
    } else if (temp !== undefined && currentNumber == '') {
        operation = 'multiply'
    } else if (temp != undefined && currentNumber != ''){
        operate();
        operation ='multiply';
    }
})

const division = document.getElementById('divide')
division.addEventListener('click', () => {
    if(temp == undefined && currentNumber != ''){
        temp = currentNumber;
        currentNumber = '';
        operation = 'divide';
    } else if (temp !== undefined && currentNumber == '') {
        operation = 'divide'
    } else if (temp != undefined && currentNumber != ''){
        operate();
        operation = 'divide'
    }
})

const percentage = document.getElementById('percent')
percentage.addEventListener('click', () => {
        operation = 'percent'
        operate();
    })

const squareRoot = document.getElementById('sqRt')
squareRoot.addEventListener('click', () => {
        if (temp == undefined && currentNumber != ''){
            temp = currentNumber;
            currentNumber = '';
            operation = 'sqRt';
            operate();
        } else if (temp != undefined && currentNumber == '') {
            operation = 'sqRt';
            operate();
        } else if (temp != undefined && currentNumber != ''){
            operate();
            operation = 'sqRt';
            operate();
        }
    })

const exponentiation = document.getElementById('exponent')
exponentiation.addEventListener('click', () => {
    if(temp == undefined && currentNumber != ''){
        temp = currentNumber;
        currentNumber = '';
        operation = 'exponent';
    } else if (temp !== undefined && currentNumber == '') {
        operation = 'exponent'
    } else if (temp != undefined && currentNumber != ''){
        operate();
        operation = 'exponent'
    }
})

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    operate()
    operation = ''})

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    temp = undefined;
    currentNumber = ''
    updateDisplay(0)})


function operate() {
    console.log("temp :"+ temp+ "CN: " + currentNumber)
    currentNumber = Number(currentNumber);
    temp = Number(temp);
    if(operation == 'add') {
        sum = add(currentNumber, temp)
        updateDisplay(sum);
        temp = sum;
        currentNumber = ''
    } else if (operation == 'subtract'){
        difference = subtract(currentNumber, temp)
        console.log("subtract")
        updateDisplay(difference);
        temp = difference;
        currentNumber = ''
    } else if (operation == 'multiply'){
        product = multiply(currentNumber, temp)
        updateDisplay(product);
        temp = product;
        currentNumber = ''
    } else if (operation == 'divide'){
        if (currentNumber == 0) {
            display.textContent = "Undefined"
        } else if (currentNumber != 0) {
            quotient = divide(currentNumber, temp);
            updateDisplay(quotient);
             temp = quotient;
            currentNumber = ''}
    } else if (operation == 'percent') {
        numToPercent = percent(currentNumber)
        updateDisplay(numToPercent+'%')
        temp = numToPercent;
        currentNumber = ''
    } else if (operation == 'exponent'){
        power = exponent(temp, currentNumber)
        updateDisplay(power);
        temp = power;
        currentNumber = ''
    } else if (operation == 'sqRt'){
            sqRt = root(temp);
            updateDisplay(sqRt);
            temp = sqRt;
       
        }
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
    return Math.round(num1**num2*10000)/10000;
}

function root(num) {
    return Math.round(Math.sqrt(num)*10000)/10000;
}

