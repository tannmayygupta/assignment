const express = require('express');
const app = express();
app.use(express.json());

let data = [];

app.get('/items', (req, res) => res.json(data));
app.post('/items', (req, res) => { data.push(req.body); res.send('Added'); });
app.put('/items/:id', (req, res) => { data[req.params.id] = req.body; res.send('Updated'); });
app.delete('/items/:id', (req, res) => { data.splice(req.params.id, 1); res.send('Deleted'); });

app.listen(3000, () => console.log('Server running'));
