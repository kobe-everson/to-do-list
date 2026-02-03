// Declare input, button, and list variables:
const toDoInput = document.getElementById("to-do-input");
const toDoBtn = document.getElementById("to-do-add-btn");
const toDoList = document.getElementById("to-do-list");

// Create an event listener to capture the user input:
let userInput = "";
toDoInput.addEventListener("input", (eventObject) => {
  userInput = eventObject.target.value;
});

// Create an event listener to add user input to list when the button is clicked:
const addToListFunction = () => {
  if (!userInput.trim()) {
    window.alert("No input was provided.");
    return;
  }
  const newToDoElement = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = userInput;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList = "to-do-checkbox";

  newToDoElement.appendChild(checkbox);
  newToDoElement.appendChild(textSpan);
  toDoList.appendChild(newToDoElement);

  // Reset input:
  toDoInput.value = "";
  userInput = "";
};

toDoBtn.addEventListener("click", addToListFunction);

// Local storage implementation:
