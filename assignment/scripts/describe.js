// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We initialize the variable called 'name' and set its value to the string 'Dane'.
// We check if the variable is exactly the same as the string 'Mary';
// if it was the same, console would log 'Hi, Mary!'
// if it was different, console would log 'How do you do?'.
// The name is not Mary, so console output is 'How do you do?'.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We initialize a variable called 'secret'.
// We initialize a variable called 'code' and set its value to 123, which is a number.
// We check if variable 'code' is exactly equal to 123. If it is equal, the variable secret will be set to string "super", and the variable 'code' will be multiplied by 2.
// We check if variable 'code' is larger than 250. If it is, variable 'secret' is set to string "duper".
// code is equal to 123. secret is set to "super". code is multiplied by 2. code = 246. 
// code is not bigger than 250. nothing is done.
// console logs "super".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First, we initialize variable 'isStudent' and set it to true, initialize variable 'age' and set it to 34, initialize variable 'zip' and set it to 55407.
// Then check if both isStudent is true and age is higher than eighty thousand, and give that case a console output about being a student on the West Coast. Our zip is less than 80000 so we'd move to next code.
// Then we check if isStudent is not true, or if they are under 30. Console would log 'What are your hobbies?' if either was true. Neither is true so no console output and code moves to next line.
// Then we check if isStudent is true. This is true, so console logs 'Welcome to Prime!'. code exits.
// Next line of code would log 'How about the weather?' if none of the above statements are true.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red'; 
let colorTwo = 'blue';
let mix = true;

// FIX - colorOne is set to 'red' while instructions say it should be 'blue'. Update to 'blue'. colorTwo shold be set to 'red' but right now it is set to 'blue'. Update to 'red'.

if (mix === true) {
  colorOne = 'purple';
}
*/

// FIX - instructions say that colorTwo needs to be set to 'purple' if mix is true. 
// Add the following line directly after "colorOne = 'purple'":
// colorTwo = 'purple';

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) { 

// FIX instructions say the code should check if both conditions are true, but currently code checks if either is true.  Update the conditional "||" to "&&".

  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}

// FIX - currently the if statement if age is larger than minAge, console will log 'no entry'.
// Change the conditional to greater than or equal. 
// if statement will be:
// if(minAge >= age)

*/

