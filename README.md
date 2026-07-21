# Placeonix Option 3 Form Setup

This setup sends every website application to:

- enquiry@placeonix.com
- support@placeonix.com

It also sends an auto-reply to the student.

## Files

- `public/index.html` - website frontend
- `server.js` - backend API
- `.env.example` - SMTP settings template
- `package.json` - dependencies

## Setup

1. Put your logo file inside the `public` folder and name it:

   `logo.jpeg`

2. Rename `.env.example` to `.env`

3. Add your SMTP email login details in `.env`

4. Install dependencies:

   `npm install`

5. Run the website:

   `npm start`

6. Open:

   `http://localhost:3000`

## Important

Do not expose the `.env` file publicly. It contains your email password/app password.
