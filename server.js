const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('.'));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
});

// Booking endpoint
app.post('/api/booking', async (req, res) => {
    const { name, email, service, date, message } = req.body;

    if (!name || !email || !service || !date) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // Send confirmation email to customer
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Booking Confirmation - Mathonsiautospa',
            html: `
                <h2>Booking Confirmed!</h2>
                <p>Hi ${name},</p>
                <p>Thank you for booking with Mathonsiautospa & Entertainment.</p>
                <h3>Booking Details:</h3>
                <ul>
                    <li><strong>Service:</strong> ${service}</li>
                    <li><strong>Date:</strong> ${date}</li>
                    <li><strong>Message:</strong> ${message || 'None'}</li>
                </ul>
                <p>We'll confirm your appointment soon. If you have any questions, call us:</p>
                <p><strong>063 5092 426</strong> or <strong>084 6988 197</strong></p>
                <p>Best regards,<br/>Mathonsiautospa Team</p>
            `
        });

        // Send notification to business
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.BUSINESS_EMAIL,
            subject: `New Booking Request - ${service}`,
            html: `
                <h2>New Booking Request</h2>
                <p><strong>Customer:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Message:</strong> ${message || 'None'}</p>
            `
        });

        res.json({ success: true, message: 'Booking submitted successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to submit booking. Please try again.' });
    }
});

// Contact endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // Send confirmation to customer
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'We received your message - Mathonsiautospa',
            html: `
                <h2>Message Received!</h2>
                <p>Hi ${name},</p>
                <p>Thank you for contacting Mathonsiautospa & Entertainment. We'll get back to you soon!</p>
                <p>Best regards,<br/>Mathonsiautospa Team</p>
            `
        });

        // Send to business
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.BUSINESS_EMAIL,
            subject: `New Contact: ${subject}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>From:</strong> ${name} (${email})</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        });

        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚗 Mathonsiautospa server running on http://localhost:${PORT}`);
});
