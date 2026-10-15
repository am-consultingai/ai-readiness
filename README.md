# AM Consulting — AI Readiness Scorecard

Live at **https://ai-readiness.amconsultingai.com**

An interactive, single-page **AI Readiness Scorecard** for IoT-driven, non-hightech businesses
(manufacturing, utilities, logistics, agriculture, facilities). Built with **Vite + React**, Hebrew-first
(RTL) with an English toggle. Lead-gen CTA captures **name, role, email, phone**.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/ (relative paths, works from any host or sub-path)
```

## The flow

1. **Hero** — headline + CTAs
2. **Why it matters** — stat callouts
3. **Scorecard** — 8 questions across 5 pillars, one per screen, animated progress
4. **Teaser result (free)** — animated gauge + overall band + *blurred* radar behind a lock
5. **Lead form (the gate)** — name · role · email · phone → unlocks the report
6. **Full report** — radar, per-pillar bars, top-3 gaps + tailored next step, "book readout"
7. **How it works · Credibility (Avishay Meron, AM Consulting) · FAQ · Closing CTA · Footer**

## Scoring

- 8 questions → 5 pillars. Each pillar = avg answer (1–5) × 20 → 0–100.
- **Weighted overall:** Security **30%**, Data **25%**, Business 15%, Infrastructure 15%, People 15%.
- Bands: Disconnected · Aware · Exploring · Building · AI-Ready.
- Questions/weights in `src/data/quiz.js`; scoring in `src/lib/scoring.js`; all copy (he + en) in `src/i18n.jsx`.

## Brand

- **Logo / favicon / portrait:** local copies of `am-assets@v2` (`logo/am-logo-600.png`, `logo/am-favicon.png`,
  `portrait/avishay-400.png`) in `src/assets` and `public/`. Bundled apps keep their own copies.
- **Palette:** navy `#1B213D`, cream `#FFFEF5`, red `#E21313`, pale `#E6ECF6`
  — tokens in `src/index.css`.
- **Type:** Assistant / Heebo (Google Fonts).

## Before launch (TODO)

- **Contact:** WhatsApp number, LinkedIn and site URL live in `src/config.js`. Every "book a call" button opens WhatsApp
  with a prefilled message (Hebrew or English, following the page language).
- **Social preview:** set `VITE_SITE_URL` in `.env` to the deployed origin before building, so `og:image`, `og:url`
  and `twitter:image` are absolute. The share card is `public/og-image.png` (1200×630).
- **Lead form:** `src/components/LeadForm.jsx` only simulates the submission — wire `onSubmit` to the CRM / email endpoint.
- **Hosting:** every push to `main` builds and deploys to GitHub Pages (`.github/workflows/deploy.yml`);
  custom domain from `public/CNAME` (DNS: `ai-readiness` CNAME → `am-consultingai.github.io`).
