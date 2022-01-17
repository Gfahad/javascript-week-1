function calculate_bmi(cartoon) {
    var bmi = cartoon.mass / (cartoon.height * cartoon.height);
    return bmi;
};

var tom = {
    name: "Tom",
    height: 9,
    mass: 8
};

var jerry = {
    name: "Jerry",
    height: 10,
    mass: 45
};

var tom_bmi = calculate_bmi(tom);
var jerry_bmi = calculate_bmi(jerry);

var whoHasAHigherBmi = (tom_bmi > jerry_bmi) ? tom.name : jerry.name;
console.log(whoHasAHigherBmi);

var tomHigherThanJerry = (tom_bmi > jerry_bmi);
console.log(`Is Tom’s BMI higher than Jerry’s? ${tomHigherThanJerry}`);