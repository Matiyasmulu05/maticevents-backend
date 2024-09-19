const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendEmail = (to, subject, text) => {
  transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  });
};