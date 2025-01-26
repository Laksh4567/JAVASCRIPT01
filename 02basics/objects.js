//objects def:- In JavaScript, an object is a collection of key-value pairs, where each key is a string and each value can be any data type, including strings, numbers, booleans, arrays, functions, and other objects.
// objects.js
//keys and value can be defined 
// Create an object using object literal
const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer',
    sayHello: function() { //function formation
      console.log(`Hello, my name is ${this.name}!`);
    }
  };
  
  // Create an object using object constructor
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.startEngine = function() {
      console.log('Vroom!');
    }
  }
  
  const myCar = new Car('Toyota', 'Corolla', 2015);
  
  // Create an object using object.create()
  const student = Object.create(null);
  student.name = 'Jane Doe';
  student.age = 20;
  student.grade = 'A';
  student.subjects = ['Math', 'Science', 'English'];
  student.addSubject = function(subject) {
    this.subjects.push(subject);
  }
  
  // Test your objects
  person.sayHello();
  myCar.startEngine();
  student.addSubject('History');
  console.log(student.subjects);


  //Symbolfunction:- The Symbol function in JavaScript is used to create unique and immutable primitive values. These values are often used as unique identifiers for object properties, ensuring that they do not conflict with other properties.
  //symbols.js
  // Create a symbol using the Symbol function
  const id = Symbol('id');//Symbols are unique, so even if you create another Symbol with the same description, it will not be equal to the first one.
  const obj = {};//An empty object obj is created.
  obj[id] = '12345';
  console.log(obj[id]); // Output: "12345"

  console.log(id); // Output: Symbol(id)
  console.log(Object.keys(obj)); // Output: []
  console.log(Object.getOwnPropertyNames(obj)); // Output: []


  //object freeze
  const jsuser={
    email: "lakshnandagmail.com"
  }
  Object.freeze(jsuser);
  jsuser.email="newuser@gmail.com"
  console.log(jsuser);


  const obj1 = {1:"a",2:"b"}
  const obj2 = {1:"c",2:"d"}
  const obj3={obj1,obj2}
  console.log(obj3);


  //destructuring 
  const course={
    coursename :"js in hindi",
    duration: "2 hours",
    price: 5000
  }

course.courseInstructor
const {duration}=course

console.log(duration);


// {
//     "coursename" :"js in hindi",
//     "duration": "2 hours",
//     "price": "5000"
// }