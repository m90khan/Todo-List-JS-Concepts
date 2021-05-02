/*  
Topic: DOM 
- structured representation of an html document
- is used to connect webpages to js scripts
- every html box has an object in the DOM that we can access and interact
- Docment object is the entry point of the DOm. it contains all the contents on a page

-------------------------------------------------------------------------
* Query selector (static) vs HTML Coolection (live)

- Query selector not only gives you nodes list and also nodes children
- including, text, comments, spaces in the form of text and node.

* DOM Traversing 
- child : direct element
- Descendant : direct and indirect
- Parent : direct parent 
- Ancestor: direct and indirect

- childNodes - > return only the correctly intended items. if item not intended correcly. no display 
- children: solve the childnodes problem - gives only the elments. no comments


- list.cloneNode(true)
- list.firstChild;
- list.firstElementChild
- list.lastChild
- list.lastElementChild;
- list.childElementCount
- listItem.parentNode
- listItem.parentElement or parentNode
- nextSibling nextElemntSibling - previousSibling

-replaceChild
-remove() removeChild(li[1])


  document.title = "NOt JS";
const header = document.getElementsByTagName("h2");

*there will only be one ID
document.getElementById("btn").style.backgroundColor = "red";

const hero = (document.querySelector(".hero").style.backgroundColor = "salmon");



*Using Html Collection elements //  get element (not an array) - use Array.from(element)
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
-------------------------------------------------------------------------
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


- classList    - innerText
- append()     - getAttribute()
- prepend()    - setAttribute()
- remove()     - appendChild()
- textContent  - removeChild()
- innerHTML    - createElement
- value        - parentElement
- children     - nextSibling
- style        - previousSibling
- getComputedStyle()
- insertadjacentElement(position, element) => position: beforebegin, afterbegin, beforeend,afterened


- innerText gives the text from Dom HTML 
- textContent gives the text from actual html file

- document.createElement('ing')
- body.clientWidth , clientHeight
* Math.floor(document.body.clientWidth * Math.random())
- new CSSStylesheet() - replaceSync

-------------------------------------------------------------------------

* changing multiple elements
-  Select all LI's on the page:
const allLis = document.querySelectorAll('li');

-  One option, a regular for loop:
for (let i = 0; i < allLis.length; i++) {
  allLis[i].innerText = 'WE ARE THE CHAMPIONS!'
}

- Another option using for...of:
for (let li of allLis) {
  li.innerHTML = 'WE ARE <b>THE CHAMPIONS</b>'
}
-------------------------------------------------------------------------
* Chnaging Styles
- Changing the color and background-color:
const h1 = document.querySelector('h1');
h1.style.color = 'pink';
h1.style.backgroundColor = 'yellow' //camel cased! (not background-color but backgroundColor)

- Changing Multiple Elements:
const allLis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

allLis.forEach((li, i) => {
  const color = colors[i];
  li.style.color = color;
})

const h1 = document.querySelector('h1');

-  style property only contains INLINE styles...
-  Even though we gave the h1 a purple color, we still get:
h1.style.color; //"" 
-  Same with any property we did not set inline:
h1.style.fontSize; //""

-  We can use getComputedStyle to figure out the ACTUAL styles that are applying:
const compStyles = getComputedStyle(h1);
compStyles.color; //"rgb(128, 0, 128)"  (purple as an RGB color)
compStyles.fontSize; //"60px"
-------------------------------------------------------------------------
* USING removeChild()
- Select the element you want to remove;
const removeMe = document.querySelector('.special')
- We call removeChild() on the parent element and pass in the element we want to remove:
removeMe.parentElement.removeChild(removeMe)

-  USING THE NEWER REMOVE() METHOD - NO INTERNET EXPLORER SUPPORT!
- Select the H1
const h1 = document.querySelector('h1');
h1.remove(); //REMOVE IT!
-------------------------------------------------------------------------
! Problem NBA Games Stats

  <section id="gs">
    <h2>Golden State Warriors</h2>
  </section>
  <section id="hr">
    <h2>Houston Rockets</h2>
  </section>

const warriorsGames = [
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 119,
			isWinner : true
		},
		homeTeam : {
			team     : 'Houston',
			points   : 106,
			isWinner : false
		}
	},
	{
		homeTeam : {
			team     : 'Golden State',
			points   : 92,
			isWinner : false
		},
		awayTeam : {
			team     : 'Houston',
			points   : 95,
			isWinner : true
		}
	},
	{
		awayTeam : {
			team     : 'Golden State',
			points   : 94,
			isWinner : false
		},
		homeTeam : {
			team     : 'Houston',
			points   : 98,
			isWinner : true
		}
	},

];

 - STEP 2 - Refactored & Re-usable
 
const makeChart = (games, targetTeam) => {
	const ulParent = document.createElement('ul');
	for (let game of games) {
		const gameLi = document.createElement('li');
		gameLi.innerHTML = getScoreLine(game);
		gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
		ulParent.appendChild(gameLi);
	}
	return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
	const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
	return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
	const { team: hTeam, points: hPoints } = homeTeam;
	const { team: aTeam, points: aPoints } = awayTeam;
	const teamNames = `${aTeam} @ ${hTeam}`;
	let scoreLine;
	if (aPoints > hPoints) {
		scoreLine = `<b>${aPoints}</b>-${hPoints}`;
	}
	else {
		scoreLine = `${aPoints}-<b>${hPoints}</b>`;
	}
	return `${teamNames} ${scoreLine}`;
};

- Select the 2 sections to append to (from index.html)
const gsSection = document.querySelector('#gs');
const houstonSection = document.querySelector('#hr');

- Make the 2 charts:
const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');

- Append them!
gsSection.appendChild(gsChart);
houstonSection.appendChild(hrChart);
-------------------------------------------------------------------------
!Problem
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
