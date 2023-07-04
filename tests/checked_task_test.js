import { addNewTask } from "../JavaScript/add_new_task.js";

test("Verify the 'checked' class is aded when clicking on a task", () => {
   // create task
   document.getElementById("userInput").value = "Task test"
   // submit task
   addNewTask();

   const list = document.getElementById("listWithTasks");
   const firstElemList = list.firstElementChild;
   
   firstElemList.click()
   
   const hasClass = firstElemList.classList.contains('checked')
   
   equal(hasClass, true)
   list.removeChild(list.children[0]);

})

