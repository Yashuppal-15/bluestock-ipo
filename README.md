# Bluestock IPO Web App

## Tech Stack
- Next.js (TypeScript)
- Prisma ORM
- PostgreSQL
- Tailwind CSS

## Setup Instructions
1. `npm install`
2. `cp .env.example .env`
3. Edit `.env` with your DB credentials
4. `npx prisma migrate dev --name init`
5. `npm run dev`

Visit `http://localhost:3000`