# Mathonsiautospa & Entertainment

A fully functional website for Mathonsiautospa luxury auto spa and entertainment lounge, built with Node.js backend, real booking system, and email notifications.

## 🚀 Features

- ✅ **Real Booking System** - Customers can book services with automatic email confirmations
- ✅ **Email Notifications** - Business receives booking notifications, customers get confirmations
- ✅ **Dark/Light Theme** - Responsive theme toggle with localStorage persistence
- ✅ **Mobile Optimized** - Fully responsive design for all device sizes
- ✅ **Google Maps Integration** - Embedded location map
- ✅ **WhatsApp Integration** - Direct WhatsApp messaging buttons
- ✅ **Contact Forms** - Real contact form with email delivery
- ✅ **Testimonials** - Customer reviews section
- ✅ **SEO Optimized** - Proper meta tags and structured data
- ✅ **Analytics Ready** - Google Analytics integration support

## 📋 Prerequisites

- Node.js 14+ and npm
- Gmail account (for email functionality) or other SMTP service

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email Settings

Create a `.env` file in the root directory (copy from `.env.example`):

```bash
cp .env.example .env
```

Edit `.env` and add your email credentials:

```
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
BUSINESS_EMAIL=osmathonsi@gmail.com
PORT=3000
NODE_ENV=development
```

**For Gmail:**
1. Enable 2-factor authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated password in `EMAIL_PASSWORD`

### 3. Run Locally

**Development mode** (with auto-reload):
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

Then open `http://localhost:3000` in your browser.

### 4. For Static Preview Only (no backend)

```bash
npm run static
```

## 📁 Project Structure

```
mathonsiautospa/
├── index.html          # Main website markup
├── styles.css          # Responsive styling
├── script.js           # Frontend logic (theme, booking form)
├── server.js           # Backend API server
├── package.json        # Dependencies
├── .env.example        # Environment variables template
├── .env                # (not in git) Your local credentials
└── .gitignore          # Git ignore rules
```

## 🔌 API Endpoints

### POST /api/booking
Submit a new booking request.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+27635092426",
  "service": "Full Exterior Detail",
  "date": "2026-01-15",
  "message": "Optional message"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Booking submitted successfully!"
}
```

### POST /api/contact
Submit a contact form message.

**Request:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Inquiry about services",
  "message": "I have a question..."
}
```

### GET /api/health
Health check endpoint.

## 🌐 Deployment Options

### Heroku Deployment

```bash
# Install Heroku CLI, then:
heroku login
heroku create your-app-name
git push heroku main
```

Set environment variables on Heroku:
```bash
heroku config:set EMAIL_USER=your_email@gmail.com
heroku config:set EMAIL_PASSWORD=your_app_password
heroku config:set BUSINESS_EMAIL=osmathonsi@gmail.com
```

### Netlify Deployment (Static + Serverless Functions)

1. Deploy static files to Netlify
2. Optionally use Netlify Functions for backend

### Traditional VPS Deployment

1. SSH into your server
2. Clone the repository
3. Install Node.js and npm
4. Set up `.env` file
5. Use PM2 to keep the app running:

```bash
npm install -g pm2
pm2 start server.js --name mathonsiautospa
pm2 startup
pm2 save
```

6. Set up Nginx as reverse proxy pointing to localhost:3000

## 🎯 Google Analytics Setup

1. Create a Google Analytics account: https://analytics.google.com
2. Get your tracking ID (format: UA-XXXXXXXXX-X or G-XXXXXXXXXX)
3. Update `YOUR_GA_ID` in `index.html`

## 🐛 Troubleshooting

### Emails not sending?
- Check `.env` file exists and has correct credentials
- Verify Gmail App Password is generated correctly
- Check spam folder for test emails
- Ensure 2-factor authentication is enabled on Gmail

### Port already in use?
```bash
# Change PORT in .env file or:
PORT=3001 npm start
```

### Static files not loading?
- Make sure you're running `npm start` (not just opening index.html)
- Check that all CSS and JS files are in the same directory

## 📞 Contact Info

- **Phone:** 063 5092 426 | 084 6988 197
- **Email:** osmathonsi@gmail.com
- **Location:** Cato Ridge, across fire station - Carwash Durban, KwaZulu-Natal
- **Hours:** Monday - Sunday, 7:00 AM - 6:00 PM

## 📄 License

© 2026 Mathonsiautospa & Entertainment. All rights reserved.

## 🚦 Next Steps

- [ ] Set up Google Analytics
- [ ] Configure real email service
- [ ] Add image gallery
- [ ] Set up social media pages
- [ ] Deploy to production server
- [ ] Configure custom domain
- [ ] Add payment integration (optional)
- [ ] Add online appointment calendar (optional)
