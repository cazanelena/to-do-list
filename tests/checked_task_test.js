import { add_checked } from "../JavaScript/checked_task.js";

test("Verify the 'checked' class is aded when clicking on a task", () => {
    const tasks = document.querySelectorAll("li")
    console.log(tasks)

    if (tasks.length == 0) {
        console.log('length zero')
    } else {
        for (let i = 0; i < tasks.length; i++){
            console.log(tasks[i])
        }
    }
   

   
   
    
})

