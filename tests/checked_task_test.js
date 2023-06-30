import { add_checked } from "../JavaScript/checked_task.js";

test("Verify the 'checked' class is aded when clicking on a task", () => {
    const list = document.querySelector('ul');
    for (let task in list) {
        console.log(task)
    }
})

test("Verify the 'checked' class is removed once added when clicking on a task", () => {
    
})