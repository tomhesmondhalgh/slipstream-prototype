# Slipstream — Design Brief for Agency Partners

## What Slipstream is

Slipstream turns organisational policy documents into structured, interactive training courses — automatically. An HR manager uploads a safeguarding policy; within minutes, they have a complete training course they can send to their team. No LMS. No login required for learners. No IT department needed.

**The product promise is friction-free compliance training.** Upload → Generate → Send → Done.

## Who uses it

**The buyer (admin):** HR managers, compliance officers, operations directors. Typically in regulated sectors — social care, healthcare, construction, education. They are not technical. They evaluate tools on trust, clarity, and ease of use. They need audit trails. They answer to regulators (CQC, Ofsted, HSE).

**The learner:** Care workers, teaching assistants, site managers, support staff. They receive a link by email. They didn't ask for this training. They want to complete it quickly and correctly. They may be on a phone. English may not be their first language. They may not be confident with technology.

## The core design challenge

Slipstream has two experiences in one product:

1. **The admin experience** — dashboard, course review, sending invitations, tracking completions. This needs to feel **calm, professional, and trustworthy**. An HR manager should look at it and think "these people take compliance seriously."

2. **The learner experience** — reading course content, answering questions, getting a certificate. This needs to feel **clear, engaging, and respectful of time**. A care worker should open their link and think "this is easy to follow" — not "this is another boring compliance exercise."

These are not the same design problem. The admin side rewards information density and scannability. The learner side rewards readability and flow. The design system must serve both without feeling like two different products.

## Brand principles

### 1. Ease and flow
The entire product should feel like a gentle current carrying you forward. Every screen has one obvious next action. No hunting for buttons. No configuration panels. No decisions that require expertise. The sign-up-to-completion flow should feel inevitable — like sliding downhill.

### 2. Trust at first glance
This tool handles regulatory compliance. People's jobs depend on it. The CQC could inspect tomorrow. The design must communicate "professional, reliable, considered" before anyone reads a word of copy. This is not a place for design experimentation that could be read as frivolity.

### 3. Content is the product
Slipstream's value is in the training content it generates — content that references the customer's own organisation, their own procedures, their own reporting systems. The design should elevate this content, not compete with it. Typography, spacing, and hierarchy do the heavy lifting. Decoration that doesn't carry information should be removed.

### 4. Invisible technology
The AI that generates courses, the magic-link authentication, the automatic progress tracking — none of this should be visible to the user. No "AI-powered" badges. No loading spinners. No technical language. The technology should feel like it doesn't exist.

## White-label constraints

Slipstream is used by many organisations. Each sees their own branding. The design system must accommodate this with a minimal customisation surface:

### What the customer provides:
- **Logo** (displayed in the learner header and admin sidebar)
- **Primary brand color** (one color — used for primary buttons, active states, progress bars, accent elements)
- That's it. Everything else is Slipstream's design system.

### What this means for the design:
- **No color that IS the identity.** The design must work equally well whether the customer's primary color is teal, navy, orange, maroon, or violet. Test every design decision against at least 3 different hues.
- **Typography is fixed.** We choose one excellent typeface (or pair) for all customers. The customer does not supply fonts. This means the typeface must be:
  - Versatile (works for dashboards AND long-form reading)
  - Neutral enough not to clash with any customer's logo
  - Available via Google Fonts (for performance)
  - Excellent at multiple weights (light for large numbers, medium for body, semibold for headings)
- **The design personality lives in spacing, hierarchy, and layout** — not in color or type choices that would change per customer.
- **The learner experience carries the customer's brand**, not Slipstream's. The admin sidebar can say "Slipstream"; the learner view says "Brightfield Care" (or whatever the customer is).

### Logo placement:
- **Admin sidebar:** Slipstream wordmark at top, customer name/org shown in user info area
- **Learner header:** Customer logo/name prominently displayed. "Powered by Slipstream" in a subtle footer only.

## The admin experience

### Dashboard
Sarah's home screen. At a glance: how many courses, how many learners, what needs attention. Key requirements:
- **Stats** that feel scannable (large numbers, clear labels)
- **Course list** with status, completion progress, and alerts
- **Activity feed** showing recent completions
- **One primary action per screen** — one colored button, everything else secondary

### Course review (BUILD screen)
Sarah reviews AI-generated content before publishing. She sees her own policy language reflected back as structured training. Key requirements:
- Section navigation on the left
- Content preview in the main panel
- Quiz questions visible with correct answers marked
- "Publish & send" as the single primary action

### Send invitations
The simplest possible screen. Email addresses in, training links out. Key requirements:
- Email tag input (paste a list, they appear as tags)
- Preview of what the learner will receive
- One "Send" button. That's it.

### Completion tracking
Sarah's audit trail. Who completed, who hasn't, scores, certificates. Key requirements:
- Clean data table with filtering (All / Completed / In progress / Not started)
- Exportable (CSV)
- Certificate download per learner

