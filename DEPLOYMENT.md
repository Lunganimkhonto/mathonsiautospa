# 🚀 Deployment Guide - Mathonsiautospa Website

This guide will help you deploy your website to a real domain that people can access on the web.

## Step 1: Choose Your Hosting Service

> Important: GitHub is only where your project code lives. It is not the web server that will serve your website to the public. The website must be deployed to a hosting service such as Render or Railway, and your GoDaddy domain must then be pointed to that host.

### Recommended Options:

| Service | Price | Setup Time | Node.js Support | Verdict |
|---------|-------|-----------|-----------------|---------|
| **Railway.app** | $5-20/mo | 5 mins | ✅ Excellent | ⭐ Recommended |
| **Render.com** | Free-$12/mo | 10 mins | ✅ Excellent | ✅ Best for Free |
| **Heroku** | $7-50/mo | 5 mins | ✅ Good | ⚠️ Discontinued free tier |
| **DigitalOcean** | $5-12/mo | 20 mins | ✅ Good | ✅ More control |

**I recommend Railway.app or Render.com for this project.**

---

## Option A: Deploy to Render.com (FREE Option)

### 1. Create Render Account
- Go to [render.com](https://render.com)
- Sign up with GitHub or email
- Verify your email

### 2. Connect Your GitHub Repository

```bash
# First, push your code to GitHub (if not already there)
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 3. Deploy on Render

1. Log in to Render Dashboard
2. Click **"New +"** → **"Web Service"**
3. Select **"Deploy existing repository"** or **"Create new repository"**
4. Connect your `mathonsiautospa` repository
5. Configure:
   - **Name:** `mathonsiautospa`
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

### 4. Add Environment Variables

In Render Dashboard → Your Service → **Environment**

Add these variables:
```
EMAIL_USER=osmathonsi@gmail.com
EMAIL_PASSWORD=[Your Gmail App Password]
BUSINESS_EMAIL=osmathonsi@gmail.com
NODE_ENV=production
```

### 5. Deploy

Click **"Deploy"** - Render will automatically build and deploy your app!

Your site will be available at: `https://mathonsiautospa.render.com`

**Render gives you a free subdomain, but to use your own domain, continue to Step 3 below.**

---

## Option B: Deploy to Railway.app

### 1. Create Railway Account
- Go to [railway.app](https://railway.app)
- Sign up with GitHub
- Verify your email

### 2. Deploy from GitHub

1. Click **"New Project"** → **"Deploy from GitHub repo"**
2. Select your `mathonsiautospa` repository
3. Railway automatically detects Node.js and deploys!

### 3. Add Environment Variables

In Railway Dashboard → Your Project → **Variables**

Click **"Add Variable"** for each:
- `EMAIL_USER` = `osmathonsi@gmail.com`
- `EMAIL_PASSWORD` = `[Your Gmail App Password]`
- `BUSINESS_EMAIL` = `osmathonsi@gmail.com`
- `NODE_ENV` = `production`

### 4. Generate Domain

Railway will auto-generate a `.railway.app` domain. To get your own domain, continue to Step 3.

---

## Step 2: Get Gmail App Password (for Email to Work)

Your website needs to send emails for bookings. Gmail requires an App Password:

### Setup Gmail App Password:

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click **"Security"** in the left menu
3. Enable **"2-Step Verification"** (if not already enabled)
4. After 2FA is enabled, go back to Security
5. Find **"App passwords"** (appears after 2FA)
6. Select:
   - App: **Mail**
   - Device: **Windows Computer** (or your device)
7. Click **"Generate"**
8. Copy the 16-character password
9. **Use this in your EMAIL_PASSWORD environment variable**

---

## Step 3: Buy a Custom Domain & Connect It

### Where to Buy Domains:
- [Namecheap](https://namecheap.com) - $8.88/year
- [Google Domains](https://domains.google.com) - $12/year
- [GoDaddy](https://godaddy.com) - Varies

### Register Your Domain

**Suggested domain names:**
- `mathonsiautospa.co.za` (South African)
- `mathonsiautospa.com`
- `luxuryautospa.co.za`
- `carspaza.co.za`

**Example: Buying on Namecheap**

1. Go to [namecheap.com](https://namecheap.com)
2. Search for your desired domain
3. Add to cart and checkout ($8.88/year)
4. Complete payment

---

## Step 4: Connect Your Domain to Render

### Add Custom Domain to Render:

1. Go to your Render Service Dashboard
2. Click **"Settings"** tab
3. Scroll to **"Custom Domains"**
4. Enter your domain: `mathonsiautospa.co.za`
5. Click **"Add"**
6. Render shows you **DNS Records** to add

### Update DNS at Namecheap:

1. Log in to Namecheap
2. Find your domain → Click **"Manage"**
3. Go to **"Advanced DNS"** tab
4. Add the DNS records Render provided:
   - Copy the **CNAME** record from Render
   - Go to Namecheap → Find the corresponding record
   - Update it with the value from Render
5. **Wait 15-30 minutes** for DNS to propagate

### Verify Domain Connected

After DNS updates:
1. Go back to Render Dashboard
2. Your domain should show **"Connected"**
3. Visit `https://mathonsiautospa.co.za` in your browser

---

## Step 5: Enable HTTPS (SSL Certificate)

Both Render and Railway **automatically provide SSL certificates** for free! 

Your domain will be accessible at:
- `https://mathonsiautospa.co.za` ✅ Secure
- `http://mathonsiautospa.co.za` → Redirects to HTTPS

---

## Troubleshooting

### Website not loading?
- **Check:** DNS hasn't propagated yet (wait 30 mins)
- **Check:** Environment variables are set correctly in dashboard
- **Check:** Build logs for errors (Dashboard → "Logs" tab)

### Emails not sending?
- **Check:** Gmail App Password is correct
- **Check:** 2-Factor Authentication is enabled on Gmail
- **Check:** Using `osmathonsi@gmail.com` for EMAIL_USER

### Custom domain not working?
- **Check:** DNS records are updated correctly
- **Check:** DNS has propagated (use [whatsmydns.net](https://whatsmydns.net))
- **Check:** Wait 24 hours for full propagation

### App keeps crashing?
- **Check:** Build logs in deployment dashboard
- **Check:** All environment variables are set
- **Check:** package.json has correct start script

---

## Deployment Checklist

- [ ] Choose hosting service (Railway or Render)
- [ ] Create account on chosen service
- [ ] Push code to GitHub
- [ ] Connect GitHub repository to hosting
- [ ] Add environment variables (EMAIL_USER, EMAIL_PASSWORD, BUSINESS_EMAIL)
- [ ] Deploy successfully
- [ ] Get Gmail App Password
- [ ] Test website at hosting domain
- [ ] Test booking form sends emails
- [ ] Buy custom domain (Namecheap/Google Domains)
- [ ] Update DNS records
- [ ] Verify custom domain works
- [ ] Test HTTPS works (padlock icon)
- [ ] Share website link with customers! 🎉

---

## Testing Your Live Website

Once deployed:

1. **Visit your URL:**
   - `https://mathonsiautospa.co.za`

2. **Test the booking form:**
   - Fill in a test booking
   - Check your email (osmathonsi@gmail.com) for notification
   - Check the test email for confirmation

3. **Share with customers:**
   - Social media
   - WhatsApp: Add link to bio
   - Business cards
   - Local listings (Google Business Profile, etc.)

---

## Monitoring Your Live Site

### Check if Everything Works:

**Render:**
- Dashboard → Your Service → "Logs" tab (see live logs)
- Dashboard → Your Service → "Metrics" tab (see traffic)

**Railway:**
- Dashboard → Your Project → "Deployments" tab
- Dashboard → Your Project → "Monitoring" tab

### Get Alerts

Both services can notify you if your site goes down.

---

## Scaling Up (Future)

Once you have traffic:

- **Upgrade hosting plan** (Render $7/mo, Railway $5/mo)
- **Add SSL certificate** (automatic - already done!)
- **Enable caching** (CDN in both services)
- **Monitor performance** (built-in dashboards)
- **Scale database** (add database later if needed)

---

## Support

If you get stuck:

- **Render Support:** [render.com/support](https://render.com/support)
- **Railway Support:** [railway.app/docs](https://railway.app/docs)
- **Node.js Errors:** Search error message on Stack Overflow

---

**Your website will be live! 🚀** 

Share `https://mathonsiautospa.co.za` with customers!
