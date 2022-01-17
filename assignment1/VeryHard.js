function add(num1, num2) {
    return num1 + num2; //add num1 and num2
}

function subtract(num1, num2) {
    return num1 - num2; //subtract num2 from num1
}

function multiply(num1, num2) {
    return num1 * num2; //multiply num1 by num2
}

function divide(num1, num2) {
    return num1 / num2; //divide num1 by num2
}



var inputnum1 = prompt("Enter the first number");
var what = prompt("enter the operator(+,-,/or *)");
var inputnum2 = prompt("enter the second number");
var result;

if (what == "+") {
    result = add(inputnum1, inputnum2);
} else if (what == "-") {
    result = subtract(inputnum1, inputnum2);
} else if (what == "*") {
    result = multiply(inputnum1, inputnum2);
} else if (what == "/") {
    result = divide(inputnum1, inputnum2)
};



console.log(`${inputnum1} ${what} ${inputnum2} = ${result}`);