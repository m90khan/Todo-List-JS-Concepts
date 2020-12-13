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
- react , redux also see the concept of functional programmng
- avoid principle of shared state


Topic: Functional Programming
- seperation of concerns 

*Pure Function  
- no sideeffects to the outer
- always return the same output given same output
- cannot modify anything outside itself
// Pure Function
function add(num1, num2) {
  return num1 + num2;
}

 
console.log(add(1, 5)); // 6
console.log(add(12, 15)); // 27


//Side effects:
const array = [1,2,3];
function mutateArray(arr) {
  arr.pop()
}
function mutateArray2(arr) {
  arr.forEach(item => arr.push(1
  ))
}
// impure function
function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

// impure with sideeffects
let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));
//changing array. impure
const hobbies = ['Sports', 'Cooking'];

function printHobbies(h) {
  h.push('NEW HOBBY');
  console.log(h);
}

printHobbies(hobbies);

//The order of the function calls will matter.
mutateArray(array)   // does not return anything but a element is removed
mutateArray2(array)
array

// map and concat methods can fix this issue of mutation


*  Referential transparency
- input -> output  : no effects on the program
- no matter the input then output should be same
function a(num1,num2){
	return num1 + num2
}
function b(num){
	return num *2
}

b(7)  = > 14 or b(a(3,4)) => 14    : Referential Transparency


! it is impossible to create anything without sideeffect using pure functions
! the goal is not to minimize sideeffects

* so what can be a Perfect Function? : making code predictable
- it should do one task
- return Statement 
- Pure , no shared state
- Immutable state: Return a new copy
- Composable
- Predictable


* Idempotence : always returns what it expects to do even if communicate outside the function
- console.log()
// Idempotence:
function notGood() {
  return Math.random()
  // new Date();
}

function good() {
  return 5
}

Math.abs(Math.abs(10))
* Imperative vs Declarative
- Imperative: code that tells machine what to do and how to do it   (example: for loop)
- Declarative: what to do and what should happen    (example: [1,2,4].forEach(item => console.log(item)))


* Immutability 
- not changing the data - create a copy and perform function on it if needed
const obj = {name: 'Andrei'}
function clone(obj) {
  return {...obj}; // this is pure
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = 'Nana'
  return obj2
}

const updatedObj = updateName(obj)
console.log(obj, updatedObj)

* Curring 
- The technique of translating the evaluation of function that takes multiple arguments into a 
- evaluation of sequence of functions that takes one argument at a time.

- How to use: to create multiple utility functions (const multiplyBy5 = curriedMultiply(5)) => 
- multiplyBy5 will remember this piece of data curriedMultiply(5) which can then be called with another argument 
- for the funtionality (multiplyBy5(20))

//Currying
const multiply = (a, b) => a * b
const curriedMultiply = (a) => (b) => a * b
curriedMultiply(5)(20)
const multiplyBy5 = curriedMultiply(5)
multiplyBy5(20)

* Partial Application 
- partially apply a function : using less parameters 

//Partial Application
const multiply = (a, b, c) => a * b * c
const partialMultiplyBy5 = multiply.bind(null, 5)
partialMultiplyBy5(10, 20)

* Memoization ~ Caching
- Caching is a way to store values to use them in the later period.
- memoiation: specific type of caching in dynamic programming 
- remember a solution of a problem and call it when input ask is same
//learn to cache
function addTo80(n) {
  return n + 80;
}

addTo80(5)
// memoiation
let cache = {};
function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

// console.log(1, memoizeAddTo80(6))
// // console.log(cache)
// // console.log('-----------')
// console.log(2, memoizeAddTo80(6))

// let's make that better with no global scope. This is closure in javascript so.
function memoizeAddTo80(n) { 
  let cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 80;
      cache[n] = answer;
      return answer;
    }
  }
}

const memoized = memoizeAddTo80();
console.log(1, memoized(6))
// console.log(cache)
// console.log('-----------')

console.log(2, memoized(6))
// scope
let userName = 'Max';

function greetUser() {
  // let name = 'Anna';
  console.log('Hi ' + name);
}

let name = 'Maximilian';

userName = 'Manuel';

greetUser();


* Compose and Pipe
*Compuse  : right to left
- any data that we use should be obvious => like a converyer belt in a factory
- data => fn =>data =>fn => 

fn1(fn2(fn3(50)));

compose(fn1, fn2, fn3)(50) //Right to lext
pipe(fn3, fn2, fn1)(50)//left to right

- compose 
const multiplyby3 = (num) => num*3;
const makePositive = (num) => Math.abs;
const compose = (f, g) => (a) => f(g(a))
const multiplyBy3AndAbsolute = compose(multiplyby3, makePositive)
console.log(multiplyBy3AndAbsolute(-50))    //  (-50) => f(makePositive(-50)) => multiplyby3(3*50) =>150
*Pipe : same thing but reverse , left to right
const pipe = (f, g) => (a) => g(f(a))
console.log(multiplyBy3AndAbsolute(-50))    //  (-50) => g(3*50)  => makePositive(-150) =>150

* Arity : number of arguments a function takes
- in functional programming: fewer the parameters , easier to use


- Amazon Card Example
//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

//Bonus:
// accept refunds.
// Track user history.

// Amazon shopping
const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}

const history1 = [];
const compose = (f, g) => (...args) => f(g(...args))
const pipe = (f, g) => (...args) => g(f(...args))
const purchaseItem  = (...fns) => fns.reduce(compose);
const purchaseItem2  = (...fns) => fns.reduce(pipe);

