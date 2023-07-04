// Add a function that will add a checked symbol when clicking on a task


export function add_checked() {
    const list = document.querySelector('ul');
    list.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('checked');
        }
        // console.log(event.target.tagName)
    }, false);
}