/*
Topics: 
* execution Context
* Lexical Environment
* Scope Chain
* Hoisting 
* Function Invocation
* Function Scope , Block Scope
* Dynamic vs Lexical Scope
* this,call,apply,bind
* IIFE



Topic: execution Context

*Global Execution and Hoisting
- JS is a single threaded language. meaning the code will run line by line
- Before code even runs, the JS engine automatically creates global exxecuton context
* Creation Phase
- In that creation phase, it creates a global object (in browser case, window object)
- and a this keyword , also a memory is allocated to declared functions and variables along with scope chain 
-scope chain where hoisting is performed. the global execution context needs to know the scope of stored declaration what is available where
- JS engine takes our function, declaration, variables and stored them on the global objects memory

* Execution Phase : When our code starts running

*Hoisting : Happens on every execution context
* Hoisting is the behavior of reserving variables and functions declarations in the memory.
- In the creation phase of Global execution context as our function declaration already stored. 
- so it won't error out because the function is already available in the memory before the execution phase
- variable bindings are hosited but not the values while function declaration are completely hoisted

- note: function declaration gets hoisted not the function expression

let a = 2;
console.log(a); // 2

const test = () => {
  // console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
  let a = 4;
  console.log(a);
};

test(); // new execution context 

* whenever a function gets runs, js engine creates a new execution context and add onto call stack

function third(){
    console.log('hello')
}
function second(){
    return third()
}
function first(){
    return second()
}

- CallStack 
third()
second()
first()
Global execution context
------------------------------------------------------------------------------------
Topic: Lexical Environment : default is global execution context
-  related to the words of a language
- execution context tell us information that at compile time, which lexical environment is running , its scope

- lexical scope (available data + variables where the function was defined) determines or 
- available varibales. not where the function is called(dynamic scope) 



function first(){
    const firstNum = 1;
    function second(){
        const secondNum =2;

    }
}


------------------------------------------------------------------------------------
 Topic: Function Invocation   invoke/call/execute
 * remember whenever a function is invoke , a new executed context get created. 
 * so in function execution context, we get a this keyword ,arguments object, variable environment
- Function Expression - on invoke , js engine define what this function does
const apple =()=>{ console.log('apple')}
- Function Declaration - it is already defined at parse time 
function(){console.log('apple')}

function first(a, b) {
  const firstNum = 1;
  console.log(arguments);   // Arguments(5) [5, 10, 1, 2, 3, callee: (...), Symbol(Symbol.iterator): ƒ]
  return `firstNum ${a}  `;
}

first(5, 10);

* but we should not use arguments as it is computationally expensive besides not being an array.
* so we can convert it an array using  Array.from(arguments)
function first(a,b) {
   
  console.log(Array.from(arguments)); 
 }
 first(5, 10); // [5,10]
- or use rest parameters  ...args
function first(...target) {
  [a, b, ...rest] = target;
  console.log(arguments);
  console.log(`Results: ${a} ${b} ${rest} `);
}

first(5, 10, 1, 2, 3); //Results:  5 10 1,2,3 

const arr = [1, 2, 3];

function getMaxNumber(arr) {
  console.log(Math.max(...arr));
}

getMaxNumber(arr); // should return 3

- or destructuring
function print(person) {
  const { first, last, title } = person;
  console.log(`${first} ${last} : ${title}`);
}

const data = {
  first: "M",
  last: "khan",
  title: "developer",
};
print(data); //M khan : developer

const dataArr = [1, 2, 4];
function printArr(person) {
  const [first, last, title] = person;

  console.log(`${first} ${last} : ${title}`);
}
printArr(dataArr); //1 2 : 4

* What about the variables that are defined inside the function
- each execution context has own variable environment
- whenever a function is invoke, it gets its own execution context and in that context, the variables 
- that are defined in that function gets their own variable environment
//Variable Environement
function two() {
  var isValid; // 5. isValid is undefined in this execution context.
}

function one() {
  var isValid = true; 
  // 3. this variable will be put into the new execution context.
  //  It's own variable environment (local)
  two(); // 4. New execution context created.
}

var isValid = false; // 1. Global variable is created as undefined. Then during execution, it changes in memory to false.
one() // 2. New execution context is created on top of the stack.
------------------------------------------------------------------------------------
Topic: Scope Chain    [[Scopes]]

- scope tells us what we can access and what we cannot

* Remember
- lexical scope (available data + variables where the function was defined) determines or 
- available varibales. not where the function is called(dynamic scope) = scope

- every variable environment has access to its parent, if it does not find value then looks in the parent, its not, 
- further up till global execution context.  results in scope chain

let printValue = 10; // global
function first(){
 let value = 5
    function second(){
    console.log(printValue)
       }
}
first()

* Remember: 
- eval() and with : mess with scope chain so avoid it


* Leaked Global : When is binding is used but never declared in that scope or previous. results in leaked global. 
 - because global object will automatically creates the variable data

'use strict'   => can prevent that and error out

function wierd(){
    data = 100;
    return data
}
wierd() // 100
------------------------------------------------------------------------------------
Topic: Function Scope , Block Scope

- variable defined in a function are function scope as they would not be accessible to outer world
- variable define in a block are blocked scope. {} . using let and const

function wierd(){
   let data = 100;
    return data
}

if(5 > 2){
    let data = 200
}

------------------------------------------------------------------------------------
Topic: IIFE : immediately invoked function expression
//* automatically invoked. better use is libraries

- controlling the scope 
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();


------------------------------------------------------------------------------------
Topic: this   placeholder
- this: is an object that a function is a property of
- shorthand: this refers to whatever is left to the dot  this.name 
- obj.someFunc(this)

* Benefits
- execute same code for multiple objects
- gives methods in a object access to their object

- lexical scope does not apply. because it does not matter where it is called but rather how it is called. 

const apple ={
    this.name: 'apple',
    twoApple(){
        console.log(`Print ${this}`)   // apple object
        threeApple(){
                    console.log(`Print ${this}`)
        }
        threeApple() // window object
    }
}

Topic: call,apply,bind    -> methods borrowing
- to manipulate this keyword
- All function have these three properties

- call and apply when borrowing methods from an object
- while bind let us store the value and used it later at time with a certain this keyword

const wizard = {
  name: 'Merlin',
  health: 100,
  heal: function(num1, num2) {
    this.health += num1 + num2;
  }
}

const archer = {
  name: 'Robin Hood',
  health: 50
}

wizard.heal.call(archer, 50, 60)     // call archer instead of wizard  heal()
wizard.heal.apply(archer, [20, 30])
 
// function borrowing

const healArcher = wizard.heal.bind(archer, 50, 60);
console.log(archer)
healArcher()
console.log(archer)


* Function Currying : partially giving function arguments one at a time

function multiply(a, b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));

* *** Context  vs Scope

- context : how a function is invoked with the value of this keyword
- scope : refers to the visibility of variables

------------------------------------------------------------------------------------
 */
