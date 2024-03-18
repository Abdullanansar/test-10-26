// //Q 1
// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");
// const fullName = firstName + " " + lastName;
// alert("Hello " + fullName + "!");


// //Q 2
// let userInput = prompt("Enter your favorite mobile phone model:");
// let userInputLength = userInput.length;
// document.write("Length of user input: " + userInputLength);


// //Q 3
// const word = "Pakistani";
// const index = word.indexOf("n");
// document.write("Index of 'n' in the word 'Pakistani' is: " + index);


//Q 4
// Find the last index of "l" in the word "Hello World" and display the result
// const word = "Hello World";
// const lastIndex = word.lastIndexOf("l");
// document.write("Last index of 'l' in 'Hello World': " + lastIndex);

//Q 5
const word = "Pakistani";
const character = word.charAt(3);
document.write("Character at 3rd index in the word 'Pakistani' is: " + character);



//Q 7
const city = "Hyderabad";
const newCity = city.replace("Hyder", "Islam");
document.write(newCity);



//Q 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
message = message.replace(/and/g, "&");
document.write(message);


//Q 9
const stringNumber = "472";
const number = parseInt(stringNumber);
document.write("Value: " + number + "<br>");
document.write("Type: " + typeof number + "<br>");


//Q 10
function convertToUpperCase(input) {
    return input.toUpperCase();
}


//Q 11
function convertToTitleCase(input) {
    return input.toLowerCase().replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}


//Q 12
var num = 35.36;
var newNum = num.toString().replace(".", "");
console.log(newNum); // Output: 3536


//Q 13
function isValidUsername(username) {
    let specialSymbols = ['@', '.', ',', '!'];
    for (let symbol of specialSymbols) {
        if (username.includes(symbol)) {
            return false;
        }
    }
    return true;
}

let username = prompt("Enter your username:");
while (!isValidUsername(username)) {
    username = prompt("Please enter a valid username:");
}


//Q 14
const A = ["cake", "apple pie", "cookie", "chips", "patties"];

function searchItem(item) {
    const found = A.find(element => element.toLowerCase() === item.toLowerCase());
    if (found) {
        console.log(`"${item}" is found in the list.`);
    } else {
        console.log(`"${item}" is not found in the list.`);
    }
}

// Example usage
searchItem("COOKIE");



//Q 15
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkPasswordRequirements(password) {
    if (password.length < 6 || /^[0-9]/.test(password) || !/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
        return false;
    }
    return true;
}

function getPassword() {
    rl.question("Enter your password: ", (password) => {
        if (checkPasswordRequirements(password)) {
            console.log("Password accepted");
            rl.close();
        } else {
            console.log("Password requirements not met. Please enter a valid password.");
            getPassword();
        }
    });
}

getPassword();


//Q 16
var university = "University of Karachi";
var universityArray = university.split(" ");
console.log(universityArray);


//Q 17
const userInput = "Hello";
const lastCharacter = userInput.charAt(userInput.length - 1);
console.log(lastCharacter);


//Q18
const countOccurrences = (str, word) => {
    const words = str.toLowerCase().split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            count++;
        }
    }
    return count;
};

const sentence = "The quick brown fox jumps over the lazy dog";
const wordToCount = "the";
const occurrences = countOccurrences(sentence, wordToCount);
console.log(`Number of occurrences of "${wordToCount}" is: ${occurrences}`);