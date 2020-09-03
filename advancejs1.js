/*
Topics 
- Foundations
* JS Engine and Runtime
* Interpreter /Compiler / JIT Compiler
* Writing optimized Code (inline caching / hidden classes)
* Call Stack , Memory Heap
* Stack Overflow , memory leaks
* Garbage Collection
* Node.js
* Single threaded Model


- Brandon Eich created the first js engine
-                                                           
Topic:  How JS Engine Works?          
                                             -      |-> Profiler ->Compiler -> Optimized Code - >ByteCode
- File (Source Code)-> Parser -> AST -> Interpreter |-> ByteCode

- First the code is parse onto the parser (to do lexical analysis) which breaks the 
- code into tokens to identify their meaning and these tokens  are then formed into 
- AST (abstract syntax tree) which then pushed to the Interpreter (aka ignition in v8 engine)
- which then output ByteCode 

- and then there is a Profiler / Monitor which keep track of own code (runtime, types) 
- that is being run in the interpreter. so if a section of code runs more than once, the interpreter
- passes that code to Compiler (JIT compiler aka Turbo fan in v8)and optimize the code and 
- replaces the it with the non-optimized code

* There are two ways that our code can be converted to binary aka machine readable code

* Interpreter : translate and read files line by line on the fly
* Compiler: Translate and converts the code into machine code ahead of time

* Pros and Cons of Interpreter vs Compiler
- Interpreter:
- Quick to get up and run 
- Problem: running a code more than once like a loop , its get slow (compiler solve this)

- Compiler:
- takes longer to get up and run. but code run faster

- Google came up with JIT compiler (just in time), combine both interpreter and compiler


! so what is the purpose of the above?
- we want to write code that helps compiler make optimizations
- Careful of functions: eval(), arguments, for in, with , delete
- Main Problematic :  Hidden classes and incline caching


*inline caching
- code that make repeated calls to the same method of the same object .
- compiler optimize it using inline caching it cached a copy of the object instead of looking it over again.
 

function user(user) {
	return `found ${user.firstName} ${user.lastName}`
}
const userData= {
    firstName: 'Khan',
    lastName: 'Mohsin'
}

user(userData)


*Hidden Classes

1  function Point(x,y) {
2    this.x = x;
3    this.y = y;
4  }
5 
7  var obj1 = new Point(1,2);
8  var obj2 = new Point(3,4);
9
10 obj1.a = 5;
11 obj1.b = 10;
12
13 obj2.b = 10;
14 obj2.a = 5;

- Up until line 9, obj1 and obj2 shared the same hidden class. However, since properties a and b 
- were added in opposite orders, obj1 and obj2 end up with different hidden classes as a result of following 
- separate transition paths.

* Breif: https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html

*TakeAway:
- 1: Always instantiate your object properties in the same order so that hidden classes, and subsequently
- optimized code, can be shared.
- 2: Adding properties to an object after instantiation will force a hidden class change and slow down any methods
- that were optimized for the previous hidden class. Instead, assign all of an object’s properties in its constructor.
- 3: Code that executes the same method repeatedly will run faster than code that executes many different 
- methods only once (due to inline caching).

! Question: Why can we just use machine code from the beginning ?
- Compiling happens on the browsers but there are many browsers from various companies. 
- They all have to agree on a executable format. which they did . called as web assembly
- so that code compile all the way to web assembly

-WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. 
-Wasm is designed as a portable compilation target for programming languages, enabling deployment 
-on the web for client and server applications.

* Call Stack
- Define the current state and location of the code

* Memory Heap: 
- to store and write information

* Stack Overflow
- When the code overflow the size of the call stack. 

* Garbage Collection (GB)
- Js is a garbage collected language
- when a function finishes run on the call stack. and we no longer needed it . js cleared the assign 
- and collect it in garbage

- garbage collecter freeze memory in the heap and prevents it from leaking . 
- memory leak: when the memory reaches its maximum size in the heap

- How garbarge collection work
- it uses mark and sweep algorithm
- variables that we have in our memory maybe point to a object to a function. the GB checks and marks 
- and sweep what is not needed

- example: function when gets off from the call stack, the GB is going to mark, sweep and clean as we
- don't need it anymore
function garbage(){
    let num = 10;
    return num + 10;
}


* How memory leaks happens?
- by writing code that has no ending point or defining variables that contain huge amount of data and in use all the time

- the example below runs a infinite loop , memory gets leaked and GB nevers comes into effect because arr 
- was in use all the time

let arr = []
for (let i =5; i >1; i++){
    arr.push(i)
}
* 3 common memory leaks
- Global Variable
- Event Listeners - add event listeners in a way that it gets removed or GB has an effect on it 
- setInterval()  - must be cleared , assigning time t seconds 

setInterval(()=>{
  //  data
})

* Call Stack and MEmory Heap are the two places where js stores and remembers memory. 
- Javascript is a single threaded language as it has only one call stack. so its synchronous

* Comes Asynchronous Code to rescue  - JavaScript Runtime 
- WebAPi, Event Loop

Topic: JavaScript RunTime     

- CallStack, memoryHeap, WebAPi, Event Loop

- Analogy of code to be music, engine is the musician that can read this music and 
- runtime is where we have the musician + give him tools to play our music

* Scenario: Whenever a code related to Web APi function (setTimeout) is pushed onto the call stack, 
- the call stack checks and if found , forward that WebAPi related code to webapi to process. 
- WebApi runs in the background, Go through the code and perform its function and push the result onto 
- callback queue and wait for its turn to be pushed back onto the callstack. 
- event loop checks for the availability of the call stack (which will only be free once it read its entire code file).
-  once empty push the code from callback queue one at a time (based on callstack availability) onto the callstack to perform its function
// http://latentflip.com/

*- WebAPi :  Comes with the browser , provides web application functions. (asynchronous)
- Handle DOM, fetch(), setTimeout(), setInterval, caching, database storage etc

-and

*Event Loop 
- continously checks the status of the call stack. and once call stack is empty push the code
- from callback queue back onto to the call stack



* Scenario Example

1 console.log('First');
2 setTimeout(()=>{ console.log('Second') }, 1000)
3 console.log('Third');

Output
First
Third
Second

* JOB QUEUE
- there is another queue name as JOB QUEUE (Microtask Queue) besides callback queue , has high priority than callback queue
- promise uses job queue
- event loop is going to check job queue first , if empty then proceeds to callback queue
Topic: Node.js  
- is a js runtime built on v8 engine 

 */
