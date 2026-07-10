# Md Nayeem Lapasam — Portfolio

A premium single-page portfolio built with Next.js 15, React, Tailwind CSS,
and Framer Motion: a light, futuristic theme inspired by Apple, Stripe,
Linear, Framer, and Vercel — glassmorphism, an electric blue accent, and a
subtle WebGL-inspired hero built around a real professional photo.

## Setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Build for production with `npm run build && npm start`.

## Design system

- **Colors** — off-white base (`#F8FAFC`) and soft gray elevation
  (`#F1F5F9`), white/frosted-glass cards, dark near-black text
  (`#0F172A`) for contrast, and one electric blue accent (`#2563EB`,
  bright `#3B82F6`, deep navy `#1E3A8A`) used for CTAs, glows, and the
  timeline. No pure black anywhere. See `tailwind.config.ts`.
- **Type** — Space Grotesk for headings, Inter for body text, JetBrains
  Mono for eyebrow labels and dates — a technical accent that supports
  the "futuristic" direction without adding another color.
- **Signature moment** — a slow-rotating Three.js wireframe icosahedron
  behind the hero (`components/WebGLBackground.tsx`), tuned to a faint
  navy/blue line on the light background, that subtly tilts toward the
  cursor. Kept quiet on purpose — it's atmosphere, not a demo.
- **Hero photo** — the real professional photo (`public/photo.png`) is
  the focal point: a glass ring frame, soft accent-gradient glow behind
  it, a scale-in entrance on load, and a slow, near-imperceptible idle
  float afterward (all disabled under `prefers-reduced-motion`).
- **Motion & depth** — Framer Motion scroll reveals throughout, a
  cursor-following glow (desktop only), a lightweight canvas particle
  field, and consistent card hover states (lift + shadow deepen) for a
  tactile, premium feel.

## Content — everything lives in one file

Edit `lib/data.ts` to change any copy on the site: hero text, About
paragraphs, timeline entries, strengths, projects, experience, current
focus, certificates, and contact copy. No component code needs to change
for content updates.

## What's placeholder right now — replace before launch

| Item | Current state | To fix |
|---|---|---|
| Professional photo | **Done** — real photo at `public/photo.png`, used in `Hero.tsx` via `next/image` | Swap the file if you get a different photo later; same filename works |
| Resume PDF | `Hero.tsx` links to `/resume.pdf`, which doesn't exist yet | Add the real file at `public/resume.pdf` |
| GitHub profile | Icon renders disabled/greyed with a "coming soon" tooltip | Once created, set `profile.github` in `lib/data.ts` to the real URL and the icon activates automatically |
| Timeline & Experience | Structural placeholders like `[Add your organization]` | Fill in real roles/dates/orgs in `lib/data.ts` |
| Certificates | One placeholder entry | Replace with real certificates in `lib/data.ts` |
| Project screenshots | Abstract generated pastel cover art per project (`components/ProjectCover.tsx`) | Once you have real screenshots/mockups, replace `ProjectCover` usage in `FeaturedProjects.tsx` with `<Image>` |
| Domain | `layout.tsx`, `sitemap.ts`, and `robots.ts` use `https://example.com` | Replace with the real domain once purchased |

## Accessibility

- Text colors were chosen for strong contrast against the light
  background: body text uses `#0F172A` (near-black) and `#475569`
  (muted slate), both comfortably above WCAG AA on `#F8FAFC`/white.
- All interactive elements keep a visible focus ring (`globals.css`),
  now in accent blue against the light background.
- Every animation (photo entrance/float, Three.js tilt, cursor glow,
  particle drift, Framer Motion reveals) checks `prefers-reduced-motion`
  and disables the looping/ambient motion when it's set — one-time
  entrance fades still play since they aren't the kind of motion that
  needs disabling.
- The WebGL canvas, cursor glow, and particle field are all
  `aria-hidden` and `pointer-events-none` — decoration, not content.
- Cursor glow and particle field are skipped on coarse-pointer (touch)
  devices rather than just hidden via CSS, to avoid the JS still running.

## Project structure

```
app/
  layout.tsx     - fonts, SEO metadata, JSON-LD
  page.tsx       - assembles all sections
  globals.css    - light theme base, glass/shadow utilities, reduced-motion handling
  sitemap.ts     - SEO sitemap
  robots.ts      - SEO robots rules
components/
  Navigation.tsx        - floating glass nav
  Hero.tsx               - hero section with real photo as focal point
  WebGLBackground.tsx    - Three.js signature element (light-tuned)
  CursorGlow.tsx         - cursor-following glow (light-tuned)
  ParticleField.tsx      - ambient canvas particles (light-tuned)
  About.tsx
  Timeline.tsx           - professional journey
  CoreStrengths.tsx
  FeaturedProjects.tsx
  ProjectCover.tsx       - placeholder pastel cover art per project
  Experience.tsx
  CurrentFocus.tsx
  Certificates.tsx
  Contact.tsx
  Footer.tsx
  SectionHeading.tsx     - shared eyebrow + heading pattern
  SocialLinks.tsx
lib/
  data.ts        - all editable site content
public/
  photo.png      - the real professional photo used in Hero.tsx
```

## Extending with more WebGL later

The Three.js setup lives in its own component (`WebGLBackground.tsx`)
with proper cleanup on unmount, so extending it — more geometry, shader
materials, scroll-linked camera movement — is a matter of editing that
one file. For anything more elaborate, consider migrating to
`@react-three/fiber` for declarative scene management.
