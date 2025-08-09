You are a senior brand web designer and front‑end engineer. Build a modern, fast, accessible, responsive marketing website for “Kotori” focused on voice journaling for parents and caregivers of autistic children.
Style reference
Match the aesthetic spirit of papagai.io (light, modern, airy, generous whitespace, friendly geometry, subtle gradients). Do not copy assets or layout verbatim—interpret the mood and clarity.
Prioritize calm, approachable visual language with high readability and low cognitive load.
Context and product intent
Product: Kotori — a private, cross‑platform voice journaling app that helps parents capture daily observations, moments, behaviors, routines, and wins hands‑free.
Primary audience: Parents and caregivers of autistic children (children on the autism spectrum). Secondary: broader communities that need daily condition tracking (to be supported later).
Core value: Speak a short update; Kotori transcribes, lightly structures it, and makes it easy to find and share with a care team if you choose.
Tech: Google Sign‑In, Google Cloud Speech‑to‑Text; secure storage (Postgres).
Important: Kotori is not medical advice, diagnosis, or therapy. It supports documentation and reflection.
Brand voice and copy guidelines
Tone: Compassionate, non‑judgmental, practical, empowering. Clear and short sentences. Avoid clinical or stigmatizing language.
Language notes:
Use inclusive phrasing: “autistic children” or “children on the autism spectrum.”
Avoid terms like “suffers from,” “normal,” or any deficit‑first framing.
Lead with parent outcomes (clarity, less stress, better collaboration), then features. Use action‑oriented CTAs.
Core benefits to highlight: Hands‑free capture; daily continuity; secure sharing; faster prep for appointments; peace of mind.
Key promises and pricing
3‑month free trial for new users. Not free forever. Pricing tiers TBD—use tasteful placeholders.
CTAs: “Start 3‑month free trial”, “Sign in with Google”, “See how it works”.
Visual design and UI system
Mood keywords: Light, gentle, optimistic, trustworthy, crafted, supportive.
Layout: Mobile‑first, airy spacing, clear grid, sticky header, strong hero, scannable sections.
Color palette (AA‑accessible pairings; provide light + dark):
Primary (Kotori Teal): #0D9488
Accent 1 (Sky Blue): #38BDF8
Accent 2 (Lavender): #A78BFA
Text Primary Light: #0F172A
Text Secondary Light: #334155
Background Light: #F8FAFC
Background Dark: #0F172A
Text Primary Dark: #E5E7EB
Semantic (Success): #10B981, (Danger): #F43F5E
Optional soft gradient: from #60A5FA to #0D9488 at 120°
Typography:
Headings: “Sora” or “DM Sans”
Body/UI: “Inter”
Comfortable body line‑height (1.6–1.7), generous paragraph spacing, slightly tightened heading tracking.
Motion: Subtle micro‑interactions; respect prefers‑reduced‑motion.
Information architecture (sections)
Header: Kotori logo, nav (For Parents, How it Works, Features, Security, Pricing, FAQ), primary CTA.
Hero: Headline, subhead, primary CTA “Start 3‑month free trial”, secondary CTA “See how it works”, soft illustration or waveform motif; subtle gradient background.
Social proof / reassurance: Privacy iconography, “Google Sign‑In,” “Powered by Google Cloud Speech‑to‑Text,” brief parent quotes (placeholder).
“Made for parents” spotlight: 3–4 cards mapping to real needs:
Capture daily moments quickly
Prepare for appointments with less stress
Keep a timeline of wins and challenges
Share selectively with your care team
Features grid (6):
Voice‑to‑text journaling (real‑time)
Smart structure (titles, bullets, highlights)
Search & tags, calendar timeline
Gentle reminders and streaks
Export (PDF/CSV), data portability
Private by design (encryption in transit/at rest)
How it works (3 steps): Speak → Transcribe & organize → Review & share (optional)
Screenshot/video section: Placeholder asset with caption showing calendar, tags, and a day entry.
Security & privacy: Encryption in transit/at rest, Google Sign‑In, data ownership, granular sharing (you control access), data export anytime. Avoid compliance claims.
Pricing: Emphasize “3‑month free trial.” Show tasteful, TBD plan cards (e.g., Starter, Family). Include “Pricing to be announced” copy; avoid numeric prices.
FAQ (6–8): Privacy, data export, sharing with therapists/educators, offline capture (if applicable, else mark as “roadmap”), transcription accuracy, platform availability, trial terms.
Final CTA: “Start your 3‑month free trial” + gentle reassurance line.
Footer: Links (Security, Privacy Policy, Terms), social, copyright, optional email field.
Sample copy (seed; refine as needed)
Hero headline (choose or improve):
“Voice journaling for parents of autistic children.”
“Capture today’s moments—hands‑free and private.”
Hero subhead: “Speak a short update. Kotori turns it into clear, searchable notes you can revisit and share—on your terms.”
Benefit bullets:
“Daily continuity”: “Keep a gentle rhythm of notes that add up to a clearer picture.”
“Appointment ready”: “Surface key details faster, with less stress.”
“Share with care”: “Invite your partner or care team—only when and how you choose.”
Feature blurbs:
“Real‑time transcription”: “Accurate voice to text, powered by Google Cloud Speech‑to‑Text.”
“Organized for clarity”: “Automatic titles, bullets, and highlights.”
“Find it fast”: “Search across dates, tags, and themes.”
“Private by design”: “Encryption in transit and at rest. Your notes are yours.”
“Timeline & calendar”: “See patterns over days and weeks.”
“Export anytime”: “PDF or CSV when you need to share or archive.”
Final CTA line: “Start your 3‑month free trial. You talk. Kotori remembers.”
Legal note (footer smallprint): “Kotori does not provide medical advice, diagnosis, or treatment.”
Accessibility and inclusivity
Meet or exceed WCAG 2.1 AA: color contrast, visible focus, skip‑to‑content, semantic HTML, keyboard nav, alt text.
Honor prefers‑reduced‑motion.
Inclusive content guidelines (see above); ARIA only when needed.
SEO and social
Target keywords: “autism journal,” “autism voice journal,” “daily autism tracking,” “parenting autism notes.”
Include title, meta description (≤160 chars), canonical, favicon.
Open Graph + Twitter meta (image placeholders). JSON‑LD Organization + WebSite schema. XML sitemap and robots.txt guidance.
Performance
Lighthouse goals ≥90 for Performance, Accessibility, Best Practices, SEO.
Lazy‑load images, compress assets, minimal JS.
Build specification (Tailwind‑first)
Stack: Static site using semantic HTML + Tailwind CSS (CDN for prototype). Icons: Heroicons. No external UI kits.
Provide light and dark themes using Tailwind’s “dark” class strategy.
Output: a single “index.html” with embedded Tailwind CDN and minimal inline <script> for nav/menu. Keep dependencies minimal.
Also output a short “README.md” with setup/extend notes, color tokens, and assumptions list.
Assets referenced as placeholders: /assets/hero.png, /assets/og.jpg.
Deliverables and output format
Deliver EXACTLY these files in separate fenced code blocks:
README.md — overview, assumptions, color tokens, how to swap fonts/colors, how to extend sections, how to enable dark mode.
index.html — semantic HTML, Tailwind CDN, responsive layout and all sections above, meta tags, OG/Twitter, JSON‑LD, lightweight JS for mobile menu.
Do not include build steps or external tooling. No Node scaffolding.
Constraints and quality bar
Clarity over cleverness. Generous whitespace and clear hierarchy.
Respect the palette and typography above; keep the page light and optimistic.
CTAs should highlight the 3‑month free trial without implying “free forever.”
Validate accessible names and focus states on all interactive elements.
If anything is ambiguous, make the best assumption, proceed, and list assumptions at the top of README.md. Then produce the files.