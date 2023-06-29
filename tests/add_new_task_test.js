import { addNewTask } from "../JavaScript/add_new_task.js";
test("Submitting a new task adds it to the list", () => {
    // create task
    let taskInput = document.getElementById("userInput").value;
    taskInput = "Task test";
    // submit task
    addNewTask();
    equal(taskInput, "Task test");
})