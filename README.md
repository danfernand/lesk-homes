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
vercel link && vercel env pull  # Resend key + domain; then add CONTACT_TO_EMAIL
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Structure

- `src/app/page.tsx` — assembles the home page from section components
- `src/app/work/[slug]/page.tsx` — one gallery page per project
- `src/data/projects.ts` — project names, descriptions and photos, shared by
  the home page grid and the project pages
- `src/app/actions.ts` — Server Action that emails contact form inquiries
- `src/components/` — one component per section (Header, Hero, About,
  Services, Gallery, Process, Testimonials, Contact, Footer)
- `src/assets/` — logo and web-sized photos, statically imported by the
  components; originals from the client live in `raw/`

## Contact form

The Contact section posts to a Server Action (`src/app/actions.ts`) that
emails the inquiry through [Resend](https://resend.com), installed on the
Vercel project from the Marketplace. Emails come from
`inquiries@leskhomes.com`, with reply-to set to the visitor, so replying
goes straight to them. A hidden honeypot field drops most bot submissions.

Environment variables (see `.env.local.example`):

- `RESEND_API_KEY`, `RESEND_EMAIL_DOMAIN` — added by the Resend integration
- `CONTACT_TO_EMAIL` — inbox that receives inquiries; comma-separate several

The sending domain must be verified in Resend (DNS records live at Hover).

## Deployment

Deploys to Vercel. `CONTACT_TO_EMAIL` has to be set on the Vercel project
for the contact form to send.
