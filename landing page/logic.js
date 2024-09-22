// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
document.addEventListener('DOMContentLoaded', function () {

const toggle = document.querySelector('#toggle');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const main = document.querySelector('main');
const circle = document.querySelector('aside');
const body = document.body;
console.log(header, footer, main, circle);

const currentMode = localStorage.getItem('mode') || 'light';
body.classList.add(`${currentMode}-mode`);

let mode = 'light';

toggle.addEventListener('click', function () {
  if (mode === 'light-mode') {
    mode = 'dark-mode';
    header.classList.remove('light-header');
    header.classList.add('dark-header');
    footer.classList.remove('light-footer');
    footer.classList.add('dark-footer');
    main.classList.remove('light-main');
    main.classList.add('dark-main');
    circle.classList.remove('light-circle');
    circle.classList.add('dark-circle');
    console.log('switched to dark mode');
  } else {
    mode = 'light-mode';
    header.classList.remove('dark-header');
    header.classList.add('light-header');
    footer.classList.remove('dark-footer');
    footer.classList.add('light-footer');
    main.classList.remove('dark-main');
    main.classList.add('light-main');
    circle.classList.remove('dark-circle');
    circle.classList.add('light-circle');
    console.log('switched to light mode');
  }
  localStorage.setItem('mode', mode);
  console.log('header class:', header.className);
  console.log('footer class:', footer.className);
  console.log('main class:', main.className);
  console.log('aside class:', circle.className);
});

if (currentMode === 'dark-mode') {
  header.classList.add('dark-header');
  footer.classList.add('dark-footer');
  main.classList.add('dark-main');
  circle.classList.add('dark-circle');
} else {
  header.classList.add('light-header');
  footer.classList.add('light-footer');
  main.classList.add('light-main');
  circle.classList.add('light-circle');
}
});


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


function readLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(newBlogPost) {
let existingPosts = localStorage.getItem('blogPosts');
existingPosts = existingPosts ? JSON.parse(existingPosts): [];
existingPosts.push(newBlogPost);
const updatedPosts = JSON.stringify(existingPosts);
localStorage.setItem('blogPosts', updatedPosts);
};

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = 'file:///C:/Users/elisa/working-boot/personal-blog-project/personal-blog-project/blog/blog.html';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};



