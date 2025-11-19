# 📧 Web3Forms Setup Guide

Complete guide to set up Web3Forms for your contact form (100% FREE, unlimited submissions!)

---

## ✨ What is Web3Forms?

- ✅ **Free forever** - Unlimited form submissions
- ✅ **No backend needed** - Works with static sites
- ✅ **Email notifications** - Get emails instantly
- ✅ **Spam protection** - Built-in bot protection
- ✅ **File uploads** - Support for attachments
- ✅ **Custom redirects** - Redirect after submission

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Get Your Access Key

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email address
3. Click **"Create Access Key"**
4. Check your email and verify
5. Copy your access key (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

---

### Step 2: Add Access Key Locally

Create a `.env` file in your project root:

```bash
# Create .env file
echo VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here > .env
```

Or manually create `.env` file:

```env
VITE_WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

**Replace** `a1b2c3d4-e5f6-7890-abcd-ef1234567890` with your actual key!

---

### Step 3: Add to Vercel (For Production)

#### Option A: Via Vercel Dashboard
1. Go to your project on [vercel.com](https://vercel.com)
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Name:** `VITE_WEB3FORMS_ACCESS_KEY`
   - **Value:** Your access key
   - **Environment:** Production, Preview, Development
4. Click **Save**
5. Redeploy your site

#### Option B: Via CLI
```bash
vercel env add VITE_WEB3FORMS_ACCESS_KEY
# Paste your access key when prompted
# Select: Production, Preview, Development
```

---

### Step 4: Test Your Form

1. Start dev server:
   ```bash
   npm run dev
   ```

2. Go to: http://localhost:8080/contact

3. Fill out the form and submit

4. Check your email - you should receive the form submission!

---

## 🎯 What Happens When Someone Submits?

1. **User fills form** → Clicks "Submit Enquiry"
2. **Data sent to Web3Forms** → Securely processed
3. **Email sent to you** → Instant notification
4. **User sees success message** → "Thank you! We'll get back to you..."
5. **Form resets** → Ready for next submission

---

## 📧 Email Format

You'll receive emails like this:

```
From: noreply@web3forms.com
Subject: New Project Enquiry from Rendr Media Website

Name: John Doe
Email: john@example.com
Phone: +1 (555) 123-4567
Company: Tech Startup Inc
Service Type: Branding & Identity
Budget: $10,000 - $25,000
Timeline: Soon (1 month)

Message:
We need a complete brand identity for our new tech startup...
```

---

## 🔧 Advanced Configuration

### Custom Email Subject

Already configured in your Contact.tsx:
```javascript
subject: "New Project Enquiry from Rendr Media Website"
```

### Add CC/BCC Recipients

Update the fetch body in Contact.tsx:
```javascript
body: JSON.stringify({
  access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
  // ... other fields
  cc: "team@rendrmedia.com",
  bcc: "backup@rendrmedia.com",
}),
```

### Custom Redirect After Submit

```javascript
body: JSON.stringify({
  access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
  // ... other fields
  redirect: "https://rendrmedia.com/thank-you",
}),
```

### Add reCAPTCHA (Optional)

1. Get reCAPTCHA key from [google.com/recaptcha](https://www.google.com/recaptcha)
2. Add to form:
```javascript
body: JSON.stringify({
  access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
  // ... other fields
  "g-recaptcha-response": recaptchaToken,
}),
```

---

## 🛡️ Security Features

### Built-in Spam Protection
- ✅ Honeypot fields
- ✅ Rate limiting
- ✅ Bot detection
- ✅ Email validation

### Data Privacy
- ✅ No data stored on Web3Forms servers
- ✅ Direct email delivery
- ✅ GDPR compliant
- ✅ No tracking cookies

---

## 🐛 Troubleshooting

### "Access key is required"
**Solution:** Make sure `.env` file exists and contains your key:
```bash
# Check if .env exists
cat .env

# Should show:
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

### "Failed to send message"
**Solutions:**
1. Check internet connection
2. Verify access key is correct
3. Check browser console for errors
4. Try a different email address

### Not Receiving Emails
**Solutions:**
1. Check spam/junk folder
2. Verify email address on Web3Forms dashboard
3. Add `noreply@web3forms.com` to contacts
4. Wait 2-3 minutes (sometimes delayed)

### Form Submits But No Success Message
**Solution:** Check browser console for errors. Make sure toast notifications are working.

---

## 📊 Monitoring Submissions

### Via Email
- All submissions sent to your email
- Create email filters/labels for organization

### Via Web3Forms Dashboard (Pro)
- Upgrade to Pro for dashboard access
- View all submissions
- Export to CSV
- Analytics

---

## 💰 Pricing

### Free Plan (What You Have)
- ✅ Unlimited submissions
- ✅ Email notifications
- ✅ Spam protection
- ✅ File uploads (up to 5MB)
- ✅ Custom redirects
- ✅ Forever free!

### Pro Plan ($9/month) - Optional
- ✅ Everything in Free
- ✅ Dashboard access
- ✅ Submission history
- ✅ Export to CSV
- ✅ Webhooks
- ✅ Custom branding

**For Rendr Media:** Free plan is perfect! 🎉

---

## 🔄 Alternative Form Services

If you want to compare:

| Service | Free Tier | Best For |
|---------|-----------|----------|
| **Web3Forms** | Unlimited | Static sites (Recommended) |
| Formspree | 50/month | Simple forms |
| EmailJS | 200/month | Client-side only |
| Netlify Forms | 100/month | Netlify sites |
| Getform | 50/month | Basic needs |

---

## ✅ Setup Checklist

- [ ] Get access key from web3forms.com
- [ ] Create `.env` file with key
- [ ] Test form locally
- [ ] Add key to Vercel environment variables
- [ ] Deploy to production
- [ ] Test production form
- [ ] Check email notifications
- [ ] Add to spam whitelist

---

## 🎉 You're Done!

Your contact form is now fully functional with:
- ✅ Email notifications
- ✅ Spam protection
- ✅ Professional appearance
- ✅ Mobile responsive
- ✅ Multi-step validation
- ✅ Success/error messages

**Test it now:** http://localhost:8080/contact

---

## 📞 Support

- **Web3Forms Docs:** [docs.web3forms.com](https://docs.web3forms.com)
- **Support:** support@web3forms.com
- **Status:** [status.web3forms.com](https://status.web3forms.com)

---

**Your contact form is ready to receive enquiries!** 🚀
