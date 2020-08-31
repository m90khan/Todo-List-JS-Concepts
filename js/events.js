/*
Topic: Events
 - events are like notifications to notify code that something happened. 
 - based on the trigger, an event will occour
* click, resize, keypress, scroll etc
- The eecution stack has to be empty for event to happen
- All events reside in the callback queue wait for action to happen. 



-click   - mouseWheel
-drags   - double click
-drops   - copying
-hovers  - pasting
-scrolls - form submission
-keypress - audiostart
-focus/blur - printing
-screenresize
-mousedown => click and hold
-mouseup => when click and let go
-mouseenter  => when mouse hover
-mouseleave => when leaves
-mouseover , mouseout => when in and out of the element hovering

*AddEventListener * RemoveEventListner

-------------------------------------------------------------------------
* find the height and width of the screen
window.screen to get the function on screen
window.height
window.width

const btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
	console.log('MOUSED OVER ME!');
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	btn.style.left = `${width}px`;
	btn.style.top = `${height}px`;
});

btn.addEventListener('click', function() {
	btn.innerText = 'YOU GOT ME!';
	document.body.style.backgroundColor = 'green';
});

-------------------------------------------------------------------------
* Multiple Events

const colors = ['red',	'orange',	'yellow',	'green','blue','purple','indigo','violet'];
const changeColor = function() {
	const h1 = document.querySelector('h1');
	h1.style.color = this.style.backgroundColor;
};
const container = document.querySelector('#boxes');

for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	box.addEventListener('click', changeColor);
}

-------------------------------------------------------------------------
* State Varibale tells the condition of the system

const buttonRemove = document.querySelector("#btn-remove");
const itemNumber = document.querySelectorAll(".item");

const buttonAdd = document.querySelector("#btn");
const todo = document.querySelector(".todo-nr b");
const list = document.querySelector("#list");
const items = list.children;

let einput = document.querySelector(".entervalue");

Event listner : scroll, resizing, click etc
takes two parameters : 1st = event , 2nd =function
buttonAdd.addEventListener("click", addlist);
einput.addEventListener("keydown", enter);

function addlist() {
  const newitem = document.createElement("li");

  console.log(einput.value);
  if (einput.value.length != 0) {
    newitem.classList.add("item");
    newitem.innerText = `${items.length + 1}:  ${einput.value} `;

    list.appendChild(newitem);
    einput.value = "";
    todo.innerText = items.length;
    newitem.addEventListener("click", deleteItem);
  } else {
    alert("Your Task is empty. Please enter what you want to do today");
  }
}
function deleteItem(e) {
e.stopPropagation();
  e.target.remove();
}

function enter(event) {
  if (event.keyCode === 13) {
    addlist();
  }
}

buttonRemove.addEventListener("click", function () {
  document.title = "No";
  removelist();
  todo.innerText = items.length;
});
event listener to deleter ites in a sequence
function removelist() {
  const remitem = document.querySelector(".item");
  if (remitem == null) {
    console.log("list is empty");
  } else {
    list.removeChild(remitem);
  }
}
-------------------------------------------------------------------------
*Form Data

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');
const formData = {};
- ONE callback works for any number of inputs!!
for (let input of [ creditCardInput, termsCheckbox, veggieSelect ]) {
	input.addEventListener('input', ({ target }) => {
		const { name, type, value, checked } = target;
		formData[name] = type === 'checkbox' ? checked : value; 
		console.log(formData);
	});
}

 //We could use hard-coded callbacks:
// creditCardInput.addEventListener('input', (e) => {
// 	console.log('CC CHANGED!', e);
// 	formData['cc'] = e.target.value;    // 
// });

// veggieSelect.addEventListener('input', (e) => {
// 	console.log('VEGGIE!', e);
// 	formData['veggie'] = e.target.value;
// });

// termsCheckbox.addEventListener('input', (e) => {
// 	console.log('CHECKBOX', e);
// 	formData['agreeToTerms'] = e.target.checked;
// });

-------------------------------------------------------------------------
! Coin Game - Catch the coin


    <img
      id="player"
      src="https://media.tenor.com/images/0791eb3858075aca85eed5ecfe08c778/tenor.gif"
      alt=""
    />
    <img
      id="coin"
      src="https://media.giphy.com/media/XzeRWmW7f5K4kZnrgB/giphy.gif"
      alt=""
    />



function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const init = () => {
  const avatar = document.querySelector("#player");
  const coin = document.querySelector("#coin");
  moveCoin();
  window.addEventListener("keyup", function (e) {
    if (e.key === "ArrowDown" || e.key === "Down") {
      moveVertical(avatar, 50);
    } else if (e.key === "ArrowUp" || e.key === "Up") {
      moveVertical(avatar, -50);
    } else if (e.key === "ArrowRight" || e.key === "Right") {
      moveHorizontal(avatar, 50);
      avatar.style.transform = "scale(1,1)";
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
      moveHorizontal(avatar, -50);
      avatar.style.transform = "scale(-1,1)";
    }
    if (isTouching(avatar, coin)) moveCoin();
  });
};

const moveVertical = (element, amount) => {
  const currTop = extractPos(element.style.top);
  element.style.top = `${currTop + amount}px`;
};
const moveHorizontal = (element, amount) => {
  const currLeft = extractPos(element.style.left);
  element.style.left = `${currLeft + amount}px`;
};

const extractPos = (pos) => {
  if (!pos) return 100;
  return parseInt(pos.slice(0, -2)); // remove the last 2
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

init();

*/
