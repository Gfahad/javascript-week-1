function printStudent(student) {
    console.log(`Hello, my name is ${student.first_name} ${student.last_name} and I'm ${student.age} years old.`)
};

var student1 = {
    first_name: "fahad",
    last_name: "Gumira",
    age: 18
};


var student2 = {
    first_name: "joseph",
    last_name: "kevin",
    age: 20
};

var student3 = {
    first_name: "mary",
    last_name: "tramble",
    age: 12
};

var students = [student1, student2, student3];

printStudent(student2);