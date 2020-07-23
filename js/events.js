// const buttonRemove = document.querySelector("#btn-remove");
// const itemNumber = document.querySelectorAll(".item");

// const buttonAdd = document.querySelector("#btn");
// const todo = document.querySelector(".todo-nr b");
// const list = document.querySelector("#list");
// const items = list.children;

// let einput = document.querySelector(".entervalue");

// Event listner : scroll, resizing, click etc
// takes two parameters : 1st = event , 2nd =function
// buttonAdd.addEventListener("click", addlist);
// einput.addEventListener("keydown", enter);

// function addlist() {
//   const newitem = document.createElement("li");

//   console.log(einput.value);
//   if (einput.value.length != 0) {
//     newitem.classList.add("item");
//     newitem.innerText = `${items.length + 1}:  ${einput.value} `;

//     list.appendChild(newitem);
//     einput.value = "";
//     todo.innerText = items.length;
//     newitem.addEventListener("click", deleteItem);
//   } else {
//     alert("Your Task is empty. Please enter what you want to do today");
//   }
// }
// function deleteItem(e) {
// e.stopPropagation();
//   e.target.remove();
// }

// function enter(event) {
//   if (event.keyCode === 13) {
//     addlist();
//   }
// }

// buttonRemove.addEventListener("click", function () {
//   document.title = "No";
//   removelist();
//   todo.innerText = items.length;
// });
//event listener to deleter ites in a sequence
// function removelist() {
//   const remitem = document.querySelector(".item");
//   if (remitem == null) {
//     console.log("list is empty");
//   } else {
//     list.removeChild(remitem);
//   }
// }
