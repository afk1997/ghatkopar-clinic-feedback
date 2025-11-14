# 🐾 Always Care Animal Clinic - Feedback System

A professional feedback collection system for Always Care Animal Clinic's two branches (Ghatkopar and Kandivali) with automatic Telegram notifications.

## ✨ Features

- **Two Separate Feedback Forms**: One for Ghatkopar clinic, one for Kandivali clinic
- **Instant Telegram Notifications**: Feedback is automatically sent to your Telegram group/chat
- **Database Storage**: Optional MongoDB integration to store all feedback submissions
- **Beautiful UI**: Modern, responsive design with Tailwind CSS
- **Monthly Raffle**: Highlighted feature to encourage feedback submissions
- **Complete Feedback Questions**: All 6 questions from your original form

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Telegram Bot Configuration (REQUIRED)
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here

# MongoDB Configuration (OPTIONAL - for data persistence)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/clinic-feedback
```

**Your Current Credentials:**
- Bot Token: Already configured in `.env.local`
- Chat ID: Already configured in `.env.local`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📱 Telegram Bot Setup (Already Done!)

You've already completed this, but for reference:

1. Search for @BotFather on Telegram
2. Send `/newbot` command
3. Follow the prompts to create your bot
4. Copy the bot token
5. Get your chat ID from @userinfobot or by adding your bot to a group

## 🗄️ Database Setup (Optional)

The system works without a database by sending feedback only to Telegram. If you want to store feedback in a database:

### Option 1: MongoDB Atlas (Free Cloud Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Get your connection string
4. Add it to `.env.local` as `MONGODB_URI`

### Option 2: Local MongoDB

```bash
# Install MongoDB locally
# Then use:
MONGODB_URI=mongodb://localhost:27017/clinic-feedback
```

## 🌐 Deployment to Vercel (FREE!)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit: Feedback system"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Add Environment Variables:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `MONGODB_URI` (optional)
6. Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

## 📋 Form Features

### Both Forms Include:

**Basic Information:**
- Date of Visit
- Case Number
- Patient Name
- Contact Details

**Feedback Questions:**
1. 🩺 Doctor/staff clarity in explaining treatment
2. 🐾 Proper attention and care received
3. 🕓 Waiting time assessment
4. 🧹 Clinic cleanliness
5. 💊 Clear follow-up instructions
6. 💭 Improvement suggestions

**Telegram Notification:**
When a form is submitted, a formatted message is instantly sent to your Telegram with all the feedback details.

## 🎨 Customization

### Change Colors

Edit the Tailwind classes in:
- `/app/ghatkopar/page.tsx` - Blue theme
- `/app/kandivali/page.tsx` - Purple theme

### Add More Questions

1. Update the `FeedbackFormData` type in `/types/feedback.ts`
2. Add form fields in the respective page components
3. Update the Telegram message format in `/lib/telegram.ts`

## 📁 Project Structure

```
ghatkopar-clinic-feedback/
├── app/
│   ├── api/
│   │   └── feedback/
│   │       └── route.ts          # API endpoint for form submission
│   ├── ghatkopar/
│   │   └── page.tsx              # Ghatkopar feedback form
│   ├── kandivali/
│   │   └── page.tsx              # Kandivali feedback form
│   └── page.tsx                  # Home page
├── lib/
│   ├── telegram.ts               # Telegram notification logic
│   └── mongodb.ts                # Database connection
├── types/
│   └── feedback.ts               # TypeScript types
├── .env.local                    # Environment variables (not committed)
├── .env.example                  # Example environment file
└── README.md
```

## 🔧 Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB (optional)
- **Notifications**: Telegram Bot API
- **Deployment**: Vercel

## 📊 Viewing Feedback

### Via Telegram
All feedback is sent instantly to your configured Telegram chat.

### Via Database (if configured)
Access your MongoDB dashboard to view stored feedback.

## 🐛 Troubleshooting

### Telegram messages not sending?
- Check that `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are correct in `.env.local`
- Ensure your bot has been started (send `/start` to the bot)
- For groups, make sure the bot is added as a member

### Form not submitting?
- Check browser console for errors (F12)
- Ensure all required fields are filled
- Check that the development server is running

## 📝 License

MIT License - Feel free to use and modify for your clinic!

## 💡 Support

For questions or issues:
1. Check the troubleshooting section
2. Review the code comments
3. Test the Telegram bot connection manually

---

Made with 💖 for Always Care Animal Clinic
