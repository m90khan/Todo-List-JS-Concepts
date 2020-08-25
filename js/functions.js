/*
* *********************************************************************************


Topic: Functions 
* write reuseable code 
* sets of statements combined together to form a functionality inside a block
-  Function declaration
- function whatDoYouDo(job, firstName) {}
- return a certain computer value as output and immediaely stop the function

TOPICS COVERED
-Curry
-Partial application
-Pure function
-Referential transparency
-Compose
-Pipe

Topic: When to use functional vs OO proramming
- machine working with same data at the same time  => functional
- react , redux also se the concept of functional programmng
- avoid principle of shared state


* Functional Programming
- seperation of concerns 

Topic: Pure Function
- always return the same output given same output
- cannot modify anything outside itself

//Side effects:
const array = [1,2,3];
function mutateArray(arr) {
  arr.pop()
}
function mutateArray2(arr) {
  arr.forEach(item => arr.push(1
  ))
}
//The order of the function calls will matter.
mutateArray(array)   // does not return anything but a element is removed
mutateArray2(array)
array

// map and concat methods can fix this issue of mutation



- Example
// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}


//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.



* declaring a function using name

function yearsUntilRetirement(year, firstName) {
    const age = calculateAge(year);
    const retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

! Function Arguments
- greet now expects a single argument
function greet(nickname) {
	console.log(`Hi, ${nickname}!`);
}
greet('Sansa');
greet('Ramsay');

- EXAMPLE 2
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}
- We can now specify how many dice to roll!
function throwDice(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		rollDie();
	}
}

throwDice(2);
throwDice(6);

! Return
function square(x) {
	return x * x;
	console.log('ALL DONE!'); //this NEVER runs;
}

- One way of writing this function
function isPurple(color) {
	if (color.toLowerCase() === 'purple') {
		return true;
	}
	else {
		return false;
	}
}

- We don't need the else!
function isPurple(color) {
	if (color.toLowerCase() === 'purple') {
		return true;
	}
	return false;
}

- An even shorter way!
function isPurple(color) {
	return color.toLowerCase() === 'purple';
}

function containsPurple(arr) {
	for (let color of arr) {
		if (color === 'purple' || color === 'magenta') {
			return true;
		}
	}
	return false;
}

*  functions are first class citizens in js
- it can assigned to variable and properties
- pass functions as argument
- return function as value

* Function Statements and Expressions
* Function expression : Assigning a function to a variable that always produces a value
*fn statements: things that perform actions but do not return a value like 
- (ifesle, loops or even function declartaion)

const  whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
- return not only return the value but also stop the function
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));

!Problem: Tip calculator /  given total
let totalAmount = prompt('enter total bill');
let tip = prompt('enter percentage value of tip');
let tipCalculator = function (total , tipPercentage = 0.2){
return total * tipPercentage ;
}
let result = tipCalculator(totalAmount, tip);
console.log(result);
! Problem
- Write a isValidPassword function
It accepts 2 arguments: password and username
Password must:
- be at least 8 characters
 - cannot contain spaces
 - cannot contain the username
If all requirements are met, return true.
Otherwise: false

isValidPassword('89Fjj1nms', 'dogLuvr');  //true
isValidPassword('dogLuvr123!', 'dogLuvr') //false
isValidPassword('hello1', 'dogLuvr') //false
* Password cecker
function isValidPassword(password, username) {
	if (password.length < 8) {
		return false;
	}
	if (password.indexOf(' ') !== -1) {
		return false;
	}
	if (password.indexOf(username) !== -1) {
		return false;
	}
	return true;
}

* indexOf('username') => if result is -1 means that the value does not exist so !== -1 means it does

function isValidPassword(password, username) {
	if (
		password.length < 8 ||
		password.indexOf(' ') !== -1 ||
		password.indexOf(username) !== -1
	) {
		return false;
	}
	return true;
}

function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (tooShort || hasSpace || tooSimilar) return false;
	return true;
}

function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (!tooShort && !hasSpace && !tooSimilar) return true;
	return false;
}

function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	return !tooShort && !hasSpace && !tooSimilar;
}
! Problem
- Write a function to find the average value in an array of numbers
avg([0,50]) //25
avg([75,76,80,95,100]) //85.2

function avg(arr) {
	let total = 0;
	//loop over each num
	for (let num of arr) {
		//add them together
		total += num;
	}
	//divide by number of nums
	return total / arr.length;
}
! Problem
- A pangram is a sentence that contains every letter of the alphabet, like:
- "The quick brown fox jumps over the lazy dog"

- Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

isPangram('The five boxing wizards jump quickly') //true
isPangram('The five boxing wizards jump quick') //false

- Version using indexOf
function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (lowerCased.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}

- Version using string.includes()
- Nice and clean, but not supported in IE
function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
		if (!lowerCased.includes(char)) {
			return false;
		}
	}
	return true;
}

! Problem
- Write a getCard() function which returns a random playing card object, like:
		{
			value: 'K'
			suit: 'clubs'
		}
Pick a random value from:
----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
Pick a random suit from:
----clubs,spades, hearts, diamonds
Return both in an object

*Solution 1:
function getCard() {
	const values = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];
	const valIdx = Math.floor(Math.random() * values.length);
	const value = values[valIdx];

	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	const suitIdx = Math.floor(Math.random() * suits.length);
	const suit = suits[suitIdx];
	return { value: value, suit: suit };
}
*Solution 2:

function pick(arr) {
	- return random element from arr
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

function getCard() {
	const values = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K',
		'A'
	];
	const suits = [ 'clubs', 'spades', 'hearts', 'diamonds' ];
	return { value: pick(values), suit: pick(suits) };
}

-------------------------------------------------------------------------

* Function can also be used in arrays or objects
function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
}

- We can store functions in an array!
const operations = [add, subtract, multiply, divide];

- Loop over all the functions in operations
for (let func of operations) {
  let result = func(30, 5); //execute func!
  console.log(result);
}

- We can also store functions in objects!
const thing = {
  doSomething: multiply
}
thing.doSomething(4, 5) //20

- so there are functions => function(arguments) => HOF

Topic:  Higher Order Functions
* Functions that take another function as argument 
* or a function that returns another function

const multiplyBy = (num1) => {
  return function (num2) {
    return num1 * num2;
  }
}

const multiplyByTwo = multiplyBy(2);
multiplyByTwo(4)


const giveAccessTo = (name) =>
  'Access Granted to ' + name;

function authenticate(person) {
  let array = [];
  // you can add checks here for person.level
  for (let i = 0; i < 50000; i++) {
    array.push(i)
  }
  return giveAccessTo(person.name)
}

function letPerson(person, fn) { 
	// ++ We now tell the function what data to use when we call it not when we define it + tell it what to do.
  if (person.level === 'admin') {
    return fn(person)
  } else if (person.level === 'user') {
    return fn(person)
  }
}

function sing(person) {
  return 'la la la my name is ' + person.name
}

letPerson({level: 'user', name: 'Tim'}, sing)

- This function accepts another function as an argument
function callThreeTimes(f) {
  - And calls it 3 times:
  f();
  f();
  f();
}

function cry() {
  console.log("BOO HOO I'M SO SAD!");
}

function rage() {
  console.log("I HATE EVERYTHING!");
}

function repeatNTimes(action, num) {
  - call action (a function) num number of times
  for (let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(rage, 13);

- Accepts 2 functions as arguments
-  Randomly selects 1 to execute
function pickOne(f1, f2) {
  let rand = Math.random();
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}
* Functon that returns another function
- This function returns a function!
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

-triple holds a function:
const triple = multiplyBy(3);
-we can call it:
triple(4); //12
triple(10); //30

const double = multiplyBy(2);
double(3); //6
double(9); //18

const halve = multiplyBy(0.5);
halve(5); //2.5
halve(100); //50

- This function also acts as a "function factory"
function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}
- This function checks if a value is between 0 and 18
const isChild = makeBetweenFunc(0, 18);
isChild(10); //true
isChild(56); //false

const isInNineties = makeBetweenFunc(1990, 1999);
isInNineties(1994); //true
isInNineties(1987); //false

const isNiceWeather = makeBetweenFunc(60, 79);
isNiceWeather(68); //true
isNiceWeather(98); //false


* Hoisting
- variables declared with var are hoisted
console.log(animal);
var animal = 'Tapir';
console.log(animal);


- variables declared with let & const are not hoisted
const shrimp = 'Harlequin Shrimp';
console.log(shrimp);

function statements are hoisted
howl();

function howl() {
  console.log("AWOOOOOOO");
}

- function expressions are...kind of hoisted.
- The variable is hoisted, but has a value of undefined
hoot()
var hoot = function () {
  console.log("HOOOO HOOOOO")
}


! Fibonacci using recursion

let fibonacci = function (n) {
  if (n === 1) {
    return [0, 1];
  } else {
    let f = fibonacci(n - 1);
    console.log(f);
    f.push(f[f.length - 1] + f[f.length - 2]);
    return f;
  }
};

console.log(fibonacci(10));


Topic: Closures vs Prototypes

* Closures   (function as first class citizens + lexical scope)  - lexical scoping
- when a function has access to parent function variables even if parent function get taken off
- the call stack. called closure. 

- garbage collecter in memory heap never cant delete it because of reference in the child function


function apple(){
let fruit = 'apple'
function printFruit(){
	console.log(fruit)
}
}


function a() {
  let grandpa = 'grandpa'
  return function b() {
    let father = 'father'
    return function c() {
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

a()

//closures and higher order function
function boo(string) {
  return function(name) {
    return function(name2) {
      console.log(`hi ${name2}`)
    }
  }
}

const boo2 = (string) => (name) => (name2) => console.log(`hi ${name2}`)

boo('hi')('john')('tanya');

// AHH! HOW DOES IT REMEMBER THIS 5 years from now?
booString = boo2('sing');
booStringName = booString('John');
booStringNameName2 = booStringName('tanya')

* Advantages of using Closures: Memory efficient , Encapsulation

* function is run every time it get called , its created run, and destroy 
function heavyDuty(item) {
  const bigArray = new Array(7000).fill('😄')
  console.log('created!');
  return bigArray[item]
}

heavyDuty(699)
heavyDuty(699)
heavyDuty(699)
const getHeavyDuty = heavyDuty2();
getHeavyDuty(699)
getHeavyDuty(699)
getHeavyDuty(699)

* solution with closures
// but i dont want to pollute the global namespace..
function heavyDuty2() {
  const bigArray = new Array(7000).fill('😄')
  console.log('created Again!')
  return function(item) {
    return bigArray[item]
  }
}

- Another Example 
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return '💥';
  }

  setInterval(passTime, 1000);
  return {totalPeaceTime}
}

const ww3 = makeNuclearButton();
ww3.totalPeaceTime()

- example // Make it so that the initialize function can only be called once!
let view;
function initialize() {
  let called = 0;
  return function() {
    if (called > 0) {
      return
    } else {
      view = '🏔';
      called = true;
      console.log('view has been set!')
    }

  }
}

const start = initialize();
start();
start();
start();
console.log(view)

-example 
const array = [1,2,3,4];
for(let i=0; i < array.length; i++) {
  setTimeout(function(){
    console.log('I am at index ' + i)
  }, 3000)
}
*/
