1. Overview:
- Build a branded web platform for Omar Fayyad, a personal bodybuilding trainer based in Lebanon, serving clients across the Middle East.
- Provide booking, workout and nutrition plans, progress tracking, and remote coaching capabilities.

2. Stack:
- Frontend: React.js (with TypeScript), TailwindCSS, Next.js (for SSR and routing)
- Backend: Node.js with Express, MongoDB (via Mongoose), JWT for auth
- Tooling: GitHub, Vercel (Frontend), Docker, AWS EC2/ECS (Backend), MongoDB Atlas, Stripe API (payments), Figma (designs)

3. Key Pages:
- Home (branding, intro CTA, testimonials, service overview)
- About Omar (trainer story, philosophy, credentials)
- Services (coaching packages, pricing)
- Schedule (view / book live training slots)
- Signup / Login (client onboarding)
- Dashboard (for logged-in users)
  - My Plan
  - My Schedule
  - My Progress
  - My Diet Plan
  - Support / Chat

4. Features:
- UI:
  - Responsive design (mobile-first)
  - Intuitive client dashboard
  - Booking calendar with timezone support
  - Interactive charts for muscle gain, fat loss, weight, etc.
  - Workout planner with video/gif previews
  - Meal planner + supplement suggestions
  - Arabic + English interface (i18n)
- Technical:
  - Secure Auth (JWT, salt+hash passwords)
  - Admin dashboard (Omar to manage users, plans, bookings)
  - REST API for client interaction
  - Progress tracking backend with historical logging
  - CMS integration for blogging / content updates
  - Notification system (email reminders via SendGrid)

5. Deployment Summary:
- Frontend hosted on Vercel (auto-deploy from GitHub)
- Backend containerized & deployed to AWS (ECS or EC2)
- Domain name (e.g., omarfayyadfit.com), SSL via Let's Encrypt
- MongoDB Atlas for database hosting
- CI/CD via GitHub Actions
- Environment configuration via `.env` & AWS Secrets Manager