const http = new easyHTTP();

// Get Posts

// const posts = http.get(
//   "https://jsonplaceholder.typicode.com/posts",
//   (err, posts) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(posts);
//     }
//   }
// );

// Get single post

// const post = http.get(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   (err, post) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// Create Data

const data = {
  title: "Custom Post",
  body: "This is a custom post",
};

// Create Post

// http.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   data,
//   function (err, post) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// Update Post

http.put(
  "https://jsonplaceholder.typicode.com/posts/5",
  data,
  function (err, post) {
    if (err) {
      console.log(err);
    } else {
      console.log(post);
    }
  }
);

// Delete Post

http.delete("https://jsonplaceholder.typicode.com/posts/1", (err, response) => {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