// pipe // purchaseItem2(addItemToCart, applyTaxToItems, buyItem, emptyUserCart)(user, {name: 'laptop', price: 60})  // pipe
//Compose
purchaseItem( emptyUserCart, buyItem, applyTaxToItems, addItemToCart)(user, {name: 'laptop', price: 50}) // compose
function addItemToCart(user, item) {
  history1.push(user)
  const updatedCart = user.cart.concat(item)
  
  return Object.assign({}, user, {cart: updatedCart});
}

function applyTaxToItems(user) {
  history1.push(user)
  const {cart} = user;
  const taxRate = 1.3;
  const updatedCart = cart.map(item => {
    return {    name: item.name,     price: item.price*taxRate   }
  })
  return Object.assign({}, user, { cart: updatedCart });
}

function buyItem(user) {
  history1.push(user)
  const itemsInCart = user.cart;
  return Object.assign({}, user, { purchases: itemsInCart });
}
function emptyUserCart(user) {
  history1.push(user)
  return Object.assign({}, user, { cart: [] });
}

function refundItem() {}
function getUserState() {}
function goBack() {}
function goForward() {}

*Functional Programming End HERE
--------------------------------------------------------------------------------------------------


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
  let lowerCased = sentence.toLowerCase().split(" ").join("");
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

//HOF
const hof = (fn) => fn(5);
hof(function a(x){ return x})



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
* Functon that returns another function  = Factory Function
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
// another factory function
function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));
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

* Recursive Function



// normal function
function powerOf(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
console.log(powerOf(2, 3)); // 2 * 2 * 2

// recursive
function powerOf(x, n) {
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3)); // 2 * 2 * 2

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

! advance resurion
const myself = {
  name: 'Max',
  friends: [
    {
      name: 'Manuel',
      friends: [
        {
          name: 'Chris',
          friends: [
            {
              name: 'Hari'
            },
            {
              name: 'Amilia'
            }
          ]
        }
      ]
    },
    {
      name: 'Julia'
    }
  ]
};

function getFriendNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }
  
  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  
  return collectedNames;
}

console.log(getFriendNames(myself));


Topic: Closures vs Prototypes

* Closures   (function as first class citizens + lexical scope)  - lexical scoping
- when a function has access to parent function variables even if parent function get taken off
- the call stack. called closure. 

- garbage collecter in memory heap never cant delete it because of reference in the child function
//Closure
const closure = function() {
  let count = 55;
  return function getCounter() {
    return count;
  }
}

const getCounter = closure()
getCounter()
getCounter()
getCounter()

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

// closure function
let multiplier = 1.1;

function createTaxCalculator(tax) {
  function calculateTax(amount) {
    console.log(multiplier);
    return amount * tax * multiplier;
  }

  return calculateTax;
}

const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// multiplier = 1.2;

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));
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

* function is run every time it get called , its created,  run, and destroy 
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

/*
-----------------------------------------------------------------------------------------------------------
Topic: OOP vs FP


Topic: Composition vs Inheritance
* Inheritance: its a superclass that extends smaller pieces that add or overwrite thing (class Elf extends Character)
- the structure of code (what things are) - like defining a class for a particlar func. 
-Problem: Tight coupling: make a small change in a class will have rippling effect in all of its subclasses
 - but can also cause problems due to dependency
- Problem: Fragile Base Class Problem: any change in the base class can also result in breaking code
- Problem: Hierarchy: imagine having sub-class of a subclass , it will inherit all the methds which 
- it maybe does not need known as classic gureilla banana problem

User
  Character
      Elf
        Baby Elf    // the baby elf inherits all teh methods from its base class which it does not need
      Hobbit

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'atack with ' + this.weapon
  }
}

class Elf extends Character { 
  constructor(name, weapon, type) {
    // console.log('what am i?', this); this gives an error
    super(name, weapon) 
    console.log('what am i?', this);
    this.type = type;
  }
}

class Hobbit extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() { // this is like extending our prototype.
    return 'strongest fort in the world made'
  }
}

const houseElf = new Elf('Dolby', 'cloth', 'house')
//houseElf.makeFort() // error
const shrek = new Hobbit('Shrek', 'club', 'green')
shrek.makeFort()


* composition : smaller pieces of functions combine together to create a bigger functionality
- code structure revolves around (what it has) or what it does to data

!- so if inheritance is bad : how can we fix it using composition
-1- remove all the methods 
- composition allows to seperate the dependency into smaller chunks functions which can combine together to form
- something big.
function ELf(name,weapon,type){
  let elf ={name, weapon,type }
return attack(elf)
}

function attack(character){
  return Object.assign({}, character, { attackNow: ()=> {console.log('attack')}})
}

ELF = attackNow() + sleep() + eat()
 
* Review: 
* Inheritance: its a superclass that extends smaller pieces that add or overwrite thing (class Elf extends Character)
- base class should be general so we do not overload sub-classes , and could get out of hands one sub-classes go deeper

* composition : smaller pieces of functions combine together to create a bigger functionality
- when need to make changes . add a new function and compose it together 

topic: OOP vs FP  : both are paradigms
- a programming paradigm is writing code compliant with a specific set  of rules
*OOP - organizing code into units => oop
- Object is a box containing information and operations that suppose to refer to same concept
- Properties are states and operations that can happen on the states are methods


*FP- Avoiding side effects and writing pure functions  => FP
- code is combination of functions, data is immutable -> programs with no side effects -> input -> output

Topic : Difference FP vs OOP

* FP: good for processing large application (AI data models)
- perform many different function for which the data is fixed.
- stateless
- pure , no side effects : does not effect the code outside the function
- declarative : what we want it to do

* OOP: food for ,if there are multiple states , lots of characters in a game with not many operations
-few operations on common data
- statefull
- this keyword 
- sideeffects : methods manipulate sub classes
- Imperative : How we want it do 
*/
