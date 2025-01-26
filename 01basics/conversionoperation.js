//let score= "33" // is stores the value as 33 in the variable score.

//const {score}=req.body---- in this it is not guarenteed that the value in the consta variable is 33 oor not
let score="567abc"
console.log(typeof score);
let valueInnumber= Number(score)
console.log(typeof valueInnumber);
console.log(valueInnumber)
// when you convert a string to number it will get converted easily
// whenyou convert like "33abc" then it will give output NaN
// true =1 or false =0
let isLoggedIn=1
let booleanloggedin=Boolean(isLoggedIn)
console.log(booleanloggedin)


//********OPERATIONS**************
let value=45
let negative= -value
console.log(negative)

console.log(+true);// gives value 1.

console.log(+ "");/// gives 0.


console.log(null>0);
console.log(null==0);
console.log(null>=0);  // its true value reason comparisons convert null to a number treating it as 0 .


// === check both value and type
console.log("5"===5); //return false

console.log(5===5); // return true
