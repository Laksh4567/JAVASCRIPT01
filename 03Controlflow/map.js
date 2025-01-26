//Filter, Map, and Reduce Concepts in JavaScript
//1. Filter
//Purpose: The filter() method creates a new array with all elements that pass the test implemented by the provided function.
//Syntax: array.filter(callback(element, index, array))
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredNumbers = numbers.filter(num => num > 5);
console.log(filteredNumbers); // Output: [6, 7, 8, 9, 10]
// 2. Map
// Purpose: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// Syntax: array.map(callback(element, index, array))
const numbers1 = [1, 2, 3, 4, 5];
const squaredNumbers1 = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
// 3. Reduce
// Purpose: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// Syntax: array.reduce(callback(accumulator, currentValue, index, array), initialValue)
const numbers2 = [1, 2, 3, 4, 5];
const sum1 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15

//combined used
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter: Get numbers greater than 5
const filteredNumbers1 = numbers.filter(num => num > 5);

// Map: Square the filtered numbers
const squaredNumbers = filteredNumbers.map(num => num * num);

// Reduce: Sum the squared numbers
const sum = squaredNumbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // Output: 355 (6² + 7² + 8² + 9² + 10² = 36 + 49 + 64 + 81 + 100 = 330)


// Key Points
// Filter: Used to select elements based on a condition.
// Map: Used to transform elements in an array.
// Reduce: Used to accumulate values into a single result.