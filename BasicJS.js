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



/*Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.*/

/*function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);

  return arr.shift();
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));*/




/*Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.*/

/*function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}*/



/*Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.*/

/*function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue) {
 return "Yes, that was true"
  }else {
 return   "No, that was false"
  }


  // Only change code above this line

}*/



/*Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge*/

/*function testSize(num) {
  // Only change code below this line
if(num < 5) {
  return "Tiny"
  }
else if(num < 10) {
  return "Small"
  }
else if(num < 15) {
  return "Medium"
  }
else if(num < 20) {
   return "Large"
   }
else if(num >=  20) {
  return "Huge"}


  return "Change Me";
  // Only change code above this line
}

testSize(7);*/





/*Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):
Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.*/

/*const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if(strokes === 1) {
  return names[0];
} else if(strokes <= par - 2) {
  return names[1];
} else if(strokes === par - 1) {
  return names[2];
} else if(strokes === par) {
  return names[3];
} else if(strokes === par + 1) {
  return names[4];
} else if(strokes === par + 2) {
  return names[5];
} else if(strokes >= par + 3) {
  return names[6];
}

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);*/




/*Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff*/

/*function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val) {
  case "a":
  return "apple";
  break;
  case "b":
  return "bird";
  break;
  case "c":
  return "cat";
  break;
  default:
  return "stuff"
  break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);*/




/*You will write a card counting function. It will receive a card parameter, which can be a number or a string, 
and increment or decrement the global count variable according to the card's value (see table). The function will 
then return a string with the current count and the string Bet if the count is positive, or Hold if the count is 
ero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.
Example Outputs: -3 Hold or 5 Bet*/


/*let count = 0;
function cc(card) {
  // Only change code below this line
switch (card) {
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
		count = count + 1;
		return (count <= 0) ?	count + " Hold" : count + " Bet";
		break;
	case 7:
	case 8:
	case 9:
		count = count -1 + 1;
		return (count <= 0) ?	count + " Hold" : count + " Bet";
		break;
	case 10:
	case "J":
	case "Q":
	case "K":
	case "A":
		count = count -1;
		return (count <= 0) ?	count + " Hold" : count + " Bet";
		break; 

  // Only change code above this line
}
}
console.log(cc(2));
console.log(cc(2));
console.log(cc(2));
console.log(cc(8));
console.log(cc("K"));
console.log(cc("K"));
console.log(cc("K"));
console.log(cc("K"));*/





/*Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.
You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array.*/

/*const myDog = {
  // Only change code below this line
name: "Bobik",
legs: 4,
tails: 1,
friends: ["ball", "dogs"] 
  // Only change code above this line
};*/




/*Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt.*/

/*// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};


// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line*/



/*Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively.*/

/*// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line*/




/*Update the myDog object's name property. Let's change her name from Coder to Happy Coder. You can use either dot or bracket notation.*/

/*// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";
// Only change code below this line
*/



/*Modify the function checkObj to test if an object passed to the function (obj) contains a specific property (checkProp). If the property is found, return that property's value. If not, return "Not Found".*/
/*let obj = {
  	gift: "pony", 
  	pet: "kitten", 
  	bed: "sleigh"}



function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else{return "Not Found"}
}

  console.log(checkObj(obj, "gift"))*/



/*Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.*/

/*const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
console.log(myArray)*/



/*Use a for loop to push the values 1 through 5 onto myArray.*/


/*const myArray = [];
for(let i=1; i <=5; i++) {
  myArray.push(i)
}console.log(myArray)
*/


/*Push the odd numbers from 1 through 9 to myArray using a for loop.*/

/*// Setup
const myArray = [];
for(let i=1; i <=9; i = i+2) {
myArray.push(i)
}
// Only change code below this line*/



/*Push the odd numbers from 9 through 1 to myArray using a for loop.*/

// Setup
/*const myArray = [];
for(let i=9; i>=1; i = i -2) {
  myArray.push(i);
}
// Only change code below this line
*/




/*Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.*/


/*function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++) {
    product *= arr[i][j]; 
  }
}
  // Only change code above this line
  return product;
}

console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));*/



/*Change the while loop in the code to a do...while loop so the loop will push only the number 10 to myArray, and i will be equal to 11 when your code has finished running.*/

