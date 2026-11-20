# ASSETIVATE — OnboardOS

**Practical software systems for repeatable business workflows.**  
Live App: [assetivate.vercel.app](https://vercel.app)

---

## Overview

**ASSETIVATE** builds focused, production-ready software products that replace fragmented manual processes with structured digital workflows. 

Its flagship product, **OnboardOS**, solves client-onboarding bottlenecks—replacing scattered email threads, WhatsApp messages, and spreadsheets with one trackable workflow.

---

## Core Workflow (`OnboardOS`)

1. **Create a Reusable Workflow:** Providers define required fields, selections, and document uploads once.
2. **Send One Secure Client Link:** Clients submit structured information and files **without needing to create an account**.
3. **Track & Review in One Place:** Providers monitor completion status, review individual submissions, and request targeted changes on specific items.

---

## Key Features

- **Account-Free Client Portal:** Zero-friction token/secure-link submission flow for end clients.
- **Structured Data & File Capture:** Standardized text, selection, and controlled document uploads.
- **Granular Review & Change Requests:** Item-level status tracking and revision loops without restarting the entire intake.
- **Role-Protected Provider Dashboard:** Authenticated workspace for managing multiple client workflows.
- **Subscription & Billing Ready:** Integrated Razorpay payment flow (Free tier for first 3 clients + Pro tier).

---

## Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **Backend & Database:** Supabase (PostgreSQL, Auth, Storage, Row-Level Security)
- **Payments:** Razorpay
- **Deployment & CI/CD:** Vercel, GitHub

---

## Local Development

```bash
# 1. Clone the repository
git clone https://github.com<your-github-username>/<repo-name>.git
cd <repo-name>

# 2. Install dependencies
npm install

# 3. Configure environment variables
# Create a .env.local file with your Supabase and Razorpay keys:
# NEXT_PUBLIC_SUPABASE_URL=...
# NEXT_PUBLIC_SUPABASE_ANON_KEY=...
# RAZORPAY_KEY_ID=...

# 4. Run the development server
npm run dev
```

---

## Author

**Trupti Chimmalagi**  
- Live Product: [assetivate.vercel.app](https://vercel.app)  
- Email: truptichimms@gmail.com
