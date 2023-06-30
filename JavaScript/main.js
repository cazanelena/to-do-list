import { addNewTask } from "./add_new_task.js";

import { add_checked } from "./checked_task.js";

export let allTasksTracker = [];

const submitBtn = document.getElementById("submitBtn")

submitBtn.addEventListener("click", addNewTask)

// Add a checked symbol to a task when clicked
add_checked()

