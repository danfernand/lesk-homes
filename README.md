# Lesk Homes

Marketing site for Lesk Homes, a custom home construction company. Single-page
Next.js (App Router) site styled with Tailwind CSS, intended to deploy to
Vercel alongside the K6 site.

## Status

All copy and photography are placeholders (`[Placeholder]` text, labeled
images from placehold.co) pending real content from the client. Search the
codebase for `[Placeholder]` to find everything that still needs real
content before launch.

## Getting Started

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Structure

- `src/app/page.tsx` — assembles the single page from section components
- `src/components/` — one component per section (Header, Hero, About,
  Services, Gallery, Process, Testimonials, Contact, Footer)
- `src/lib/placeholder.ts` — generates labeled placehold.co image URLs;
  swap real photography in as it's provided by the client

## Deployment

Deploys to Vercel. No environment variables are required yet.
