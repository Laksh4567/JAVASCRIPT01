//Loops:-Loops allow you to execute a block of code repeatedly.

//for Loop
for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

//while Loop
var i = 0;
while (i < 5) {
    console.log("Iteration: " + i);
    i++;
}
//do...while Loop
var i = 0;
do {
    console.log("Iteration: " + i);
    i++;
} while (i < 5);

//for...in Loop
let person = { name: "John", age: 30, job: "Developer" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
//for...of Loop

var colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

//for...eachloop
var colors = ["red", "green", "blue"];

colors.forEach(function(color, index) {
    console.log("Color at index " + index + " is " + color);
});
//Break and Continue:-break is used to exit a loop prematurely.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
//continue is used to skip the current iteration and move to the next one.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}




//for each examples
const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums=mynums.filter( (num)=>num>6)
// console.log(newnums);

const newnums=[]
mynums.forEach( (num)=>{
    if(num>6){
        newnums.push(num)
    }
})
console.log(newnums);