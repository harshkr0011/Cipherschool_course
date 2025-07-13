const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.get('/users', (req, res) => res.json([{ id: 1, name: 'Alice' }]));
app.post('/message', (req, res) => res.json({ status: 'Message received' }));

app.listen(5000, () => console.log('Server running on port 5000'));
