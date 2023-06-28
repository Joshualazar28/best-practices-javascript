
// Promises in JavaScript are a language feature that helps manage asynchronous operations. They represent the eventual completion or failure of an asynchronous task and allow you to handle the result or error in a structured and predictable manner. Promises provide a way to write asynchronous code that is more readable, maintainable, and less prone to callback hell.


/* The `const posts` is an array that stores objects representing posts. Each post object has
properties `name` and `Profession` which store the name and profession of the person who made the
post. */
const posts = [
    { name: 'Joshua', Profession: 'Software Engineer' },
    { name: 'john', Profession: 'Software Engineer' },
  ]; 

/**
 * The function `getPost` retrieves posts and displays them on the webpage after a delay of 1 second.
 */
  function getPost() {
    setTimeout(() => {
      let output = '';
      posts.forEach((item, index) => {
        output += `<li>${item.name}</li> `;
      });
      document.body.innerHTML = output;
    }, 1000);  
  }


/**
 * The function `createPost` creates a new post and returns a promise that resolves if the post is
 * successfully added to the posts array, or rejects with an error message if something goes wrong.
 * @param post - The `post` parameter is an object that represents a post. It has two properties:
 * `name` and `Profession`.
 * @returns The createPost function is returning a Promise object.
 */
function createPost(post) {
    
    return new Promise((resolve, reject) => {
     setTimeout(() => {
        posts.push(post)
        let error = false 
       
        if(!error) {
            resolve()
        }
        else {
            reject('Error:something went wrong') 
        }
     }, 2000);
    })
}

createPost( { name: 'Joshua', Profession: 'Software Engineer'}).then(getPost)