/*
Topics
* Static vs Dynamically Typed
* Primitive Types
* Pass by reference vs Pass by value
* Type Coersion
* Arrays, Functions and Objects


Topic: Static vs Dynamically Typed
 - number, string, null, undefined, symbol, boolean ,object

 - undefined : absence of definition
 let a;
console.log(a);

 - null : absence of value

 - Primitive Type: data that only represents a single value (actual value stored in memory)

 - Non-Primitive Type:  contains a reference to memory (does not contain the actua value)
------------------------------------------------------------------------------------
 
Topic: Pass by reference vs Pass by value
- By Value: Primitive: we have to remove the data from memory to update with a new one

- By Reference : Non-Primitive: Object : as it just contains reference to the memory.
- any change in an objectA results in changge in copied objectA named objectB when 

const a = [1,2,3]
const b = [].concat(a) ; // copy of the array

let obj = { a: 1 , b: 2}
let copyObj = Object.assign({}, obj) // copy object
let copyObj = {...obj} // copy object using spread operator   
- object in an object : will not be copied (shallow clone), any change will refer
let obj = { a: 1 , b: 2, c:{hi: 'hello'}}
let superClone = JSON.parse(JSON.stringify(obj))  //  convert to string then back to obj

------------------------------------------------------------------------------------
Topic: Type Coersion 
- 1 == '1' 
- Object.is(-0,+0)
https://dorey.github.io/JavaScript-Equality-Table/
- js is a weakly typed language

- There are many ways to add static typing to javascript
- flow (built-in react), reason, elm and typescript(add functionality on top of javascript)


 ------------------------------------------------------------------------------------
Topic: Arrays, Functions and Objects


*/
