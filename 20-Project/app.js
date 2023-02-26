// function createPost() {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// const createPost = () => {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// };

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// const getPosts = () => {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// };

// ES6 Promises

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

const createPost = (post) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong.");
      }
    }, 2000);
  });
};

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });

getPosts();
