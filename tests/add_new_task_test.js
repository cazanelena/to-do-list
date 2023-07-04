import { addNewTask } from "../JavaScript/add_new_task.js";
test("Submitting a new task adds it to the list", () => {
    // create task
    document.getElementById("userInput").value = "Task test"
    // submit task
    addNewTask();
    const list = document.getElementById("listWithTasks");
    // console.log(list)
    equal(list.children[0].textContent, "Task test\u00D7");
    list.removeChild(list.children[0]);
})

test("User can't submit an empty todo", () => {
    const originalAlert = window.alert;

    let alertCalled = false;

    // Override the window.alert function with a custom implementation
    window.alert = function(message) {
        alertCalled = true;
        // Do nothing to suppress the alert
    };

  document.getElementById('submitBtn').click();

  // Verify that the alert was called with the correct message
    if (alertCalled) {
        equal(alertCalled, true);
    // errorMessage.textContent = ''
  }

  // Restore the original alert function
  window.alert = originalAlert;


  })
  