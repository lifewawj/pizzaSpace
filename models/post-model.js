const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Sample data for demonstration purposes
let posts = [
  { username: 'user1', content: 'Hello JavaScript!', timestamp: Date.now() },
  { username: 'user2', content: 'Building a post system with Node.js.', timestamp: Date.now() },
];

app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.post('/posts', (req, res) => {
  const { username, content } = req.body;

  if (username && content) {
    const newPost = { username, content, timestamp: Date.now() };
    posts.unshift(newPost); // Add new post to the beginning of the array

    res.status(201).json(newPost);
  } else {
    res.status(400).json({ error: 'Invalid request' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
