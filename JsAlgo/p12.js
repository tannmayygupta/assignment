const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Image uploaded');
});

app.get('/image/:name', (req, res) => {
  res.sendFile(__dirname + '/uploads/' + req.params.name);
});
