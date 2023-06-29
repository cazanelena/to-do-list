const toDoItem = document.querySelector("form");
const toDoList = document.querySelector("#to-do-list")
toDoItem.addEventListener("submit", (event) => {
    event.preventDefault();
    const toDoList = {};
    const newItem = document.querySelector("input").value;
    toDoItem.append(newItem);
})