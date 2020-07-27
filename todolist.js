/*
//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const filter = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");
const listItems = todoList.children;
//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);

todoButton.addEventListener("click", addtodo);
todoList.addEventListener("click", deletecheck);
filter.addEventListener("click", filterOption);
//Fnctions

//adding data to list
function addtodo() {
  //prevent form from submission
  event.preventDefault();
  // Div with li, button check and remove
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = `${listItems.length + 1} : ${todoInput.value}`;
  todoDiv.appendChild(newTodo);
  // add newtodo in localstorage
  saveLocal(todoInput.value);
  //complete button
  const checkButton = document.createElement("button");
  checkButton.innerHTML = ' <i class="fas fa-check"></i>';
  checkButton.classList.add("complete-btn");
  todoDiv.appendChild(checkButton);
  //delte button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = ' <i class="fas fa-trash"></i>';
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);

  //appending div to the list
  todoList.appendChild(todoDiv);
  //empty the input field
  todoInput.value = "";
}

//delete list
function deletecheck(e) {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const parentItem = item.parentElement;
    //Animation
    parentItem.classList.add("fall");
    removeLocalTodos(parentItem);

    parentItem.addEventListener("transitionend", function () {
      parentItem.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    const parentItem = item.parentElement;
    parentItem.classList.toggle("completed");
  }
}

// filter the tasks
function filterOption(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      default:
        console.log("What else you are looking for");
    }
  });
}

// Storage
//check if storae is empty then push
function saveLocal(todo) {
  //check if something already exists

  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
//remove local sorage
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// get the values from localstorage
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todo;
    todoDiv.appendChild(newTodo);

    //complete button
    const checkButton = document.createElement("button");
    checkButton.innerHTML = ' <i class="fas fa-check"></i>';
    checkButton.classList.add("complete-btn");
    todoDiv.appendChild(checkButton);
    //delte button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = ' <i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    //appending div to the list
    todoList.appendChild(todoDiv);
  });
}


*/
