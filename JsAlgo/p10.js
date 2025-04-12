const jwt = require('jsonwebtoken');
const secret = 'secretkey';

app.post('/login', (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, secret, { expiresIn: '1h' });
  res.json({ token });
});

function authenticateToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, secret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
