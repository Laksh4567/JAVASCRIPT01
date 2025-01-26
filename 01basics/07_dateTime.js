//JavaScript provides the Date object to work with dates and times. This object allows you to create, manipulate, and format dates and times in various ways.
//You can create a Date object in several ways:

//Current Date and Time:
let now = new Date();
console.log(now); // Outputs the current date and time

//Specific Date and Time:
let specificDate = new Date(2023, 9, 15, 14, 30, 0); // October 15, 2023, 14:30:00
console.log(specificDate);

//From a Date String:
let dateFromString = new Date("2023-10-15T14:30:00Z");
console.log(dateFromString);

//From Timestamp (milliseconds since 1970):
let dateFromTimestamp = new Date(1697380200000);
console.log(dateFromTimestamp);

//Getting Date and Time Components
//You can extract various components from a Date object:

//Year:
let year = now.getFullYear();
console.log(year); // e.g., 2023

//Month (0-11):

let month = now.getMonth(); // 0 = January, 11 = December
console.log(month);
//Day of the Month (1-31):
let day = now.getDate();
console.log(day);
//Day of the Week (0-6):
let dayOfWeek = now.getDay(); // 0 = Sunday, 6 = Saturday
console.log(dayOfWeek);
//Hours (0-23):
let hours = now.getHours();
console.log(hours);
//Minutes (0-59):
let minutes = now.getMinutes();
console.log(minutes);
//Seconds (0-59):
let seconds = now.getSeconds();
console.log(seconds);
//Milliseconds (0-999):
let milliseconds = now.getMilliseconds();
console.log(milliseconds);

//Set Year:
now.setFullYear(2024);
//Set Month:
now.setMonth(11); // December
//Set Day of the Month:
now.setDate(25);
//Set Hours:
now.setHours(15);
//Set Minutes:
now.setMinutes(45);
//Set Seconds:
now.setSeconds(30);
//Set Milliseconds:
now.setMilliseconds(500);

//******************type of date is the object.**********************

//Formatting Dates
//Using toLocaleString():
let formatted = now.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
console.log(formatted); // e.g., "Sunday, October 15, 2023"
//Manual Formatting:
let formattedDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
console.log(formattedDate); // e.g., "2023-10-15"


//Date Arithmetic
//Adding Days:
now.setDate(now.getDate() + 7); // Adds 7 days
//Subtracting Days:
now.setDate(now.getDate() - 7); // Subtracts 7 days
//Difference Between Dates:

let date1 = new Date(2023, 9, 15);
let date2 = new Date(2023, 9, 20);
let differenceInTime = date2 - date1; // Difference in milliseconds
let differenceInDays = difference