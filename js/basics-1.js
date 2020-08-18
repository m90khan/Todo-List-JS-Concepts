/*

Topic: JavaScript Basics 101   -   Part 1
- What is Javascript
* Javascript is a lightweight cross platform, object oreinted programming language
* HTML     | CSS         | JS
* Nouns   | Adjective   | Verb
* <p></p> | color: red | p.remove()
 */

/* 
* ***********************************************************************

Topic: Variables 
* Variable is a placeholder for data which acts more like a pointer to the memory location
* var, let and const
* Variable mutation is when we change the value of the variable once assigned
- Var : before es6, Var was only the way to declare variables.

* ***********************************************************************
 
Topic: Data Structures


* Primitive: 
- String : sequence of character
- Number   : Floating Point numbers for decimal and integers
- Boolean  : logical True / False
- Null  :  variable that has a value of nothing (absence of a value)
- Undefined : data type of a variable that does not have a value yet
  
*NaN : NaN is a numeric value that represents something that is not...a number
 - If you divide 0/0 , 1+NaN => any value that the js engine does not comprehend as number
- results as NaN 

! variables cannot start wit a number or special characters or js syntax names expect $
const $firstName = "kan";
console.log($firstName);


* 1: String (Data Structure) 
- strings are immutable
let city1 = 'Munich';
const city2 = 'Gujranwala';
const city3 = 'Saarbrucken';
const  favCities = city1 + ', ' + city2 + ', ' + city3
console.log(favCities);   // Output : Munich, Gujranwala, Saarbrucken
- Another way to write this is usin template literals
`${city1}, ${city2}, ${city3} `
- There are also variosu methods for string
const name = 'Gujranwala';
* name.startswidth('G'); name.endswith('a') ; name.includes('wala')


* JS has dynamic typing means that data type are automatically assigned
* automatically figure the data type and assign. which is called Type coersion. 
* Two Types of coersion: implicit & explicit

* Implicit 
* Explicit

-Type coercion is the process of converting value from one type to another 
-(such as string to number, object to boolean, and so on). Any type, be it 
-primitive or an object, is a valid subject for type coercion.

*To recall, 
-primitives are: number, string, boolean, null, undefined + Symbol (added in ES6)


------------------------------------------------------------------------------------



* 2: Number (Data Structure)  
* Basic Operators 
- math Operators : - + * /  
- Type Operator: typeof
- More Operators: *= += -= /=
* Some operators work from RTL and some LTR
* Operator Order Precedence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

- Unary Operator: the one that only has one side. ++ or --
* ParseInt: convert string into a number '24' => 24  '28kills' => 28  '$90' => NaN
* ParseFloat: convert to floating point

 Output : 14
 let x = 5;
 let y = (x + 2) *2;
console.log(y);

- The match() method searches a string for a match against a regular expression,
- and returns the matches, as an Array object.

function getVowels(str) {
  const m = str.match(/[sk]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}

console.log(getVowels('sky'));  // expected output: 


! Problem : calculate the percentage student got in a test based on questions he got right
! Given studentScore = 15 and totalScore = 20
let studentScore = 15;
let totalScore = 20;
let percentAge= (studentScore/totalScore)*100;
console.log(percentAge);

! Problem: temperature converter  : fahrenheit to celcius
let fahrenheit = prompt('Enter the temperature value in degrees for fahrenheit');
let celcius = (fahrenheit -32 ) * 5/9;
console.log(celcius);
let kelvin = (fahrenheit + 459.67) * 5/9 ;
console.log(kelvin); //Output :if fahrenheit = 0 then celcius -17.77 kelvin = 255.37

*Javascript like other languages also have a control structure when , if else and how code would run
- if Else : to control the flow / if (condition if true){ //run the code } else { // do this}

------------------------------------------------------------------------------------


* 3: Boolean (Data Structure)
- Basic Boolean Logic : AND && , OR || , NOT !
- True or False / valid or invalid / ON or OFF

- Comparison Operators
- < less than / <= less than or equal to
- > greater than  / >= greater than or equal to

- Equality operators
- === strict equality : check equality + value type ,  !== Non-equalty : value not true

- Number.isNaN : The Number.isNaN function is a standard JavaScript function 
- that returns true only if the argument it is given is NaN


! Problem: to calculate is adult or not based on input value
! Output : is child - if =< 7 , teen - if > 7 && < 18 , adult - if >= 18 && <65

let age = prompt('Enter your age');
let child = age <= 7;
let teen = (age > 7) && (age < 18 );
let adult = (age >= 18) && (age <65);
console.log('child '+ child );
console.log('teen '+ teen);
console.log('adult '+ adult );

let age = prompt('Enter your age');
if (age <= 7){
console.log('your are a child : not allowed');
} else if ((age > 7) && (age < 18 )){
console.log('your are a teen: enter' );
}else if ((age >= 18) && (age <65)){
console.log('your are a adult: enter');
}else{
  console.log('your are too old : enter');
}
 
* Leaked global: when a variable is assign to a value but never defined so its always best practice
- to declare the variable

------------------------------------------------------------------------------------

* Ternary Operator 
- write if else statement all in one line if(condition is true) ? do this : else do this;


- if else statement
(if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
- Ternary
let firstName = 'John';
let age = 14;
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');
let drink = age >= 18 ? 'beer' : 'juice'; console.log(drink);

------------------------------------------------------------------------------------

* Switch Statements
- more like a HUGE if else staement 
- break : stops the program once condition is true
- default: if none is true then default output will be given 
- can also have nested cases  (case 'teacher':  case 'instructor':)  
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':  
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

------------------------------------------------------------------------------------

* Truthy and Falsy values and equality operators
- falsy values: values that return durin if else conditions.  false. undefined, null, 0, '', NaN
- truthy values: NOT falsy values

let height;

if (height ) {  // Falsy
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

let height =23;  // Truthy
if (height === 23) {
    console.log('The == operator does type coercion!');
}

! Problem 
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also
 include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average
 winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, 
 just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

*Solution
const johnTeam = [89, 120, 103];
const markTeam = [116, 94, 123];
const maryTeam = [97 + 134 + 105];
let johnAvg = johnTeam.reduce((acc, cur) => acc + cur);
let markAvg = markTeam.reduce((acc, cur) => acc + cur);
let maryAvg = maryTeam.reduce((acc, cur) => acc + cur);
console.log(johnAvg, markAvg, maryAvg);
if (johnAvg > markAvg && johnAvg > maryAvg) {
  console.log("John's team wins with " + johnAvg + " points");
} else if (markAvg > johnAvg && markAvg > maryAvg) {
  console.log("Mike's team wins with " + markAvg + " points");
} else if (maryAvg > johnAvg && maryAvg > markAvg) {
  console.log("Mary's team wins with " + maryAvg + " points");
} else {
  console.log("There is a draw");
}

------------------------------------------------------------------------------------


*/

