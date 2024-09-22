// TODO: Create a variable that selects the form element

const formElement = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const errorElement = document.querySelector('#error');

function formSubmission(event) {
    event.preventDefault();
    const username = usernameInput.value.trim();
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (!username || !title || !content) {
        errorElement.textContent = "Please complete the form.";
        return;
    };

    const blogPost = {
        username: username,
        title: title,
        content: content,
    };

    localStorage.setItem('formData', JSON.stringify(blogPost));

    redirectPage();
}

// const username = localStorage.getItem('username');
// const title = localStorage.getItem('title');
// const content = localStorage.getItem('content');

// usernameInput.textContent = username;
// titleInput.textContent = title;
// contentInput.textContent = content;

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

formElement.addEventListener('submit', formSubmission);
