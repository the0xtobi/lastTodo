// SELECTORS
const todoList = document.querySelector(".todo-list")
const formInput = document.querySelector(".input-form")
const todoInput = document.querySelector(".todo-input")
const filterTodo = document.querySelector(".filter-todo")


// EVENT LSTENERS
formInput.addEventListener("submit", addTodo)
todoList.addEventListener("click", deleteCheck)
filterTodo.addEventListener("click", filterAndSelect)


// FUNCTIONS
function addTodo(e) {
    e.preventDefault();
    // create the parent todo
    const todo = document.createElement("div")
    todo.classList.add("todo-item")
    // create todo children
    const listItem = document.createElement("li")
    listItem.classList.add("list-item")
    listItem.innerText = todoInput.value
    todo.appendChild(listItem)
    // create the check button
    const checkButton = document.createElement("button")
    checkButton.classList.add("check-btn")
    checkButton.innerHTML = '<ion-icon class="chk-btn" name="checkmark-outline"></ion-icon>'
    todo.appendChild(checkButton)
    // create the trash button
    const trashButton = document.createElement("button")
    trashButton.classList.add("trash-btn")
    trashButton.innerHTML = '<ion-icon class="tsh-btn" name="trash-bin-outline"></ion-icon>'
    todo.appendChild(trashButton)
    // append everything to the parent
    todoList.appendChild(todo)
    // clear the input text area
    todoInput.value = "";
}

function deleteCheck(e) {
    let item = e.target;
    let todo = item.parentElement;
    if (item.classList.contains("check-btn")) {
        todo.classList.toggle("scrape")
    } else if (item.classList.contains("trash-btn")) {
        todo.classList.add("fade")
        todo.addEventListener("transitionend", ()=>{
            todo.remove()
        })
    }
}

function