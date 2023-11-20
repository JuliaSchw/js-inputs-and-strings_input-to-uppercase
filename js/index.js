console.clear();

/*
Convert the input value to uppercase when clicking the button

[x] – Assign the input element to a variable
[x] – Assign the button element to a variable
[x] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

const firstInput = document.querySelector('[data-js="first-input"]');
const button = document.querySelector('[data-js="button-uppercase"]');
const helpTextElement = document.querySelector('[data-js="help-text"]');

const helpText =
  "Please type at least one character before converting to Uppercase.";

button.addEventListener("click", () => {
  if (firstInput.value.length == 0) {
    helpTextElement.innerHTML = helpText;
    console.log("Error: " + helpText);
    return;
  }

  firstInput.value = firstInput.value.toUpperCase();
  console.log("To Uppercase converted: " + firstInput.value);
});
