function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('am-pm').textContent = amPm;
}

// Function to add a task to the to-do list
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    if (taskInput.value.trim() !== "") {
        const listItem = document.createElement('ul');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'mr-[10px]';

        listItem.appendChild(checkbox);
        listItem.appendChild(document.createTextNode(taskInput.value));
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}

// Event listener for adding tasks when the input is clicked
document.getElementById('task-input').addEventListener('click', addTask);

// Event listener for adding tasks when the Enter key is pressed
document.getElementById('task-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
        event.preventDefault(); // Prevent form submission
    }
});

// Initialize the clock and set it to update every second
setInterval(updateTime, 1000);
updateTime(); // Initial call to set the time immediately