/// scope is the limmit of whatever parameters you set
// let vs var vs const varaiables

//const means constant and the variable cannot change
const num1 = 10;
console.log(num1);

num1 = 20;


//let vs var
//let is what we call blocked scoped vs var fucntion scoped.let was introduced ES6, so was const


// global variable vs local
var spiderman = "andrew"; //example of global variable

function hcbcspiderName() {
    spiderman = "tobbey";


    letbestMJ = "EMMA";
    console.log(bestMJ);

}



//functions 
function chgMJname() {
    bestMJ = "Zendaya";
    let sideKick = "tom";
    return sideKick;
}
return chgMJname();


// if statement are "blocked" scoped
if (spiderman = "tom"); {
    var congrats = " thank you for your help";
}
console.log(congrats);