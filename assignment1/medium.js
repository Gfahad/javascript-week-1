var userInput = prompt("Enter your input?"); //Get User input

if (userInput == userInput.toLowerCase()) { //All Lowercase is whispering
    console.log("User is whispering.");
} else if (userInput == userInput.toUpperCase()) //All Uppercase is shouting
{
    console.log("User is shouting.");
} else { //Neither uppercase nor Lowercase is neither
    console.log("User is neither whispering nor shouting.");
}