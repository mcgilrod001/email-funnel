// Get the button element
const button = document.getElementById('email-button');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Get the paragraph element
    const paragraph = document.getElementById('my-paragraph');
    const inputvalue = document.getElementById('Email-Imput');
    // Change the text content of the paragraph
    paragraph.textContent = 'Button clicked!';
});