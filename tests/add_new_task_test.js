test("Submitting a new task has the correct value in the form", () => {
    
    const taskInput = document.querySelector("input");
    taskInput.value = "Task test";

    const submitButton = document.querySelector("button");
    // submitButton.click()

    //To do get the data from the user
    

    
    const form = document.querySelector("form")
    
    equal(taskInput.value, "Task test");
    taskInput.value = "";
})