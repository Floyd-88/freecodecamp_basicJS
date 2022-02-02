/*var should not exist in your code.
You should change fCC to all uppercase.
FCC should be a constant variable declared with const.
fact should be declared with let.
console.log should be changed to print the FCC and fact variables.*/

/*const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line*/



/*myStr should have a value of the string This is the start. This is the end.
You should use the + operator to build myStr.
myStr should be created using the const keyword.
You should assign the result to the myStr variable.*/

/*const myStr = "This is the start." + " This is the end."; 
console.log(myStr);*/



/*myStr should have a value of the string This is the first sentence. This is the second sentence.
You should use the += operator to build myStr.*/

/*let myStr;
myStr = "This is the first sentence. ";
myStr +="This is the second sentence.";*/




/*myName should be set to a string at least 3 characters long.
You should use two + operators to build myStr with myName inside it.*/
// Only change code below this line

/*const myName = "Ilia";
const myStr = "I " + myName + "hello";*/




/*someAdjective should be set to a string at least 3 characters long.
You should append someAdjective to myStr using the += operator.*/
// Change code below this line

/*const someAdjective = "JavaScript";
let myStr = "Learning to code is ";
myStr += someAdjective;*/




/*You should not change the variable declarations in the // Setup section.
lastNameLength should be equal to eight.
You should be getting the length of lastName by using .length like this: lastName.length.*/
// Setup

/*let lastNameLength = 0;
const lastName = "Lovelace";*/



// Only change code below this line

/*lastNameLength = lastName.length;*/




/*The firstLetterOfLastName variable should have the value of L.
You should use bracket notation.*/

// Setup

/*let firstLetterOfLastName = "";
const lastName = "Lovelace";
// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line*/



/*myStr should have a value of the string Hello World.
You should not change the code above the specified comment.*/
// Setup

/*// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line*/

/*Modify the data stored at index 0 of myArray to a value of 45.

const myArray = [18, 64, 99];
myArray[0]=45;*/



/*Using bracket notation select an element from myArray such that myData is equal to 8.

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
const myData = myArray[2][1];*/



/*Push ["dog", 3] onto the end of the myArray variable.*/
// Setup
/*const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);*/
// Only change code below this line



/*Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.*/
// Setup
/*const myArray = [["John", 23], ["cat", 2]];
let removedFromMyArray = myArray.pop()
// Only change code below this line*/




/*Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.*/
// Setup
// const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray = myArray.shift();

// Only change code below this line



/*Add ["Paul", 35] to the beginning of the myArray variable using unshift().*/
// Setup
/*const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35])*/
// Only change code below this line



/*Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.
["Chocolate Bar", 15]*/

/*const myList = [["milk", 2], ["butter", 3], ["apple", 5 ], ["orange", 1], ["bread", 1]];*/


/*Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function.*/

/*let reusableFunction = () => {
  console.log("Hi World")
}
reusableFunction();*/



/*Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.*/

/*let functionWithArgs = (a, b) => {
  console.log(a + b);
} 
functionWithArgs(1, 2);*/



/*Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.*/

/*function timesFive(n) {
  return 5 * n;
}*/ 


/*Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.
Inside function fun1, assign 5 to oopsGlobal without using the let or const keywords.*/

// Declare the myGlobal variable below this line
/*let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}*/


/*Add a local variable to myOutfit function to override the value of outerWear with the string sweater.*/

// Setup
/*const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();*/


/*Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.*/

/*// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
} 

// Only change code above this line

addThree();
addFive();*/



/*Call the processArg function with an argument of 7 and assign its return value to the variable processed.*/

// Setup
/*let processed = processArg(7);

function processArg(num) {
  return (num + 3) / 5;
}
*/
// Only change code below this line


