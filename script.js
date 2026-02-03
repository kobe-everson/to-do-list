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
  if (!userInput) {
    window.alert("No input was provided.");
    return;
  }
  const newToDoElement = document.createElement("li");
  const inputTextNode = document.createTextNode(userInput);
  newToDoElement.appendChild(inputTextNode);
  toDoList.appendChild(newToDoElement);
};

toDoBtn.addEventListener("click", addToListFunction);

// Next thing:
