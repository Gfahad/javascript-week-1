function month_name(month_number) {
    var months = {
        "1": " january",
        "2": "febuary",
        "3": "march",
        "4": "april",
        "5": "may",
        "6": "june",
        "7": "july",
        "8": "august",
        "9": "september",
        "10": "october",
        "11": "november",
        "12": "december",
    };
    return months[month_number];
}
var userInput = prompt("Enter your input?");
var result = month_name(userInput);

//undefined test
if (!result) {
    alert("Invalid Input");
} else {
    console.log(`The name of month {$userInput}. is ${result}`);
}