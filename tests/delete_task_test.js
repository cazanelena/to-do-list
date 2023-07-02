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
    // console.log(list)
    equal(list.children[0]?.textContent, undefined);
})