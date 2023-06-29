test("Submitting a new task has the correct value in the form", () => {
    const submitButton = document.querySelector("button");
    const taskInput = document.querySelector("input");
    const form = document.querySelector("form")
    taskInput.value = "Task test";
    equal(taskInput.value, "Task test");
    taskInput.value = "";
})