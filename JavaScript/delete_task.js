export const deleteTask = (event) => {
    const taskElement = event.target.parentElement;
    // console.log(taskElement);
    taskElement.parentNode.removeChild(taskElement);
    // console.log(taskElement);
}