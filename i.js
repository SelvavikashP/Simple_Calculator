document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
});
// Add your JavaScript code here
// For example, you can add event listeners or manipulate the DOM
// Example: Change the background color of the body
document.body.style.backgroundColor = '#f0f0f0';
// Example: Add a click event listener to a button
const button = document.getElementById('myButton');
if (button) {
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });
}
// Example: Log a message to the console
console.log('JavaScript is working!');  
// You can expand this code with more functionality as needed
// Example: Function to change text content
function changeText(id, newText) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = newText;
    }
}
changeText('myText', 'Hello, World!');
// Example: Function to toggle visibility of an element
function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element) {
        if (element.style.display === 'none') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }
}
toggleVisibility('myElement');
// Add more functions and event listeners as needed
// End of your JavaScript code
