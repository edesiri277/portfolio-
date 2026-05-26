import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import sgMail from "@sendgrid/mail";
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors({
  origin: 'https://edesirii.vercel.app'
}));
app.use(express.json());

app.post('/send', async (req, res) => {
    try {
        const { name, phone, email, subject, message } = req.body;

        const msg = {
            to: process.env.EMAIL, // 👈 where YOU receive messages
            name: "Edesiri Portfolio",
            from: process.env.EMAIL, // 👈 MUST be your verified sender
            replyTo: email, // 👈 user email (so you can reply directly)
            subject: `New message from ${name}: ${subject}`,
            text: `Name: ${name}
Phone: ${phone}
Email: ${email}

Message:
${message}`,
        };

        await sgMail.send(msg);

        console.log("Email sent successfully");

        res.status(200).json({ message: "Email sent successfully" });

    } catch (error) {
        console.error("EMAIL ERROR:", error.response?.body || error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});