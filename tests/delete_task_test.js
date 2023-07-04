import { addNewTask } from "../JavaScript/add_new_task.js";
import { deleteTask } from "../JavaScript/delete_task.js";

test("Deleting an entry removes it from the list", () => {
    // create task
    document.getElementById("userInput").value = "Task test"
    // submit task
    addNewTask();
    const list = document.getElementById("listWithTasks");
    
    // delete task
    const deleteButton = document.querySelector(".delete");
    deleteButton.addEventListener('click', deleteTask);
    deleteButton.click();

    // check if the list has any 'li' elements if not the length should be zero
    const liElements = list.querySelectorAll('li')

    equal(liElements.length, 0);
})