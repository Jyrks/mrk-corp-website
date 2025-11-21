# FormSpree Setup Instructions

The contact form is now configured to use FormSpree. Follow these steps to activate it:

## Step 1: Create a FormSpree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Sign Up" (it's free for up to 50 submissions/month)
3. Create an account with your email

## Step 2: Create a New Form

1. After logging in, click "New Form" or "+" button
2. Give your form a name: **"MRK Corp Contact Form"**
3. Enter the email where you want to receive submissions: **business@mrkcorp.com**
4. Click "Create Form"

## Step 3: Get Your Form ID

1. After creating the form, you'll see a page with your form endpoint
2. It will look like: `https://formspree.io/f/xyzabc123`
3. Copy the **form ID** (the part after `/f/` - for example: `xyzabc123`)

## Step 4: Update Your Website

1. Open `index.html` in your code editor
2. Find this line (around line 282):
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Replace `YOUR_FORM_ID` with your actual Form ID from step 3
4. Save the file

## Step 5: Test the Form

1. Upload your website to your web server
2. Fill out the contact form and submit it
3. **Important:** The first submission will require email confirmation
   - Check the email inbox for business@mrkcorp.com
   - Click the confirmation link in the email from FormSpree
4. After confirmation, all future form submissions will be delivered automatically!

## Features Included

✅ **Spam Protection:** Honeypot field to prevent bots
✅ **Email Validation:** Proper HTML5 email input type
✅ **Custom Subject Line:** Emails will have "New Contact Form Submission - MRK Corp Website"
✅ **Required Fields:** Name, Surname, Email, and Message are required

## What Happens After Setup?

When someone fills out your contact form:
1. They click "Send Message Now"
2. FormSpree receives the data
3. An email is sent to **business@mrkcorp.com** with all the form details
4. The user sees a success message from FormSpree

## Free Plan Limits

- 50 submissions per month
- Email notifications
- Basic spam filtering
- Form archive (last 100 submissions)

If you need more submissions, FormSpree has paid plans starting at $10/month for 1,000 submissions.

## Troubleshooting

**Form not working?**
- Make sure you replaced `YOUR_FORM_ID` with your actual FormSpree form ID
- Confirm you clicked the verification email link
- Check your spam folder for FormSpree emails

**Need help?**
- FormSpree documentation: https://help.formspree.io/
- FormSpree support: support@formspree.io
