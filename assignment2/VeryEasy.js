function minimum(a, b) {
    if (a > b) {
        return b;
    } else if (b > a) {
        return a;
    }
}

var num1 = 6;
var num2 = 2;
var result = minimum(num1, num2);

console.log("the minimum between the number " + num1 + " and " + num2 + " is " + result);