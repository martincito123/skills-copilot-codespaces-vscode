// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Fake data
const comments = [
  { id: 1, author: 'John', text: 'Hello' },
  { id: 2, author: 'Mary', text: 'Hi' },
  { id: 3, author: 'Joe', text: 'Good morning' },
  { id: 4, author: 'Jill', text: 'Good evening' },
];

// Get all comments
app.get('/', (req, res) => {
  res.json(comments);
});

// Get a single comment
app.get('/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found');
  }
  res.json(comment);
});

// Create a comment
app.post('/', (req, res) => {
  const comment = {
    id: comments.length + 1,