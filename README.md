# Mathonsiautospa & Entertainment

A fully functional website for Mathonsiautospa luxury auto spa and entertainment lounge, built with Node.js backend, real booking system, and email notifications.

**🌐 Want to go live?** See [DEPLOYMENT.md](./DEPLOYMENT.md) for step-by-step instructions to deploy on a real domain!

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
- ✅ **Production Ready** - Deploy to Render.com or Railway.app in minutes!

## 📋 Prerequisites

- Node.js 14+ and npm
- Gmail account (for email functionality) or other SMTP service

## 🔧 Quick Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp .env.example .env

# 3. Edit .env with your Gmail credentials
# Then run locally:
npm start

# Visit http://localhost:3000
```

## 🌐 Deploy to Web

Ready to go live? Follow the complete deployment guide:

👉 **[Read DEPLOYMENT.md for step-by-step instructions](./DEPLOYMENT.md)**

**TL;DR - Quick Deploy:**
1. Create account on [Render.com](https://render.com) (free tier available)
2. Connect your GitHub repo
3. Add environment variables
4. Deploy! (Your site is live in ~5 minutes)
5. Add custom domain ($12/year)

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

## 🌐 Advanced Configuration

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment and domain setup instructions.

### Local Development

**Development mode with auto-reload:**
```bash
npm run dev
```

**Static preview only (no backend):**
```bash
npm run static
```

### Environment Variables Reference

```
EMAIL_USER=osmathonsi@gmail.com           # Gmail address for sending emails
EMAIL_PASSWORD=your_app_password          # Gmail App Password (not your regular password)
BUSINESS_EMAIL=osmathonsi@gmail.com       # Where booking notifications go
PORT=3000                                 # Server port (auto-set by hosting services)
NODE_ENV=production                       # Set to 'production' when deployed
```

### Google Analytics Setup

1. Create a Google Analytics account: https://analytics.google.com
2. Get your tracking ID (format: UA-XXXXXXXXX-X or G-XXXXXXXXXX)
3. Update `YOUR_GA_ID` in `index.html`

## 🐛 Troubleshooting

**For deployment, hosting, and email issues:** See [DEPLOYMENT.md](./DEPLOYMENT.md)

**Local development issues:**

### Emails not sending locally?
- Check `.env` file exists and has correct credentials
- Verify Gmail App Password is generated correctly (not your regular Google password)
- Ensure 2-factor authentication is enabled on Gmail

### Port already in use?
```bash
PORT=3001 npm start
```

### Cannot connect to localhost:3000?
- Make sure you ran `npm install` first
- Make sure you ran `npm start` (not just opening index.html)
- Check that Node.js is properly installed: `node -v`

## 📞 Contact Info

- **Phone:** 063 5092 426 | 084 6988 197
- **Email:** osmathonsi@gmail.com
- **Location:** Cato Ridge, across fire station - Carwash Durban, KwaZulu-Natal
- **Hours:** Monday - Sunday, 7:00 AM - 6:00 PM

## 📄 License

© 2026 Mathonsiautospa & Entertainment. All rights reserved.

## ✅ Deployment Checklist

Ready to launch?

- [ ] Read [DEPLOYMENT.md](./DEPLOYMENT.md)
- [ ] Create Render.com or Railway.app account
- [ ] Get Gmail App Password
- [ ] Push code to GitHub
- [ ] Deploy and test
- [ ] Buy custom domain
- [ ] Connect domain to hosting
- [ ] Share live URL with customers 🎉

**Your website goes live today!** 🚀
