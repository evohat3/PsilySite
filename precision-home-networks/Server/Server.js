const express = require('express');
const nodemailer = require('nodemailer');
require ('dotenv').config()
const app = express()
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000'
}));

const workEmail = process.env.Email;
const webSiteEMail = process.env.User;
const Password = process.env.Password;

const transporter = nodemailer.createTransport({
    host: 'http://localhost:3002/',
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


   const port = 3002;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});