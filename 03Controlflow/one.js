//Control Flow in JavaScript
//Control flow refers to the order in which statements are executed in a program. JavaScript provides several constructs to control the flow of execution, such as conditional statements, loops, and error handling.

//Conditional Statements:-Conditional statements allow you to execute different blocks of code based on certain conditions.

//if Statement
var age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

//if...else Statement
var age = 16;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}

//else if Statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}
//Ternary Operator
var age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Output: Adult
//switch Statement
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week.");
        break;
    case "Friday":
        console.log("End of the work week.");
        break;
    default:
        console.log("Midweek day.");
}
//Error Handling:-Error handling allows you to manage errors gracefully without crashing the program.

//try...catch
try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
}
//try...catch...finally
try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.log("An error occurred: " + error.message);
} finally {
    console.log("This will always execute.");
}
//Functions and Control Flow:-Functions can also influence control flow by encapsulating logic and returning values.

//Function with Return
function isEligible(age) {
    return age >= 18;
}

if (isEligible(20)) {
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible to vote.");
}
//Function with Callback
function processData(data, callback) {
    // Process data
    callback(data);
}

processData("Hello", function(result) {
    console.log(result); // Output: Hello
});



//falsy statement
// In JavaScript, a falsy value is a value that is considered false when encountered in a Boolean context. JavaScript has specific values that are considered falsy. Here is a list of all falsy values:

// false: The boolean value false.
// 0: The number zero.
// "": An empty string.
// null: The absence of any value.
// undefined: A variable that has not been assigned a value.
// NaN: Not-a-Number, representing an invalid number.

if (true) {
    console.log("This will execute.");
}

if (1) {
    console.log("This will execute.");
}

if ("Hello") {
    console.log("This will execute.");
}

if ([]) {
    console.log("This will execute.");
}

if ({}) {
    console.log("This will execute.");
}

if (function(){}) {
    console.log("This will execute.");
}
//Nullish conseling operator
// The Nullish Coalescing Operator (??) is a binary operator that returns the first operand 
// if it is not null or undefined, and the second operand if it is. It is a shorthand way to provide
//  a default value when a variable might be null or undefined.
let name = null;
let fullName = name ?? "Unknown";
console.log(fullName); // Output: "Unknown"

let age = 25;
let userAge = age ?? 30;
console.log(userAge); // Output: 25