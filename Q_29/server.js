// server.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Home' }));
app.get('/about', (req, res) => res.json({ message: 'About' }));
app.get('/users', (req, res) => res.json([{ id: 1, name: 'Alice' }]));
app.post('/message', (req, res) => res.json({ status: 'Message received' }));
app.delete('/user/:id', (req, res) => {
  console.log('Deleted user ID:', req.params.id);
  res.json({ status: 'User deleted' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
