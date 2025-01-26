// primitive datatypes
// reference are non primitive datatypes

// primitive datatypes are immutable
// reference are non primitive datatypes are mutable
// primitive datatypes are passed by value
// reference are non primitive datatypes are passed by reference
//array,objects function
// are reference types
//const myFunction=function(){
  //  console.log("Hello world");
//}

//console.log(typeof myFunction); //function


//Stack(primitive),heap(non primitive)

let user={
    name:"John",
    age:30,
    email: "john@gmail.com"
}
let user2=user
user2.email="laksh@gmail.com"
console.log(user2.email); //undefined