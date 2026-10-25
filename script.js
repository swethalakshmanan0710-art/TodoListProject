


function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = task;

    // Done button
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";

    doneBtn.onclick = function () {
        span.classList.toggle("done");

        if (span.classList.contains("done")) {
            doneBtn.textContent = "Undo";
        } else {
            doneBtn.textContent = "Done";
        }
    };

    // Delete button
    const del = document.createElement("button");
    del.textContent = "Delete";

    del.onclick = function () {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(del);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
