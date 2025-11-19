# 🗄️ Supabase Setup Guide

Complete guide to set up Supabase database for storing contact form submissions.

---

## ✨ What You'll Get

- ✅ **Dashboard** to view all form submissions
- ✅ **Email notifications** (still works!)
- ✅ **Export data** to CSV anytime
- ✅ **Search & filter** submissions
- ✅ **Free tier**: 500MB database, unlimited API requests
- ✅ **Real-time updates** (optional)

---

## 🚀 Step 1: Create Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click **"Start your project"**
3. Sign up with GitHub (recommended) or email
4. Verify your email

---

## 📊 Step 2: Create New Project

1. Click **"New Project"**
2. Fill in details:
   - **Name**: `rendr-media`
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to you (e.g., Mumbai, Singapore)
   - **Pricing Plan**: Free
3. Click **"Create new project"**
4. Wait 2-3 minutes for setup

---

## 🔑 Step 3: Get API Keys

1. In your project dashboard, click **Settings** (gear icon)
2. Click **API** in the sidebar
3. Copy these values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

---

## 💾 Step 4: Create Database Table

1. Click **SQL Editor** in the sidebar
2. Click **"New query"**
3. Copy and paste this SQL:

```sql
-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  service_type TEXT,
  budget TEXT,
  timeline TEXT,
  description TEXT,
  status TEXT DEFAULT 'new',
  notes TEXT
);

-- Create index for faster queries
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (for form submissions)
CREATE POLICY "Allow public inserts" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow reads only for authenticated users (you)
CREATE POLICY "Allow authenticated reads" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow updates only for authenticated users
CREATE POLICY "Allow authenticated updates" ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true);
```

4. Click **"Run"** (or press Ctrl+Enter)
5. You should see: "Success. No rows returned"

---

## 🔧 Step 5: Add Environment Variables

### Local Development

Update your `.env` file:

```env
# Web3Forms (keep for email notifications)
VITE_WEB3FORMS_ACCESS_KEY=211c89ba-098f-4761-b1b7-bc04449b3166

# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Replace with your actual values from Step 3!

### Vercel Production

Add to Vercel:

```bash
vercel env add VITE_SUPABASE_URL production
# Paste your Supabase URL

vercel env add VITE_SUPABASE_ANON_KEY production
# Paste your anon key

# Also add for preview and development
vercel env add VITE_SUPABASE_URL preview
vercel env add VITE_SUPABASE_ANON_KEY preview

vercel env add VITE_SUPABASE_URL development
vercel env add VITE_SUPABASE_ANON_KEY development
```

---

## ✅ Step 6: Test Your Setup

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Go to: http://localhost:8080/contact

3. Fill out and submit the form

4. Check Supabase:
   - Go to **Table Editor** in Supabase
   - Click **contact_submissions**
   - You should see your submission!

5. Check your email (Web3Forms still sends emails!)

---

## 📊 View Submissions in Supabase

### Table Editor (Easy)
1. Go to **Table Editor** in Supabase dashboard
2. Click **contact_submissions**
3. See all submissions in a table
4. Click any row to view details
5. Edit, delete, or add notes

### SQL Editor (Advanced)
```sql
-- View all submissions
SELECT * FROM contact_submissions ORDER BY created_at DESC;

-- View only new submissions
SELECT * FROM contact_submissions WHERE status = 'new';

-- Count submissions by service type
SELECT service_type, COUNT(*) 
FROM contact_submissions 
GROUP BY service_type;

-- Search by email
SELECT * FROM contact_submissions WHERE email LIKE '%example.com%';
```

---

## 📈 Manage Submissions

### Update Status

```sql
-- Mark as contacted
UPDATE contact_submissions 
SET status = 'contacted', notes = 'Called on 2024-01-15'
WHERE id = 'submission-id-here';

-- Mark as completed
UPDATE contact_submissions 
SET status = 'completed'
WHERE id = 'submission-id-here';
```

### Export Data

1. Go to **Table Editor**
2. Click **contact_submissions**
3. Click **"..."** (three dots)
4. Click **"Download as CSV"**
5. Open in Excel/Google Sheets

---

## 🔔 Email Notifications

**Good news!** Email notifications still work because we're using both:
- ✅ **Supabase** - Stores data in database
- ✅ **Web3Forms** - Sends email notifications

You get the best of both worlds!

---

## 🎯 Submission Statuses

You can track submission status:

- **new** - Just submitted (default)
- **contacted** - You've reached out
- **in_progress** - Working on project
- **completed** - Project finished
- **declined** - Not moving forward

Update status in Supabase dashboard or via SQL.

---

## 🔒 Security

### Row Level Security (RLS)

Already configured! This means:
- ✅ Anyone can submit forms (public)
- ✅ Only you can view submissions (authenticated)
- ✅ Only you can update/delete (authenticated)

### API Keys

- **anon key** - Safe to use in frontend (public)
- **service_role key** - NEVER use in frontend (admin access)

---

## 📱 Mobile App (Future)

With Supabase, you can easily build:
- Mobile app to view submissions
- Real-time notifications
- Admin dashboard
- Analytics

All using the same database!

---

## 💰 Pricing

### Free Tier (What You Have)
- ✅ 500MB database storage
- ✅ Unlimited API requests
- ✅ 2GB file storage
- ✅ 50,000 monthly active users
- ✅ Social OAuth providers
- ✅ 7-day log retention

**Perfect for Rendr Media!** You won't need to upgrade.

### Pro Tier ($25/month) - If Needed
- 8GB database storage
- 100GB file storage
- 90-day log retention
- Daily backups
- Priority support

---

## 🐛 Troubleshooting

### "Failed to insert"
- Check Supabase URL and anon key are correct
- Verify table exists in Supabase
- Check RLS policies are created

### "Network error"
- Check internet connection
- Verify Supabase project is active
- Check browser console for errors

### Submissions not showing in Supabase
- Refresh the Table Editor page
- Check you're looking at the right table
- Verify form submission was successful

### Emails not sending
- Web3Forms still works independently
- Check Web3Forms access key is correct
- Verify email in Web3Forms dashboard

---

## 📊 Analytics Queries

### Submissions by Date
```sql
SELECT 
  DATE(created_at) as date,
  COUNT(*) as submissions
FROM contact_submissions
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

### Popular Services
```sql
SELECT 
  service_type,
  COUNT(*) as count
FROM contact_submissions
GROUP BY service_type
ORDER BY count DESC;
```

### Budget Distribution
```sql
SELECT 
  budget,
  COUNT(*) as count
FROM contact_submissions
GROUP BY budget
ORDER BY count DESC;
```

---

## 🔄 Backup Your Data

### Automatic Backups (Pro Plan)
- Daily automatic backups
- Point-in-time recovery

### Manual Backup (Free Plan)
1. Export to CSV regularly
2. Store in Google Drive/Dropbox
3. Or use SQL dump:

```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Backup database
supabase db dump -f backup.sql
```

---

## 🎉 You're All Set!

Your contact form now:
- ✅ Stores submissions in Supabase
- ✅ Sends email notifications via Web3Forms
- ✅ Provides dashboard to view all data
- ✅ Allows export to CSV
- ✅ Tracks submission status
- ✅ Completely free!

---

## 📞 Support

- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Discord**: [discord.supabase.com](https://discord.supabase.com)
- **GitHub**: [github.com/supabase/supabase](https://github.com/supabase/supabase)

---

**Next**: Follow the steps above to set up your Supabase project! 🚀
