/*

- Brandon Eich created the first js engine
-                                                           
Topic:  How JS Engine Works?          
                                -      |-> Profiler ->Compiler -> Optimized Code - >ByteCode
- File -> Parser -> AST -> Interpreter |-> ByteCode

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
 */
