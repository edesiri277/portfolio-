import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://edesirii.vercel.app'
}));
app.use(express.json());

app.post('/send', (req, res) => {
    const { name, phone, email, subject, message } = req.body;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
    },
});

    const mailOptions = {
        from: process.env.EMAIL,
        replyTo: email,
        to: process.env.EMAIL,
        subject: `New message from ${name}: ${subject}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("EMAIL ERROR:", error); // 👈 clearer log
        return res.status(500).json({ error: error.message });
    } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).json({ message: 'Email sent successfully.' });
    }
   });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});