/*
* *********************************************************************************
 

Topic Non-Primitive Data Type aka Compound data types
* Everything else is an object.
- Arrays
- Functons
- Objects
- Dates etc

* *********************************************************************************



Topic :  Arrays
- Collection of different or same type of data into a single variable. data is indexed
* Array also have methods : concat, includes(T/F), indexOf, join, reverse, slice, splice, sort
- splice => remove/replace elements. array.splice(start, howManyToDelete, [Insert Anything])
- names.splice(1,0, 'kevin')  => ['John','kevin', 'Mark', 'Jane'];
-indexOf : return the index of argument that we pass in the array

 const names = ['John', 'Mark', 'Jane'];
const years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

- Mutate array data
names[1] = 'Ben';
- besides push , names.length also add item to the end of the array
names[names.length] = 'Mary'; 
console.log(names);

- Different data types
const john = ['John', 'Smith', 1990, 'designer', false]; 

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));
const isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

!Problem
! John and his family went on a holiday and went to 3 different restaurants.
 The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is 
between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

- Solution 1
function tipCalculator(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

const bills = [124, 48, 268];
const tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

const finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);


- Solution 2
const bills = [124, 48, 268];
let percentage;
let totalBill = [];
let tips = [];
bills.forEach((bill) => {
  if (bill < 50) {
    percentage = 0.2;
  } else if (bill >= 50 && bill <= 200) {
    percentage = 0.15;
  } else {
    percentage = 0.1;
  }
  const tip = percentage * bill;
  const finalAmount = percentage + bill;
  tips.push(tip);
  totalBill.push(finalAmount);
});

console.log(tips, totalBill);

* *********************************************************************************


Topic:  Object  (Data Type)
* collection of properties. and properties are a key:value combinations
- use custom keys to access data rather than index

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

*accessing a property either using dot notation or [] square brackets john[firstName]
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

* new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);


* Methods 
- Function inside a object is called method
 
! Problem
- Let's remember the first coding challenge where Mark and John compared their BMIs. 
- Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var john = {
    fullName: 'John Smith',
    mass: 110,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI');
}
* *********************************************************************************

 Topic: Loops

- For 
- While
- for of => arrays  
- For in => object
- FOrEach
------------------------------------------------------------------------------------
* For Loop : when we know the repetition for ur code using conditionals
- for(initial expression; condition ; increment expression)  i++ i+=2

* Infinite loop: when condition does not meet at all. result in an infinite loop
for (let i = 1; i !== 20; i += 2) {
	console.log(i);
}

- THE ABOVE LOOP NEVER ENDS
- i starts at 1, and we add 2 each time
- 1,3,5,7,9,11,13,15,17,19,21,etc.
- i never hits 20, so the loop condition is always true

- Instead, write it this way:
for (let i = 1; i <= 20; i += 2) {
	console.log(i);
}
-   EXAMPLE 3  
- Averaging all grades in myStudents array
let total = 0; //total will hold the sum of all grades

for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	total += student.grade; //add each grade to total
}
console.log(total / myStudents.length); //divide by number of students

-   EXAMPLE 4  
- Reversing a string
const word = 'stressed';

let reversedWord = ''; //will hold reversed string

- Loop backwards over the string
 
const word = "stressed";

let reversedWord = ""; //will hold reversed string
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i]; //add each char to reversedWord
}

console.log(reversedWord);

* Nexted Loops
for (let i = 1; i <= 10; i++) {
	console.log('OUTER LOOP:', i);
	for (let j = 10; j >= 0; j -= 2) {
		console.log('  INNER LOOP', j);
	}
}

- Sum all elements in our 2048 board
const gameBoard = [
	[ 4, 32, 8, 4 ],
	[ 64, 8, 32, 2 ],
	[ 8, 32, 16, 4 ],
	[ 2, 8, 4, 2 ]
];

let totalScore = 0;
//outer loop iterates through the rows
for (let i = 0; i < gameBoard.length; i++) {
	let row = gameBoard[i];
	//inner loop iterates over each cell in a given row
	for (let j = 0; j < row.length; j++) {
		totalScore += row[j];
	}
}
------------------------------------------------------------------------------------
* While loop
run the code while a certain condition is true

- Pick a target number we are trying to guess
const target = Math.floor(Math.random() * 10);
- Make initial guess
let guess = Math.floor(Math.random() * 10);

- Continue looping while guess is not the target num
while (guess !== target) {
	console.log(`Target: ${target} Guess: ${guess}`);
	// IMPORTANT!!
	- Update the value of guess each time through the loop
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);
------------------------------------------------------------------------------------

* for in = inside (index number) for of = give values


const user = {
  name: "khan",
  age: "20",
};
for (let x in user) {
  console.log(user[x]);
}

------------------------------------------------------------------------------------

*for of
const names = ["khan", "billy"];
for (let name of names) {
  console.log(names.indexOf(name));
}

let subreddits = [ 'soccer', 'popheads', 'cringe', 'books' ];
-  With a standard for loop
for (let i = 0; i < subreddits.length; i++) {
	console.log(subreddits[i]);
}
- Much cleaner  with a for...of loop!
for (let sub of subreddits) {
	console.log(sub);
}
- Works with other iterables, like strings!
for (let char of 'cockadoodledoo') {
	console.log(char.toUpperCase());
}

------------------------------------------------------------------------------------

* For loop vs For Of
- Whenever we need index related work, for loop is the way to go
const magicSquare = [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ];

-Version using a for loop...
for (let i = 0; i < magicSquare.length; i++) {
	let row = magicSquare[i];
	let sum = 0;
	for (let j = 0; j < row.length; j++) {
		sum += row[j];
	}
	console.log(`${row} summed to ${sum}`);
}

- Much cleaner version using a for...of
for (let row of magicSquare) {
	let sum = 0;
	for (let num of row) {
		sum += num;
	}
	console.log(`${row} summed to ${sum}`);
}

- EXAMPLE 
- If you need the indices, use a traditional for loop!
const words1 = [ 'mail', 'milk', 'bath', 'black' ];
const words2 = [ 'box', 'shake', 'tub', 'berry' ];

for (let i = 0; i < words1.length; i++) {
	- Access index i of both arrays
	console.log(`${words1[i]}${words2[i]}`);
}
------------------------------------------------------------------------------------
* For Of  loop on Objects 
- we cannot loop over the entire object . only loop through keys or values
* Object.keys  ... Object.values
const movieReviews = {
	Arrival                : 9.5,
	Alien                  : 9,
	Amelie                 : 8,
	'In Bruges'            : 9,
	Amadeus                : 10,
	'Kill Bill'            : 8,
	'Little Miss Sunshine' : 8.5,
	Coraline               : 7.5
};

-  THIS DOES NOT WORK!
-  OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
for (let x of movieReviews) {
	console.log(x);
}

- We CAN iterate over the keys of an object
for (let movie of Object.keys(movieReviews)) {
	console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

- We can also iterate over the values
- To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
	total += r;
}
let avg = total / ratings.length;
console.log('Average Rating: ', avg);
------------------------------------------------------------------------------------
* For in Loop : loop over the keys in an object
 const user = {
  name: "khan",
  age: "20",
};
for (let x in user) {
  console.log(user[x]);
}

------------------------------------------------------------------------------------
*forEach
names.forEach(function (name, index) {
  console.log(name, index);
});


! fizzBuzz : For Loop

let fizzBuzz = [];
let count = parseInt(prompt("enter a number for fizzbuzz", "15"));
for (let i = 0; i < count; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    fizzBuzz.push("fizzBuzz");
  } else if (i % 3 == 0) {
    fizzBuzz.push("fizz");
  } else if (i % 5 == 0) {
    fizzBuzz.push("Buzz");
  } else {
    fizzBuzz.push(i);
  }
}
console.log(fizzBuzz);

! Problem
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. 
The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). 
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants.
The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300,
 and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, 
and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array,
divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average



const john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      let percentage;
      let bill = this.bills[i];

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      // Add results to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};

const mark = {
  fullName: "Mark Miller",
  bills: [77, 475, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];

    for (let i = 0; i < this.bills.length; i++) {
      // Determine percentage based on tipping rules
      let percentage;
      let bill = this.bills[i];

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }

      // Add results to the corresponing arrays
      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill * percentage;
    }
  },
};

function calcAverage(tips) {
  let sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pays higher tips, with an average of $" +
      john.average
  );
} else if (mark.average > john.average) {
  console.log(
    mark.fullName +
      "'s family pays higher tips, with an average of $" +
      mark.average
  );
}
 
*/
