/*  
Topic: DOM 
- structured representation of an html document
- is used to connect webpages to js scripts
- every html box has an object in the DOM that we can access and interact





* Query selector vs rest

- Query selector not only gives you nodes list and also nodes children
- including, text, comments, spaces in the form of text and node.

  document.title = "NOt JS";
const header = document.getElementsByTagName("h2");

*there will only be one ID
document.getElementById("btn").style.backgroundColor = "red";

const hero = (document.querySelector(".hero").style.backgroundColor = "salmon");



*Using Html Collection elements //  get element
const list = document.getElementById("list");
console.log(list);

const itemNumber = document.getElementsByClassName("item");

const todo = document.getElementsByClassName("todo-nr")[0];

for (let i = 3; i > itemNumber.length && i < 10; i++) {
  const newitem = document.createElement("li");
  newitem.classList.add("item");
  newitem.innerText = "item" + [i];

  list.appendChild(newitem);
}
todo.innerText = itemNumber.length;

* Query Selector
const list = document.querySelector("#list");
console.log(list);
const items = list.children;
console.log(items);

const itemNumber = document.querySelectorAll(".item");
console.log(itemNumber.length);
const todo = document.querySelector(".todo-nr");
console.log(todo);

for (let i = 3; i > items.length && i < 10; i++) {
  const newitem = document.createElement("li");
  newitem.classList.add("item");
  newitem.innerText = "item" + [i];

  list.appendChild(newitem);
}
todo.innerText = items.length;


!Problem
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
