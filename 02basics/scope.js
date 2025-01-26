//global scope
let globalVar = "I am global";

function showGlobalVar() {
    console.log(globalVar); // Accessible here
}

showGlobalVar(); // Output: "I am global"


//function scope 
function myFunction() {
    let functionVar = "I am local to myFunction";
    console.log(functionVar); // Accessible here
}

myFunction(); // Output: "I am local to myFunction"
// console.log(functionVar); // Error: functionVar is not defined

//block scope
if (true) {
    let blockVar = "I am local to this block";
    console.log(blockVar); // Accessible here
}

// console.log(blockVar); // Error: blockVar is not defined

//closure 
function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log(outerVar); // Accessible here due to lexical scope
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // Output: "I am from outer function"

//class scope
class MyClass {
    constructor() {
        this.classVar = "I am in class scope";
    }

    showClassVar() {
        console.log(this.classVar); // Accessible here
    }
}

const instance = new MyClass();
instance.showClassVar(); // Output: "I am in class scope"


// nested scope 
function one(){
    const username= "John";
    function two(){
        const age = 30;
        console.log(username);
    }
    //console.log(age);

    two()
}
one()