## The learner experience

### Core principles
- **No login.** Learners click a magic link from their email. The course opens immediately.
- **No Slipstream branding.** This is Brightfield Care's training, not Slipstream's. The learner should feel they're in their organisation's space.
- **Content-first.** Maximum readable width (~680px). Generous line-height. Clear typographic hierarchy. The text is the experience.
- **One section at a time.** Progress is visible. Navigation is obvious. "Next" is always clear.

### Content blocks (current prototype)
The current prototype uses flowing text with bold headings. This works but is the minimum viable experience. The AI generates structured JSON, which means we can render richer block types:

- **Text block** — standard paragraph content
- **Key point callout** — highlighted box with colored left border or subtle background. For critical information ("You must report within 24 hours")
- **Scenario block** — "Imagine you arrive at..." — contextualised to the customer's setting
- **Single-choice question** — large, tappable answer cards (not tiny radio buttons)
- **Knowledge check** — lightweight mid-section question to maintain engagement

For the prototype, show at minimum: text blocks with key-point callouts. The richer block types are the product roadmap — agencies should understand the direction, but the prototype only needs to hint at it.

### Assessment
- One question per screen (not a long scrolling form)
- Large, clear answer options (full-width clickable cards)
- Immediate feedback after answering (correct/incorrect + explanation)
- Questions reference the customer's organisation by name

### Certificate
- Clean, centered, feels like an achievement
- Customer's name, learner's name, date, score, certificate number
- Downloadable
- Subtle — professional, not celebratory

### Future vision (not for prototype, but agencies should know)
- **AI Q&A:** "Ask a question about this policy" — a conversational element where learners can get clarification in plain English
- **Structured block types:** Ordering exercises, matching, reflection prompts
- **Ongoing testing:** Periodic re-assessment after initial completion
- **Mobile-first learner experience:** Many learners will be on phones

## What we are NOT building (prototype scope)

- No real backend, auth, or database
- No mobile layouts (desktop only for the demo video)
- No loading states or error handling
- No settings, billing, or profile screens
- No real AI generation (content is mock data)
- No animations beyond a pulsing "next step" indicator
- No illustrations or characters (future consideration, not now)

## Technical constraints

- **Framework:** Next.js (App Router)
- **Components:** shadcn/ui for all UI elements
- **Styling:** Tailwind CSS only — no custom CSS files
- **Icons:** Lucide React
- **Fonts:** Google Fonts via next/font
- **Data:** All mock data from a shared TypeScript file

## How to evaluate designs

A good Slipstream design should pass these tests:

1. **The HR manager test:** Show the dashboard to an HR manager for 5 seconds. Do they trust it? Do they know where to look?
2. **The color swap test:** Replace the accent color with a completely different hue. Does the design still work?
3. **The reading test:** Can you comfortably read 4 paragraphs of safeguarding content on the learner screen without wanting to stop?
4. **The "what do I do next?" test:** On every screen, is the next action obvious within 2 seconds?
5. **The competitor test:** Put it next to iHasco, Blue Prism, or a typical Moodle course. Does it look meaningfully better?

---

## Implementation plan

### Step 1: Replace Studio A with Studio Brody
- Delete current `/a/` route files
- Create new Brody-directed design (post-punk editorial, teal accent, Syne + Space Grotesk)
- Brody receives this full brief plus specific direction: dramatic typographic hierarchy, editorial dashboard, magazine-quality learner reading experience

### Step 2: Fix Studio B learner page
- Keep dark admin dashboard
- Switch learner page to light background with violet accents preserved
- Demonstrates the "two-tone" approach (dark admin, light learner)

### Step 3: Update switcher page
- Studio A card → "Studio Brody / Neville Brody / Post-Punk Editorial"
- Add brief description under each card explaining the design philosophy

### Step 4: Build, test, push
- `npx next build` — verify all routes compile
- Test all 6 pages render correctly
- Push to GitHub (auto-deploys on Vercel)

### Files to modify
- `src/app/layout.tsx` — add Syne + Space_Grotesk font imports
- `src/app/page.tsx` — update switcher card for Studio A
- `src/app/a/layout.tsx` — new Brody theme
- `src/app/a/_components/sidebar.tsx` — Brody sidebar
- `src/app/a/_components/top-bar.tsx` — Brody top bar
- `src/app/a/dashboard/page.tsx` — Brody dashboard
- `src/app/a/learn/page.tsx` — Brody learner page
- `src/app/b/learn/page.tsx` — light mode conversion

### Verification
- `npm run build` passes with zero errors
- `/` shows updated switcher
- `/a/dashboard` + `/a/learn` show Brody design
- `/b/learn` is light mode (dark admin unchanged)
- `git push` to GitHub
