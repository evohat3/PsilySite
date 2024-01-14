const express = require('express');
const nodemailer = require('nodemailer');
require ('dotenv').config()
const app = express()
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(cors({
  origin: 'https://precisionhomenetworks.com/'
}));
const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.use((req, res, next) => {
  req.headers['X-Real-IP'] = req.connection.remoteAddress;
  req.headers['X-Forwarded-For'] = req.headers['x-forwarded-for'] || '';
  req.headers['X-Forwarded-Proto'] = req.protocol;
  next();
});



const workEmail = process.env.Email;
const webSiteEMail = process.env.User;
const Password = process.env.Password;

const transporter = nodemailer.createTransport({
    host: 'smtp.precisionhomenetworks.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: webSiteEMail, // gmail username
      pass: Password // gmail app generated password
    },
    tls: {
      rejectUnauthorized: false
    }
   });

   app.post('/send', (req, res) => {
    let userInfo = req.body;
   
    let mailOptions = {
      from: webSiteEMail,
      to: workEmail,
      subject: userInfo.subject,
      html:`
      <div style="border: 1px solid black; padding: 10px;  background: black; color: white">
       <table>
         <tr>
           <td><strong>First Name:</strong> ${userInfo.first}</td>
           <td><strong>Last Name:</strong> ${userInfo.last}</td>
         </tr>
         <tr>
           <td><strong>Email:</strong> ${userInfo.email}</td>
           <td><strong>Phone Number:</strong> ${userInfo.phone}</td>
         </tr>
       </table>
      </div>
      <div style="border: 1px solid black; overflow-wrap: break-word;">
      <table> 
      <p><strong>Description:</strong> ${userInfo.customerText}</p>
      </table>
      <div/>
      `
    };
   
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.status(500).send({ status: "fail" });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send({ status: "success" });
      }
    });
   });


   const port = process.env.PORT || 3002;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});