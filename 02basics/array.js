// Array Methods in JavaScript

// 1. indexOf()
const array1 = [1, 2, 3, 3, 4, 5];
console.log(array1.indexOf(3)); // Output: 2

// 2. push()
const array2 = [1, 2, 3];
array2.push(4);
console.log(array2); // Output: [1, 2, 3, 4]

// 3. pop()
const array3 = [1, 2, 3];
const lastElement = array3.pop();
console.log(lastElement); // Output: 3
console.log(array3); // Output: [1, 2]

// 4. shift()
const array4 = [1, 2, 3];
const firstElement = array4.shift();
console.log(firstElement); // Output: 1
console.log(array4); // Output: [2, 3]

// 5. unshift()
const array5 = [2, 3];
array5.unshift(1);
console.log(array5); // Output: [1, 2, 3]

// 6. slice()
const array6 = [1, 2, 3, 4, 5];
const slicedArray = array6.slice(1, 3);
console.log(slicedArray); // Output: [2, 3]

// 7. splice() - Add or remove elements
const array7 = [1, 2, 3, 4, 5];
array7.splice(2, 1, 'a', 'b');
console.log(array7); // Output: [1, 2, 'a', 'b', 4, 5]

// 8. concat()
const array8 = [1, 2];
const array9 = [3, 4];
const newArray = array8.concat(array9);
console.log(newArray); // Output: [1, 2, 3, 4]

// 9. forEach()-method is used to execute a provided function once for each array element.
const array10 = [1, 2, 3];
array10.forEach(element => console.log(element));
// Output:
// 1
// 2
// 3

// 10. map()
const array11 = [1, 2, 3];
const mappedArray = array11.map(element => element * 2);
console.log(mappedArray); // Output: [2, 4, 6]

const array12 = [1, 2, [3, 4, [5, 6]]];
const flattenedArray2 = array12.flat(2);
console.log(flattenedArray2); // Output: [1, 2, 3, 4, 5, 6]