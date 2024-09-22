// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainElement = document.querySelector('main');
const backButton = document.querySelector('#back');

// TODO: Create a function that builds an element and appends it to the DOM

function buildAndAppend {
    const article = document.createElement(article);
    const blogTitle = document.createElement(h2);
    blogTitle.textContent = title;

    const blogContent = document.createElement(p);
    blogContent.textContent = content;

    const blogUser = document.createElement(blockquote);
    blogUser.textContent = username;
   
    article.appendChild(blogTitle);
    article.appendChild(blogContent);
    article.appendChild(blogUser);

    mainElement.appendChild(article);

};

// TODO: Create a function that handles the case where there are no blog posts to display

function noBlogPosts() {
    if (blogPosts.length === 0) {
        const noPostsMessage = document.createElement('p');
        noPostsMessage.textContent = "No Blog posts yet...";
        mainElement.appendChild(noPostsMessage);
    } else {
        blogPosts.forEach(post => {
            buildAndAppend();
        });
    };
};

// function displayBlogPosts(mainElement) {
//     // Clear previous content
//     mainElement.innerHTML = '';

//     // Retrieve blog posts from localStorage
//     const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

//     if (blogPosts.length === 0) {
//         // If no blog posts are found, display a message
//         function noPosts() {
//         const noPostsMessage = document.createElement('p');
//         noPostsMessage.textContent = "No Blog posts yet...";
//         mainElement.appendChild(noPostsMessage);
//         }
//     } else {
//         // If there are blog posts, render them
//         blogPosts.forEach(post => {
//             buildAndAppend(mainElement, post.title, post.content, post.username);
//         });
//     }
// }

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

function renderBlogList() {
    const blogPosts = JSON.parse(localStorage.getItem('formData'));
    if (blogPosts === null) {
    noBlogPosts();
    }
    else {
        blogPosts.forEach(post => {
            buildAndAppend(); 
    });
};
};

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

let redirectURL = 'C:\Users\elisa\working-boot\personal-blog-project\personal-blog-project\landing page\index.html';
const redirect = document.querySelector()

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);

  
};
