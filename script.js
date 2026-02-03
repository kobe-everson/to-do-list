/*
To-Do List Application:
- Allows user to add items to a to-do list
- Allows user to mark off items they have completed
- Allows user to clear completed items from the list
*/

// Declare input, button, and list variables:
const toDoInput = document.getElementById("to-do-input");
const toDoBtn = document.getElementById("to-do-add-btn");
const toDoList = document.getElementById("to-do-list");
const clearCompletedBtn = document.getElementById("clear-completed-btn");

let toDoArray = [];

// Save list helper function:
const saveList = () => {
  localStorage.setItem("toDoList", JSON.stringify(toDoArray));
};

// Render list function for local storage of object:
const renderList = () => {
  toDoList.innerHTML = "";

  toDoArray.forEach((item, index) => {
    const li = document.createElement("li");
    li.classList.add("to-do-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("to-do-checkbox");
    checkbox.checked = item.completed;

    const textSpan = document.createElement("span");
    textSpan.textContent = item.text;

    checkbox.addEventListener("change", () => {
      toDoArray[index].completed = checkbox.checked;
      saveList();
    });

    // Implements the new input onto the page
    li.appendChild(checkbox);
    li.appendChild(textSpan);
    toDoList.appendChild(li);
  });
};

// Local storage initialization:

const savedList = localStorage.getItem("toDoList");
if (savedList) {
  toDoArray = JSON.parse(savedList);
  renderList();
}

// Create an event listener to capture the user input:
let userInput = "";
toDoInput.addEventListener("input", (eventObject) => {
  userInput = eventObject.target.value;
});

// Create a function to add user input to list when the button is clicked:
const addToListFunction = () => {
  if (!userInput.trim()) {
    window.alert("No input was provided.");
    return;
  }

  toDoArray.push({
    text: userInput,
    completed: false,
  });

  saveList();
  renderList();

  // Reset input:
  toDoInput.value = "";
  userInput = "";
};

// Create a function to clear the completed items from the list when the button is clicked:
const clearCompletedFunction = () => {
  const anyCompleted = toDoArray.some((item) => item.completed); // .some() method to check if any item is marked true for item.completed
  if (!anyCompleted) {
    window.alert("No tasks are marked as complete.");
    return;
  }

  toDoArray = toDoArray.filter((item) => !item.completed);

  saveList();
  renderList();
};

// Event listeners:

toDoBtn.addEventListener("click", addToListFunction);
toDoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addToListFunction();
  }
});
clearCompletedBtn.addEventListener("click", clearCompletedFunction);
