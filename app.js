const express = require('express');
const cors = require('cors');
const nodeMailer = require('nodemailer');
const transport = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
const app = express();
const port = process.env.PORT || 4000;

//use cors middleware
app.use(cors({ origin: true, credentials: true }));

//use json middleware
app.use(express.json());

//use urlencoded middleware to get data from the request and set request payload limit
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/contact', (req, res) => {
  const { name, email, contactNo, message } = req.body;
  const mailOptions = {
    from: 'boussetta13yahia@gmail.com',
    to: 'boussetta13yahia@gmail.com',
    subject: ' cnc plateforme ' + name,
    text:
      'email : ' +
      email +
      ' contact number ' +
      contactNo +
      ' message : ' +
      message,
  };
  transport.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send({ message: 'sended' });
    }
  });
});
app.listen(port, () => {
  console.log(`listening to port :${port}`);
});

if(process.env.NOD_ENV==="production"){
  app.use(express.static('client/build'))
}