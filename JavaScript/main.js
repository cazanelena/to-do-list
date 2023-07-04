import { addNewTask } from "./add_new_task.js";

import { add_checked } from "./checked_task.js";



const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", addNewTask)

document.addEventListener('keydown', function(event) {
    if(event.key === "Enter") {
        addNewTask()
    }
})
// Add a checked symbol to a task when clicked

add_checked()

