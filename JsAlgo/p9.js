const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/demo');

const Item = mongoose.model('Item', { name: String });

app.get('/items', async (req, res) => res.json(await Item.find()));
app.post('/items', async (req, res) => res.json(await Item.create(req.body)));
app.put('/items/:id', async (req, res) => res.json(await Item.findByIdAndUpdate(req.params.id, req.body)));
app.delete('/items/:id', async (req, res) => res.json(await Item.findByIdAndDelete(req.params.id)));

app.listen(3000, () => console.log('API running'));
