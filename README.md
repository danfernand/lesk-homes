# Lesk Homes

Marketing site for Lesk Homes, a custom home construction company. Single-page
Next.js (App Router) site styled with Tailwind CSS, intended to deploy to
Vercel alongside the K6 site.

## Status

Photography, the logo, and testimonials are real; most other copy is still
placeholder (`[Placeholder]` text) pending real content from the client. Search the
codebase for `[Placeholder]` to find everything that still needs real
content before launch.

## Getting Started

```bash
yarn install
cp .env.local.example .env.local  # then fill in NEXT_PUBLIC_FORMSPREE_FORM_ID
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Structure

- `src/app/page.tsx` — assembles the single page from section components
- `src/components/` — one component per section (Header, Hero, About,
  Services, Gallery, Process, Testimonials, Contact, Footer)
- `src/assets/` — logo and web-sized photos, statically imported by the
  components; originals from the client live in `raw/`

## Contact form

The Contact section submits through [Formspree](https://formspree.io) via
`@formspree/react`, the same pattern used on k6development-new. No custom
API route or backend is needed.

1. Create a new form in the Formspree account, pointed at whatever inbox
   should receive Lesk Homes leads.
2. Copy its form ID and set `NEXT_PUBLIC_FORMSPREE_FORM_ID` locally (in
   `.env.local`) and in the Vercel project's environment variables.

Until that's set, the form renders with a dev-only warning instead of
submitting.

## Deployment

Deploys to Vercel. Requires `NEXT_PUBLIC_FORMSPREE_FORM_ID` to be set as a
Vercel project environment variable for the contact form to work.
