const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: 'you@gmail.com', pass: 'yourpass' }
});

transporter.sendMail({
  from: 'you@gmail.com',
  to: 'friend@gmail.com',
  subject: 'Test',
  text: 'Hello from Node.js',
});
