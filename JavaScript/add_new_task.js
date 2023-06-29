export function addNewTask() {
    const li = document.createElement("li")
    
    const taskUserValue = document.getElementById("userInput").value
    const task = document.createTextNode(taskUserValue)

    li.appendChild(task);
    if (taskUserValue === "") {
        alert("You must enter a task!")
    } else {
        document.getElementById("listWithTasks").appendChild(li)
    }
    document.getElementById("userInput").value = ""
    
   
}