/*// Setup
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while(i < 5)*/



/*Напишите рекурсивную функцию, sum(arr, n)которая возвращает сумму первых nэлементов массива arr.*/

/*function sum(arr, n) {
  // Only change code below this line
if(n<=0) {
  return 0;
} else {
return  sum(arr, n-1) + arr[n-1]; 

}
}
console.log(sum([1, 2, 3, 4, 5], 3))
*/


// Setup



/*We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.
If both are true, then return the "value" of that property.
If name does not correspond to any contacts then return the string No such contact.
If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.*/

/*const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
	let nameContacts = false;
  // Only change code below this line
for(i=0; i<contacts.length; i++) {
	if(contacts[i]["firstName"] != name) {
		nameContacts = true;
	}
	else if(contacts[i]["firstName"] == name) {
		if(contacts[i][prop] != undefined) {
			return contacts[i][prop]
		}else {
			return "No such property"}
	} 
}
if(nameContacts) {
	return "No such contact"
}

}
console.log(lookUpProfile("Kristian", "lastNam"));*/



/*Измените randomFraction, чтобы возвращать случайное число вместо возврата 0.*/

/*function randomFraction() {

  // Only change code below this line

  return Math.random();

  // Only change code above this line
}*/



/*Создайте вызываемую функцию randomRange, которая принимает диапазон myMinи myMaxвозвращает случайное целое число, большее или равное myMin, и меньшее или равное myMax, включительно.*/

/*function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin );
  // Only change code above this line
}
console.log(randomRange(1, 10))*/



/*Используйте parseInt()в convertToIntegerфункции, чтобы она преобразовывала входную строку strв целое число и возвращала ее.*/

/*function convertToInteger(str) {
return parseInt(str)
}
convertToInteger("56");*/



/*Используйте parseInt()в convertToIntegerфункции, чтобы она преобразовывала двоичное число в целое и возвращала его.*/

/*function convertToInteger(str) {
return parseInt(str, 2)
}

convertToInteger("10011");
*/



/*Используйте условный оператор в checkEqualфункции, чтобы проверить, равны ли два числа или нет. Функция должна возвращать либо строку Equal, либо строку Not Equal.*/

/*function checkEqual(a, b) {
return (a === b) ? "Equal" : "Not Equal"
}

checkEqual(1, 2);*/



/*В checkSignфункции используйте несколько условных операторов — в соответствии с рекомендуемым форматом, используемым в findGreaterOrEqual— чтобы проверить, является ли число положительным, отрицательным или нулем. Функция должна вернуть positive, negativeили zero.*/

/*function checkSign(num) {
return (num === 0) ? "zero" :
(num < 0) ? "negative" : "positive"
}

checkSign(10);*/



/*Мы определили функцию, вызываемую countdownс одним параметром ( n). Функция должна использовать рекурсию для 
возврата массива, содержащего целые числа , n на 1 основе nпараметра. Если функция вызывается с числом меньше 1, 
функция должна вернуть пустой массив. Например, вызов этой функции n = 5должен вернуть массив [5, 4, 3, 2, 1]. 
Ваша функция должна использовать рекурсию, вызывая саму себя, и не должна использовать циклы любого вида.*/

/*// Only change code below this line
function countdown(n){

  return (n < 1) ? [] : [n].concat(countdown(n-1));

}
// Only change code above this line

console.log(countdown(10));*/




/*Мы определили функцию с именем rangeOfNumbersс двумя параметрами. Функция должна возвращать массив целых чисел,
 который начинается с числа, представленного startNumпараметром, и заканчивается числом, представленным 
 endNumпараметром. Начальное число всегда будет меньше или равно конечному числу. Ваша функция должна 
 использовать рекурсию, вызывая саму себя, и не использовать циклы любого рода. Это также должно работать для 
 случаев, когда оба startNumи endNumодинаковы.*/

/* function rangeOfNumbers(startNum, endNum) {
  if(startNum === endNum) {
  	return[startNum]
  } else {
  	let result = rangeOfNumbers(startNum, endNum - 1);
  	result.push(endNum);
  	return result;
  }
};
console.log(rangeOfNumbers(10, 10))*/