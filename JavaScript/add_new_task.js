export function addNewTask() {
    const toDoItem = document.querySelector("form");

    toDoItem.addEventListener("submit", (event) => {
    event.preventDefault();
    const toDoList = {};
    const newItem = document.querySelector("input").value;
    toDoItem.append(newItem);
});
}