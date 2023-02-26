const http = new easyHTTP();

// Get Posts

const posts = http.get(
  "https://jsonplaceholder.typicode.com/posts",
  (err, posts) => {
    if (err) {
      console.log(err);
    } else {
      console.log(posts);
    }
  }
);
