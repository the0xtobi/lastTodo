// SELECTORS
const todoList = document.querySelector(".todo-list")
const formInput = document.querySelector(".input-form")
const todoInput = document.querySelector(".todo-input")


// EVENT LSTENERS
formInput.addEventListener("submit", addTodo)



// FUNCTIONS
function addTodo(e) {
    e.preventDefault();
    // create the parent todo
    const todo = document.createElement("div")
    // create todo children
    const listItem = document.createElement("li")
    listItem.classList.add("list-item")
    listItem.innerText = todoInput.value
    todo.appendChild(listItem)
    // create the check button
    const checkButton = document.createElement("button")
    checkButton.classList.add("check-btn")
    checkButton.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>'
    todo.appendChild(checkButton)
    // create the trash button
    const trashButton = document.createElement("button")
    trashButton.classList.add("trash-btn")
    trashButton.innerHTML = '<ion-icon name="trash-bin-outline"></ion-icon>'
    todo.appendChild(trashButton)
    // append everything to the parent
    todoList.appendChild(todo)
    // clear the input text area
    todoInput.value = "";
}