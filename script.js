function addItem() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim(); // remove extra spaces

    if (task === "") {
        alert("Please enter some text");
        return;
    }

    const li = document.createElement('li');
    li.textContent = task;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);

    input.value = ""; // clear input box
}
